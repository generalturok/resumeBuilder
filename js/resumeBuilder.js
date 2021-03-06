var bio = {
    "name": "Craig Machell",
    "role": "Web Developer",
    "contacts": {
        "mobile": "0400012097",
        "email": "craigmachell89@gmail.com",
        "github": "generalturok",
        "location": "Santiago, Chile"
    },
    "welcomeMessage": "Australian guy living in Chile.",
    "skills": ["HTML", "CSS", "JavaScript", "Python"],
    "biopic": ["http://res.cloudinary.com/dmwdnrpzy/image/upload/v1487889622/me_cxwqwf.jpg"]
};

var education = {
    "schools": [{
            "name": "Holmesglen Institute",
            "location": "Chadstone, Melbourne",
            "degree": "Cert III Carpentry",
            "majors": ["Carpentry"],
            "dates": "2008-2012",
            "url": "https://www.holmesglen.edu.au"
        },
        {
            "name": "St.Bedes College",
            "location": "Mentone, Australia",
            "dates": "2001-2007",
            "degree": "VCE",
            "majors": ["High School"],
            "url": "http://www.stbedes.catholic.edu.au/"
        }
    ],

    "onlineCourses": [{
            "title": "Programming NanoDegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.udacity.com"
        },
        {
            "title": "Cert IV Marketing",
            "school": "Open Colleges",
            "dates": "2015-2017",
            "url": "http://www.opencolleges.edu.au"
        },
        {
            "title": "Cert IV Small Business Management",
            "school": "Open Colleges",
            "dates": "2015-2017",
            "url": "http://www.opencolleges.edu.au"
        }
    ],
};

var work = {
    "jobs": [{
            "employer": "Solid Carpentry Services",
            "title": "Carpenter",
            "location": "Melbourne, Australia",
            "dates": "2015-2016",
            "description": "Leading carpenter on high-end building sites \n such as: Luxury houses, Apartment buildings, Commercial and Domestic. \nI was in charge of daily operations, managing a group of workers \n(2-4 apprentices). My duties included: Planning the processes, managing \nthe team, co-ordinating work with other trades and being responsible \nfor the health and safety off my team."
        },
        {
            "employer": "Mainmark Uretek",
            "title": "Ground Engineer",
            "location": "Melbourne, Australia",
            "dates": "2014-2015",
            "description": "Raise & re-level subsided structures, Repair highways, roads & bridges, Strengthen foundations for mining rails & structures, Delicate levelling of Fine Arts & Heritage padogas, Relevelling industrial buildings & pavements, Soil stabilisation for construction"
        }
    ]
};

var projects = {
    "projects": [{
        "title": "JAM Website",
        "dates": "2016",
        "description": "Personal website for a business. Created using WordPress",
        "images": ["http://res.cloudinary.com/dmwdnrpzy/image/upload/v1487706915/Screen_Shot_2017-02-21_at_4.54.30_pm_ogn5ck.png"]
    }]
};

//display function
bio.display = function() {
    //formatted Name bio
    var formattedName = HTMLheaderName.replace("%data%", bio.name),
        formattedRole = HTMLheaderRole.replace("%data%", bio.role),
        formattedPhoto = HTMLbioPic.replace("%data%", bio.biopic),
        formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    //formatted Contacts Info
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
        formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
        formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    //prepend & append into header
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedRole);
    $("#header").append(formattedPhoto);
    $("#header").append(formattedWelcomeMsg);
    //prepend footer

    $("#topContacts, #footerContacts").append(formattedEmail, formattedGithub, formattedLocation);
    //for loop//
    $("#header").append(HTMLskillsStart)
    for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
};
//education function
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedSchoolName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDate);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedURL = HTMLonlineURL.replace("%data%", school.url);
        $(".education-entry:last").append(formattedURL);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(internet) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", internet.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", internet.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDate = HTMLonlineDates.replace("%data%", internet.dates);
        $(".education-entry:last").append(formattedDate);
        var formattedURL = HTMLonlineURL.replace("%data%", internet.url);
        $(".education-entry:last").append(formattedURL);
    });
};

//work display function
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedYears = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedYears);
        var formattedCity = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedCity);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

//projects display function
projects.display = function() {
    projects.projects.forEach(function(projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.dates);
        $(".project-entry:last").append(formattedProjectDate);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });
          }
        });
};


//find the location and traffic on the website
//$(document).click(function(loc) {
//var x = loc.pageX;
//var y = loc.pageY;
//logClicks(x, y);
//});
//optional internalize name feature
//$("#main").append(internationalizeButton);

//display for all 4 categories
bio.display();
education.display();
work.display();
projects.display();
//adding a map
$("#mapDiv").append(googleMap);
