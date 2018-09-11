import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from "rxjs";
import { AngularFireDatabase } from "angularfire2/database";
import {ProjectService} from "../../services/project.service";
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  categories$;
  project;

  // categories$: Observable<any[]>;
  // constructor(db: AngularFireDatabase, private projectService: ProjectService) {
  //   this.categories$ = db.list('categories').valueChanges();
  // }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private projectService: ProjectService
  ) {
    // this.categories$ = categoryService.getCategories().valueChanges();
    this.categories$ = categoryService.getCategories();

    // let id = this.route.snapshot.paramMap.get('id');
    // if (id) this.projectService.getProjectId(id).take(1).subscribe(p => this.project = p);
  }

  saveProject(project) {
    this.projectService.create(project);
    this.router.navigate(['/all-projects']);
  }

  ngOnInit() {
  }

}
