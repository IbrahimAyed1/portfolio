import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  resume = {
    name: 'Ibrahim Ayed',
    title: 'Front-End Developer',
    location: 'Cairo, Egypt',
    objective:
      'Experienced Front End Developer with 3 years of experience in Software Development. Highly skilled in TS,JS, HTML, CSS,Sass Angular, Git, RxJs, and knowledge of NgRx. Demonstrated ability to work independently and collaboratively in a fast-paced environment. Seeking a Front-End Developer position to utilize my technical knowledge and experience..',
    workExperience: [
      {
        position: 'Front-End Developer',
        company: 'Integral Solutions',
        location: 'Muscat, Oman',
        startDate: 'January 2023',
        responsibilities: [
          'Designed and developed a next-generation government service platform.',
          'Utilized Angular v16 and NgMaterial v16 for visual consistency.',
          'Architected front-end for scalability, maintainability, and performance.',
          'Integrated HERE Maps and secure payment solutions.',
          'Collaborated closely with the backend development team to ensure seamless integration of front-end components with APIs, optimizing data flow and application performance.',
        ],
      },
      {
        position: 'Front-End Developer',
        company: 'Sherzal',
        location: 'Cairo, Egypt',
        startDate: 'July 2021',
        endDate: 'January 2023',
        responsibilities: [
          'Developed B2B and B2C modules for large-scale tour operation companies.',
          'Enhanced performance using Angular OnPush strategies.',
          'Created a design system and integrated REST APIs.',
          'Managed front-end Git branches.',
          'Expertly managed Front End GIT branches, leveraging the power of AWS CodeCommit as the dedicated platform for this crucial task.',
          'Throughout my career, I have actively participated in numerous sub-projects, consistently prioritizing the creation of seamless user experiences. By leveraging my skills and expertise, I have successfully enhanced usability and accessibility in each of these initiatives.',
        ],
      },
    ],
    education: {
      degree: 'Bachelor of Information Technology',
      institution: 'Misr University for Science and Technology',
      department: 'Information Systems',
      GPA: '3.22',
    },
    skills: {
      proficientIn: [
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Sass',
        'Angular',
        'Git',
        'RxJs',
        'RESTAPIs'
      ],
    },
  };
  displayedName = '';
  displayedTitle = '';
  displayedObjective = '';
  [key: string]: any; // Add this line

  constructor() {}

  ngOnInit(): void {
    this.typewriterEffect(this.resume.name, 'displayedName', 100);
    this.typewriterEffect(this.resume.title, 'displayedTitle', 100);
    this.typewriterEffect(this.resume.objective, 'displayedObjective', 50);
  }

  typewriterEffect(text: string, target: string, speed: number): void {
    let index = 0;
    const interval = setInterval(() => {
      this[target] += text.charAt(index);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);
  }

}
