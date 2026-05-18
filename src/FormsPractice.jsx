import {useState}from "react";
function App(){
  const[name,setName]=useState("");

  function handleSubmit(e){
    e.preventDefault();

    if(name===""){
      alert("Please enter name");
    }else{
      alert("Form submitted");
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
         type="text"
         value={name}
         onChange={(e)=>setName(e.target.value)}
         />
        <button type="submit">
          Submit
        </button>
    </form>
  );
}
export default App();