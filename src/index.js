import React from "react";
import ReactDOM from "react-dom";

const name = "Yaseen";

let comp = (
  <div id="mydiv">
    <p>Create by {name}</p>
    <p>Copyright {new Date().getFullYear()}</p>
    <p contentEditable="true" spellCheck="false">
      Mumbo Jumbo
    </p>
  </div>
);

var callmeback = function () {
  let divtest = document.createElement("div");
  divtest.innerHTML = "new div";
  document.getElementById("mydiv").appendChild(divtest);
};
ReactDOM.render(comp, document.getElementById("root"), callmeback);
