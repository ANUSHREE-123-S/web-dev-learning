import { useState,useEffect } from "react";
function App(){
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{

        async function fetchUsers() {
            try{
            const res=await fetch( "https://jsonplaceholder.typicode.com/users");
            const data=await res.json();
            setUsers(data);
            }catch(err){
                setError("somthing went wromg")
            }finally{
                setLoading(false);
            }
        }
        fetchUsers();
        
    },[]);
    if (loading){
        return <h1>loading.....</h1>
    }
    if (error){
        return <h1>{error}</h1>
    }
    return(
        <div>
            {users.map((user)=>(
                <h2 key={user.id}>{user.name}</h2>
            ))}
        </div>
    );
}
export default App;