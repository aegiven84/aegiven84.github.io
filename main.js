var run = setInterval(function () {slideShow()}, 20000);

function slideShow() {
  
  var $image = document.querySelector('#slides');
    $image.src = 'images/19636_528607833948_1249284_n.jpg';

    function secondImage() {
      $image.src = 'images/DSC03683 - Version 2.JPG';
    } setTimeout(secondImage, 5000);

    function thirdImage() {
      $image.src = 'images/DSC03690 - Version 2.JPG';
    } setTimeout(thirdImage, 10000);

    function fourthImage() {
      $image.src = 'images/DSC03843 - Version 2.JPG';
    } setTimeout(fourthImage, 15000);

  } setTimeout(slideShow, 500);
