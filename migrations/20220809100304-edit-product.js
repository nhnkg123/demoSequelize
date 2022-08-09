'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Products', 'imagePath', Sequelize.STRING);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Products', 'imagePath');
  }
};
