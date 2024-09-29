<<<<<<< HEAD
// Импортируем компоненты
import { PinComponent } from "./components/complex/pin/pin.js";
import { ButtonComponent } from "./components/button/button.js";

// Получаем контейнер, в который будет вставлен PinComponent
const pinContainer = document.getElementById("root");

// Данные для PinComponent
const pinData = {
  pinUrl: "",
  boards: ["Board 1", "Board 2"],
  disabled: false,
  userIcon: "./user-icon.png",
  showText: false,
  buttons: {
    saveButton: {
      label: "Save to Board",
      type: "primary",
      disabled: false,
    },
  },
};

// Создаем PinComponent и рендерим его в pinContainer
const pin = new PinComponent(pinContainer, pinData);
pin.renderTemplate();

// Добавляем обработчики событий для кнопок (если они нужны)
const saveButtonContainer = document.querySelector(".pin__save-button");

// Проверяем инициализацию каждой кнопки и передаем контейнеры
if (saveButtonContainer) {
  const saveButton = new ButtonComponent(
    saveButtonContainer,
    pinData.buttons.saveButton,
  );
  saveButton.renderTemplate();
  saveButton.setClickHandler(() => {
    alert("Save button clicked!");
  });
}
=======
import {InputComponent as Input} from './components/input/input.js';

const inputData = {
    Error: '',
    inputLabelText: '',
    inputSize: '22',
    inputImageLeft: '',
    inputImageRight: '',
    typeOfInput: 'text',
    inputPlaceholder: 'Начните печатать',
    inputHelperText: ''
};

const inputContainer = document.getElementById('root');
const input = new Input(inputContainer, inputData);
input.renderTemplate();
>>>>>>> dev
