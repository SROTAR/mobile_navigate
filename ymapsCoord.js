let myMap;

ymaps.ready(init);

function init(coord) {
    myMap = new ymaps.Map("map", { // Замените "map" на ID вашего контейнера карты
        center: [55.76, 37.64], // Начальные координаты (можно любые)
        zoom: 10 // Начальный масштаб
    });

    var coordinates = [45.043315, 41.969111]; // Ваши координаты

    myMap.setCenter(coord, 15);
}   