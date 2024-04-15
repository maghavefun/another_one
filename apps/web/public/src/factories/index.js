import {Server} from './Server.factory';
import {Task} from './Task.factory';
import {Charts} from './Charts.factory';
import {ServerGroup} from './ServerGroup.factory';

export const factoriesModule = angular.module('factories', [])
  .factory('Server', Server)
  .factory('Task', Task)
  .factory('Charts', Charts)
  .factory('ServerGroup', ServerGroup)
