import { groupsList } from './groupsList.component';
import { groupsView } from './groupsView.component';
import { groupsEdit } from './groupsEdit.component';

export const serverGroupsModule = angular.module('server_groups',[])
.component('groupsList', groupsList)
.component('groupsView', groupsView)
.component('groupsEdit', groupsEdit)