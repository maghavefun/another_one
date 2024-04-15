const groupsList = {
  templateUrl: '/partials/serverGroups/groupsList',
  controller: [
    'ServerGroup',
    function(ServerGroup) {
      this.server_groups = ServerGroup.query();
    }
  ],
}

export { groupsList }