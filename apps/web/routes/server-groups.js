const express = require('express')
const { ServerGroup } = require('../../../models');

const serverGroupsRouter = express.Router();


serverGroupsRouter.get('/', async (req, res) => {
  try {
    console.log('get groups')
    const serverGroups = await ServerGroup.find({})
    res.json(serverGroups)
  } catch (error) {
    console.log(error)
    res.json([])
  }
});

serverGroupsRouter.get('/:id', async (req, res) => {
  try {
    console.log('get server group with id: ',req.params.id)
    const serverGroup = await ServerGroup.findById(req.params.id);

    res.json(serverGroup);
  } catch (error) {
    console.log(error);
    res.json({});
  }
});

serverGroupsRouter.post('/', async (req, res) => {
  try {
    console.log('create new server group: ', JSON.stringify(req.body));
    const serverGroup = await ServerGroup.create(req.body);

    res.json(serverGroup)
  } catch (error) {
    console.log(error);
    res.json({});
  }
})

serverGroupsRouter.post('/:id', async (req, res) => {
  try {
    console.log('updating server group with id: ', req.params.id);
    const updatedServerGroup = await ServerGroup
    .findByIdAndUpdate({_id: req.params.id }, req.body)
    if(updatedServerGroup) {
      res.json(updatedServerGroup)
    } else {
      res.send({})
    }
  } catch (error) {
    console.log(
      'error on updating server group data with id: ',
      req.params.id,
      error);
    res.json({})
  }
})

serverGroupsRouter.delete('/:id', async (req, res) => {
  try {
    console.log('deleting server group with id:', req.params.id)
    await ServerGroup.deleteOne({_id: req.params.id});
    res.status(200).send('')
  } catch (error) {
    console.log(
      'error on deleting serverGroup with id: ',
      req.params.id,
      error);
    res.json({})
  }
})

module.exports = {
  serverGroupsRouter
}