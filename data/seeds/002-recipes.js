
exports.seed = function(knex) {
  return knex('recipes').insert([
    {id: 1, recipe_name: 'burrito'},
    {id: 2, recipe_name: 'quaesadilla'}
  ]);
};
