import axios from 'axios';

const addUser = async (env, email, password, confirmPassword) => {
  try {
    const response = await axios.post(
      '/users',
      {
        email: email,
        password: password,
        passwordVerification: confirmPassword,
      },
      {
        //@todo User env param
        baseURL: 'http://localhost:3000/',
      },
    );
    console.log(
      `HTTP Status: ${response.status} | Location: ${response.headers.location}`,
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {addUser};
