'use strict';

(function() {
  class MainController {
    $http;
    socket;

    constructor($http, $scope, socket) {
      debugger;

      this.$http = $http;
      this.socket = socket;
    }
  }

  angular.module('reflexNodeJsApp').component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });
})();
