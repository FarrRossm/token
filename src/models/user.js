class User{
    id;
    name;
    isAdmin;
    isDeleted;
    money;
    constructor(id, name, isAdmin = false, isDeleted = false, money = 0){
        this.id = id;
        this.name = name;
        this.isAdmin = isAdmin;
        this.isDeleted = isDeleted;
        this.money = money;
    }
}

module.exports = User