import $ from "jquery";

class FoodCategoryItem extends HTMLElement {
  set category(category) {
    this._category = category;
    this.render();
  }

  set clickEvent(event) {
    $(this)
      .find(".btn")
      .each(() => {
        $(this).on("click", () => {
          event(this._category.strCategory);
        });
      });
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.innerHTML += `
      <div class="card">
        <img src="${
          this._category.strCategoryThumb
        }" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this._category.strCategory}</h5>
          <p class="card-text">${
            _.split(this._category.strCategoryDescription, ".", 1)[0]
          }</p>
          <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#foodByCategoryModal">View Foods</button>
        </div>
      </div>\
    `;
  }
}

customElements.define("food-category-item", FoodCategoryItem);
