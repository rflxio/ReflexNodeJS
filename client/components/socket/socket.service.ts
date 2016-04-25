/* global io */
'use strict';

angular.module('reflexNodeJsApp').factory('socket', function(socketFactory, Auth) {
    // socket.io now auto-configures its connection when we omit a connection url
    var ioSocket = io('', {
      // Send auth token on connection, you will need to DI the Auth service above
      path: '/socket.io-client',
      query: 'token=' + Auth.getToken()
    });

    return socketFactory({ ioSocket });
  });
