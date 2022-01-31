import React from "react";
function Day4(){

    

return (
    <div>
     <h4>Current count: <span id="count">0</span></h4>
<div class="container">
  <button onclick="document.getElementById('count').innerText--">Decrement</button>
  <button onclick="document.getElementById('count').innerText++">Increment</button>
</div>
    </div>
  );
}


export default Day4;