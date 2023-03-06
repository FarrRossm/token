const express = require("express");
const Joi = require("joi");
const fileUpload = require("express-fileupload");
const {v4: uuid } = require("uuid")
const app = express();
app.use(express.json());
app.use(fileUpload());
const Io = require("../utils/Io");
const {Book} = require("../models/book");
const Booksdatabase = new Io("./src/db/books.json");


// book POST
const addBook =  async(req, res) =>{
    try{
        const {  name, price, about,  author, count, user } = req.body;


        const books = await Booksdatabase.read();
        const id = (books[books.length - 1]?.id || 0) + 1;
    
        const newBook = Joi.object({
            
                // id:Joi.number().required(),
                name: Joi.string().required(),
                price:Joi.number().required(),
                about:Joi.string().required() ,
                author:Joi.string().required() ,
                count:Joi.number().required(),
                user:Joi.number().required() ,
                image:Joi.required()
            
                
        })

        const {error} = newBook.validate({ name, author, about, price, count,user });

        if (error) return res.status(400).json({message: error.message});
    
        image.mv(process.cwd() + "/uploads/" + image.name);
    
        
    
        const allBooks = books.length ? [...books, newBook] : [newBook];
    
        Booksdatabase.write(allBooks);

        // const history = new History(id, user, book, count, status, isDeleted, user)
        
        res.status(201).json({message: "Book Added"})
    

    }catch (error){
        console.log(error);
    }
}

// book GET

const getBook =   async(req, res)=>{
    try{
        const books = await Booksdatabase.read();
        const {id} = req.params
        const book = books[id -1]
        const allbooks = books.filter((el)=>{
           if(el.id == book.id){
               return el
           }
        })

       res.status(200).json( {books})
    } catch (error) {
        console.log(error.message)
    } 
}

// book PUT

const putBook =  async(req, res)=>{
    try {
        const {id} = req.params;
        const { name, price, about, author, count,   user} =req.body;
        const books = await Booksdatabase.read();
        const book = books[id - 1];  

        const allBooks = books.map((el)=>{
            if(el.id == book.id){
                book.name = name ? name : book.name;
                book.price = price? price: book.price;
                book.about = about? about : book.about;
                book.author = author? author: book.author;
                book.count = count? count: book.count;
                book.user = user? user: book.user;
            }

            return el;
        });


        Books.write(allBooks);

        res.status(200).json({message: "Updated"});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}

// book delete

const deleteBook =  async(req, res)=>{
    try {
        const {id} = req.params;
        const books = await Booksdatabase.read();
        const book = books[id-1];

        const allBooks = books``.map((el)=>{
            if(el.id == book.id){
                book.isDeleted = true;
            }

            return el;
        });


        Users.write(allUsers);

        res.status(200).json({message: "Deleted"});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = {addBook, getBook, putBook, deleteBook }