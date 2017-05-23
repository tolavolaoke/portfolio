function PortfolioController(){
  var controller = this;

  controller.projects = [
    {
      title: 'Be Fit',
      desc: 'WRITE DESCRIPTION HERE!',
      img: '../../images/beFit.png',
      gif: '',
      deployedlink: '',
      state: 'be-fit'
    },
    {
      title: 'Family Tree',
      desc: 'WRITE DESCRIPTION HERE!',
      img: '../images/familyTree.png',
      gif: '',
      deployedlink: 'https://sg-project-3-to.herokuapp.com/#!/'
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
  }
  init();
}

angular
.module('portfolio-to')
.controller('PortfolioController', PortfolioController);
