import { useEffect, useState } from "react";
import { axiosInstance } from "../_base/axios-instance";
import { useNavigate } from "react-router-dom";
import useGlobalUser from "../../context/user/user.context";

export function useMessages() {
  const [message, setMessage] = useState('')
  const [,setUser] = useGlobalUser()
  const navigate = useNavigate()

  useEffect(() => {
    async function getMessages() {
      try {
        const response = await axiosInstance.get('/messages/private')
  
      setMessage(response.data.message)
      } catch(error) {
        if(error.response.status === 401) {
          setUser(null)
          localStorage.removeItem('user')
          navigate('/')
        }
      }
    }

    getMessages()
  })

  return { message }
}