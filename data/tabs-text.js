export default {
  about: `My name is Marius Solheim and I am a front end web development student at Noroff Vocational School. I love programming and web development and I am currently in my second and final year, due to finish in March 2023. 
    Another passion of mine is creating music and have my own project along with my wife, called <a target="_blank" href="https://eternal-blue.net">Eternal Blue.</a> 
    I am currently based in Kristiansand, Norway
    `,
  skills: `
    <table class="table text-white">
        <tr>
            <th>Web Development</th>
            <th>Computer Science</th>
        </tr>
        <tr>
            <td>HTML/CSS/JavaScript</td>
            <td>Python with Linux</td>
        </tr>
        <tr>
            <td>TypeScript, SCSS and ReactJS</td>
            <td>Virtualization using Virtual Box</td>
        </tr>
        <tr>
            <td>DevOps (Git)</td>
            <td>Basic Bash and AWK</td>
        </tr>
        <tr>
            <td>Adobe XD (protypes and wireframes)</td>
            <td>Packet sniffers (Wireshark and Brim)</td>
        </tr>
    </table> `,
  experience: `<table class="table experience text-white">
                    <tr>
                        <th>Year</th>
                        <th>Company</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td>Noroff Content Factory</td>
                        <td>Content Writer and Technical Proofreader</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td>Noroff Vocational</td>
                        <td>Student Mentor</td>
                    </tr>
                    <tr>
                        <td>2018</td>
                        <td>IKEA Customer Center</td>
                        <td>Customer Advisor</td>
                    </tr>
                    <tr>
                        <td>2017</td>
                        <td>Gear4Music, UK</td>
                        <td>Customer Advisor</td>
                    </tr>
                </table> 
                `,
  education: `<table class="table education text-white">
                    <tr>
                        <th>Year</th>
                        <th>Programme</th>
                        <th>School</th>
                    </tr>
                    <tr>
                        <td>2021 - ongoing</td>
                        <td>Frontend development 2 years</td>
                        <td>Noroff Vocational School</td>
                    </tr>
                    <tr>
                        <td>2014 - 2017</td>
                        <td>Music Teacher, B. Ed</td>
                        <td>University College of Innlandet</td>
                    </tr>
                </table> `,
  projects: `<table class="table projects text-white">
                    <tr>
                        <th>Project Name</th>
                        <th>Date Finished</th>
                        <th></th>
                    </tr>
                    <tr>
                    <td>Semester Project 2</td>
                        <td>29/09/2022</td>
                        <td><button class="btn btn-secondary quick-view" id="semester-project">View</button></td>
                    </tr>
                    <tr>
                        <td>Project Exam 1</td>
                        <td>26/02/2022</td>
                        <td><button class="btn btn-primary quick-view" id="project-exam-1">View</button></td>
                    </tr>
                    <tr>
                        <td>Bayinnah BDK</td>
                        <td>14/01/2022</td>
                        <td><button class="btn btn-primary quick-view" id="project-bayyinah">View</button></td>
                    </tr>
                </table> 
                `,
};

export const projectText = {
  semesterProject: {
    heading: "E-commerce site",
    subheading: "Semester Project 2",
    about: `The goal of the brief was to create an e-commerce website, being free to choose any theme. Well, I went for something a bit futuristic (for now at least...) - human cybernetic augmentations.

        Tech used: Bootstrap, SCSS, JavaScript, Strapi CMS`,
  },
  projectExamOne: {
    heading: "A band page",
    subheading: "Project Exam Year 1",
    about: `This is The inspiration for the theme was from the cyberpunk genre with the neon skylights.

        Tech used: HTML, CSS, JavaScript, Wordpress REST API.`,
  },
  bayyinah: {
    heading: "A simple website",
    subheading: "Bayyinah BDK",
    about: `A fairly simple website made for a non-profit organization and my first paid job.
        
        Tech used: HTML, CSS, JavaScript, Wordpress REST API.`,
  },
};
