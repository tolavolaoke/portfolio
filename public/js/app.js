// To define all the different states

function MainRouter($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: '/states/home.html'
  }),
  $stateProvider
  .state('project1',{
    url: '/project1',
    templateUrl: '/states/project1.html'
  }),
  $stateProvider
  .state('be-fit',{
    url: '/be-fit',
    templateUrl: '/states/be-fit.html'
  });


  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('portfolio-to', ['ui.router'])
.config(MainRouter);
