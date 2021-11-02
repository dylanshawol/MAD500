import {Component, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  public contentList: Content[] = [];
  public message: string = "";
  constructor() {

    this.contentList = [{
      title: 'Nissan GTR Skyline R34',
      author: 'Dylan',
      body: 'A JDM classic.',
      id: 0,
      imgUrl: 'https://i.imgur.com/98zRFy7.jpeg',
      type: 'retro sports car'
    },
      {
        title: 'Porsche 911 GT3',
        author: 'Dylan',
        body: 'One of the most iconic and recognizable cars in it\'s GT3 configuration.',
        id: 1,
        imgUrl: 'https://i.imgur.com/V0NbwCf.jpeg',
        tags: ['porsche', '911', 'GT3', 'race'],
        type: 'sports car'
      },
      {
        title: 'Lamborghini Countach',
        author: 'Dylan',
        body: 'An 80\'s classic, the Countach was the stepping stone of today\'s current Lamborghini designs.',
        id: 2,
        imgUrl: 'https://i.imgur.com/ZhrKXvs.jpeg',
        tags: ['lamborghini', 'countach', 'classic supercars'],
        type: 'supercar'
      },
      {
        title: 'SSC Tuatara',
        author: 'Dylan',
        body: 'The fastest production car in the world. This twin turbocharged 5.9-liter V-8 monster produces 1750 horsepower and can reach a top speed of 508 km/h.',
        id: 3,
        imgUrl: 'https://i.imgur.com/HcALW0Y.jpeg',
        type: 'hypercar',
        tags: ['ssc', 'tuatara', 'fastest car', 'worlds fastest']
      },
      {
        title: 'Ferrari F40',
        author: 'Dylan',
        body: 'A retro classic.',
        id: 4,
        tags: ['ferrari', 'f40', 'retro'],
        type: 'retro supercar'
      }];


  }

  public printID(id: number) {
    console.log(id)
  }

  ngOnInit(): void {
  }

  addCarToList(newCarFromChild: Content) {
    this.contentList.push(newCarFromChild);
    this.contentList = Object.assign([], this.contentList);
  }

  checkForType(type: string): void {
    let filter = this.contentList.filter(c => c.type === type);

    if (filter.length > 0) {
      this.message = "Car Found";
    } else {
      this.message = "No Car found of that type";
    }
    // console.log("spread operator", ...this.contentList);
    // console.log("just the array", this.contentList);
    this.contentList = [...this.contentList];
  }

}
