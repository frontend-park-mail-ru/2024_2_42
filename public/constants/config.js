export const homeConfig = {
  menu: {
    feed: {
      text: "feed",
      href: "/feed",
    },
    login: {
      text: "login",
      href: "/login",
    },
    signup: {
      text: "signup",
      href: "/signup",
    },
    header: {
      text: "header",
      href: "/header",
    },
  },
};

export const loginConfig = {
  className: "login-form",
  text: "Это форма логина",
  inputs: {
    email: {
      Error: "",
      inputLabelText: "",
      inputSize: "input_large",
      leftIcon: "",
      // inputImageRight: 'assets/icons/Search.svg',
      typeOfInput: "text",
      inputPlaceholder: "Логин",
      // inputHelperText: 'helper',
      isDisabled: false,
      valid: false,
      rightIconClickable: true,
    },
    password: {
      Error: "",
      inputLabelText: "",
      inputSize: "input_large",
      leftIcon: "",
      // inputImageRight: 'assets/icons/Search.svg',
      typeOfInput: "password",
      inputPlaceholder: "Пароль",
      // inputHelperText: 'helper',
      isDisabled: false,
      valid: false,
      rightIconClickable: true,
    },
  },
  button: {
    label: "Войти",
    iconLeft: "",
    iconRight: "",
    type: "submit",
    disabled: false,
    hover: false,
    active: false,
  },
  button_form_footer: {
    label: "Зарегистрируйтесь",
    iconLeft: "",
    iconRight: "",
    type: "link",
    disabled: false,
    hover: false,
    active: false,
  },
};

export const signupConfig = {
  className: "signup-form",
  text: "Это форма регистрации",
  inputs: {
    firstName: {
      Error: "",
      inputLabelText: "",
      inputSize: "input_large",
      leftIcon: "",
      // inputImageRight: 'assets/icons/Search.svg',
      typeOfInput: "text",
      inputPlaceholder: "Имя пользователя",
      // inputHelperText: 'helper',
      isDisabled: false,
      valid: false,
      rightIconClickable: true,
    },
    email: {
      Error: "",
      inputLabelText: "",
      inputSize: "input_large",
      leftIcon: "",
      // inputImageRight: 'assets/icons/Search.svg',
      typeOfInput: "email",
      inputPlaceholder: "Email",
      // inputHelperText: 'helper',
      isDisabled: false,
      valid: false,
      rightIconClickable: true,
      // name: 'email',
    },
    password: {
      Error: "",
      inputLabelText: "",
      inputSize: "input_large",
      leftIcon: "",
      // inputImageRight: 'assets/icons/Search.svg',
      typeOfInput: "password",
      inputPlaceholder: "Пароль",
      // inputHelperText: 'helper',
      isDisabled: false,
      valid: false,
      rightIconClickable: true,
      // name: 'password'
    },
    passwordAgain: {
      Error: "",
      inputLabelText: "",
      inputSize: "input_large",
      leftIcon: "",
      // inputImageRight: 'assets/icons/Search.svg',
      typeOfInput: "password",
      inputPlaceholder: "Повторите пароль",
      // inputHelperText: 'helper',
      isDisabled: false,
      valid: false,
      rightIconClickable: true,
      // name: 'passwordAgain',
    },
  },
  button: {
    label: "Присоединиться",
    iconLeft: "",
    iconRight: "",
    type: "submit",
    disabled: false,
    hover: false,
    active: false,
  },
  button_form_footer: {
    label: "Войдите",
    iconLeft: "",
    iconRight: "",
    type: "link",
    disabled: false,
    hover: false,
    active: false,
  },
};

export const headerConfig = {
  className: "header", // CSS class for header

  // Icon and profile image URLs
  images: {
    logoUrl: "./asserts/icons/logo.svg", // Path to the app icon
  },

  // Login status
  isLoggedIn: false, // Determines login status

  // Section buttons for navigation
  sections: [
    {
      name: "Home", // Section name
      href: "/home", // URL for navigation
      disabled: false, // Always enabled
    },
    {
      name: "Create", // Section name
      href: "/create", // URL for navigation
      disabled: true, // Disabled if not logged in
    },
    {
      name: "Saved", // Section name
      href: "/saved", // URL for navigation
      disabled: true, // Disabled if not logged in
    },
  ],

  // Search input configuration
  searchInput: {
    inputLabelText: "",
    inputSize: "input_large",
    leftIcon: "", // Search icon
    typeOfInput: "text",
    inputPlaceholder: "Начни печатать", // Placeholder text
    isDisabled: true, // Disabled if not logged in
    valid: true,
    rightIconClickable: false,
  },

  // Buttons configuration
  buttons: {
    notificationButton: {
      iconLeft: "./asserts/icons/notification.svg",
      label: "",
      type: "primary",
      disabled: false,
    },
    profileButton: {
      iconLeft: "./asserts/icons/user.svg",
      label: "",
      type: "primary",
      disabled: false,
    },
    loginButton: {
      label: "Login",
      type: "link",
      disabled: false,
    },
    registerButton: {
      label: "Register",
      type: "link",
      disabled: false,
    },
  },
};
