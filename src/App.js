import { useState } from "react";
import Card from "./Components/Card";
import useFetch from "./Hook/useFetch";
function App() {
  const { data, error, loading } = useFetch("   https://api.github.com/users");
  const [search,setSearch] = useState('')

  const searchUser = (e) =>{
    setSearch(e.target.value)
  }
  return (
    <center>
      <div className="App">
        <div className="navbar">
          <input type="text" onChange={searchUser} placeholder="🔎 Enter User Name" />
        </div>

        <div className="container">
          {
          loading ? <h2>Loading.....</h2> 
          :
          data.map((val) => {
            if(val.login.includes(search.toLowerCase()))
            return <Card data={val} />

          } 
          )}
        </div>
      </div>
    </center>
  );
}

export default App;
