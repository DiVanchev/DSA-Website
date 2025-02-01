import loginUser from './login.mjs';
import registerUser from './register.mjs'; 


const loginEmail = 'user@example.com';
const loginPassword = 'userpassword';
loginUser(loginEmail, loginPassword);


const regUsername = 'newuser';
const regEmail = 'newuser@example.com';
const regPassword = 'newpassword';
registerUser(regUsername, regEmail, regPassword);