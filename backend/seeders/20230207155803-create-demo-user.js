"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      
    */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Nguyen Anh Toi",
          email: "toidxbp02@gmail.com",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
          password: "admin1234",
          numberPhone: "0913153269",
          type: "ADMIN",
          createdAt: "2023-02-09 07:57:23",
          updatedAt: "2023-02-09 07:57:23",
        },
        {
          name: "Huỳnh Trọng Tín",
          email: "Tin1234@gmail.com",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
          password: "admin1234",
          numberPhone: "09823212322",
          type: "ADMIN",
          createdAt: "2023-02-07 07:57:23",
          updatedAt: "2023-02-07 07:57:23",
        },
        {
          name: "Lê Quốc Trình",
          email: "Trinhlt34@gmail.com",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
          password: "admin1234",
          numberPhone: "09823212322",
          type: "CLIENT",
          createdAt: "2023-02-07 07:57:23",
          updatedAt: "2023-02-07 07:57:23",
        },
        {
          name: "Nguyễn Văn Toàn",
          email: "ToanLpt@gmail.com",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
          password: "admin1234",
          numberPhone: "09823212322",
          type: "CLIENT",
          createdAt: "2023-02-07 07:57:23",
          updatedAt: "2023-02-07 07:57:23",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
