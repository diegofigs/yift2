/**
 * Created by diegofigs on 1/28/17.
 */
import angular from 'angular';

import Message from './message/message';

const serviceModule = angular.module('app.services', [
  Message
])
.name;

export default serviceModule;
