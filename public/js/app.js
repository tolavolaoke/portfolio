// To define all the different states
// Partial views of projects created under home.html
function MainRouter($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('home',{
    url: '/',
    views: {
      '': { templateUrl: '/states/home.html' },
      'navbar@home': { templateUrl: '/states/partials/navbar.html' },
      'beFit@home': { templateUrl: '/states/partials/be-fit.html' },
      'familyTree@home': { templateUrl: '/states/partials/family-tree.html' },
      'game@home': { templateUrl: '/states/partials/game.html' },
      'moviesRevs@home': { templateUrl: '/states/partials/moviesrevs.html' },
      'conga@home': { templateUrl: '/states/partials/conga.html' },
      'rateReviewApp@home': { templateUrl: '/states/partials/rate-review-app.html' },
      'footer@home': { templateUrl: '/states/partials/footer.html' },
    }
  });


  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('portfolio-to', ['ui.router'])
.config(MainRouter);
