const fullscreenContainer = document.getElementById('fullscreen-container');
   const fullscreenImage = document.getElementById('fullscreen-image');
   const imgElement = document.querySelector('.menu img'); //Выберем изображение

   imgElement.addEventListener('click', () => {
       fullscreenImage.src = imgElement.src;
       fullscreenContainer.style.display = 'flex'; //Изменил на flex, чтобы изображение было по центру
   });

   fullscreenContainer.addEventListener('click', () => {
       fullscreenContainer.style.display = 'none';
   });
   