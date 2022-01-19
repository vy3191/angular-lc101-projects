import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0qNIJtyObQ0ZGCyHntrAnx9YUK0b8PjVzg&usqp=CAU';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xoOdGYmnxIrxQJn9MjDGLRO8jIu8hkXUHg&usqp=CAU';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLGpa5ULtYs5rYtEXFsjCn4OMkQvNKJ9iEw&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}