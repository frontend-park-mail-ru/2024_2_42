/**
 * Validates various types of data.
 * 
 * @param {string} input Data to be validated.
 * @param {object} rules Set of validation rules.
 * @returns {{isValid: boolean, error: string}} Object containing the validation result.
 */
export const validateInput = (input, rules) => {
    // Email validation
    if (rules.isEmail) {
        if (!EMAIL_PATTERN.test(input)) {
            return { isValid: false, error: 'Invalid email address.' };
        }
    }

    // Password validation (8-24 characters, must contain at least one uppercase letter and one digit)
    if (rules.isPassword && !PASSWORD_PATTERN.test(input)) {
        return { isValid: false, error: 'Password must contain 8 to 24 characters, include at least one uppercase letter and one digit.' };
    }

    // Nickname validation (3-20 characters, only digits, letters, and underscore)
    if (rules.isNickname) {
        if (!NICKNAME_PATTERN.test(input)) {
            return { isValid: false, error: 'Nickname must contain 3 to 20 characters and can only consist of digits, letters, and underscores.' };
        }
    }

    // String comparison check (e.g., for password confirmation)
    if (rules.compareWith !== undefined) {
        if (input !== rules.compareWith) {
            return { isValid: false, error: 'Strings do not match.' };
        }
    }

    // If all checks pass
    return { isValid: true, error: '' };
};