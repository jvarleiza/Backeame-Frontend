import { Component, OnInit } from '@angular/core';
import { Project } from "../../../../models/project";
import {ProjectService} from "../../../../shared/services/app-services/project.service";
import {ASSETS_URL} from "../../../../../environments/environment";

@Component({
  selector: 'app-tinder',
  templateUrl: './tinder.component.html',
  styleUrls: ['./tinder.component.scss']
})
export class TinderComponent implements OnInit {
  tinderProject: Project;
  assetsUrl: string = ASSETS_URL;

  constructor(protected projectService: ProjectService) {
    this.callTinderProject();
  }

  callTinderProject(){
    this.projectService.getTinderProject().subscribe(tinderProject => {
      this.tinderProject = tinderProject;
    });
  }

  callTinderLike(){
    this.projectService.getTinderLikeProject(this.tinderProject.id).subscribe(tinderProject => {
      this.tinderProject = tinderProject;
    });
  }

  ngOnInit() { }

}
