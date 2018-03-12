import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crystal Editor';
  editorForm = new FormGroup ({
    editorData: new FormControl()
  });
  onSubmit(){
    console.log(this.editorForm);
  }
}
