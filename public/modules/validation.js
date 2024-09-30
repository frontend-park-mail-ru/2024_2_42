/**
 * Regular expression pattern for validating an email address.
 * @type {RegExp}
 */
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validates user input based on the given rules.
 * 
 * @param {string} input - The input string to validate.
 * @param {Object} rules - Validation rules to apply.
 * @param {boolean} [rules.isEmail=false] - If true, validates the input as an email.
 * @param {boolean} [rules.isPassword=false] - If true, validates the input as a password (8-24 characters, must contain at least one uppercase letter and one digit).
 * @param {boolean} [rules.isNickname=false] - If true, validates the input as a nickname (3-20 characters, only digits, letters, and underscores allowed).
 * @param {string} [rules.compareWith] - If provided, compares the input with another string (e.g., for password confirmation).
 * @returns {{isValid: boolean, error: string}} - An object indicating whether the input is valid and an error message if invalid.
 * 
 * @example
 * // Example 1: Validating an email
 * const result = validateInput('example@mail.com', { isEmail: true });
 * console.log(result.isValid); // true
 * 
 * @example
 * // Example 2: Validating a password
 * const result = validateInput('StrongPass1', { isPassword: true });
 * console.log(result.isValid); // true
 * 
 * @example
 * // Example 3: Validating a nickname
 * const result = validateInput('nickname_123', { isNickname: true });
 * console.log(result.isValid); // true
 * 
 * @example
 * // Example 4: Comparing two strings
 * const result = validateInput('password123', { compareWith: 'password123' });
 * console.log(result.isValid); // true
 */
export const validateInput = (input, rules) => {
    // Nickname validation (3-20 characters, only digits, letters, and underscore)
    if (rules.isUserName) {
        if (input.length < 3 || input.length > 20) {
            return { isValid: false, error: 'Имя должно содержать от 3 до 20 символов.' };
        }
        if (!/^[A-Za-zА-Яа-я0-9_]+( )*[A-Za-zА-Яа-я0-9_]*$/.test(input)) {
            return { isValid: false, error: 'Имя может состоять только из букв, цифр и символов \'_\'.' };
        }
    }

    // Email validation
    if (rules.isEmail) {
        if (!EMAIL_PATTERN.test(input)) {
            return { isValid: false, error: 'Неверный формат email-адреса.' };
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

    // String comparison check (e.g., for password confirmation)
    if (rules.compareWith !== undefined) {
        if (input !== rules.compareWith) {
            return { isValid: false, error: 'Пароли не совпадают.' };
        }
    }

    // If all checks pass
    return { isValid: true, error: '' };
};

/**
 * Validates user input based on the given rules.
 * 
 * @param {boolean} [rules.isEmail=false] - If true, validates the input as an email.
 * @param {boolean} [rules.isPassword=false] - If true, validates the input as a password (8-24 characters, must contain at least one uppercase letter and one digit).
 * @param {boolean} [rules.isNickname=false] - If true, validates the input as a nickname (3-20 characters, only digits, letters, and underscores allowed).
 * @param {string} [rules.compareWith] - If provided, compares the input with another string (e.g., for password confirmation).
 * @returns {{captions: string[]}} - An object indicating whether the input is valid and an error message if invalid.
 **/
export const getCaptionSetForRule = (rules) => {
    if (rules.isUserName) {
        return [
            'Имя должно содержать:',
            '• От 3 до 20 символов.',
            '• Только буквы, цифры и символы \'_\'.',
        ];
    }

    if (rules.isEmail) {
        return [
            'Например: example@mail.com',
        ];
    }

    if (rules.isPassword) {
        return [
            'Пароль должен содержать:',
            '• От 8 до 24 символов.',
            '• Хотя бы одну заглавную букву.',
            '• Хотя бы одну цифру.',
        ];
    }

    return []
}
