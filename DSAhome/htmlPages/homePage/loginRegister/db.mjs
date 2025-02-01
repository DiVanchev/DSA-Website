import { connect } from 'mssql';

const config = {
    user: 'root',
    password: '',
    server: 'mitkos-pc\\SQLEXPRESS',
    database: 'data structures & algorithms',
    options: {
        encrypt: true,
        trustServerCertificate: true 
    }
};

const connectDB = async () => {
    try {
        const pool = await connect(config);
        console.log("Connected to the database");
        return pool;
    } catch (err) {
        console.error("Database connection failed: ", err);
        throw err;
    }
};

export default connectDB;
