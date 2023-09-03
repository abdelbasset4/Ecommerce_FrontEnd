import baseUrl from '../Api/BaseURL'

const useRefreshToken = () => {
  const refresh = async ()=>{
    const response = baseUrl.post('/api/v1/auth/refresh-token', {
      withCredentials: true
  })
  console.log(response.data.token);
  localStorage.setItem('token',response.data.token)
  return response.data.token;

  }
  return refresh
}

export default useRefreshToken