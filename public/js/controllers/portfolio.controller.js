function PortfolioController() {
  var controller = this;

  controller.portfolioData = [
    {
      title: '',
      titleName: '',
      img: 'images/Screen Shot 2017-05-16 at 17.01.16.png',
      desc: 'Project Information',
      link: ''
    },
    {
      title: '',
      titleName: '',
      img: 'images/Screen Shot 2017-05-16 at 19.57.26.png',
      desc: 'Project Information ',
      link: ''
    },
    {
      title: '',
      titleName: '',
      img: 'images/Screen Shot 2017-05-16 at 17.00.21.png',
      desc: 'Project Information',
      link: ''
    },
    {
      title: '',
      titleName: '',
      img: 'images/Screen Shot 2017-05-16 at 20.00.49.png',
      desc: 'Project Information',
      link: ''
    }

  ];
}

angular
  .module('portfolio-to')
  .controller('PortfolioController', PortfolioController);
