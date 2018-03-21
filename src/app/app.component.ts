import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textToTestEditor = 'app';
  textToTestEditorRegex = '^[a-zA-Z0-9 _.ñÑáÁéÉíÍóÓúÚöÖüÜ\\s-_=/]{5,150}$';

  bricks = [];
  comboOptions = [];
  showModal = false;

  constructor() {
    for (let a = 0; a < 10; a++) {
      this.bricks.push({
        title: 'Brick ' + a,
        width: '300px'
      });
    }

    for (let a = 0; a < 10; a++) {
      this.comboOptions.push({
        name: 'Option ' + a,
        otherProperty: 'Value of ' + a
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

  editorChange(event){
    console.log(event);
  }
}
