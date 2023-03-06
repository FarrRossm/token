const {Router} = require("express"); 
const {addUser, getUser, putUsers, deleteUser} = require("../controllers/admin")
const {addBook, getBook, putBook, deleteBook} = require("../controllers/book");
const { register } = require("../controllers/registr");
const auth = require("../middlewares/auth");
const router = Router();

router.post("/admin/add", addUser);
router.get("/admins", getUser);
router.put("/admins/:id", putUsers);
router.delete("/admins/:id", deleteUser).post("/book/add", addBook)
.get("/admins/", getBook)
.put("/admins/:id", putBook)
.delete("/admin/book/:id", deleteBook)
.post("/register",auth, register)

module.exports = router;