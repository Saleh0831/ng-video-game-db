import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-video-game-db';
  constructor(){
    alert('این سایت از api های خارجی استفاده میکند لطفا فیلتر شکن خود را وصل کنید')
  }
}
