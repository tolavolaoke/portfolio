function PortfolioController(){
  var controller = this;

  controller.projects = [
    {
      title: 'Be Fit',
      desc: 'WRITE DESCRIPTION HERE!',
      img: '../../images/beFit.png',
      gif: 'GIFFY GOES HERE',
      deployedlink: 'www.linkgoeshere.com',
      makeProjectVisible: function() {
        controller.isBeFitVisible = true;
        controller.isDefaultVisible =
        controller.isFamilyTreeVisible =
        controller.isGameVisible =
        controller.isMoviesRevsVisible = false;
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
        controller.isMoviesRevsVisible = false;
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
        controller.isMoviesRevsVisible = false;
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
        controller.isDefaultVisible = controller.isBeFitVisible = controller.isFamilyTreeVisible = controller.isGameVisible = false;
    }
  }];



  function init() {
    console.log(controller);
    controller.isDefaultVisible = true;

  }
  init();
}

angular
.module('portfolio-to')
.controller('PortfolioController', PortfolioController);
