import mongoose from 'mongoose';

const connectToMongoDB = async () =>{
    try{
            await mongoose.connect(process.env.MONGO_DB_URI,)
            console.log("Connceted to MongoDB Database");
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export default connectToMongoDB;