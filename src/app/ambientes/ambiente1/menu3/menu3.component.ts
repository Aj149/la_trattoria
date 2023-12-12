import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrl: './menu3.component.css'
})
export class Menu3Component {
  @Input() menuType: string = 'menu3'; 
}
