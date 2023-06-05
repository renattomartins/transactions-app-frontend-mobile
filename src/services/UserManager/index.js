import axios from 'axios';
import getEnvironment from '../../config';

const addUser = async (env, email, password, passwordVerification) => {
  const {signUpUrl} = getEnvironment(env);

  try {
    const response = await axios.post(signUpUrl, {
      //@todo Verify proper headers
      email: email,
      password: password,
      passwordVerification: passwordVerification,
    });

    console.log(`${response.status} Created ${response.headers.location}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {addUser};
