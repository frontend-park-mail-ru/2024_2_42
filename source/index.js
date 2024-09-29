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
  active: false,
};
//const buttonElement = new Button(null, buttonData);

// const isLogin = false;
// const Form = {}; // replace in real form

// const LoginPage = document.getElementById('root');
// const login = new LoginOrSignUp(LoginPage, Form, isLogin, buttonElement);
// login.renderTemplate();
const buttonContainer = document.getElementById("root");
const button = new Button(buttonContainer, buttonData);
button.renderTemplate();

// const inputData = {
//     inputSize: 'input_large',
//     inputImageRight: 'assets/icons/Search.svg',
//     typeOfInput: 'text',
//     inputPlaceholder: 'Search...',
//     inputLabelText: 'Label',
//     inputHelperText: 'helper'
// };

// const inputContainer = document.getElementById('root');
// const input = new Input(inputContainer, inputData);
// input.renderTemplate();
