import $ from "jquery";
import "./food-category-item";

class FoodCategoryList extends HTMLElement {
  set results(results) {
    this._results = results;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = "";
    _.forEach(this._results, (category) => {
      const categoryElement = document.createElement("food-category-item");
      $(categoryElement).addClass("col-lg-4 col-sm-6");
      categoryElement.category = category;
      categoryElement.clickEvent = this._clickEvent;
      $(this).append(categoryElement);
    });
  }
}

customElements.define("food-category-list", FoodCategoryList);
