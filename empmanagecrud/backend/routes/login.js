const { User } = require('../models/User');

const router=require('express').Router();

router.post('/',async (req,res)=>{
    const result=await User.findAll();
    res.json(result);
});

module.exports=router;