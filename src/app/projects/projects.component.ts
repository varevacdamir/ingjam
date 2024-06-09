import { Component } from '@angular/core';
import { IngJamProject, ProjectCardComponent } from './project-card/project-card.component';

@Component({
	selector: 'ij-projects',
	standalone: true,
	imports: [ProjectCardComponent],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
	ingjamProjects: IngJamProject[];
	constructor() {
		this.ingjamProjects = [{
			id: 1,
			name: "IngJam Store",
			description: "Welcome to IngJamStore, your go-to online store for the latest in innovative gadgets and unique finds. Explore our curated selection of products designed to enhance your lifestyle, all at unbeatable prices. Shop now and experience the future of online shopping with IngJamStore!",
			url: "/store"
		},
		{
			id: 2,
			name: "IngJam Chat",
			description: "Welcome to IngJamChat, your ultimate destination for seamless and engaging online conversations. Connect with friends, meet new people, and join vibrant communities. With our user-friendly interface and advanced features, IngJamChat brings you closer to the world. Start chatting today and experience the next level of online communication!",
			url: "/chat"
		},
		{
			id: 3,
			name: "IngJam Gallery",
			description: "Welcome to IngJamGallery, your premier destination for breathtaking photo collections. Explore a world of stunning imagery, from landscapes and portraits to abstract and street photography. Whether you are a photography enthusiast or just love beautiful visuals, IngJamGallery offers a curated selection that captures the essence of every moment. Dive in and let each photo tell its story!",
			url: "/gallery"
		},
		{
			id: 4,
			name: "IngJam Giveaway",
			description: "Welcome to IngJamGiveaway, the ultimate solution for hassle-free giveaway management. Easily select winners for your contests and promotions with our fair and random picker tool. Perfect for social media giveaways, events, and more, IngJamGiveaway ensures a transparent and exciting experience for all participants. Start your giveaway now and let LuckyDraw handle the rest!",
			url: "/giveaway"
		},]
	}
}
