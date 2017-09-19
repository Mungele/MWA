import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First App';

  public counterValue:number ;
  public counter:number = 10;


  update(data){
    this.counter = data;
  }
  showOutputData(data){
    this.counterValue =data;
  }
}
