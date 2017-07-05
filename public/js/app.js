// To define all the different states
// Partial views of projects created under home.html
function MainRouter($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('home',{
    url: '/',
    views: {
      '': { templateUrl: '/states/home.html' },
      'projectContent@home': { templateUrl: '/states/partials/project-content.html' },
      'beFit@home': { templateUrl: '/states/partials/be-fit.html' },
      'familyTree@home': { templateUrl: '/states/partials/family-tree.html' },
      'game@home': { templateUrl: '/states/partials/game.html' },
      'moviesRevs@home': { templateUrl: '/states/partials/moviesrevs.html' }
    }

  });

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('portfolio-to', ['ui.router'])
.config(MainRouter);
