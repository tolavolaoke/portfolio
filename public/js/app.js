// To define all the different states

function MainRouter($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('home',{
    url: '/home',
    templateUrl: '/states/home.html'
  });

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('portfolio-to', ['ui.router'])
.config(MainRouter);
