'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('websiteApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
