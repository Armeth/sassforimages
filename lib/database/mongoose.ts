import mongoose, {Mongoose} from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    con: Mongoose | null;
    promise: Promise<Mongoose> | null;
}