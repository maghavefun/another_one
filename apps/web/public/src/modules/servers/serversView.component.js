
const serversView = {
  templateUrl: '/partials/servers/view',
  controller:[
      'Server',
      '$stateParams',
      'NotificationService',
      'Charts',
      function(Server, $stateParams, NotificationService, Charts){
          this.server = Server.get({id: $stateParams.id});
          this.charts = Charts.serverCharts({serverId: $stateParams.id});
          this.start = function(){
              if(confirm('Вы хотите запустить сервер?')){
                  this.server.$start(function(){
                      NotificationService.showSuccess('Сервер запущен')
                  })
              }
          }
          this.stop = function(){
              if(confirm('Вы хотите остановить сервер?')){
                  this.server.$stop(function(){
                      NotificationService.showSuccess('Сервер остановлен')
                  })
              }
          }
          this.restart = function() {
              if(confirm('Вы хотите перезапустить сервер?')) {
                this.server.$restart(function(){
                     NotificationService.showSuccess('Сервер перезапущен')
                })
              }
          }
  }]
}

export {serversView}
