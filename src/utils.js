export function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = (Math.random()).toFixed(2); // альфа-канал от 0 до 1 с двумя знаками после запятой
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
  