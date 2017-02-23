var bio = {
	"name": "Craig Machell",
	"role": "Web Developer",
	"age": 27,
	"contacts": {
		"mobile": "0490124514",
		"location": "Santiago, Chile",
		"email": "craigmachell89@gmail.com",
		"github": "generalturok"
	},
  "welcomeMessage": "Australian guy living in Santiago, Chile.",
	"skills": ["HTML", "CSS", "JavaScript", "Python"],
  "biopic": "me.JPG"
};

var education = {
	"onlineCourses": [{
		"certificate": "Programming NanoDegree",
		"school": "Udacity",
		"dates": "2017",
		"url": "http://www.udacity.com"
	}, {
		"certificate": "Cert IV Marketing",
		"school": "Open Colleges",
		"dates": "2015-2017",
		"url": "http://www.opencolleges.edu.au"
	}, {
		"certificate": "Cert IV Small Business Management",
		"school": "Open Colleges",
		"dates": "2015-2017",
		"url": "http://www.opencolleges.edu.au"
	}],
	"schools": [{
		"certificate": "Cert III Carpentry",
		"school": "Holmesglen",
		"location": "Chadstone, Australia",
		"dates": "2008-2012",
		"url": "https://www.holmesglen.edu.au"
	}, {
		"certificate": "VCE",
		"school": "St.Bedes College",
		"location": "Mentone, Australia",
		"dates": "2001-2007",
		"url": "http://www.stbedes.catholic.edu.au/"
	}]
};

var work = {
	"jobs": [{
		"company": "Solid Carpentry Services",
		"location": "Melbourne, Australia",
		"title": "Carpenter",
		"dates": "2015-2016",
		"description": "Leading carpenter on high-end building sites \n such as: Luxury houses, Apartment buildings, Commercial and Domestic. \nI was in charge of daily operations, managing a group of workers \n(2-4 apprentices). My duties included: Planning the processes, managing \nthe team, co-ordinating work with other trades and being responsible \nfor the health and safety off my team."
	}, {
		"company": "Mainmark Uretek",
		"location": "Melbourne, Australia",
		"title": "Ground Engineer",
		"dates": "2014-2015",
		"description": "Raise & re-level subsided structures, Repair highways, roads & bridges, Strengthen foundations for mining rails & structures, Delicate levelling of Fine Arts & Heritage padogas, Relevelling industrial buildings & pavements, Soil stabilisation for construction"
	}]
};

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }

  return locationArray;
}
console.log(locationizer(work));

var projects = {
	"project": [{
		"title": ["JAM Website", "www.jampassistant.com"],
		"url": "http://www.jampassistant.com",
		"dates": "2016",
		"description": "Personal website for a business. Created using WordPress",
		"images": "http://res.cloudinary.com/dmwdnrpzy/image/upload/v1487706915/Screen_Shot_2017-02-21_at_4.54.30_pm_ogn5ck.png"
	}]
};
//display function
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedNameRole = (formattedName + formattedRole);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPic = HTMLbiopic.replace("%data%", bio.biopic);

	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").prepend(formattedNameRole);
	$("#header").append(formattedPic);
	$("#header").append(formattedWelcome);

	//for loop//

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillStart);
		for (var i = 0; i < 8; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}

	for (var info = 0; info < 4; info++) {
		$("#topContacts").append(formattedContactInfo[info]);
		$("#footerContacts").append(formattedContactInfo[info]);
	}
};

bio.display();
//work.display function

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

education.display();

//work display function
work.display = function() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedTitle);
		var formattedYears = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedYears);
		var formattedCity = HTMLworkLocation.replace("%data%", job.location);
		$(".work-entry:last").append(formattedCity);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);
	});
};

work.display();

//projects display function
projects.display = function() {
	projects.projects.forEach(function(p) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", p.title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", p.dates);
		$(".project-entry:last").append(formattedProjectDate);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", p.description);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", p.images);
		$(".project-entry:last").append(formattedProjectImage);
	});
};

projects.display();
//find the location and traffic on the website
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
//loc is location
  logClicks(x,y);
});

//adding a map
$("#mapDiv").append(googleMap);
