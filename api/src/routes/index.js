const { Router } = require('express');
const axios = require('axios');
const { Recipe, Diet } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/* Obteniendo todos los datos */

const getApiInfo = async () => {
  //const apiUrl = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=b55a31b76d1a44e7a369ccf8162084c5&addRecipeInformation=true&number=100', { headers: { "accept-Encoding": "gzip,deflate,compress" } })
  const apiUrl = await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5')
  return apiUrl.data.results.map(recipe => {
    return {
      ...recipe, name: recipe.title
    }
  })
}
const getDbInfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    }
  })
}

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo()
  const dbInfo = await getDbInfo()
  const result = apiInfo.concat(dbInfo)
  return result
}

/* Routes */

router.get('/recipes', async (req, res) => {
  try {
    const { name } = req.query
    let allRecipes = await getAllRecipes()

    if (name) {
      const recipeIncludeName = allRecipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()))

      if (recipeIncludeName.length) allRecipes = recipeIncludeName
      else throw new Error('No se encontró ninguna receta con ese nombre')
    }

    return res.send(allRecipes)
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
})

router.get('/diets', async (req, res) => {
  try {
    const allRecipes = await getApiInfo()
    allRecipes.forEach(recipe => {
      recipe.diets.map(diet => {
        Diet.findOrCreate({
          where: { name: diet }
        })
      })
    })
    const allDiets = await Diet.findAll()
    res.send(allDiets)
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
})

router.get('/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params
    const allRecipes = await getAllRecipes()
    const recipeId = allRecipes.find(recipe => Number(recipe.id) === Number(id))
    if (recipeId) return res.send(recipeId)
    throw new Error('No existe ninguna receta con ese ID')
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
})

router.post('/recipes', async (req, res) => {
  try {
    const recipeAlreadyExist = await Recipe.findOne({ where: { name: req.body.name } })
    if (recipeAlreadyExist) throw new Error('La receta ingresada ya existe')
    const createdRecipe = await Recipe.create(req.body)
    const dietDb = await Diet.findOne({ where: { name: req.body.diet } })
    await createdRecipe.addDiet(dietDb)
    res.send(createdRecipe)
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
})

module.exports = router;
