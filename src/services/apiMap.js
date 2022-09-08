const api = (config) => ({
  get: () => config('get', 'api/'),
  delete: (id) =>
    config('delete', `api/${id}`, {
      _Token: {
        key: window.CSRF_TOKEN,
      },
    }),
  post: (payload) =>
    config('post', 'api/', {
      _Token: {
        key: window.CSRF_TOKEN,
      },
      result: payload,
    }),
});
export default api;
