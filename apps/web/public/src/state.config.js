stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function stateConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/servers');
  $stateProvider
      .state({
        name: 'servers',
        url: '/servers',
        component: 'serversList',
      })
      .state({
        name: 'servers.view',
        url: '/view/:id',
        component: 'serversView',
      })
      .state({
        name: 'servers.edit',
        url: '/edit/:id',
        component: 'serversEdit',
      })
      .state({
        name: 'servers.create',
        url: '/create',
        component: 'serversEdit',
      })
      .state({
        name: 'journals',
        url: '/journals',
        component: 'journalsMain',
      })
      .state({
        name: 'charts',
        url: '/charts',
        component: 'chartsMain',
      })
      .state({
        name: 'server_groups',
        url: '/server_groups',
        component: 'groupsList',
      })
      .state({
        name: 'server_groups.view',
        url: 'server_groups/view/:id',
        component: 'groupsView',
      })
      .state({
        name: 'server_groups.create',
        url: '/server_groups/create',
        component: 'groupsEdit',
      })
      .state({
        name: 'server_groups.edit',
        url: '/server_groups/edit:id',
        component: 'groupsEdit',
      })
}
