import mongoose from 'mongoose';

export const connectDB = async () => {
    
  
    await mongoose.connect("mongodb+srv://cyrusnadar2007_db_user:Sahil2007@cluster0.mpiln21.mongodb.net/Expense")
        .then(() => console.log("DB CONNECTED SUCCESSFULLY"));
    
};
