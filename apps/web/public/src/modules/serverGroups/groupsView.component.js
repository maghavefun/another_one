const groupsView = {
  templateUrl: '/partials/serverGroups/view',
  controller: [
    'ServerGroup',
    '$stateParams',
    function(ServerGroup, $stateParams) {
      this.server_group = ServerGroup.get({id: $stateParams.id});
    }
  ]
}

export { groupsView }