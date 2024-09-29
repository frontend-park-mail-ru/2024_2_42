// Importing ButtonComponent and PinComponent
import { ButtonComponent as Button } from '../components/button/button.js';
import { PinComponent as Pin } from './pages/pin/pin.js';

function loadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
}

// Подключаем CSS для каждого компонента
loadCSS('./components/button/button.css');
loadCSS('./components/input/input.css');
loadCSS('./pages/pin/pin.css');

// Sample data for the pin
const pinData = {
    pinUrl: './pages/photo_2023-06-29_22-58-29.jpg', // Путь к изображению пина
    boards: ["first, second"],
    disabled: false, // Все кнопки отключены по умолчанию
    userIcon: './pages/photo_2023-06-29_22-58-29.jpg', // Путь к иконке пользователя
    showText: true, // Отображение текста под изображением
    buttons: {
        // saveButton: {
        //     label: 'Save to Board',
        //     iconLeft: './pages/share.svg',
        //     type: 'primary',
        //     disabled: false // Кнопка сохранения отключена
        // },
        shareButton: {
            label: 'shareButton',
            iconLeft: './pages/share.svg', // Путь к иконке поделиться
            type: 'primary',
            disabled: false // Кнопка поделиться отключена
        },
        menuButton: {
            label: 'menuButton',
            iconLeft: './source/pages/settings.svg', // Путь к иконке меню
            type: 'primary',
            disabled: true // Кнопка меню отключена
        }
    }
};

// Getting the container where the pin will be rendered
const pinContainer = document.getElementById('root');

// Creating a new Pin component and rendering it
const pin = new Pin(pinContainer, pinData);
pin.renderTemplate();

// Adding a click handler to the save button inside the pin
// pin.getState().buttons.saveButton.setClickHandler(() => {
//     alert('Save button clicked!');
// });
