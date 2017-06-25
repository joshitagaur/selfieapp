(function() {
  'use strict';

  angular
    .module('selfieapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
