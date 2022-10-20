export default {
    about: `My name is Marius Solheim and I am a front end web development student at Noroff Vocational School. I love programming and web development and I am currently in my second year, due to finish in March 2023. 
    Another passion of mine is music production. I am currently based in Kristiansand, Norway
    `,
    skills: `My current skillset includes HTML and CSS, JavaScript, Bootstrap, deploying Strapi and using it as a REST API. I have a bit of experience with JS frameworks as React and CSS pre-processors as SCSS. 
    The remainder of my study will focus on frontend frameworks in-depth, so I should have more experience by then. I like to follow the utility-first approach when designing my projects and have made some custom utility functions to aid the workflow.`,
    experience: `<table class="table experience text-white">
                    <tr>
                        <th>Year</th>
                        <th>Company</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td>Noroff Content Factory</td>
                        <td>Content writer Course Material</td>
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
}

export const projectText = {
    semesterProject: {
        heading: "Semester Project 2",
        subheading: "Sarif Industries e-commerce site",
        about: `The goal of the brief was to create an e-commerce website, being free to choose any theme. Well, I went for something a bit futuristic (for now at least...) - human cybernetic augmentations.

        Tech used: Bootstrap, SCSS, JavaScript, Strapi CMS`
    },
    projectExamOne: {
        heading: "Project Exam Year 1",
        subheading: "Band page for my group Eternal Blue",
        about: `This page was created with pure HTML, CSS and JavaScript and reflects my skill-level at that time. The inspiration for the theme was from the cyberpunk genre with the neon skylights.

        I used Wordpress as a headless CMS and did simple GET requests to fetch the public JSON data. I used the fetch() api with async / await to make the GET request.`
    },
    bayyinah: {
        heading: "Bayyinah BDK",
        subheading: "A freelance job for Bayinnah BDK",
        about: `This page was also created with pure HTML, CSS and JavaScript and was originally all static content. I had to revise the page when the client wanted to be able to create their own posts, which is a fair request.
        
        Luckily, I had just been through using Wordspress as a headless CMS at school, so I got to implement this functionality.`
    }
}