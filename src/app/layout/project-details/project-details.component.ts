import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../shared/services/app-services/project.service";
import {ProjectFull} from "../../models/project-full";
import {ProjectReward} from "../../models/project-reward";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AfterViewChecked} from '@angular/core';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss'],
    providers: [ProjectService, Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class ProjectDetailsComponent implements OnInit, OnDestroy, AfterViewChecked {
    private sub: any;
    public urlComponent;
    public projectFull: ProjectFull;
    // projectRewards: ProjectReward[] = [
    //     {
    //         title: 'PERSONAL POSTCARD',
    //         backerAmount: '3 backers',
    //         estimatedDelivery: 'Aug 2017',
    //         id: 0,
    //         message: 'Thank you very much for your support! We will send you a personal postcard with behind-the-scene images of our headquarter. Furthermore, your name will be listed on our main website in our supporter section and of course we\'ll keep you updated on the progress of Amabrush.',
    //         price: '9',
    //         shipsTo: 'Anywhere in the world'
    //     },
    //     {
    //         title: 'PERSONAL POSTCARD',
    //         backerAmount: '3 backers',
    //         estimatedDelivery: 'Aug 2017',
    //         id: 0,
    //         message: 'Thank you very much for your support! We will send you a personal postcard with behind-the-scene images of our headquarter. Furthermore, your name will be listed on our main website in our supporter section and of course we\'ll keep you updated on the progress of Amabrush.',
    //         price: '9',
    //         shipsTo: 'Anywhere in the world'
    //     },
    //     {
    //         title: 'PERSONAL POSTCARD',
    //         backerAmount: '3 backers',
    //         estimatedDelivery: 'Aug 2017',
    //         id: 0,
    //         message: 'Thank you very much for your support! We will send you a personal postcard with behind-the-scene images of our headquarter. Furthermore, your name will be listed on our main website in our supporter section and of course we\'ll keep you updated on the progress of Amabrush.',
    //         price: '9',
    //         shipsTo: 'Anywhere in the world'
    //     },
    // ];

    private id;
    private subQuery: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private projectService: ProjectService
    ) { }


    ngOnInit() {
        // Retrieve Routing Parameters
        this.sub = this.route.params.subscribe(params => {
            this.urlComponent = params['urlComponent'];

            // Replacing Url to remove Query Params
            // this.location.replaceState('project/' + this.urlComponent);
        });

        //Retrieve Routing Query Parameters
        this.subQuery = this.route.queryParams.subscribe(params => {
            this.id = params['id'] || 0;

            //Getting Project from backend by Id
            this.projectService.getFullProject(this.id).subscribe(result => {
                this.projectFull = result;
            });
        });
    }


    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    // TODO esto tiene problemas al abrir los acordiones - revisar
    // Scrolls up Window to the Top of the page
    ngAfterViewChecked() {
    //   window.scrollTo(0, 0);
    }


}
