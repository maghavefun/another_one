const ServerGroup = [
  '$resource',
  function($resource){
    return $resource('/server_groups/:id', {id: '@_id'}, {});
  }
]

export {ServerGroup}