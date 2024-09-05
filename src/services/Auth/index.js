import axios from 'axios';
import getEnvironment from '../../config';

const logUserIn = async (env, baseUrl, email, password) => {
  const {loginUrl} = getEnvironment(env, baseUrl);

  try {
    const response = await axios.post(loginUrl, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {logUserIn};
