import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectFull} from "../../models/project-full";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
public projectFull: ProjectFull;
private sub: any;
public rewardId;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Retrieve Routing Parameters
    this.sub = this.route.params.subscribe(params => {
        this.rewardId = params['id'];
    });
  }

}
