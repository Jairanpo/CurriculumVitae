"use strict";

import "./sass/main.sass";
import header from "./header";
import experience from "./experience";
import skills from "./skills";

var html = /*html*/ `
  <!--------------> 
  
  ${header} 
  
  <!-------------->

  <div class="c-quadrants">
  <div class="t-left">
    ${experience}
  </div>
  <div class="t-right">
    ${skills}
  </div>
  <div class="b-right">
    ${experience}
  </div>
  <div class="b-right">
    ${experience}
  </div>
  
`;

var div = document.createElement("div");
div.innerHTML = html;
document.body.appendChild(div);
