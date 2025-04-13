//Faulties

const facultycards = document.querySelectorAll(".facultycard");
const closefacdet = document.getElementById("closefacdet");
const backcover = document.getElementById("backcover");
const facultydetails = document.getElementById("facultydetails");

function Faculty (imgsrc, fullName, desc, dept, nickname, abbr){
    this.imgsrc = imgsrc,
    this.fullName = fullName,
    this.desc = desc,
    this.dept = dept,
    this.nickname = nickname,
    this.abbr = abbr
}

const seetsipet = new Faculty(
    "images/Engineering.jpeg",
    "School of Electrical Engineering and Technology / School of Infrastructure, Process Engineering and Technology",
    "This school focuses on producing skilled engineers and technologists through practical and theoretical training in various engineering disciplines. It includes the departments below.",
    "<li>Agricultural and Bioresources Engineering</li><li>Chemical Engineering</li><li>Civil Engineering</li><li>Computer Engineering</li><li>Electrical and Electronics Engineering</li><li>Mechanical Engineering</li><li>Mechatronics Engineering</li><li>Telecommunication Engineering</li><li>Material and Metallurgical Engineering</li><li>Petroleum and Gas Engineering</li>",
    "engineering",
    "seet"
)
const saat = new Faculty(
    "images/SAAT.jpeg",
    "School of Agriculture and Agricultural Technology",
    "This school is dedicated to advancing agricultural sciences and training students in modern agricultural techniques, research, and agribusiness. It includes the departments below.",
    "<li>Agricultural Economics and Extension Technology</li><li>Animal Production</li><li>Crop Production</li><li>Soil Science and Land Management</li><li>Water Resources, Aquaculture and Fisheries Technology</li><li>Food Science and Technology</li>",
    "agric",
    "saat"
)
const set = new Faculty(
    "images/Environmental.jpeg",
    "School of Environmental Technology",
    "This school offers programs centered on designing, managing, and conserving the built and natural environment. It includes the departments below.",
    "<li>Architecture</li><li>Building</li><li>Estate Management and Valuation</li><li>Quantity Surveying</li><li>Surveying and Geoinformatics</li><li>Urban and Regional Planning</li>",
    "environmental",
    "set"
)
const sict = new Faculty(
    "images/SICT.jpeg",
    "School of Information and Communication Technology",
    "This school trains students in computing, IT, and communication systems, focusing on innovation and practical problem-solving. It includes the departments below.",
    "<li>Computer Science</li><li>Cyber Security Science</li><li>Information and Media Technology</li>",
    "sict"
)
const sps = new Faculty(
    "images/SPS.jpeg",
    "School of Physical Sciences",
    "This school provides a solid foundation in the physical sciences, promoting research and analytical thinking in areas like chemistry, physics, and mathematics. It includes the departments below.",
    "<li>Chemistry</li><li>Geology</li><li>Geography</li><li>Mathematics</li><li>GeoPhysics</li><li>Statistics</li><li>Industrial Mathematics</li>",
    "sps"
)
const sls = new Faculty(
    "images/SLS2.jpeg",
    "School of Life Sciences",
    "This school focuses on the biological sciences, equipping students with knowledge and research skills related to living organisms and life processes. It includes the departments below.",
    "<li>Biochemistry</li><li>Biology</li><li>Microbiology</li><li>Plant Biology</li><li>Zoology</li>",
    "sls"
)
const sit = new Faculty(
    "images/SIT.jpeg",
    "School of Innovative Technology",
    "This school blends business, management, and entrepreneurship education with technology, preparing students to lead and innovate in various industries. It includes the departments below.",
    "<li>Entrepreneurship and Business Studies</li><li>Project Management Technology</li><li>Transport Management Technology</li>",
    "sit"
)
const schoolclinic = new Faculty(
    "images/SchoolClinic.jpeg",
    "School Clinic",
    "The School Clinic provides essential healthcare services to students, staff, and visitors. With well-trained medical professionals on-site, the clinic ensures that the campus community has access to basic medical care, emergency treatment, and health education. It is committed to promoting the well-being of everyone on campus, offering a safe and supportive environment for medical assistance.",
    "<li>There are no departments here</li>",
    "clinic"
)
const senate = new Faculty(
    "images/SenateBuilding.jpeg",
    "Senate Building",
    "The Senate Building is the administrative heart of FUT Minna, housing essential offices for university governance. It is where key academic and administrative decisions are made, including meetings with the University Senate. The building provides a hub for university leadership, promoting academic progress, policy discussions, and strategic planning for the institution's development.",
    "<li>There are no departments here</li>",
    "senate"
)
const entrepreneurship = new Faculty(
    "images/EntrepreneurshipCentre.jpeg",
    "Entrepreneurship Centre",
    "The Entrepreneurship Center at FUT Minna is designed to empower students and staff with the skills and resources necessary to venture into entrepreneurship. It provides training, mentorship, and networking opportunities for aspiring entrepreneurs, helping them to develop practical business ideas and innovations. The center fosters creativity, leadership, and business acumen, preparing students to thrive in the global business world.",
    "<li>There are no departments here</li>",
    "entrepreneurship"
)
const library = new Faculty(
    "images/Library.jpeg",
    "Library",
    "The University Library is a vital resource for academic excellence, offering a wide range of books, journals, e-resources, and study spaces to support research and learning. It provides access to both physical and digital materials, serving as a quiet and conducive environment for study and academic growth. The library is a key facility in supporting the intellectual needs of students and faculty members.",
    "<li>There are no departments here</li>",
    "library"
)
const lt2 = new Faculty(
    "images/LT2.jpeg",
    "Lecture Theatre (II)",
    "The Lecture Theatre is a central academic facility on campus, designed to accommodate large groups of students for lectures, seminars, and presentations. Equipped with modern teaching aids such as projectors and audio-visual systems, the lecture theatres provide an interactive and engaging learning environment that enhances the academic experience for students and faculty alike.",
    "<li>There are no departments here</li>",
    "lt2"
)
const its = new Faculty(
    "images/ITS.jpeg",
    "Information and Technology Services Center",
    "The Information and Technology Services (ITS) center is responsible for providing and maintaining the technological infrastructure across the campus. ITS supports students and staff by ensuring reliable internet connectivity, computer labs, and access to academic software. It also offers technical support and training, helping the university stay at the forefront of technological advancements.",
    "<li>There are no departments here</li>",
    "its"
)
const convosquare = new Faculty(
    "images/ConvoSquare.jpeg",
    "Convocation Square",
    "The Convocation Square is a large open space where significant events such as convocation ceremonies, cultural events, and social gatherings are held. This iconic area provides a venue for the university community to celebrate academic achievements and fosters a sense of unity and pride. The Convocation Square is also used for various outdoor activities and university-wide events.",
    "<li>There are no departments here</li>",
    "convo",
    "convosquare"
)
const sportscomplex = new Faculty(
    "images/SportComplex.jpeg",
    "Sports Complex",
    "The Sports Complex is dedicated to promoting physical fitness and well-being among students and staff. Equipped with modern sporting facilities such as football fields, basketball courts, tennis courts, and a gymnasium, it provides opportunities for recreational activities, physical education, and competitive sports. The complex encourages a balanced lifestyle, supporting both recreational and professional athletes on campus.",
    "<li>There are no departments here</li>",
    "sport complex",
    "sport"
)

