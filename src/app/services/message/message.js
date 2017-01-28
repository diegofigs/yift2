/**
 * Created by diegofigs on 1/27/17.
 */
import angular from 'angular';
import MessageService from './message.service';

const messageModule = angular.module('message', [])

.service('Message', MessageService)

.name;

export default messageModule;
