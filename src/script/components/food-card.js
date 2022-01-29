import $ from "jquery";

class FoodCard extends HTMLElement {
  set foodData(foodData) {
    this._foodData = foodData;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card">
        <img src="${this._foodData.img}" class="card-img-top" alt="..." />
        <div class="card-header"><h3>${this._foodData.header}</h3></div>
        <div class="card-body">
          <h5 class="card-title">${this._foodData.title}</h5>
          <p class="card-text">${this._foodData.text}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("food-card", FoodCard);
