/*https://embed.plnkr.co/NzMrJixtwZv0l2ohiZgQ/*/

import {Component, Input} from '@angular/core';

@Component({
  selector: 'accordion',
  template:'<ng-content></ng-content>'
})
export class Accordion {
  groups: Array<AccordionGroup> = [];

  addGroup(group: AccordionGroup): void {
    this.groups.push(group);
  }
  
  closeOthers(openGroup: AccordionGroup): void {
    this.groups.forEach((group: AccordionGroup) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }
}

@Component({
  selector: 'accordion-group',
  template:`
            <div class="card mb-3">
              <div class="faq-question card-header card-default" (click)="toggleOpen($event)">
                <a href>{{heading}}</a>
              </div>
              <div class="card-block" [hidden]="!isOpen">
                  <ng-content></ng-content>
              </div>
            </div>
          `,
  styleUrls: ['./project-faqs.component.scss'],

})
export class AccordionGroup {
  private _isOpen:boolean = false;
  
  @Input() heading: string;
  
  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }
  
  get isOpen() {
    return this._isOpen;
  }
  
  constructor(private accordion: Accordion) {
    this.accordion.addGroup(this);
  }
  
  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
}