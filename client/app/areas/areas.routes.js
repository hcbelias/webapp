'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('areas', {
    url: '/areas',
    template: '<areas></areas>'
  });
}
