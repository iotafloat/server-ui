import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [
    {
      name: "Gal Gadot",
      subtitle: "Wonder Woman",
      images: [
        "galgadot1.jpg",
        "galgadot2.jpg",
        "galgadot3.jpg",
        "galgadot4.jpg",
      ]
    },
    {
      name: "Oscar Isaac",
      subtitle: "Whatever",
      images: [
        "oscarisaac1.jpg",
        "oscarisaac2.jpg",
        "oscarisaac3.jpg",
        "oscarisaac4.jpg",
      ]
    }
  ];
  constructor() { }
}
