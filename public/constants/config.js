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
        header: {
            text: 'header',
            href: '/header',
        },
    },
};

export const loginConfig = {
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
        type: 'submit',
        disabled: false,
        hover: false,
        active: false
    },
    button_form_footer: {
        label: 'Зарегистрируйтесь',
        iconLeft: '',
        iconRight: '',
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
    },
    button_form_footer: {
        label: 'Войдите',
        iconLeft: '',
        iconRight: '',
        type: 'link',
        disabled: false,
        hover: false,
        active: false
    }
};

export const headerConfig = {
    className: 'header', // CSS class for header
    iconUrl: '/assets/icons/logo.svg', // Path to the logo/icon

    profileIconUrl: '/assets/icons/profile.svg',
    
    isLoggedIn: false, // Determines login status

    // Section buttons for navigation (some disabled if not logged in)
    sections: [
        {
            name: 'Home', // Section name
            href: '/home', // URL for navigation
            disabled: false, // Always enabled
        },
        {
            name: 'Create',
            href: '/create',
            disabled: true, // Disabled if not logged in
        },
        {
            name: 'Saved',
            href: '/saved',
            disabled: true, // Disabled if not logged in
        },
    ],

    // Search input field (disabled by default)
    searchInput: {
        Error: '',
        inputLabelText: '',
        inputSize: 'input_large',
        leftIcon: '/assets/icons/search.svg', // Search icon
        typeOfInput: 'text',
        inputPlaceholder: 'Начни печатать',
        isDisabled: true, // Disabled if not logged in
        valid: true,
        rightIconClickable: false,
    },

    // Notification Button (disabled if not logged in)
    notificationButton: {
        iconLeft: '/assets/icons/notification.svg',
        type: 'icon',
        disabled: true, // Disabled by default when not logged in
        hover: false,
        active: false,
    },

    // Profile Button (disabled if not logged in)
    profileButton: {
        iconLeft: '/assets/icons/profile.svg',
        type: 'icon',
        disabled: true, // Disabled by default when not logged in
        hover: false,
        active: false,
    },

    // Login Button (visible when not logged in)
    loginButton: {
        label: 'Login',
        iconLeft: '',
        iconRight: '',
        type: 'link',
        disabled: false,
        hover: false,
        active: false,
    },

    // Register Button (visible when not logged in)
    registerButton: {
        label: 'Register',
        iconLeft: '',
        iconRight: '',
        type: 'link',
        disabled: false,
        hover: false,
        active: false,
    },
};
