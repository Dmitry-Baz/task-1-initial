import { getRandomColor } from './utils'; // Импорт функции из utils.js

export default function initApp() {
    // Создаем кнопку
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'Изменить цвет страницы';
    
    // Добавляем кнопку в тег <body>
    document.body.appendChild(button);

    // Добавляем слушатель события 'click'
    button.addEventListener('click', () => {
        // Устанавливаем случайный цвет как фон страницы
        document.body.style.backgroundColor = getRandomColor();
    });
}