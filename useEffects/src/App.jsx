  import UserList from './components/UserList'
  import { useState,useEffect} from 'react'


  function App() {

  const [state, setState] = useState({data: [],loading: false,error: null
    });
  const [fetchTrigger, setFetchTrigger]= useState(0)
  useEffect(() => {
  async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  setState(   
 {  
  ...state,
data: data,  
} )
  console.log(data);
    }
    fetchUsers();
  }, [fetchTrigger]);
  return (
      <>
  <UserList users={state.data}/>
  <button onClick={() => setFetchTrigger(fetchTrigger + 1)}>
    Fetch Data
  </button>
        
      </>
    )
  }

  export default App
