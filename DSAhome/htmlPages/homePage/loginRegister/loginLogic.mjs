import connectDB from './db.mjs'; 
import bcrypt from 'bcryptjs';


const loginUser = async (email, password) => {
    try {
        const pool = await connectDB();

        
        const result = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM Users WHERE email = @email');

        if (result.recordset.length > 0) {
            const user = result.recordset[0];

            const isValid = await compare(password, user.password);

            if (isValid) {
                console.log("Login successful!");
            } else {
                console.log("Incorrect password!");
            }
        } else {
            console.log("No user found with that email!");
        }
    } catch (err) {
        console.error("Login error: ", err);
    }
};

export default loginUser;
