import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {CATEGORIES, COLLECTIONS} from '../../models/categories';
import {ProjectService} from "../../shared/services/app-services/project.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [ProjectService]
})
export class CategoryComponent implements OnInit {
  public isMoreFiltersCollapsed = true;
  projectList: Project[];
  allCategories = CATEGORIES;
  allCollections = COLLECTIONS;
  filters = {
    typeFilter: '',
    categoryFilter: '',
    collectionFilter: '',
    stateFilter: '',
    locationFilter: '',
    countryFilter: ''
  };

  constructor(protected projectService: ProjectService) {
    this.projectService.getProjects(this.filters).subscribe(projects => {
      this.projectList = projects;
    });
  }

  ngOnInit() {}

  changeLocation(){
    console.log(this.filters);

    this.projectService.getProjects(this.filters).subscribe(projects => {
      this.projectList = projects;
    });
  }

}
