angular
  .module('app')
  .controller('MainController', MainController)

  function MainController($scope) {
    $scope.name = 'Michael'
    $scope.email = 'michael@m.com'
    $scope.phone = '555-555-5555'
  };
