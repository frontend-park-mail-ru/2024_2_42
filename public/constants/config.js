'use strict';

export const homeConfig = {
	menu: {
		feed: {
			text: 'feed',
			href: '/feed',
		},
		login: {
			text: 'login',
			href: '/login',
		},
	},
};

export const loginConfig = {
	className: 'login-form',
	text: 'Это форма логина',
	inputs: {
		email: {
			inputSize: 'input_large',
			typeOfInput: 'text',
			inputPlaceholder: 'Email',
			inputHelperText: true,
			isDisabled: false,
			valid: false,
			rightIconClickable: true,
		},
		password: {
			inputSize: 'input_large',
			typeOfInput: 'password',
			inputPlaceholder: 'Пароль',
			inputHelperText: true,
			isDisabled: false,
			valid: false,
			rightIconClickable: true,
		},
	},
	button: {
		label: 'Войти',
		type: 'submit',
		disabled: false,
		hover: false,
		active: false
	},
	button_form_footer: {
		label: 'Зарегистрируйтесь',
		type: 'link',
		disabled: false,
		hover: false,
		active: false
	}
};

export const signupConfig = {
	className: 'signup-form',
	text: 'Это форма регистрации',
	inputs: {
		userName: {
			inputSize: 'input_large',
			typeOfInput: 'text',
			inputPlaceholder: 'Имя пользователя',
			inputHelperText: true,
			isDisabled: false,
			valid: false,
			rightIconClickable: true,
		},
		email: {
			inputSize: 'input_large',
			typeOfInput: 'email',
			inputPlaceholder: 'Email',
			inputHelperText: true,
			isDisabled: false,
			valid: false,
			rightIconClickable: true,
		},
		password: {
			inputSize: 'input_large',
			typeOfInput: 'password',
			inputPlaceholder: 'Пароль',
			inputHelperText: true,
			isDisabled: false,
			valid: false,
			rightIconClickable: true,
		},
		passwordAgain: {
			inputSize: 'input_large',
			typeOfInput: 'password',
			inputPlaceholder: 'Повторите пароль',
			inputHelperText: true,
			isDisabled: false,
			valid: false,
			rightIconClickable: true,
		},
	},
	button: {
		label: 'Присоединиться',
		type: 'submit',
		disabled: false,
		hover: false,
		active: false
	},
	button_form_footer: {
		label: 'Войдите',
		type: 'link',
		disabled: false,
		hover: false,
		active: false
	},
};

export const headerConfig = {
	// Icon and profile image URLs
	LogoUrl: './assets/icons/pinset-logo.svg', // Path to the app icon
	ProfileUrl: './assets/imgs/avatar.jpg', // Path to the profile 

	// Login status
	IsLoggedIn: false, // Determines login status

	// Search input configuration
	Placeholder: 'Искать вдохновение...', // Placeholder text

	LoginButton: {
		label: 'Войти',
		type: 'primary',
		disabled: false,
	},

	CreateButton: {
		label: 'Создать',
		type: 'primary',
		disabled: false,
	},
};
