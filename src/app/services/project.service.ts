import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectService {
  // projects: AngularFireList<any>;
  // project: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  create(project) {
    return this.db.list('/projects').push(project);
  }

  getAllProjects() {
    return this.db.list('/projects');
  }

  // getProjectId(projectId) {
  //   return this.db.object('/projects/' + projectId)
  // }

}
