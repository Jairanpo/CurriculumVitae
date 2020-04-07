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
    Jair Anguiano
  </div>
  <!--<div class="language-btn">
    Spanish
  </div>-->
</div>
  <div class="personal-info">
    <div class="data">${personal.email}</div>
    <div class="data">${personal.cel}</div>
    <div class="data">${personal.location}</div>
    <div class="data"><a href=${personal.linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a></div>
    <div class="data"><a href=${personal.git} target="_blank" rel="noopener noreferrer">GitHub</a></div>
    <div class="data"><a href=${personal.artstation} target="_blank" rel="noopener noreferrer">Artstation</a></div>
  </div>
</div>
`;

module.exports = html;

/* ============================================================ */