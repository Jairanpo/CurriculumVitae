var content = {
    experience: {
        title: {
            en: `<div class="title">Experience</div>`,
            sp: "Experiencía"
        },
        places: [

            {
                place: `<div class="company">
                Ool Digital: VFX Studio
                </div>`,

                position: `
                <div class="position">
                    Tecnical Director & SysAdmin
                </div>
            `,
                description: `<div class="parragraph">
                    I was in charge of creating the data flow among
                    all the deparments involved on the creation of CG
                    content as well as hardware maintenance, network
                    security, comunication and documentation.
                        <ul style="margin:0">
                            <li><a href=https://ooldigital.com/>Ool Digital</a></li>
                            <li><a href=https://oolbrain.netlify.app/>Ool Brain</a></li>
                        </ul>
                    </div>
                `,
                tecnologies: ["Python", "Javascript", "Webpack", "Qt", "MikroTik", "Houdini", "Maya", "Redshift"]
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
                    Since the beguining of my carrer I have been working on very distinct projects that
                    range from web|app|videogames development and as a CG artist. <br>
                    <ul style="margin:0">
                    <li><a href=https://laepocafilm.com/>La Epoca</a></li> 
                    <li><a href=https://www.youtube.com/watch?v=RevcANUqVBg>Ghost Apocalypse</a></li>
                    <li><a href=https://josuemastroianni.com/store/>Josue Mastroianni</a></li>
                    </ul>
                    </div>
                `,
                tecnologies: ["Python", "Javascript", "Webpack", "Qt", "Mikrotic", "Houdini", "Maya", "Redshift"]
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
                    I develop the backend side of a RestAPI service,
                    and deploy the database designed for it. 
                    This service provide information about articles, 
                    courses and events related with technology as well
                    as services like authentication, registration, security.<br>
                    On the frontend side, I help the team with the frontend
                    architecture, client side requests and security protocols.
                    <ul style="margin:0">
                     <li><a href=https://apps.apple.com/us/app/talent-republic/id1450277102>Republic</a></li>
                    </ul>
                    </div>
                `,
                tecnologies: ["Python", "Javascript", "Webpack", "Qt", "Mikrotic", "Houdini", "Maya", "Redshift"]
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
                        <li>Use of linear algebra to solve problems in the 3D environments.</li>
                        <li>Verify and automate data transference from the cinematography department.</li>
                        <li>Automatic rigging with focus on performance to help the staging and ease the task of analazing the
                        <li>flow of the editing process.</li>
                        <li>Stage and camera artist.</li>
                        <li>Environment concept artist & Graphic designer.</li>
                    <ul>
                </div>
                `,
                tecnologies: ["Python", "Qt", "JSON", "Mel", "Maya", "Softimage", "Photoshop", "Illustrator"]
            },
        ]
    }
}


var html = /*html*/ `
<div class="main">

    <div class="c-quadrants">
        <div class="t-left">
            <div class="content">
                ${content.experience.title.en}
                ${experience(content.experience.places)}
            </div>
        </div>
        <div class="t-right">
            <div class="content">
                ${content.experience.title.en}
                ${experience(content.experience.places)}
            </div>
        </div>

        <div class="c-name">
        <div class="language-btn">
            English
        </div>
            <div class="circle">
                <div class="name">
                    Jair <br> Anguiano
                </div>
            </div>
        <div class="language-btn">
            Spanish
        </div>
        </div>

        <div class="c-quadrants">
        <div class="b-left">
            <div class="content">
            ${content.experience.title.en}
            ${experience(content.experience.places)}
            </div>
        </div>
        <div class="b-right">
            <div class="content">
                ${content.experience.title.en}
                ${experience(content.experience.places)}
            </div>
        </div>
    </div>

</div>
`


function experience(list_of_places) {
    result = ''

    list_of_places.forEach(function append(element) {
        result +=
            `<div class="place">
                ${element.place}
                ${element.position}
                ${element.description}
                ${tecnologies(element.tecnologies, "div", "tecnologies")}
            </div>
        `
    })
    return result
}


function tecnologies(list_of_strings, tag, class_name) {
    result = '<div class="horizontal-list">'
    list_of_strings.forEach(function(element, index) {
        if (index != list_of_strings.length - 1) {
            result += `
            <${tag} class=\"${class_name}\">
            ${element + '&nbsp|&nbsp'}
            </${tag}>
        `
        } else {
            result += `
            <${tag} class=${class_name}>
            ${element}
            </${tag}>
        `
        }
    });
    result += '</div>'
    return result
}



console.log(html)
var div = document.createElement("div")
div.innerHTML = html
module.exports = div