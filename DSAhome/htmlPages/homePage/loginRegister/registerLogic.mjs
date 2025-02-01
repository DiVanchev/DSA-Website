import connectDB from './db.mjs';
import bcrypt from 'bcryptjs';


const registerUser = async (username, email, password) => {
    try {
        const pool = await connectDB();

        const checkEmail = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM Users WHERE email = @email');

        if (checkEmail.recordset.length > 0) {
            console.log("Email already exists!");
        } else {

            const hashedPassword = await hash(password, 10);

            const result = await pool.request()
                .input('username', sql.NVarChar, username)
                .input('email', sql.NVarChar, email)
                .input('password', sql.NVarChar, hashedPassword)
                .query('INSERT INTO Users (username, email, password) VALUES (@username, @email, @password)');

            console.log("Registration successful!");
        }
    } catch (err) {
        console.error("Registration error: ", err);
    }
};

export default registerUser;
