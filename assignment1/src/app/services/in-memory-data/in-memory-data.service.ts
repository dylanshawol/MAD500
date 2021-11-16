import { Injectable } from '@angular/core';
import { Content } from "../../helper-files/content-interface";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const content : Content[] = [{
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

    return {content};
  }

  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.id)) + 1 : 2000;
  }
}
