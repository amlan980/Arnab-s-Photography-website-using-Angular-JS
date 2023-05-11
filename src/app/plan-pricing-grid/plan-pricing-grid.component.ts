import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-pricing-grid',
  templateUrl: './plan-pricing-grid.component.html',
  styleUrls: ['./plan-pricing-grid.component.css']
})
export class PlanPricingGridComponent {
  heading:string="Our Gallery";
  preWedding:string="Pre-wedding Gallery ";
  wedding:string="Wedding Gallery";
  modelShoot:string="Modelshoot Gallery ";
  riceCeremony:string="Rice Ceremony Gallery";
  babyShower:string="BabyShower & Maternity shoot Gallery";

  images: string[] = [
    '/assets/arnab1.jpg',
    '/assets/arnab2.jpg'
  ];
currentImage: string = this.images[0];

ngOnInit() {
  setInterval(() => {
    const currentIndex = this.images.indexOf(this.currentImage);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.currentImage = this.images[nextIndex];
  }, 2500); 
}

}
