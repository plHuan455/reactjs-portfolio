export const storeToken = (token: string) => {
  if(!token) return;
  localStorage.setItem('token', token);
}

export const getToken = () => {
  return localStorage.getItem('token');
}