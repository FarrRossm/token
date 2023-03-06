const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const registration = require("../db/registration.json");
const Io = require("../utils/Io");
const Registr = new Io("src/db/registration.json") ;
const REgistr =  require("../models/registration"); 


const register = async (req, res) => {
  const {username, password, name} = req.body;
  const registers = await Registr.read()
  const schema = Joi.object({
    username: Joi.string().alphanum().min(5).max(32).required(),
    name: Joi.string().min(5).max(32).required(),
    password: Joi.string().min(5).required(),
  });

  const {error} = schema.validate({username, name, password});
  if (error) return res.status(400).json({message: error.message});

  const hashedPass = await bcrypt.hash(password, 12);
  const id = (registers[registers.length - 1]?.id || 0) + 1

  const token = jwt.sign({id: id},  "jwtSecretKey", {expiresIn: '30m'});
  const newRegister = new REgistr(id,username, hashedPass, name )
  const allregister = registers.length ? [...registers,newRegister] : [newRegister]

  Registr.write(allregister)
  res.status(201).json({username:username,password:password, name:name, message: token});
};

module.exports = {
  register,
};

const getRegister =  async(req, res) =>{
  try{
      const users = await Users.read();

      const admins =  users.filter((user) =>{
          if (user.isAdmin) {
              return user;
          }
      });

     res.status(200).json( {admins})
  } catch (error) {
      console.log(error.message)
  }
};