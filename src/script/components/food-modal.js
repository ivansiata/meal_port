const _ = require("lodash");
import $ from "jquery";
import DataSource from "../api/data-source.js";
import "./food-card.js";

class FoodModal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set foodDatas(foodDatas) {
    this._foodDatas = foodDatas;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="foodByCategoryModalLabel">Foods</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" id="foodByCategoryModalBody">
            <div class="accordion" id="accordionExample"></div>
          </div>
        </div>
      </div>
    `;
    _.forEach(this._foodDatas, async (meal, index) => {
      let responseMeal = await DataSource.getMealDetails(meal.idMeal);
      let strMeal = responseMeal.strMeal;
      $(this).find(".accordion").append(`
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${index + 1}">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${index + 1}"
            aria-expanded="false"
            aria-controls="collapse${index + 1}"
          >
            ${strMeal}
          </button>
        </h2>
        <div
          id="collapse${index + 1}"
          class="accordion-collapse collapse"
          aria-labelledby="heading${index + 1}"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
          </div>
        </div>
      </div>
      `);
      let foodCard = document.createElement("food-card");
      let foodCardData = {
        header: "Details",
        img: responseMeal.strMealThumb,
        title: responseMeal.strMeal,
        text: responseMeal.strInstructions,
      };
      foodCard.foodData = foodCardData;
      $(this)
        .find(`#collapse${index + 1} .accordion-body`)
        .append(foodCard);
    });
  }
}

customElements.define("food-modal", FoodModal);
