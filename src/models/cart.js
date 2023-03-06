class Cart{
    id;
    book;
    user;
    count;
    amount;
    isDeleted;
    constructor(id, book, user, count, amount, isDeleted = false){
        this.id = id;
        this.book = book;
        this.user = user;
        this.count = count;
        this.amount = amount;
        this.isDeleted = isDeleted;
    }
}

module.exports = Cart