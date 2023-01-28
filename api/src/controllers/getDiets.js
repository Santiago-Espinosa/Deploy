const { Diet } = require(`../db.js`);

//Ingresa a la base de datos y obtiene las dietas
module.exports = async (req, res) => {
  try {
    const diets = await Diet.findAll();

    return res.json(diets);
  } catch (err) {
    return res.json(err);
  }
};
