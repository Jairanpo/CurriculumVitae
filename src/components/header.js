var personal = {
  name: "Jair Anguiano",
  email: "jairanpo@gmail.com",
  cel: "+52 3325366927",
  location: "Guadalajara. Jalisco. Mexico",
  linkedin: "https://linkedin.com/in/jair-anguiano/",
  git: "https://github.com/Jairanpo",
  artstation: "https://artstation.com/jairanpo"
};

var html = /*html*/ `
<div class="header">
  <!--<div class="language-btn">
    English
  </div>-->
  <div class="circle">
    <div class="name">
    Jair<br>Anguiano
  </div>
  <!--<div class="language-btn">
    Spanish
  </div>-->
</div>
  <div class="personal-info">
    <div class="email">${personal.email}</div>
    <div class="cel">${personal.cel}</div>
    <div class="location">${personal.location}</div>
    <div class="git"><a href=${personal.linkedin} target="_blank" rel="noopener noreferrer">${personal.linkedin}</a></div>
    <div class="git"><a href=${personal.git} target="_blank" rel="noopener noreferrer">${personal.git}</a></div>
    <div class="artstation"><a href=${personal.artstation} target="_blank" rel="noopener noreferrer">${personal.artstation}</a></div>
  </div>
</div>
`;

module.exports = html;

/* ============================================================ */
