
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {id: 1, ingredient_name: 'rice'},
    {id: 2, ingredient_name: 'beans'},
    {id: 3, ingredient_name: 'tortillas'},
    {id: 4, ingredient_name: 'cheese'},
    {id: 5, ingredient_name: 'cabbage'},
    {id: 6, ingredient_name: 'pico de gallo'},
  ]);
};
