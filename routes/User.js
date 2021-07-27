const express = require('express');
const { createUser, loginUser, getUsers, updateUserInfo, getSingleUser,deleteUser } = require('../controllers/User')
const verifyToken = require('../middlewares/verifyToken')
const router = express();

router.post('/signup', createUser);
router.post('/login', verifyToken, loginUser);
router.get('/', getUsers)
router.get('/:id', getSingleUser)
router.put('/update/:id',verifyToken, updateUserInfo)
router.delete('/delete/:id',verifyToken, deleteUser)


module.exports = router;