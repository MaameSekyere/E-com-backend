const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Tops",
  },
  {
    category_name: "Pants",
  },
  {
    category_name: "Jeans",
  },
  {
    category_name: "Shirts",
  },
  {
    category_name: "Skirts",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
