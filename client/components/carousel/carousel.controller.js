/**
 * Created by donatien-gbe on 18/01/15.
 */
'use strict';

angular.module('jourdumarcheApp')
  .controller('CarouselCtrl', function ($scope) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.myInterval = 5000;
    $scope.slides = [
      {image: 'assets/images/img1.jpg',text: 'Kitten.'},
      {image: 'assets/images/img2.jpg',text: 'Kitty!'},
      {image: 'assets/images/img3.jpg',text: 'Cat.'},
      {image: 'assets/images/img4.jpg',text: 'Feline!'}
    ];
    $scope.addSlide = function() {
      $scope.slides.push({
        image: 'assets/images/img1.jpg'+(200+25*Math.floor(Math.random()*4))+'/200',
        text: ['More','Extra','Lots of','Surplus'][Math.floor(Math.random()*4)] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][Math.floor(Math.random()*4)]
      });
    };
  });
