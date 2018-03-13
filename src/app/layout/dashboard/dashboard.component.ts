import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from '../../shared/services/app-services/project.service';
import {Http} from '@angular/http';
import {ASSETS_URL} from "../../../environments/environment";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [ProjectService]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    trending: Project[];
    nearlyFunded: Project[];
    justLaunched: Project[];
    recommended: Project[];
    assetsUrl: string = ASSETS_URL;

    constructor(protected projectService: ProjectService, protected http: Http) {
        this.populateSlider();

        this.projectService.getProjectCollection('nearlyFunded').subscribe(result => {
            this.nearlyFunded = result;
        });

        this.projectService.getProjectCollection('justLaunched').subscribe(result => {
            this.justLaunched = result;
        });

        this.projectService.getProjectCollection('trending').subscribe(result => {
            this.trending = result;
        });

        this.projectService.getProjectCollection('recommended').subscribe(result => {
            this.recommended = result;
        });
    }
    ngOnInit() { }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    populateSlider(){
        this.sliders.push(
            {
                imagePath: this.assetsUrl + '/images/slider3_d.jpg',
                label: 'Primer slider',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: this.assetsUrl + '/images/slider2_d.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: this.assetsUrl + '/images/slider5_d.jpg',
                label: 'Fourth slide label',
                text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            },
            {
                imagePath: this.assetsUrl + '/images/slider6_d.jpg',
                label: 'Fifth slide label',
                text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`,
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`,
        });
    }
}
