import {Component, Input, OnInit} from '@angular/core';
import {ProjectReward} from "../../../../models/project-reward";
import {ProjectFull} from "../../../../models/project-full";

@Component({
  selector: 'app-project-reward',
  templateUrl: './project-reward.component.html',
  styleUrls: ['./project-reward.component.scss']
})
export class ProjectRewardComponent implements OnInit {
  @Input() reward: ProjectReward;
  @Input() projectFull: ProjectFull;

  constructor() { }

  ngOnInit() {}
}
