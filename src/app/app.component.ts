import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { account, ID } from '../lib/appwrite';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   me = {
    "name": "Ibrahim Ayed",
    "location": "Cairo, Egypt",
    "title": "Front-End Developer",
    "experience": "3+ years",
    "specializations": ["TypeScript", "JavaScript", "HTML", "CSS", "Sass", "Angular", "Git", "RxJs", "NgRx"],
    "objective": "Seeking a Front-End Developer position to leverage technical expertise in fast-paced environments.",
    "workExperience": [
      {
        "position": "Senior Front-End Developer",
        "company": "Integral Solutions",
        "location": "Muscat, Oman",
        "startDate": "January 2023",
        "responsibilities": [
          "Designed and developed a next-generation government service platform.",
          "Utilized Angular v16 and NgMaterial v16 for visual consistency.",
          "Architected front-end for scalability, maintainability, and performance.",
          "Integrated HERE Maps and secure payment solutions."
        ]
      },
      {
        "position": "Front-End Developer",
        "company": "Sherzal",
        "location": "Cairo, Egypt",
        "startDate": "July 2021",
        "endDate": "January 2023",
        "responsibilities": [
          "Developed B2B and B2C modules for large-scale tour operation companies.",
          "Enhanced performance using Angular OnPush strategies.",
          "Created a design system and integrated REST APIs.",
          "Managed front-end Git branches."
        ]
      },
      {
        "position": ".Net Full-Stack Web Developer Trainee",
        "institution": "ITI",
        "location": "Giza, Egypt",
        "duration": "April 2021 - July 2021",
        "programDetails": [
          "Intensive training in C#, OOP, JavaScript, Angular, T-SQL, and SQL DBMS.",
          "Developed console applications, interactive web applications, and managed databases."
        ]
      }
    ],
    "education": {
      "degree": "Bachelor of Information Technology",
      "institution": "Misr University for Science and Technology",
      "department": "Information Systems",
      "GPA": "3.22",
      "topicsCovered": [
        "Database Management",
        "Software Development",
        "System Analysis and Design",
        "Project Management",
        "Data Analytics"
      ]
    },
    "skills": {
      "proficientIn": [
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Sass",
        "Angular",
        "Git",
        "RxJs"
      ],
      "knowledgeableIn": ["NgRx", "Micro Front-End Architecture", "Design Patterns"],
      "otherSkills": [
        "Mobile-First Design",
        "Responsive Design",
        "Cross-Browser Testing and Debugging",
        "Agile Development",
        "Scrum"
      ],
      "certifications": [
        "VMware Fundamental Cloud Design & Architecture",
        "Huawei HCIA",
        "Amazon AWS Practitioner"
      ]
    },
    "interests": [
      "Certified Open Water Diver",
      "Sci-fi and fantasy movies and television",
      "Aspiring chef",
      "Exploring advancements in front-end web development"
    ],
    "website": "https://ibrahimayed.com"
  }
  
  title = 'portfolio';
  loggedInUser: any = null;
  email: string = '';
  password: string = '';
  name: string = '';

  async login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    this.loggedInUser = await account.get();
  }

  async register(email: string, password: string, name: string) {
    await account.create(ID.unique(), email, password, name);
    this.login(email, password);
  }

  async logout() {
    await account.deleteSession('current');
    this.loggedInUser = null;
  }

}
