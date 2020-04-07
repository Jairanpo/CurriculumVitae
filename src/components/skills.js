"use strict";
var icons = [
    require("../static/images/techologies/js.png"),
    require("../static/images/techologies/python.png"),
    require("../static/images/techologies/csharp.png"),
    require("../static/images/techologies/webpack.png"),
    require("../static/images/techologies/css.png"),
    require("../static/images/techologies/sass.png"),
    require("../static/images/techologies/html.png"),
    require("../static/images/techologies/vue.png"),
    require("../static/images/techologies/react.png"),
    require("../static/images/techologies/graphql.png"),
    require("../static/images/techologies/node.png"),
    require("../static/images/techologies/postgresql.png"),
    require("../static/images/techologies/bash.png"),
    require("../static/images/techologies/powershell.png"),
    require("../static/images/techologies/git.png"),
    require("../static/images/techologies/unity.png"),
    require("../static/images/techologies/houdini.png"),
    require("../static/images/techologies/blender.png"),
    require("../static/images/techologies/Qt.png"),
    require("../static/images/techologies/linux.png")
];

var skills = {
    title: '<div class="title">Skills</div>',
    description: `
    <div class="parragraph">
      For over seven years I been working with several programming languages,
      I always push myself to understand every subject at a deeper level in
      order to improve at my job and become a better problem solver.
    </div>
  `,
    technologies: [{
            name: "Javascript",
            frameworks: ["Webpack", "Vue", "React", "JQuery"]
        },
        {
            name: "Node",
            frameworks: ["Express", "Koa", "Knex"]
        },
        {
            name: "Python",
            frameworks: ["Qt", "PySide2", "Django"]
        },
        {
            name: "C#",
            frameworks: ["Dotnet", "Unity"]
        },
        {
            name: "C++",
            frameworks: ["Qt"]
        },
        {
            name: "SQL",
            frameworks: ["PostgreSQL", "MySQL"]
        },
        {
            name: "API",
            frameworks: ["GraphQL", "RestAPI"]
        },
        {
            name: "Git",
            frameworks: []
        },
        {
            name: "Command-line Shell",
            frameworks: ["Bash", "Powershell"]
        },
        {
            name: "PHP",
            frameworks: ["Wordpress"]
        },
        {
            name: "CSS | SASS",
            frameworks: ["Bootstrap"]
        },
        {
            name: "HTML",
            frameworks: []
        },
        {
            name: "Computer Graphics",
            frameworks: ["Houdini", "Blender", "Maya"]
        }
    ]
};

var code_samples = [{
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
];

var html = `
  <div class="skills">
    <div>${skills.title}</div>
    <div class="icons">${image_tag(icons)}</div>
    <div class="technologies">${technologies_html(skills.technologies)}</div>
  </div>
`;

module.exports = html;

/* ============================================================= */

function technologies_html(list_of_technologies) {
    var result = "";
    list_of_technologies.forEach(function format(technology) {
        result += `
    <div class="technology">
          ${technology.name}
      `;
        if (technology.frameworks.length > 0) {
            technology.frameworks.forEach(function format_frameworks(framework) {
                result += `
            <div class="framework">
              ${framework}
            </div>
          `;
            });
        }
        result += "</div>";
    });
    return result;
}

function image_tag(list_of_images) {
    var result = "";
    for (var i = 0; i < list_of_images.length; i++) {
        console.log("Current: ", list_of_images[i]);
        result += `<img class="icon" src="${list_of_images[i]}"/>`;
    }
    console.log("Tags: ", result);
    return result;
}