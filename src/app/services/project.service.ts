import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class ProjectService {

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
