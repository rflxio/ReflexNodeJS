'use strict';

angular.module('reflexNodeJsApp.auth', [
  'reflexNodeJsApp.constants',
  'reflexNodeJsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
