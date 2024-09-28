// Importing ButtonComponent and PinComponent
import { ButtonComponent as Button } from '../components/button/button.js';
import { PinComponent as Pin } from './pages/pin/pin.js';

// Sample data for the pin, including the disabled buttons
const pinData = {
    imageSrc: '',
    boardSelectionDisabled: true,
    saveButtonDisabled: true,
    shareButtonDisabled: true,
    menuButtonDisabled: true,
    userIconVisible: true, // если отображение иконки пользователя нужно проверить
    descriptionVisible: true // если отображение текста под изображением нужно проверить
};

// Getting the container where the pin will be rendered
const pinContainer = document.getElementById('root');

// Creating a new Pin component and rendering it
const pin = new Pin(pinContainer, pinData);
pin.renderTemplate();

// Adding a click handler to one of the buttons inside the pin
// pin.getSaveButton().setClickHandler(() => {
//     alert('Save button clicked!');
// });
