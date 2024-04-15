const serversEdit = {
  templateUrl: '/partials/servers/edit',
  controller:[
      'Server',
      'ServerGroup',
      '$stateParams',
      '$state',
      'NotificationService',
      function(Server, ServerGroup, $stateParams, $state, NotificationService){
          this.server_groups = ServerGroup.query();
          this.server_group = ServerGroup.get({id: $stateParams.id})
          if($stateParams.id){
              this.server = Server.get({id:$stateParams.id});
          }else{
              this.server = new Server();
          }
          this.save = function(){
              this.server.$save(function(){
                  NotificationService.showSuccess('Сервер сохранен')
                  $state.go('servers',{},{reload: true});
              })
          }
          this.delete = function() {
            this.server.$delete(function() {
                NotificationService.showSuccess('Сервер удален')
                $state.go('servers', {}, {reload: true});
            })
          }
  }]
}

export {serversEdit}
