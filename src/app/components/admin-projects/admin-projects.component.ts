import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';


@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit {
  projects$;

  constructor(private projectService: ProjectService) {
    // this.projects$ = this.projectService.getAllProjects().valueChanges();
    this.projects$ = this.projectService.getAllProjects();

  }

  ngOnInit() {
  }

}
