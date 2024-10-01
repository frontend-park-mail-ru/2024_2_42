'use strict';

export const getMessageFromHttpStatus = (status) => {
  switch (status) {
    case 400:
      return 'Данные запроса некорректны';
    case 401:
      return 'Пользователь не авторизован';
    case 403:
      return 'Ошибка доступа';
    case 405:
      return 'Метод недоступен';
    case 500:
      return 'Ошибка сервера';
  }
};
