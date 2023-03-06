require('dotenv').config();
const express = require("express");
const app = express();

const Io = require("../utils/Io");
const User = require("../models/user");
const Users = new Io("../db/users.json");

// 1. POST 2. GET  3.PUT 4.DELETE - USERS

// POST users

const addUser =  async(req, res) =>{
    const { name } = req.body;

    const users = await Users.read();
    const usersCount = (users[users.length - 1]?.id || 0) + 1;

    const newUser = new User(usersCount, name, true);
    const allUsers = users.length ? [...users, newUser] : [newUser];

    Users.write(allUsers);

    

    res.status(201).json({message: "User Created"})
};

// GET users

const getUser =  async(req, res) =>{
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

// users put

const putUsers =  async(req, res)=>{
    try {
        const {id} = req.params;
        const {isAdmin, money, name} =req.body;
        const users = await Users.read();
        const user = users[id-1];

        const allUsers = users.map((el)=>{
            if(el.id == user.id){
                user.name = name ? name : user.name;
                user.isAdmin = isAdmin? isAdmin: user.isAdmin;
                user.money = money? money : user.money;
            }

            return el;
        });


        Users.write(allUsers);

        res.status(200).json({message: "Updated"});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
};

// DELETE users

const deleteUser = async (req, res)=>{
    try {
        const {id} = req.params;
        const {isAdmin, money, name} =req.body;
        const users = await Users.read();
        const user = users[id-1];

        const allUsers = users.map((el)=>{
            if(el.id == user.id){
                user.isDeleted = true;
            }

            return el;
        });


        Users.write(allUsers);

        res.status(200).json({message: "Deleted"});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
};

module.exports = {addUser, getUser, putUsers, deleteUser};


