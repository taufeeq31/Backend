import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

connectDB();

/*
const app = express();

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error occurred : ",error);
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error){
        console.error(`Error connecting to MongoDB: ${error}`);
    }
})()
*/