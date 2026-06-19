import { Component } from '@angular/core';
import {SectionHeaderComponent} from "../section-header/section-header.component";

@Component({
    selector: 'app-experience-section',
    standalone: true,
    templateUrl: './experience-section.component.html',
    imports: [
        SectionHeaderComponent
    ],
    styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent {
}
