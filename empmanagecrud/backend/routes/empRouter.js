const { Emp } = require('../models/emps');

const router=require('express').Router();



router.get('/',async(req,res)=>{
    try {
        const result=await Emp.findAll();
        res.json(result);
    } catch (error) {
        res.status(500).send('server error');
    }
});


router.post('/',async(req,res)=>{
    try {
        const body=req.body;
        const result=await Emp.create(body);
        res.json(result);
    } catch (error) {
        res.status(500).send('Emp not added. Server Error!!')
    }
});





router.put('/',async(req,res)=>{
    try {
        const body=req.body;
        const updatedObject={
            name:body.name,
            email:body.email,
            address:body.address,
            department:body.department,
            birth:body.birth,
            education:body.education
        };
        const result=await Emp.update(updatedObject,{
            where:{
                id:body.id,
            }
        });
        res.json(result);
    } catch (error) {
        res.status(500).send('Not updated. Server Error!!!');
    }
});



router.delete('/:id',async(req,res)=>{
    try {
        const did=req.params.id;
        const result=await Emp.destroy({
            where:{
                id:did
            }
        });
        res.json(result);
    } catch (error) {
        res.status(500).send('Not deleted. Server Error!!!!');
    }
});


module.exports=router;


