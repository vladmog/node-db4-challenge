
exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    {recipe_id: 1, ingedient_id: 1, unit_measure: "scoop", ingredient_units: 1 },
    {recipe_id: 1, ingedient_id: 2, unit_measure: "scoop", ingredient_units: 1 },
    {recipe_id: 1, ingedient_id: 3, unit_measure: "tortilla", ingredient_units: 1 },
    {recipe_id: 1, ingedient_id: 4, unit_measure: "pinch", ingredient_units: 1 },
    {recipe_id: 2, ingedient_id: 3, unit_measure: "tortilla", ingredient_units: 1 },
    {recipe_id: 2, ingedient_id: 4, unit_measure: "pinch", ingredient_units: 1 },
    {recipe_id: 2, ingedient_id: 5, unit_measure: "handful", ingredient_units: 1 },
    {recipe_id: 2, ingedient_id: 6, unit_measure: "scoop", ingredient_units: 1 },
  ]);
};
