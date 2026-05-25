import {Link} from "react-router-dom";

function Navbar(){

  return (
    <div>
      <Link to="/">HOME </Link>
      <br/>
      <Link to="/about">ABOUT</Link>
      <br/>
      <Link to="/dashboard">DASHBOARD</Link>
      <br/>
      <Link to="/contact">CONTACT</Link>
    </div>
  )
}
export default Navbar;