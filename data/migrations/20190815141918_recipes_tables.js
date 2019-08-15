
exports.up = function(knex) {
    return knex.schema

    //Ingredients table
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('ingredient_name', 255)
        .notNullable()
        .unique();
    })

    //Recipes table
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .string('recipe_name', 255)
        .notNullable()
        .unique();
    })
    

    //Recipe ingredients table
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE'); // if the PK on primary table changes, what to do?
        tbl
            .integer('ingedient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE'); // if the PK on primary table changes, what to do?
        tbl
            .string('ingredient_unit')
            .notNullable()
        tbl
            .real('ingredient_units')
            .notNullable()
    });

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
};
