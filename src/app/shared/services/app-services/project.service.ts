import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Http } from '@angular/http';
import { Project } from '../../../models/project';
import { ProjectCollection } from '../../../models/project-collection';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ng2-cookies';
import {
    ALL_PROJECTS, TINDER_PROJECT, PROJECTS_COLLECTIONS, Replace, PROJECT_BY_ID,
    TINDER_LIKE_PROJECT
} from '../service-constants';
import {ProjectFull} from "../../../models/project-full";

@Injectable()
export class ProjectService extends BaseService {

    constructor(protected _http: Http, protected _cookieService: CookieService) {
        super(_http, _cookieService);
    }

    public getProjects(filterModel): Observable<Project[]> {
        return new Observable<Project[]>(subscriber => {
            this.doGet<Project[]>(ALL_PROJECTS, true)
                .subscribe(
                    (response: Project[]) => {
                      //this.toasterService.pop('success', "Success!", "Welcome " + res.username);
                      subscriber.next(response);
                    },
                    error => {
                      //this.toasterService.pop('error', "Success!", error.statusText);
                      console.log(error);
                      subscriber.error(error);
                    }
                );
          });
    }

    public getProject(projectId): Observable<Project> {
        return new Observable<Project>(subscriber => {
            this.doGet<Project>(TINDER_PROJECT, true)
                .subscribe(
                    (response: Project) => {
                        subscriber.next(response);
                    },
                    error => {
                        console.log(error);
                    }
                );
        });
    };

    public getTinderProject(): Observable<Project> {
        return new Observable<Project>(subscriber => {
            this.doGet<Project>(TINDER_PROJECT, true)
                .subscribe(
                    (response: Project) => {
                        subscriber.next(response);
                    },
                    error => {
                        console.log(error);
                    }
                );
        });
    };

    public getTinderLikeProject(projectId): Observable<Project> {
        return new Observable<Project>(subscriber => {
            this.doGet<Project>(Replace.replaceId(TINDER_LIKE_PROJECT, projectId), true)
                .subscribe(
                    (response: Project) => {
                        subscriber.next(response);
                    },
                    error => {
                        console.log(error);
                    }
                );
        });
    };

    public getFullProject(projectId): Observable<ProjectFull> {
        return new Observable<ProjectFull>(subscriber => {
            this.doGet<ProjectFull>(Replace.replaceId(PROJECT_BY_ID, projectId), true)
                .subscribe(
                    (response: ProjectFull) => {
                        subscriber.next(response);
                    },
                    error => {
                        console.log(error);
                    }
                );
        });
    };

    public getProjectCollection(collection): Observable<Project[]> {
        return new Observable<Project[]>(subscriber => {
            this.doGet<ProjectCollection>(PROJECTS_COLLECTIONS[collection], true)
                .subscribe(
                    (response: ProjectCollection) => {
                        subscriber.next(response.projects);
                    },
                    error => {
                        console.log(error);
                        subscriber.error(error);
                    }
                );
        });
    }

    // public getProject(userId: string): Observable<Project> {
    // return new Observable<Project>(subscriber => {
    //   this.doGet<Project>(this._projectUrl + userId, true)
    //       .subscribe(
    //           (response: Project) => {
    //this.toasterService.pop('success', "Success!", "Welcome " + res.username);
    //             subscriber.next(response);
    //           },
    //           error => {
    //this.toasterService.pop('error', "Success!", error.statusText);
    //             console.log(error);
    //           }
    //       );
    // });
    // };

    public postProject(user: Project): Observable<Project> {
    return new Observable<Project>(subscriber => {
      this.doPost<Project>(ALL_PROJECTS, user)
          .subscribe(
              (response) => {
                subscriber.next(response);
              },
              error => {
                console.log(error);
              }
          );
    });
    };

    public putProject(user: Project): Observable<Project> {
    return new Observable<Project>(subscriber => {
      this.doPut<Project>(ALL_PROJECTS, user)
          .subscribe(
              (response) => {
                subscriber.next(response);
              },
              error => {
                console.log(error);
              }
          );
    });
  };
}
