import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'ij-project-card',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './project-card.component.html',
	styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
	@Input() project: IngJamProject | undefined;
}

export interface IngJamProject {
	id: number;
	name: string;
	description: string;
	url: string;
}