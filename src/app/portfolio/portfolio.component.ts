import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Project = {
  projectName: string;
  projectImage: string[];
  skills: string[];
  skillImages: string[];
  githublink: string;
  livetestlink: string;
  description: string;
};

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'], // Geändert: styleUrl -> styleUrls
})
export class PortfolioComponent {
  hoveredProject: number | null = null;
  selectedProject: any = null; // Das ausgewählte Projekt für das Popup
  showModal: boolean = false; // Steuerung, ob das Modal angezeigt wird
  activeCategory: 'frontend' | 'backend' = 'frontend';

  constructor(public translateService: TranslateService) {}

  FrontendProjects: Project[] = [
    {
      projectName: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      projectImage: ['./assets/img/join.jpg'],
      skillImages: [], // Initial leer
      githublink: 'https://github.com/MarcoAngermann/join-project',
      livetestlink: 'http://join.maximilian-lackmann.com/index.html',
      description: 'portfolio-modal.description1',
    },
    {
      projectName: 'El Pollo Loco',
      skills: ['HTML', 'CSS', 'JavaScript'],
      projectImage: ['./assets/img/elpolloloco.jpg'],
      skillImages: [], // Initial leer
      githublink: 'https://github.com/MaxLackmann/el-pollo-loco',
      livetestlink: 'http://el-pollo-loco.maximilian-lackmann.com/index.html',
      description: 'portfolio-modal.description2',
    },
    {
      projectName: 'DaBubble',
      skills: ['Angular', 'Firebase', 'TypeScript'],
      projectImage: ['./assets/img/dabubble.jpg'],
      skillImages: [], // Initial leer
      githublink: '',
      livetestlink: '',
      description: 'portfolio-modal.description3',
    },
  ];

  Backendprojects: Project[] = [
    {
      projectName: 'Join-Django',
      skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      projectImage: ['./assets/img/join.jpg'],
      skillImages: [], // Initial leer
      githublink: 'https://github.com/MaxLackmann/new_backend_join',
      livetestlink: 'http://django-backend.maximilian-lackmann.com/index.html',
      description: 'portfolio-modal.description1',
    },
    {
      projectName: 'Coderr',
      skills: ['DRF', 'Django'],
      projectImage: ['./assets/img/coderr.jpg'],
      skillImages: [], // Initial leer
      githublink: 'https://github.com/MaxLackmann/coderr-backend',
      livetestlink: 'http://coderr.maximilian-lackmann.com/index.html',
      description: 'portfolio-modal.description2',
    },
    {
      projectName: 'Videoflix',
      skills: ['Python', 'DRF', 'Django', 'Linux'],
      projectImage: ['./assets/img/videoflix.jpg'],
      skillImages: [], // Initial leer
      githublink: 'https://github.com/MaxLackmann/new-videoflix_backend',
      livetestlink: 'https://videoflix.maximilian-lackmann.com/index.html',
      description: 'portfolio-modal.description3',
    },
  ];

  setHoveredProject(index: number): void {
    this.hoveredProject = index;
  }

  clearHoveredProject(): void {
    this.hoveredProject = null; // Setze den Hover-Status zurück
  }

  get projects() {
    return this.activeCategory === 'frontend'
      ? this.FrontendProjects
      : this.Backendprojects;
  }

  toggleCategory(): void {
    this.activeCategory =
      this.activeCategory === 'frontend' ? 'backend' : 'frontend';
  }

  // Funktion zum Öffnen des Modals mit den Projektinformationen
  openModal(project: any, index: number) {
    this.selectedProject = { ...project, index: index };
    this.addSkillImages(this.selectedProject);
    this.showModal = true;

    document.body.style.overflow = 'hidden';
  }

  // Funktion zum Schließen des Modals
  closeModal() {
    this.showModal = false;
    this.selectedProject = null;

    document.body.style.overflow = 'auto';
  }

  // Funktion um das nächste Projekt anzuzeigen
  nextProject() {
    let nextIndex = this.selectedProject.index + 1;

    // Wenn der Index die Anzahl der Projekte übersteigt, gehe zurück zu 0
    if (nextIndex >= this.projects.length) {
      nextIndex = 0;
    }

    // Öffne das Modal mit dem neuen Projekt
    this.openModal(this.projects[nextIndex], nextIndex);
  }

  // Funktion um Bildpfade für die Skills automatisch zu generieren
  addSkillImages(project: any) {
    const assetPath = './assets/popup-window/';
    project.skillImages = project.skills.map(
      (skill: string) => `${assetPath}${skill.toLowerCase()}.svg`
    );
  }

  closeModalOnClickOutside(event: MouseEvent) {
    // Überprüfen, ob das Ziel des Klicks die Modal-Hintergrundschicht (Overlay) ist
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.closeModal();
    }
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 500,
      offset: 0,
      easing: 'ease-in-out',
    });
  }
}
