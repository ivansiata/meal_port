import "regenerator-runtime";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";
import "./img/fast-food.png";
import "./script/components/app-bar.js";
import "./script/components/food-modal.js";
import main from "./script/view/main";
const _ = require("lodash");

$(document).ready(main);
