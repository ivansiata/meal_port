import DataSource from "../api/data-source";
import "../components/food-category-list.js";
import "../components/food-card.js";
import $ from "jquery";

const MEAL_OF_THE_DAY = "Meal Of The Day";

const main = () => {
  const getMealOfTheDay = async () => {
    const mealOfTheDay = await DataSource.getMealOfTheDay();
    const foodCardData = {
      header: MEAL_OF_THE_DAY,
      title: mealOfTheDay.strMeal,
      text: mealOfTheDay.strInstructions,
      img: mealOfTheDay.strMealThumb,
    };
    const foodCardElement = document.querySelector("food-card");
    foodCardElement.foodData = foodCardData;

    $("main header .card-title").text(mealOfTheDay.strMeal);
    $("main header .card-text").text(mealOfTheDay.strInstructions);
    $("main header img").attr("src", mealOfTheDay.strMealThumb);
    $("main header .list-group .list-group-item:nth-child(1)").text(
      `Category: ${mealOfTheDay.strCategory}`
    );
    $("main header .list-group .list-group-item:nth-child(2)").text(
      `Area: ${mealOfTheDay.strArea}`
    );
    $("main header .list-group .list-group-item:nth-child(3)").html(
      `Source: <a href='${mealOfTheDay.strSource}'>Source Link</a>`
    );
    $("main header .list-group .list-group-item:nth-child(4)").html(
      `Youtube: <a href='${mealOfTheDay.strYoutube}'>Youtube Link</a>`
    );
  };

  const getMealCategories = async () => {
    const categories = await DataSource.getMealCategories();
    const foodCategoryList = document.querySelector("food-category-list");
    foodCategoryList.results = categories;
    foodCategoryList.clickEvent = onByCategoryButtonClick;
  };

  const onByCategoryButtonClick = async (strCategory) => {
    try {
      const response = await DataSource.getMealByCategories(strCategory);
      const foodModalElement = document.querySelector("food-modal");
      foodModalElement.foodDatas = response;
    } catch (error) {
      console.log(error);
    }
  };

  const foodModalElement = document.querySelector("food-modal");
  foodModalElement.addEventListener("hidden.bs.modal", () => {
    $("food-modal .modal-body .accordion").html("");
  });

  getMealOfTheDay();
  getMealCategories();
};

export default main;
