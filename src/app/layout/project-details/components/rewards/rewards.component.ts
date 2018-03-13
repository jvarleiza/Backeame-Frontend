import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../../shared/services/app-services/project.service";
import {ProjectFull} from "../../../../models/project-full";

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss'],
  providers: [ProjectService]
})
export class RewardsComponent implements OnInit {
  projectId: number;
  sub: any;
  urlComponent: string;
  subQuery: any;
  public projectFull: ProjectFull;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private projectService: ProjectService,
      private location: Location
  ) { }

  ngOnInit() {
    // Retrieve Routing Parameters
    this.sub = this.route.params.subscribe(params => {
      //Retrieve Routing Query Parameters
      this.subQuery = this.route.queryParams.subscribe(queryParams => {
        this.projectId = queryParams['id'] || 0;
        this.urlComponent = params['urlComponent'];
        // Replacing Url to remove Query Params
        // this.location.replaceState('project/rewards/' + this.urlComponent); TODO
        //Getting Project from backend by Id
        this.projectService.getFullProject(this.projectId).subscribe(result => {
          this.projectFull = result;
        });
      });
    });
  }
}
