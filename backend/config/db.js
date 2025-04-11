const mongoose=require('mongoose')
const dotenv=require('dotenv')

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        if(conn){
            console.log("connected to DataBase!")
        }
        
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
    
}

module.exports=connectDB