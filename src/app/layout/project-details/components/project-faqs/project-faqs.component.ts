import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-project-faqs',
    templateUrl:'./project-faqs.component.html'
})
export class ProjectFaqsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  groups: Array<any> = [
    {
      heading: 'How do I pledge?',
      content: 'A year on from last year’s record-breaking Kickstarter campaign, we’re returning to the platform for a third time as part of Kickstarter Gold. We’re launching a brand new ecosystem of play maps and activity books, that expand play and STEM learning around our award-winning coding system, the Cubetto Playset'
    },
    {
      heading: 'How much does it cost?',
      content: 'I’m a dynamic content to show in angular 2 accordion : )'
    },
    {
      heading: 'How do I add personalised books to my pledge?',
      content: 'I’m a dynamic content to show in angular 2 accordion : ) '
    },

    {
      heading: 'How is Cubetto powered?',
      content: 'I’m a dynamic content to show in angular 2 accordion : ) '
    },
    {
      heading: 'Do you ship worldwide?',
      content: 'I’m a dynamic content to show in angular 2 accordion : ) '
    },
    {
      heading: 'What is your warranty policy?',
      content: 'I’m a dynamic content to show in angular 2 accordion : ) '
    }
  ];
}