const faculties = [senate, seetsipet, saat, set, sict, sps, sls, sit, schoolclinic, entrepreneurship, library, its, lt2, convosquare, sportscomplex]

facultycards.forEach(facultycard => {
    facultycard.addEventListener('click', event => {
        const img = facultycard.querySelector('img');
        const facdimg = facultydetails.querySelector('img');
        const facdh1 = facultydetails.querySelector('h1');
        const facdspan = facultydetails.querySelector('span');
        const facdul= facultydetails.querySelector('ul');

        for(let facultyObj of faculties){
            if(img.src.includes(facultyObj.imgsrc)){
                facdimg.src = facultyObj.imgsrc;
                facdh1.textContent = facultyObj.fullName;
                facdspan.textContent = facultyObj.desc;
                facdul.innerHTML = facultyObj.dept;
            }
        }
        
    })
})

function showCard(){    
    if(closefacdet.style.display === "none" && backcover.style.display === "none"){
        closefacdet.style.display = "block";
        backcover.style.display = "flex";
    }
    else{
        closefacdet.style.display = "none";
        backcover.style.display = "none";
    }
}

//Search
const search = document.getElementById("search").value.toLowerCase();
const searchoption = document.getElementById("searchoption");


function searchmap(){
    const search = document.getElementById("search").value.toLowerCase();

    for(let facultyObj of faculties){
        if(search.includes(facultyObj.nickname) || search.includes(facultyObj.fullName)){
            searchoption.textContent = facultyObj.fullName;
        }
        else if(search.includes(facultyObj.abbr)){
            searchoption.textContent = facultyObj.fullName;
        }
    }
}