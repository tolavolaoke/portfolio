function PortfolioController(){
  var controller = this;

  controller.projects = [
    {
      title: 'Be Fit',
      desc: 'An online application that inspires and encourages living a healthy lifestyle.',
      img: '../images/beFit.png',
      gif: 'GIFFY GOES HERE',
      deployedlink: 'www.linkgoeshere.com',
      makeProjectVisible: function() {
        controller.isBeFitVisible = true;
        controller.isDefaultVisible =
        controller.isFamilyTreeVisible =
        controller.isGameVisible =
        controller.isMoviesRevsVisible =
        controller.isCongaVisible =
        controller.isRateReviewAppVisible = false;
      }
    },
    {
      title: 'Family Tree',
      desc: 'An app that allows users to create an account and create a list of relatives and gives users the ability to locate them on google maps.',
      img: '../images/familyTree.png',
      gif: '',
      deployedlink: 'https://sg-project-3-to.herokuapp.com/#!/',
      makeProjectVisible: function() {
        controller.isFamilyTreeVisible = true;
        controller.isDefaultVisible =
        controller.isBeFitVisible =
        controller.isGameVisible =
        controller.isMoviesRevsVisible =
        controller.isCongaVisible =
        controller.isRateReviewAppVisible = false;
      }
    },
    {
      title: 'Game',
      desc: 'A JavaScript Game where instructions are provided and players can play and score points ',
      img: '../images/game.png',
      gif: '',
      deployedlink: 'http://git.heroku.com/tolaoke-sg-project-1.git',
      makeProjectVisible: function() {
        controller.isGameVisible = true;
        controller.isDefaultVisible =
        controller.isBeFitVisible =
        controller.isFamilyTreeVisible =
        controller.isMoviesRevsVisible =
        controller.isCongaVisible =
        controller.isRateReviewAppVisible = false;
      }
    },
    {
      title: 'Movie Reviews',
      desc: 'This project uses a rMVC approach and utilises HTTP requests. It allows the creation of new movies and reviews and also updates the database so the user can add, delete, edit their favourite movies and only create reviews.!',
      img: '../images/moviesRevs.png',
      gif: '',
      deployedlink: 'https://movierevs.herokuapp.com/',
      makeProjectVisible: function() {
        controller.isMoviesRevsVisible = true;
        controller.isDefaultVisible =
        controller.isBeFitVisible =
        controller.isFamilyTreeVisible =
        controller.isGameVisible =
        controller.isCongaVisible =
        controller.isRateReviewAppVisible = false;
      }
    },
    {
    title: 'Conga',
    desc: 'A moblie application that connects people together with events, activties or hobbies they have in common',
    img: '../images/conga.png',
    gif: '',
    deployedlink: 'ADD LINK HERE',
    makeProjectVisible: function() {
      controller.isCongaVisible = true;
      controller.isDefaultVisible =
      controller.isBeFitVisible =
      controller.isFamilyTreeVisible =
      controller.isGameVisible =
      controller.isMoviesRevsVisible =
      controller.isRateReviewAppVisible = false;
      }
    },
    {
    title: 'Rate and Review App',
    desc: 'A mobile application which allows students to review and rate their landord and the accommodation that they are living in.',
    img: '../images/randr.png',
    gif: '',
    deployedlink: 'ADD DEPLOY LINK HERE',
    makeProjectVisible: function() {
      controller.isRateReviewAppVisible = true;
      controller.isDefaultVisible =
      controller.isBeFitVisible =
      controller.isFamilyTreeVisible =
      controller.isGameVisible =
      controller.isMoviesRevsVisible =
      controller.isCongaVisible =false;
  }

  }];


  function init() {
    console.log(controller);
    controller.isDefaultVisible = true;
  ;

  }
  init();
}

angular
.module('portfolio-to')
.controller('PortfolioController', PortfolioController);
