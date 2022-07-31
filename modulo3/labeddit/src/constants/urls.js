// export const BASE_URL = 'https://labeddit.herokuapp.com';
export const BASE_URL = 'https://labeddit-2.herokuapp.com';
export const token = {
  headers: {
    Authorization: localStorage.getItem('token'),
  },
};
