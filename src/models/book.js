class Book {
    id;
    name;
    price;
    about;
    author;
    count;
    user;
    image
    isDeleted;
    constructor(id, name, price, about, author, count,image,  isDeleted = false,user ) {
    this.id = id;
        this.name = name;
        this.price = price;
        this.about = about;
        this.author = author;
        this.count = count;
        this.isDeleted = isDeleted;
        this.user = user;
        this.image = image;
    }
}

module.exports = {Book}