class History {
    id;
    user;
    book;
    count;
    status;
    date;
    isDeleted;
    constructor(
        id, 
        user, 
        book, 
        count, 
        status, 
        isDeleted = false,
         date = new Date()
         ) {
            this.id = id;
            this.user = user;
            this.book = book;
            this.count = count;
            this.status = status;
            this.isDeleted = isDeleted;
            this.date = date
         }
}

module.exports = History