import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {
  categories$;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private projectService: ProjectService
  ) {
    this.categories$ = categoryService.getCategories();
  }

  editProject(project) {
    this.projectService.create(project);
    this.router.navigate(['/all-projects']);
  }

  ngOnInit() {
  }

}
