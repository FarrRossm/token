class REgistr {
    id;
    name;
    username;
    password;
    // message;
    constructor(id, name,username, password ,message ) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        // this.message= message
    }

}

module.exports = REgistr;