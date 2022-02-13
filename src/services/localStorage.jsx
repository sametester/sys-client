const TOKEN = 'token';
const getToken = () => localStorage.getItem(TOKEN);
const setToken = token => localStorage.setItem(TOKEN, token);
const removeToken = () => localStorage.removeItem(TOKEN);

const getRole = () => {
  if (getToken()) {
    return 'user';
  }
  return 'guest';
};

export { getToken, setToken, removeToken, getRole };
