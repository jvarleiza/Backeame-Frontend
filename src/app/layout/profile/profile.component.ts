import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {Project} from "../../models/project";

const BACKED: Project[] = [
  {
    id: 1,
    title: 'Laturno Pestert Viokfjno',
    entrepreneur: 'Hoffmen Thobias',
    briefDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas inventore modi.',
    location: 'Montevideo, Uruguay',
    percentageFunded: 25,
    amountPledged: 'URU 13.500',
    daysToGo: 6,
    urlComponent: 'bjornwatchco',
  },
  {
    id: 1,
    title: 'Laturno Pestert Viokfjno',
    entrepreneur: 'Hoffmen Thobias',
    briefDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas inventore modi.',
    location: 'Montevideo, Uruguay',
    percentageFunded: 50,
    amountPledged: 'URU 13.500',
    daysToGo: 6,
    urlComponent: 'bjornwatchco',
  },
  {
    id: 1,
    title: 'Laturno Pestert Viokfjno',
    entrepreneur: 'Hoffmen Thobias',
    briefDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas inventore modi.',
    location: 'Montevideo, Uruguay',
    percentageFunded: 75,
    amountPledged: 'URU 13.500',
    daysToGo: 6,
    urlComponent: 'bjornwatchco',
  },
  {
    id: 1,
    title: 'Laturno Pestert Viokfjno',
    entrepreneur: 'Hoffmen Thobias',
    briefDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas inventore modi.',
    location: 'Montevideo, Uruguay',
    percentageFunded: 100,
    amountPledged: 'URU 13.500',
    daysToGo: 6,
    urlComponent: 'bjornwatchco',
  }
];


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  projectsBacked: Project[] = BACKED;

  constructor() {
    this.user = new User(1, 'Matthew A.', 'Cherry', 'mat', 'mat@gmailcom', '', '', '', 'Montevideo, Uruguay', 'Jun 2010', '10', 'Creative Human Person / Director / Producer / TED speaker / Animator / 3D VFX artist / Educator. He\'s recording 1 second every day for the rest of his life.');
  }

  ngOnInit() {
  }

}
