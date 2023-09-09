const env = process.env.NODE_ENV

let BASE_URL
switch (env) {
  case 'development':
    BASE_URL = 'http://121.199.51.160:8080/'
    break
  case 'production':
    BASE_URL = 'http://121.199.51.160:8080/'
    break
}
export { BASE_URL }

export const DEFAULT_CONFIG = {
  baseURL: BASE_URL
}
