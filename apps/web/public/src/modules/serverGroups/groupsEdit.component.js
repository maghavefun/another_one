const groupsEdit = {
  templateUrl: '/partials/serverGroups/edit',
  controller: [
    'ServerGroup',
    '$stateParams',
    '$state',
    'NotificationService',
    function(ServerGroup, $stateParams, $state, NotificationService) {
      if($stateParams.id) {
        this.server_group = ServerGroup.get({id: $stateParams.id})
      } else {
        this.server_group = new ServerGroup();
      }
      this.save = function() {
        this.server_group.$save(function() {
          NotificationService.showSuccess('Группа сохранена')
          $state.go('server_groups', {}, { reload: true })
        })
      }
      this.delete = function() {
        this.server_group.$delete(function() {
            NotificationService.showSuccess('Сервер удален')
            $state.go('server_groups', {}, { reload: true });
        })
      }
    }
  ]
}

export { groupsEdit }
