import mongoose from "mongoose";

// at start i set to isFalse to track the database connection
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connect')
        return;
    }
// if we are not connected we can try to establish the connection.
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompts',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        // if the above code run successfully then:
        isConnected = true

        console.log('MongoDB connected')

    } catch (error) {
        console.log(error)
    }
    
}

