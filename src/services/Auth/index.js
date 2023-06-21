import axios from 'axios';
import getEnvironment from '../../config';

const logUserIn = async (env, email, password, passwordVerification) => {
  const {loginUrl} = getEnvironment(env);

  try {
    // const response = await axios.post(signUpUrl, {
    //   email: email,
    //   password: password,
    //   passwordVerification: passwordVerification,
    // });

    // console.log(`${response.status} Created ${response.headers.location}`);
    console.log(`${loginUrl}`);
    // return response.data;
    return {id: 1, token: 'abc'};
  } catch (error) {
    throw error;
  }
};

export {logUserIn};
