"use strict";

var content = {
    experience: {
        title: {
            en: `<div class="title">Experience</div>`,
            sp: "Experiencía"
        },
        places: [{
                place: `<div class="company">
                Ool Digital: VFX Studio
                </div>`,

                position: `
                <div class="position">
                    Technical Director & SysAdmin
                </div>
            `,
                description: `<div class="parragraph">
                    I was in charge of creating the data flow among
                    all the deparments involved on the creation of CG
                    content as well as hardware maintenance, network
                    security, comunication and documentation.
                        <ul style="margin:0">
                            <li><a href=https://ooldigital.com  target="_blank" rel="noopener noreferrer"/>Ool Digital</a></li>
                            <li><a href=https://oolbrain.netlify.app target="_blank" rel="noopener noreferrer"/>Ool Brain</a></li>
                        </ul>
                    </div>
                `,
                tecnologies: [
                    "Python",
                    "Javascript",
                    "Webpack",
                    "Qt",
                    "MikroTik",
                    "Houdini",
                    "Maya",
                    "Redshift"
                ]
            },

            {
                place: `<div class="company">
                Freelancer: 
                </div>`,

                position: `
                <div class="position">
                    Software Developer & CG Artist
                </div>
            `,
                description: `<div class="parragraph">
                    Since the begining of my carrer I have been working on several projects
                    ranging from web|app|videogames development and as a CG artist. <br>
                    <ul style="margin:0">
                    <li><a href=https://laepocafilm.com target="_blank" rel="noopener noreferrer"/>La Epoca</a></li> 
                    <li><a href=https://www.youtube.com/watch?v=RevcANUqVBg target="_blank" rel="noopener noreferrer">Ghost Apocalypse</a></li>
                    <li><a href=https://josuemastroianni.com/ target="_blank" rel="noopener noreferrer">Josue Mastroianni</a></li>
                    </ul>
                    </div>
                `,
                tecnologies: [
                    "Unity",
                    "Python",
                    "Javascript",
                    "Webpack",
                    "Vue",
                    "React",
                    "Houdini",
                    "Blender",
                    "Wordpress"
                ]
            },

            {
                place: `
                    <div class="company">
                        Talent Network: Technology Events
                    </div>`,
                position: `
                    <div class="position">
                        Fullstack Developer
                    </div>
                `,
                description: `<div class="parragraph">
                    I developed the backend side of a RestAPI service,
                    and deployed the database designed for it. 
                    This service provides information about articles, 
                    courses and events related with technology as well
                    as services like authentication, registration, security.<br>
                    On the frontend side, I helped the team with the frontend
                    architecture, client side requests and security protocols.
                    <ul style="margin:0">
                     <li><a href=https://apps.apple.com/us/app/talent-republic/id1450277102 target="_blank" rel="noopener noreferrer">Republic</a></li>
                    </ul>
                    </div>
                `,
                tecnologies: [
                    "Python",
                    "Javascript",
                    "Houdini",
                    "Webpack",
                    "Qt",
                    "MikroTik",
                    "Maya",
                    "Redshift"
                ]
            },

            {
                place: `
                    <div class="company">
                        Huevocartoon: CG Film
                    </div>`,
                position: `
                    <div class="position">
                        Layout Technical Director
                    </div>
                `,
                description: `
                <div class="parragraph">
                    <ul style="margin-top:0">
                        <li>Creating tools for the cinematography team and using several CG and VFX APIs.</li>
                        <li>Cloth simulation system on top of nCloth system to improve delivery times for the VFX department.</li>
                        <li>Use of linear algebra to solve problems in 3D environments.</li>
                        <li>Verify and automate data transference from the cinematography department.</li>
                        <li>Automatic rigging with focus on performance to help the staging and ease the task of analazing the flow of the editing process.</li>
                        <li>Stage and camera artist.</li>
                        <li>Environment concept artist & Graphic designer.</li>
                        <li><a href=https://www.youtube.com/watch?v=iF6hiytfto0 target="_blank" rel="noopener noreferrer">Trailer</a></li>
                    <ul>
                </div>
                `,
                tecnologies: [
                    "Python",
                    "Qt",
                    "JSON",
                    "Mel",
                    "Maya",
                    "Softimage",
                    "Photoshop",
                    "Illustrator"
                ]
            },
            {
                place: `
                    <div class="company">
                        Metacube: CG Film
                    </div>`,
                position: `
                    <div class="position">
                        Layout and Technical Artist
                    </div>
                `,
                description: `<div class="parragraph">
                    I collaborated as an artist working on the ciematography for the film Salma's Big Wish,
                    also developed scripts that automate processes for the team.
                    <ul style="margin:0">
                     <li><a href=https://www.youtube.com/watch?v=Mrmf6DsNzqA target="_blank" rel="noopener noreferrer">Salma's Big Wish</a></li>
                    </ul>
                    </div>
                `,
                tecnologies: ["Python", "Maya", "Hiero"]
            }
        ]
    }
};

var html = /*html*/ `
  <div class="experiences">
    ${content.experience.title.en}
    ${experience(content.experience.places)}
  </div>
`;

module.exports = html;

/* ====================================================================================== */

function experience(list_of_places) {
    var result = "";

    list_of_places.forEach(function append(element) {
        result += `<div class="experience">
                ${element.place}
                ${element.position}
                ${element.description}
                ${tecnologies(element.tecnologies, "div", "tech")}
            </div>
        `;
    });
    return result;
}

function tecnologies(list_of_strings, tag, class_name) {
    var result = '<div class="technologies">';
    list_of_strings.forEach(function(element, index) {
        if (index != list_of_strings.length - 1) {
            result += `
            <${tag} class=\"${class_name}\">
            ${element + "&nbsp|&nbsp"}
            </${tag}>
        `;
        } else {
            result += `
            <${tag} class=${class_name}>
            ${element}
            </${tag}>
        `;
        }
    });
    result += "</div>";
    return result;
}