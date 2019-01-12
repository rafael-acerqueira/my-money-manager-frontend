const domain = process.env.DOMAIN ? process.env.DOMAIN : 'localhost:3003'
export default { 
  API_URL: `http://${domain}/api`, 
  OAPI_URL: `http://${domain}/oapi`
}