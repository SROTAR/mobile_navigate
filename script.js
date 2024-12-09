const sights = [
    {image: 'img/scale_1200.jpg', name: 'Памятник В.И. Ленин', description: 'ASDWF' },
    {image: 'Arf.jpg', name: 'ASD', description: 'asdfase'}
  ];
    
    const templ = `
      <div class="sight-card">
          <img src="{{image}}" alt="{{name}}">
          <h3>{{name}}</h3>
          <p>{{description}}</p>
      </div>
    `;

    var container = document.getElementById('menu-container');
   // const renderedHtml = Mustache.render(templ, sights);
   // container.innerHTML = renderedHtml;
  
      document.getElementById('Mashuk').addEventListener('click', function() {
          if (myMap) { // проверка, создана ли карта
            myMap.setCenter([44.051795, 43.086300], 15);
          } else {
            console.error("Карта еще не создана!");
          }
  });
  document.getElementById('Arfa').addEventListener('click', function() {
    if (myMap) { // проверка, создана ли карта
      myMap.setCenter([44.040356, 43.086790], 19);
    } else {
      console.error("Карта еще не создана!");
    }
});
document.getElementById('Grot').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.035728, 43.081688], 19);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Duel').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.0591, 43.077], 18);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Ozero').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.046543, 43.099065], 19);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Canat').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.043902, 43.081421], 17);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Aquapark').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.0727320, 43.1051690], 18);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Rinok').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.0412590, 43.0688930], 16);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Musei').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.040028, 43.077793], 18);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Teatr').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.0369360, 43.0837350], 18);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Cvetnik').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.036802,  43.081791], 18);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Kirova').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([58.588270, 49.652688], 15);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Beshtau').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.098133, 43.022232], 16);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Galery').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.0398, 43.0880], 19);
  } else {
    console.error("Карта еще не создана!");
  }
});
document.getElementById('Sobor').addEventListener('click', function() {
  if (myMap) { // проверка, создана ли карта
    myMap.setCenter([44.0370, 43.0782], 19);
  } else {
    console.error("Карта еще не создана!");
  }
});
