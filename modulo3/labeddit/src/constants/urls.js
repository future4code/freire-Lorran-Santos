export const BASE_URL = 'https://labeddit.herokuapp.com';
export const token = {
  headers: {
    Authorization: localStorage.getItem('token'),
  },
};
