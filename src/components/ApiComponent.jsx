
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import MainComponent from "./MainComponent"

const ApiComponent = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    }
  
    useEffect(() => {
      fetchUsers()
    }, [])
  
    // console.log(users)

    return (  
        <React.Fragment>              
        <MainComponent api={users} />
        </React.Fragment>
    );
}
 
export default ApiComponent;
