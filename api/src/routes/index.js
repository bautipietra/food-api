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
  const apiUrl = await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5')
  return apiUrl.data
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
  const result = apiInfo.results.concat(dbInfo)
  return result
}

/* Routes */

router.get('/recipes', async (req, res) => {
  const { name } = req.query
  let allRecipes = await getAllRecipes()

  if (name) {
    let recipeName = await allRecipes.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()))

    if (recipeName.length) return res.send(recipeName)
    return res.status(404).send('No se encontró ninguna receta con ese nombre')
  }

  return res.send(allRecipes)
})

module.exports = router;
