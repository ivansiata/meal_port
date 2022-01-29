const axios = require("axios");
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

class DataSource {
  static async getMealOfTheDay() {
    try {
      const response = await axios.get(`${BASE_URL}/random.php`);
      return response.data.meals[0];
    } catch (error) {
      console.log(error);
    }
  }

  static async getMealCategories() {
    try {
      const response = await axios.get(`${BASE_URL}/categories.php`);
      return response.data.categories;
    } catch (error) {
      console.log(error);
    }
  }

  static async getMealByCategories(category) {
    try {
      const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
      return _.slice(response.data.meals, 0, 5);
    } catch (error) {
      console.log(error);
    }
  }

  static async getMealDetails(mealId) {
    try {
      const response = await axios.get(`${BASE_URL}/lookup.php?i=${mealId}`);
      return response.data.meals[0];
    } catch (error) {
      console.log(error);
    }
  }
}

export default DataSource;
