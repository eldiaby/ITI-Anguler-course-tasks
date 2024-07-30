import { Component } from '@angular/core';
import { HeadercomponentComponent } from '../headercomponent/headercomponent.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadercomponentComponent, FooterComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
