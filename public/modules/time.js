'use strict';

/**
 * Converts a timestamp into a human-readable relative time format.
 * 
 * This function takes a timestamp (string or Date object) and calculates 
 * the time elapsed from the current moment to the given timestamp. 
 * It returns a relative time string (e.g., "5 минут назад").
 *
 * @param {string | Date} timestamp - The input timestamp in ISO 8601 format 
 *        (e.g., "2024-11-16 17:53:36.574208+00") or a valid `Date` object.
 *
 * @returns {string} The human-readable relative time. If the timestamp is invalid, 
 *          it returns "Некорректная дата".
 *
 * @example
 * // Valid timestamp
 * const result = timeAgo("2024-11-16T17:53:36.574Z");
 * console.log(result);
 * // Output: "5 минут назад"
 *
 * @example
 * // Invalid timestamp
 * const result = timeAgo("invalid-date");
 * console.log(result);
 * // Output: "Некорректная дата"
 */
export const timeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp); // Преобразуем строку времени в объект Date
    const diffMs = now - time; // Разница в миллисекундах

    if (isNaN(diffMs)) {
        return 'Некорректная дата'; // Если дата некорректна
    }

    const diffSeconds = Math.floor(diffMs / 1000); // Переводим в секунды
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) {
        return `${diffSeconds} с. назад`;
    }
    if (diffMinutes < 60) {
        return `${diffMinutes} мин. назад`;
    }
    if (diffHours < 24) {
        return `${diffHours} час. назад`;
    }

    return `${diffDays} д. назад`;
};
