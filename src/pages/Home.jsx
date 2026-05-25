import { useNavigate } from "react-router-dom";
function home(){
  const navigate = useNavigate();
  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={()=>navigate("/login")}>
        go to login
      </button>
    </div>
  );
}

export default home;