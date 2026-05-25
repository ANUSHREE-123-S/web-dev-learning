import { useNavigate,useLocation } from "react-router-dom";

function Dashboard(){
  const navigate=useNavigate();
  const location=useLocation();

  const isLoggedIn=true;

  if(!isLoggedIn){
    return <h1>Access Denied</h1>
  }

  const userName=location.state?.name;

  const handellogout=()=>{
    navigate("/login");
  };

  return(
    <div>
      <h1>Dashboard</h1>
      <h2>WELCOME {username}</h2>

      <button onClick={handellogout}>
        logout
      </button>
    </div>
  );
}
export default Dashboard;