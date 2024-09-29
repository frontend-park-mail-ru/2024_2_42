const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export const validateInput = (input, rules) => {
    // Email validation
    if (rules.isEmail) {
        if (!EMAIL_PATTERN.test(input)) {
            return { isValid: false, error: 'Неверный формат email. Убедитесь, что введен правильный адрес электронной почты.' };
        }
    }

    // Password validation (8-24 characters, must contain at least one uppercase letter and one digit)
    if (rules.isPassword) {
        if (input.length < 8 || input.length > 24) {
            return { isValid: false, error: 'Пароль должен содержать от 8 до 24 символов.' };
        }
        if (!/[A-Z]/.test(input)) {
            return { isValid: false, error: 'Пароль должен содержать хотя бы одну заглавную букву.' };
        }
        if (!/\d/.test(input)) {
            return { isValid: false, error: 'Пароль должен содержать хотя бы одну цифру.' };
        }
    }

    // Nickname validation (3-20 characters, only digits, letters, and underscore)
    if (rules.isNickname) {
        if (input.length < 3 || input.length > 20) {
            return { isValid: false, error: 'Никнейм должен содержать от 3 до 20 символов.' };
        }
        if (!/^[A-Za-z0-9_]+$/.test(input)) {
            return { isValid: false, error: 'Никнейм может состоять только из букв, цифр и подчеркиваний.' };
        }
    }

    // String comparison check (e.g., for password confirmation)
    if (rules.compareWith !== undefined) {
        if (input !== rules.compareWith) {
            return { isValid: false, error: 'Введенные строки не совпадают. Убедитесь, что они идентичны.' };
        }
    }

    // If all checks pass
    return { isValid: true, error: '' };
};
