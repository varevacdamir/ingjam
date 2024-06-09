import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InstaUserImages } from '../../../public/assets/data.js';

@Component({
	selector: 'ij-giveaway',
	standalone: true,
	imports: [
		ReactiveFormsModule,
		NgClass,
		NgStyle
	],
	templateUrl: './giveaway.component.html',
	styleUrl: './giveaway.component.scss'
})
export class GiveawayComponent implements OnInit {

	private readonly instagramLink = 'https://www.instagram.com/';

	private userImages: string[] = [];
	private imagePaths: string[] = [];
	private intervalId: any;

	winnerFound: boolean = false;
	configuration: GiveawayConfiguration;

	configurationForm: FormGroup;

	constructor() {
		this.userImages = InstaUserImages;
		this.userImages.forEach(username => {
			this.imagePaths.push(`/assets/${username}`);
		});

		this.configuration = {
			currentImage: `/assets/luck.jpg`,
			imageCount: this.userImages.length,
			startSpeed: 5,
			speedDelay: 5,
			accumulatorLimit: 250,
			userLink: this.instagramLink
		}

		this.configurationForm = new FormGroup({
			currentImage: new FormControl({ value: this.configuration.currentImage, disabled: true }),
			imageCount: new FormControl({ value: this.configuration.imageCount, disabled: true }),
			startSpeed: new FormControl(this.configuration.startSpeed),
			speedDelay: new FormControl(this.configuration.speedDelay),
			accumulatorLimit: new FormControl(this.configuration.accumulatorLimit)
		});
	}

	ngOnInit(): void {
	}

	startPicking(): void {
		this.winnerFound = false;
		const speedDelay = this.configuration.speedDelay;
		const limit = this.configuration.accumulatorLimit;
		var speed = this.configuration.startSpeed;
		var index = Math.floor(Math.random() * this.configuration.imageCount);

		const setWinner = () => {
			this.winnerFound = true;
			this.setUserLink();
		}

		const displayNextImage = () => {
			this.configuration.currentImage = this.imagePaths[index];
			this.configurationForm.get('currentImage')?.setValue(this.configuration.currentImage)
			index = (index + 1) % this.configuration.imageCount;
			speed += speedDelay;  // Increase delay to slow down the picking
			console.log("running")
			if (speed > limit) {
				clearInterval(this.intervalId);
				console.log("stop")
				setTimeout(setWinner, 100);
			} else {
				this.intervalId = setTimeout(displayNextImage, speed);
			}
		};

		// Start the image picking process
		this.intervalId = setTimeout(displayNextImage, speed);
	}

	setConfiguration(): void {
		this.configuration = this.configurationForm.getRawValue();
	}

	private setUserLink(): void {
		const regex: RegExp = /\/assets\/([a-zA-Z0-9_]+)\.jpg/;
		const match = this.configuration.currentImage.match(regex);

		if (match && match[1])
			this.configuration.userLink = this.instagramLink + match[1] + '/';
	}
}

interface GiveawayConfiguration {
	currentImage: string;
	imageCount: number;
	startSpeed: number;
	speedDelay: number;
	accumulatorLimit: number;
	userLink: string;
}