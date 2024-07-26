const { PetsModel } = require('../../model');
const { ServiceHandler } = require('../../_utils/handler');

const create = async (req) => {
  const pets = await PetsModel.create(req.body)

  if (!pets)
    return {
      success: false,
      message: 'something went wrong while creating user'
    }

  return {
    success: true,
    message: 'user successfully created',
    data: pets

  }

}

const Get = async req => {


  const pets = await PetsModel.find()

  if (!pets.length)
    return {
      success: false,
      message: 'Invalid email or password'
    }

  return {
    success: true,
    message: 'user successfully loged in',
    data: pets
  }

}

module.exports = {
  create: (req, res) => ServiceHandler(create, req, res),
  Get: (req, res) => ServiceHandler(Get, req, res),
}