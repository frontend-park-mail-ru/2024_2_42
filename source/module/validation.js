const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[0-9]).{8,24}$/;
const nicknamePattern = /^[0-9a-zA-Z_]{3,20}$/;


export const validateInput = (input, rules) => {
    // Валидация email
    if (rules.isEmail) {
        if (!emailPattern.test(input)) {
            return { isValid: false, error: 'Неверный адрес электронной почты.' };
        }
    }

    // Валидация пароля (8-24 символа, содержит хотя бы одну цифру и одну заглавную букву)
    if (rules.isPassword && !passwordRegex.test(input)) {
        return { isValid: false, error: 'Пароль должен содержать от 8 до 24 символов, включать хотя бы одну заглавную букву и одну цифру.' };
    }

    // Валидация никнейма (3-20 символов, только цифры, буквы и символ "_")
    if (rules.isNickname) {
        if (!nicknamePattern.test(input)) {
            return { isValid: false, error: 'Никнейм должен содержать от 3 до 20 символов и включать только буквы, цифры и символ "_".' };
        }
    }

    // Проверка на совпадение строк (например, для сравнения паролей)
    if (rules.compareWith !== undefined) {
        if (input !== rules.compareWith) {
            return { isValid: false, error: 'Строки не совпадают.' };
        }
    }

    // Если все проверки пройдены
    return { isValid: true, error: '' };
};