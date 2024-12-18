import mongoose from 'mongoose'

export default async function connectMongoDB(){
   try {
      // await mongoose.connect(process.env.MOMGODB_URL as string)
      mongoose.connect("mongodb+srv://young0622kim:gksksla1@cluster0.qunwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      console.log('Connected to MongoDB')
   } catch (error) {
      console.log(error)
   }
}