const express = require('express');
const cors = require('cors');
const { profile } = require('console');
const app = express();
const port = 3000;

// routes
const resume = {
    Personal_Information: [
        {
            Name: 'Christian Derek S. Amplayo',
            Birthdate: '12/15/2001',
            Gender: 'Male',
            Contact_No: '09695306873',
            Address: 'Main Wjv Inn Lahug, Avc Salinas Dr, Apas, Cebu City 6000 Cebu',
        }
    ],
    About_Me: [
        {
            Description: "Hello! I'm Christian Derek S. Amplayo, passionate about Web Development. I enjoy creativity, problem-solving, and maintaining a balanced life. Whether designing, creating, or exploring, I thrive on challenges and value collaboration. Excited about making a positive impact, and looking forward to connecting with you!",
        }
    ],
    Skills: [
        {
            Name: 'Computer System Troubleshooting',
        },
        {
            Name: 'Operating System Management',
        },
        {
            Name: 'Cybersecurity Awareness Mentor',
        }
    ],
    Education: [ 
        {
            Institution: 'University of Southern Philippines Foundation (USPF), Cebu City, Philippines',
            Description: 'Bachelor of Science in Information Technology, Present, Expected Graduation: May 2025'
        },
        {
            Institution: 'System Technology Institute, Pasay City, Philippines',
            Description: "Associate's Degree in Information Technology, 2021-2023"
        },
        {
            Institution: 'AMA Computer College Makati, Makati City, Philippines',
            Description: "Senior High School Diploma, 2018-2021"
        },
        {
            Institution: 'Pasay City East High School, Pasay City, Philippines',
            Description: "Junior High School Diploma, 2014-2018"
        },
        {
            Institution: 'Marcela Marcelo Elementary School, Pasay City, Philippines',
            Description: "Elementary Diploma, 2012-2014"
        },
        {
            Institution: 'Kahit ano Elementary School, Pasay City, Philippines',
            Description: "Elementary Diploma, 2012-2014"
        },
        {
            Institution: 'Last Elementary School, Pasay City, Philippines',
            Description: "Elementary Diploma, 2012-2014"
        }
    ],
    Personal_References: [
        {
            Name: 'John Doe',
            Contact_No: '1234567890',
            Relationship: 'Friend',
        }
    ],
    Work_Experience: [
        {
            Company: 'ABC Tech Solutions',
            Job_Title: 'Senior Software Engineer',
            Description: 'Led a team of developers in the development of a new e-commerce platform. Implemented scalable solutions to improve website performance.',
            Start_Date: '2022',
            End_Date: '2024'
        },
        {
            Company: 'XYZ Cybersecurity Firm',
            Job_Title: 'Cybersecurity Analyst',
            Description: 'Conducted vulnerability assessments and penetration testing on client networks. Developed and implemented security policies to mitigate risks.',
            Start_Date: '2020',
            End_Date: '2022'  
        },
        {
            Company: 'Global Marketing Agency',
            Job_Title: 'Web Developer',
            Description: 'Designed and developed responsive websites for clients using HTML, CSS, and JavaScript. Collaborated with design and marketing teams to create visually appealing interfaces.',
            Start_Date: '2018',
            End_Date: '2020'
        },
        {
            Company: 'Kahit ano Agency',
            Job_Title: 'Web Developer',
            Description: 'Designed and developed responsive websites for clients using HTML, CSS, and JavaScript. Collaborated with design and marketing teams to create visually appealing interfaces.',
            Start_Date: '2018',
            End_Date: '2020'
        }
    ],  
};

app.use(cors());
app.get('/', (req, res) => res.json(resume));

app.listen(port, () => {console.log(`Server Running on port ${port}!`)});
