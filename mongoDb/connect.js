import mongoose from "mongoose";

const connectDb = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url
  
)
        .then(() => console.log('connected to mongoDB 🗄️'))
        .catch((err) => {
            console.error('failed to connect with mongo');
            console.error(err);
        });
};

export default connectDb;
