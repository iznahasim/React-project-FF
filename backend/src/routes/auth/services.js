const { UserModel, BrandModel, ConnectionModel, AgencyModel } = require('../../model');
const { ServiceHandler } = require('../../_utils/handler');
const { guard } = require('../../_utils');
const { ConnectionTypes } = require('../../_enums');
const { Roles } = require('../../_enums/user');

const Register = async (req) => {
  const { username, email, password, role } = req.body
  const user = await UserModel.create({
    roles: [role],
    password: guard.generatePassHash(password),
    assign_password: password,
    username,
    email,
  })

  if (!user)
    return {
      success: false,
      message: 'something went wrong while creating user'
    }

  const token = guard.generateToken({ _id: user._id, email: user.email }, '1d')

  return {
    success: true,
    message: 'user successfully created',
    data: { ...user, token }
  }

}

const Login = async req => {
  const { email, password } = req.body

  const user = await UserModel.findOne({ email })

  if (!user)
    return {
      success: false,
      message: 'Invalid email or password'
    }

  if (!guard.verifyPass(password, user.password))
    return {
      success: false,
      message: 'Invalid email or password'
    }

  const token = guard.generateToken({ _id: user._id, email: user.email }, '1d')

  return {
    success: true,
    message: 'user successfully loged in',
    data: { token, ...user.toJSON() },
  }

}

module.exports = {
  Register: (req, res) => ServiceHandler(Register, req, res),
  Login: (req, res) => ServiceHandler(Login, req, res),
}