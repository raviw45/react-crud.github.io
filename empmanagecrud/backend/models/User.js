const{sequelize,Sequelize}=require('../config/db');
const {STRING,INTEGER}=Sequelize.DataTypes;

const User=sequelize.define('user',{
    id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type:STRING,
        unique:true,
    },
    password:STRING
},{
    createdAt:false,
    updatedAt:false,
},{
    tableName:'users'
});

User.sync();
module.exports={User};