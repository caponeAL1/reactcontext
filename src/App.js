import logo from './logo.svg';
import './App.css';
import UserInfo from './UserInfo';
import { createContext,useState } from 'react';

export const sharedData=createContext();

function App() {
  const [firstName,setFirstName] = useState('Unknown');
  const[lastName, setLastName]=useState('Unknown');
  const[agree,setAgree]=useState(false);

  const updateFirstName=(event) =>{
    setFirstName(event.target.value);
  }

  const updateLastName=(event) =>{
    setLastName(event.target.value);
  }

  const updateAgree=(event) =>{
    setAgree(event.target.checked);
    }
  return (
    <div className="App">
      
    First Name:<input type="text" value={firstName} onChange={updateFirstName}/><br/>
    Last name:  <input type="text"value={lastName}onChange={updateLastName}/>
    <input type="checkbox" onChange={updateAgree} /> Agree to T & C.
    <sharedData.Provider value={firstName+' '+lastName}>
      {agree? <UserInfo />:""}
      
      </sharedData.Provider>
    </div>
  );
}

export default App;
