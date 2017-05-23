function PortfolioController(){
  var controller = this;

  controller.projects = [
    {
      title: 'Be Fit',
      desc: '',
      img: '../../images/beFit.png',
      gif: '',
      deployedlink: '',
      state: 'be-fit'
    },
    {
      title: '',
      desc: '',
      img: '',
      gif: '',
      deployedlink: ''
    },
    {
      title: '',
      desc: '',
      img: '',
      gif: '',
      deployedlink: ''
    },
    {
      title: '',
      desc: '',
      img: '',
      gif: '',
      deployedlink: ''
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
