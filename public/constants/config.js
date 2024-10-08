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
		signup: {
			text: 'signup',
			href: '/signup',
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
	}
};

export const headerConfig = {
	className: 'header', // CSS class for header

	// Icon and profile image URLs
	images: {
		logoUrl: './assets/icons/logo.svg', // Path to the app icon
	},

	// Login status
	isLoggedIn: true, // Determines login status

	// Section buttons for navigation
	sections: [
		{
			name: 'Домой', // Section name
			href: '/', // URL for navigation
			disabled: false, // Always enabled
		},
		{
			name: 'Создать', // Section name
			href: '/create', // URL for navigation
			disabled: true, // Disabled if not logged in
		},
		{
			name: 'Сохраненные', // Section name
			href: '/saved', // URL for navigation
			disabled: true, // Disabled if not logged in
		},
	],

	// Search input configuration
	searchInput: {
		inputSize: 'input_large',
		typeOfInput: 'text',
		inputPlaceholder: 'Начни печатать', // Placeholder text
		isDisabled: true, // Disabled if not logged in
		valid: true,
		rightIconClickable: false,
	},

	// Buttons configuration
	buttons: {
		notificationButton: {
			iconLeft: './assets/icons/notification.svg',
			label: '',
			type: 'primary',
			disabled: false,
		},
		profileButton: {
			iconLeft: './assets/icons/user.svg',
			label: '',
			type: 'primary',
			disabled: false,
		},
		logOutButton: {
			iconLeft: './assets/icons/logout.svg',
			label: '',
			type: 'primary',
			disabled: false,
		},
		loginButton: {
			label: 'Войти',
			type: 'primary',
			disabled: false,
		},
		registerButton: {
			label: 'Зарегистрироваться',
			type: 'primary',
			disabled: false,
		},
	},
};
