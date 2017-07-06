function PortfolioFactory(API_URL, $http) {
  return {

    getOne(projectId) {
      return $http({
        method: 'GET',
        url: `${API_URL}/projects/${projectId}`
      });
    },
}

angular
  .module('portfolio-to')
  .factory('PortfolioFactory', PortfolioFactory);
