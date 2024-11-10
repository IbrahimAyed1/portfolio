import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule,MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatChipsModule,
],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  resume = {
    name: 'Ibrahim Ayed',
    title: 'Front-End Developer',
    location: 'Cairo, Egypt',
    objective: 'Seeking a Front-End Developer position to leverage technical expertise in fast-paced environments.',
    workExperience: [
      {
        position: 'Senior Front-End Developer',
        company: 'Integral Solutions',
        location: 'Muscat, Oman',
        startDate: 'January 2023',
        responsibilities: [
          'Designed and developed a next-generation government service platform.',
          'Utilized Angular v16 and NgMaterial v16 for visual consistency.',
          'Architected front-end for scalability, maintainability, and performance.',
          'Integrated HERE Maps and secure payment solutions.'
        ]
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
          'Managed front-end Git branches.'
        ]
      }
    ],
    education: {
      degree: 'Bachelor of Information Technology',
      institution: 'Misr University for Science and Technology',
      department: 'Information Systems',
      GPA: '3.22'
    },
    skills: {
      proficientIn: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Sass', 'Angular', 'Git', 'RxJs']
    }
  };
  constructor(){
    
  }

}
