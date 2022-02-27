
import { Div,
 } from "../StayledComponents/MainComponentStayled";

 import MainCardComponents from "./MainCardComponents";
 import React,{useState,useEffect} from 'react'


const MainComponent = (props) => {
  
 const user = props.api
 // console.log(user)

    return ( 
        <>

        <Div>

         {  user.map(element => <MainCardComponents key={element.id} content={element}></MainCardComponents> ) }
        </Div>
        </>
        );
}

export default MainComponent;


/*
  
        {
  reactapi.map(element => <li key={element.id}>{element.name}</li> ) 
}

   const [useData,setuseData] = useState('d')
    setuseData(props.api)
console.log(useData)
*/