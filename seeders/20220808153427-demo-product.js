'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Products', [
        {
          name: 'Product 1',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur laborum eveniet ipsum, minus voluptatum fugit voluptatem delectus debitis ad repudiandae quos at veritatis nemo laboriosam commodi. Dignissimos, et dolor!',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque quisquam libero laborum exercitationem odit mollitia adipisci distinctio recusandae doloremque voluptatibus nobis, quibusdam sapiente, dolorum inventore, sunt saepe tenetur facere.',
          price: 9.99,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        }, 
        {
          name: 'Product 2',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur laborum eveniet ipsum, minus voluptatum fugit voluptatem delectus debitis ad repudiandae quos at veritatis nemo laboriosam commodi. Dignissimos, et dolor!',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque quisquam libero laborum exercitationem odit mollitia adipisci distinctio recusandae doloremque voluptatibus nobis, quibusdam sapiente, dolorum inventore, sunt saepe tenetur facere.',
          price: 5.99,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },   
        {
          name: 'Product 3',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur laborum eveniet ipsum, minus voluptatum fugit voluptatem delectus debitis ad repudiandae quos at veritatis nemo laboriosam commodi. Dignissimos, et dolor!',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque quisquam libero laborum exercitationem odit mollitia adipisci distinctio recusandae doloremque voluptatibus nobis, quibusdam sapiente, dolorum inventore, sunt saepe tenetur facere.',
          price: 6.99,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        }      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
