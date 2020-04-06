"use strict";

var education = {
  title: "Education",
  courses: [
    {
      title:
        "Technical Support Fundamentals. Certificate earned at Tuesday, July 23, 2019 4:36 AM GMT",
      link: "https://coursera.org/share/0043ca93cf2c4e2e43a819235e339e72",
      academy: "Google",
      location: "Coursera.com"
    },
    {
      title:
        "The Bits and Bytes of Computer Networking. Certificate earned at Tuesday, July 23, 2019 4:36 AM GMT",
      link: "https://coursera.org/share/eb426a1e622626b1bc9e6a378ffec2df",
      academy: "Google",
      location: "Coursera.com"
    },
    {
      title:
        "Operating Systems and You: Becoming a Power User. Certificate earned at Saturday, September 14, 2019 5:48 PM GMT",
      link: "https://coursera.org/share/e993a83fa423d16ad7745f6aa3696a9a",
      academy: "Google",
      location: "Coursera.com"
    },
    {
      title:
        "System Administration and IT Infrastructure Services. Certificate earned at Wednesday, November 13, 2019 10:36 PM GMT",
      link: "https://coursera.org/share/da628e9dc52003d936b5f52a9ec0090f",
      academy: "Google",
      location: "Coursera.com"
    },
    {
      title:
        "IT Security: Defense against the digital dark arts. Certificate earned at Monday, January 20, 2020 11:19 PM GMT",
      link: "https://coursera.org/share/ffb842a802ac0f9f64b812fac15576f2",
      academy: "Google",
      location: "Coursera.com"
    },
    {
      title: "Animation",
      link: "http://uartesdigitales.edu.mx/",
      academy: "Universidad de Artes Digitales",
      location: "Guadalajara. Jalisco. Mexico"
    }
  ]
};

var html = /*html*/ `
  <div class="education">
    <div class="title">${education.title}</div>
    <div class="courses">${education_html(education.courses)}</div>
  </div>
`;

module.exports = html;

/* ======================================================================== */

function education_html(list_of_courses) {
  var result = "";

  list_of_courses.forEach(function create(course) {
    result += /*html*/ `
    <div class="course">
      <div class="title">${course.title}
        <div class="academy">${course.academy}</div>
        <div class="location">${course.location}</div>
        <div class="link"><a href=${course.link} target="_blank" rel="noopener noreferrer">${course.link}</a></div>
      </div>
    </div>
    `;
  });
  return result;
}
