import axios from 'axios';
import getEnvironment from '../../config';

const logUserIn = async (env, email, password) => {
  const {loginUrl} = getEnvironment(env);

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
