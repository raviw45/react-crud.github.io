const { INTEGER } = require('sequelize');
const {sequelize,Sequelize}=require('../config/db');

const {STRING}=Sequelize.DataTypes;

const Emp=sequelize.define('emps',{
    id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:STRING,
    email:{
        type:STRING,
        unique:true,
    },
    address:STRING,
    department:STRING,
    birth:STRING,
    education:STRING
},{
    createdAt:false,
    updatedAt:false,
},{
    tableName:'emps'
});

Emp.sync();

module.exports={Emp};