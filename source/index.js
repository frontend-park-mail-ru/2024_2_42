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
