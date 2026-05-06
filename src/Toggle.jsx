import { useState } from "react";

function Toggle() {

  const [show, setShow] = useState(false);

  return (
    <div>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <h1>Welcome Anushree</h1>}

    </div>
  );
}

export default Toggle;