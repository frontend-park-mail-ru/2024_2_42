import App from './app.js';

const root = document.getElementById('root');

const homeConfig = {
	menu: {
		feed: {
			text: 'feed',
			href: '/feed',
		},
		login: {
			text: 'login',
			href: '/login',
		},
		signup: {
			text: 'signup',
			href: '/signup',
		},
	},
};

const loginConfig = {
	className: 'login-form',
	text: 'Это форма логина',
	inputs: {
		email: {
            Error: '',
            inputLabelText: '',
            inputSize: 'input_large',
            leftIcon: '',
            // inputImageRight: 'assets/icons/Search.svg',
            typeOfInput: 'text',
            inputPlaceholder: 'Логин',
            // inputHelperText: 'helper',
            isDisabled: false,
            valid: false,
            rightIconClickable: true,
        },
        password: {
            Error: '',
            inputLabelText: '',
            inputSize: 'input_large',
            leftIcon: '',
            // inputImageRight: 'assets/icons/Search.svg',
            typeOfInput: 'password',
            inputPlaceholder: 'Пароль',
            // inputHelperText: 'helper',
            isDisabled: false,
            valid: false,
            rightIconClickable: true,
        },
	},
	button: {
		label: 'Войти',
        iconLeft: '',
        iconRight: '',
        type: 'primary',
        disabled: false,
        hover: false,
        active: false
	},
};

const signupConfig = {
	className: 'signup-form',
	text: 'Это форма регистрации',
	inputs: {
		firstName: {
            Error: '',
            inputLabelText: '',
            inputSize: 'input_large',
            leftIcon: '',
            // inputImageRight: 'assets/icons/Search.svg',
            typeOfInput: 'text',
			inputPlaceholder: 'Имя пользователя',
            // inputHelperText: 'helper',
            isDisabled: false,
            valid: false,
            rightIconClickable: true,
		},
		email: {
            Error: '',
            inputLabelText: '',
            inputSize: 'input_large',
            leftIcon: '',
            // inputImageRight: 'assets/icons/Search.svg',
			typeOfInput: 'email',
			inputPlaceholder: 'Email',
            // inputHelperText: 'helper',
            isDisabled: false,
            valid: false,
            rightIconClickable: true,
			// name: 'email',
		},
		password: {
            Error: '',
            inputLabelText: '',
            inputSize: 'input_large',
            leftIcon: '',
            // inputImageRight: 'assets/icons/Search.svg',
			typeOfInput: 'password',
			inputPlaceholder: 'Пароль',
            // inputHelperText: 'helper',
            isDisabled: false,
            valid: false,
            rightIconClickable: true,
			// name: 'password'
		},
		passwordAgain: {
            Error: '',
            inputLabelText: '',
            inputSize: 'input_large',
            leftIcon: '',
            // inputImageRight: 'assets/icons/Search.svg',
			typeOfInput: 'password',
			inputPlaceholder: 'Повторите пароль',
            // inputHelperText: 'helper',
            isDisabled: false,
            valid: false,
            rightIconClickable: true,
			// name: 'passwordAgain',
		},
	},
	button: {
		label: 'Присоединиться',
        iconLeft: '',
        iconRight: '',
        type: 'submit',
        disabled: false,
        hover: false,
        active: false
	}
};

const config = {
	homeConfig,
	signupConfig,
	loginConfig,
};

const app = new App(config, root);
app.goToPage(window.location.pathname);
