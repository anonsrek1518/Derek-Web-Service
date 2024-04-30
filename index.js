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
                Languages: ['html', 'JavaScript', 'React'],
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
                Company: 'ABC Inc.',
                Job_Title: 'Front-end Developer',
                Start_Date: '01/01/2020',
                End_Date: '01/01/2021',
            }
        ],  
    };
app.use(cors());
app.get('/', (req, res) => res.json(resume));

app.listen(port, () => {console.log(`Server Running on port ${port}!`)});

