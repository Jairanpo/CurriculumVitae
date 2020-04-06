"use strict";

var code_samples = {
  title: "Code samples",
  list_of_samples: [
    {
      link: "https://github.com/Jairanpo/CGToolkits/",
      description: `
      This is the full proyect for the software created for the generation
      of computer graphics content. From filesystem organization, video
      transcoding and toolkits using APIs that software like Houdini, Blender 
      and Maya share.
    `
    },
    {
      link: "https://github.com/Jairanpo/OolBrainFrontend",
      description: `
      Nuxt.js configuration for a site that contain the pipeline
      documentation for a VFX Studio.
    `
    },
    {
      link: "https://github.com/Jairanpo/CGAgnostics",
      description: `
      A set of UI creation utilities that allow me to quickly create
      apps with Python and Qt.
    `
    },
    {
      link: "https://github.com/Jairanpo/CurriculumVitae",
      description: `
      Showcase of a the quick configuration of Webpack I did for this
      CV.
    `
    }
  ]
};

var html = `
  <div class="code_samples">
    <div class="title">${code_samples.title}</div>
    <div class="codes">${code_samples_html(code_samples.list_of_samples)}</div>
  </div>
`;

module.exports = html;

/* ===================================================================== */

function code_samples_html(list_of_codes) {
  var result = "";
  list_of_codes.forEach(function create(code) {
    result += `
      <div class="code">
        <div class="link"><a href=${code.link} target="_blank" rel="noopener noreferrer">${code.link}</a></div>
        <div class="description">${code.description}</div>
      </div>
    `;
  });
  return result;
}
