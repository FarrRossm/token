class Order {
    id;
    cart;
    user;
    amount;
    isDeleted;
    constructor(id, cart, user, amount, isDeleted = false){
        this.id = id;
        this.cart = cart;
        this.user = user;
        this.amount = amount;
        this.isDeleted = isDeleted;
    }
}

module.exports = Order