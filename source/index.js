//import {InputComponent as Input} from './components/input.js';
import { ButtonComponent as Button } from "./components/button/button.js";

//template of using template ;D
const buttonData = {
  label: "Hello tester",
  iconLeft: "",
  iconRight: "",
  type: "primary",
  disabled: false,
  hover: false,
};

const buttonContainer = document.getElementById("root");
const button = new Button(buttonContainer, buttonData);
button.renderTemplate();

const buttonClick = new Button(buttonContainer, { label: "Click Me", active:true }, (event) => {
  console.log("Button clicked!");
});
buttonClick.renderTemplate();
