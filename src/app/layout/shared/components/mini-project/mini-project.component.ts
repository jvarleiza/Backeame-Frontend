import {Component, OnInit, Input} from '@angular/core';
import {Project} from "../../../../models/project";
import {ASSETS_URL} from "../../../../../environments/environment";

@Component({
  selector: 'app-mini-project',
  templateUrl: './mini-project.component.html',
  styleUrls: ['./mini-project.component.scss']
})
export class MiniProjectComponent implements OnInit {
  @Input() project: Project;
  assetsUrl: string = ASSETS_URL;

  constructor() {}

  ngOnInit() {}

}
