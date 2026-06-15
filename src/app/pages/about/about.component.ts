import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {PageWrapperComponent} from '../../components/page-wrapper/page-wrapper.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [
    HeaderComponent,
    PageWrapperComponent,
    FooterComponent
  ],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}
