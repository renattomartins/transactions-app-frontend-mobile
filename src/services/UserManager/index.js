import axios from 'axios';
// import getEnv

const handleSignUp = async (env, email, password, confirmPassword) => {
  // Make call to API
  await axios({
    method: 'post',
    baseURL: 'http://localhost:3000/',
    url: '/users',
    data: {
      email: email,
      password: password,
      passwordVerification: confirmPassword,
    },
  });
  // @todo
  // Return response
  // Catch error
  // Make test
};

export {handleSignUp};
