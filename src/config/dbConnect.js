import mongoose from "mongoose";

const user = process.env.MONGODB_USER
const password = process.env.MONGODB_PASSWORD

async function conectaNaDatabase() {
    mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.jtryg.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0`);

    return mongoose.connection;
}

export default conectaNaDatabase;
