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
      desc: 'WRITE DESCRIPTION HERE!',
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
      desc: 'WRITE DESCRIPTION HERE!',
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
      desc: 'WRITE DESCRIPTION HERE!',
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
    desc: 'WRITE DESCRIPTION HERE!',
    img: '../images/placeholder.jpg',
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
    desc: 'WRITE DESCRIPTION HERE!',
    img: '../images/placeholder.jpg',
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
