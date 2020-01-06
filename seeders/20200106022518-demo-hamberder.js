// https://sequelize.org/master/manual/migrations.html

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Hamberders', [
      {
        hamberder_name: 'Plankton and Bacon',
        devoured: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hamberder_name: 'Chili Cheese with Peanut Butter',
        devoured: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hamberder_name: 'Good Berder',
        devoured: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
