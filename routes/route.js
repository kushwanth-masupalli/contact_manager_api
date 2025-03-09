const express = require('express');
const router = express.Router();
const {getcontacts,createcontact,updatecontact,getcontact,deletecontact}  = require('../controllers/controller');


router.route('/').get(getcontacts).post(createcontact);
console.log("in routes");


router.route('/:id').get(getcontact).put(updatecontact).delete(deletecontact);


module.exports = router;