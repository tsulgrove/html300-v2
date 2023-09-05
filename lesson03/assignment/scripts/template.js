// User data to make buisiness cards with
const data = `[
    {
      "name": "Paolo Maldini",
      "jobTitle": "Front End Developer",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "linkedInUrl": "paolo.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Node", "Express"
      ]
    },
    {
      "name": "Barbara Bonansea",
      "jobTitle": "Software Engineer",
      "company": "Excellence in the Cloud",
      "experience": "12 years",
      "school": "University of Southern California",
      "major": "Computer Science",
      "email": "barbara@example.com",
      "linkedInUrl": "barbara.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "JavaScript", "C", "Go"
      ]
    },
    {
      "name": "Javier Hernandez",
      "jobTitle": "User Experience Engineer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "Seattle University",
      "major": "Performing Arts",
      "email": "javier@example.com",
      "linkedInUrl": "javier.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS"
      ]
    },
    {
      "name": "Maribel Dominguez",
      "jobTitle": "Front End Engineer",
      "company": "Bits and Bytes",
      "experience": "6 years",
      "school": "University of Washington",
      "major": "Mechanical Engineering",
      "email": "maribel@example.com",
      "linkedInUrl": "maribel.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
      ]
    }
   ]`

//Import Json data
const dataParsed = JSON.parse(data);

//Loop through each person
dataParsed.forEach(function(person) {
    // Create list for each buisiness card
    const list = document.createElement('ul')
    //Build html and add in user information
    list.innerHTML = 
    `
    <div class="card">
        <div class="profile-pic">
            <img src="img/headshot.jpg" alt="Front">
            <h1>${person.name}</h1>
            <p>${person.jobTitle}</p>
        </div>
        <div class="profile-info">
            <ul> 
                <p><b>Company:</b> ${person.company}</p>
                <p><b>Experience:</b> ${person.experience}</p>
                <p><b>School:</b> ${person.school}</p>
                <p><b>Major:</b> ${person.major}</p>
                <p><b>Email:</b> ${person.email}</p>
                <li class="linkedin">
                    <img src="img/linkedin.svg" alt="">
                    ${person.linkedInUrl}
                </li>
            </ul>
        </div>
    </div>
    `
    //Append the list straight to the body tag
    document.body.append(list)
});