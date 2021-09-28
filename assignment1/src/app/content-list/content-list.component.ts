import {Component, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  public contentList: Content[] = [];
  constructor() {

    this.contentList = [{
      title: "Dogs",
      author: "Dylan",
      body: "Dogs are pretty cool",
      id: 0,
      imgUrl: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80",
      type: "Animal"
    },
     {
      title: "Cats",
      author: "Dylan",
      body: "Cats are alright",
      id: 1,
      imgUrl: "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=301&q=80",
      tags: ["pet", "animal", "meh"],
      type: "Animal"
    },
     {
      title: "Birds",
      author: "Dylan",
      body: "Birds chirp very loud and are annoying",
      id: 2,
      imgUrl: "https://images.unsplash.com/photo-1555169062-013468b47731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      tags: ["bird", "chirp", "awful"],
      type: "Animal"
    },
      {
      title: "Bears",
      author: "Dylan",
      body: "Some bears can run up to 55 km/h",
      id: 3,
      tags: ["bear", "animal", "fast"]
    },
      {
      title: "Dolphins",
      author: "Dylan",
      body: "Dolphins are among the smartest of mammals",
      id: 4,
      imgUrl: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80",
      tags: ["pet", "animal", "cool"],
      type: "Animal"
    }];


  }

  public printID(id: number) {
    console.log(id)
  }

  ngOnInit(): void {
  }

}
