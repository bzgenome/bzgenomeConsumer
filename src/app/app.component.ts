import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  bricks = [];
  showModal = false;

  constructor() {
    for (let a = 0; a < 10; a++) {
      this.bricks.push({
        title: 'Brick ' + a,
        width: '300px'
      });
    }
  }


  addBrick() {
    // this.bricks.unshift({title: 'New Brick'});
    this.bricks.splice(0, 0, {title: 'New Brick'});
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
