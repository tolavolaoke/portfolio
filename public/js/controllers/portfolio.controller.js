function PortfolioController(){
  var controller = this;

  controller.projects = [
    {
      title: 'Be Fit',
      desc: 'WRITE DESCRIPTION HERE!',
      img: '../../images/beFit.png',
      gif: '',
      deployedlink: '',
      makeProjectVisible: function() {
        controller.isBeFitVisible = true;
        controller.isDefaultVisible = controller.isFamilyTreeVisible = false;
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
        controller.isDefaultVisible = controller.isBeFitVisible = false;
      }
    },
    {
      title: 'Game',
      desc: 'WRITE DESCRIPTION HERE!',
      img: '../images/game.png',
      gif: '',
      deployedlink: 'http://git.heroku.com/tolaoke-sg-project-1.git'
    },
    {
      title: 'Movie Reviews',
      desc: 'WRITE DESCRIPTION HERE!',
      img: '../images/moviesRevs.png',
      gif: '',
      deployedlink: 'https://movierevs.herokuapp.com/'
    }
  ];



  function init() {
    console.log(controller);
    controller.isDefaultVisible = true;
  }
  init();
}

angular
.module('portfolio-to')
.controller('PortfolioController', PortfolioController);
