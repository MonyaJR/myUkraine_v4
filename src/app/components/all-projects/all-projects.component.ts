import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {
  projects$;

  constructor(private projectService: ProjectService) {
    // this.projects$ = this.projectService.getAllProjects().valueChanges();
    this.projects$ = this.projectService.getAllProjects();

  }

  ngOnInit() {
  }

}
