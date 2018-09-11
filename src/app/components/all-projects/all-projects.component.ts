import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Subscription} from 'rxjs/Subscription';
import { Project } from '../../models/project';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit, OnDestroy {
  projects: Project[];
  subscrition: Subscription;
  tableResource: DataTableResource<Project>;
  items: Project[] = [];
  itemCount = 0;

  constructor(private projectService: ProjectService) {
    this.subscrition = this.projectService.getAllProjects().subscribe(projects => {
      this.projects = projects;
      this.initializeTable(projects);

    });

  }

  private initializeTable(projects: Project[]) {
    this.tableResource = new DataTableResource(projects);
    this.tableResource.query({offset: 0})
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  filterProjects(query: string) {
    const filteredProjects = (query) ?
      this.projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.projects;

    this.initializeTable(filteredProjects);
  }

  ngOnDestroy() {
    this.subscrition.unsubscribe();
  }

  ngOnInit() {
  }

}
