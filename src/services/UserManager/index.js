import axios from 'axios';
import getEnvironment from '../../config';

const addUser = async (env, baseUrl, email, password, passwordVerification) => {
  const {signUpUrl} = getEnvironment(env, baseUrl);

  try {
    const response = await axios.post(signUpUrl, {
      email: email,
      password: password,
      passwordVerification: passwordVerification,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export {addUser};
