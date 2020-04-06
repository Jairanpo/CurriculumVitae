"use strict";

import "./sass/main.sass";
import header from "./components/header";
import experience from "./components/experience";
import skills from "./components/skills";
import education from "./components/education";
import code_samples from "./components/code_samples";

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
    ${education}
  </div>
  <div class="b-left">
  ${code_samples}
</div>
`;

var div = document.createElement("div");
div.innerHTML = html;
document.body.appendChild(div);
