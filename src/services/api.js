import axios from 'axios';
import axiosRetry from 'axios-retry';
import authApiMap from './apiMap';
const request = axios.create({
  baseURL: process.env.VITE_BASE_API_URL,
  withCredentials: true,
});
axiosRetry(request, { retries: 3 });
const config = (method, url, data, header) => {
  const obj = {
    method,
    url,
  };
  if (data) {
    if (method === 'get') {
      obj['params'] = data;
    } else {
      obj['data'] = data;
    }
  }
  if (header) {
    obj['headers'] = header;
  }
  return obj;
};
const apiMap = { ...authApiMap(config) };
const api = async (apiName, apiParams) => {
  const configApi = apiMap[apiName](apiParams);
  try {
    const { data } = await request(configApi);
    if (apiName === 'login') {
      setCookie('JWT_TOKEN', data.data?.token, 0.5);
    } else if (apiName !== 'getLanguage') {
      const token = getCookie('JWT_TOKEN');
      setCookie('JWT_TOKEN', token, 0.5);
    }
    return {
      success: true,
      data,
    };
  } catch (error) {
    if (error.toJSON().message === 'Network Error') {
      alert('No internet connection');
    }
    if (error.response) {
      if (error.response.data.status === 401) {
        localStorage.removeItem('userInfo');
        document.cookie =
          `JWT_TOKEN` + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        location.href = '/401';
      }
    }
    return {
      success: false,
      data: error.response
        ? error
        : {
            response: {
              data: {
                message:
                  'ネットワーク通信品質が低下しています。通信環境を再確認するか、しばらくお待ちいただいてから再度接続してみてください。',
              },
            },
          },
    };
  }
};
function getCookie(cname) {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
function setCookie(cname, cValue, exDays) {
  const d = new Date();
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cValue + ';' + expires + ';path=/';
}

export default api;
