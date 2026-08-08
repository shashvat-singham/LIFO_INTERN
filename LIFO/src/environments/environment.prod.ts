export const environment = {
  production: true,
  // Served behind nginx in Docker, which proxies /api/v1 to the backend.
  apiUrl: '/api/v1/'
};
