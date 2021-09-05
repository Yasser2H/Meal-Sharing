const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meals").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
try {
  // knex syntax for selecting things. Look up the documentation for knex for further info
  const concerts = await knex("concerts").where("id", parseInt(request.params.id));
  response.json(concerts);
} catch (error) {
  throw error;
}
});


module.exports = router;
