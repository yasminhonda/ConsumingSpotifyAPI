import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.circle()
  }

  circle() {
    let amount = 150;
    let body = document.querySelector('.container')
    let i = 0
    while (i < amount) {
      let element = document.createElement('span')
      element.classList.add("circles")
      let posX = Math.floor(Math.random() * window.innerWidth)
      let delay = Math.random() * - 20
      let duration = Math.random() * 10

      let size = Math.random() * 70
      element.style.width = 10 + size + 'px'
      element.style.height = 10 + size + 'px'
      element.style.left = posX + 'px'
      element.style.animationDelay = delay + 's'
      element.style.animationDuration = 10 + duration + 's'

      body?.appendChild(element)
      i++
    }
  }

  openLoginPage() {
    window.location.href = this.spotifyService.getLoginUrl()
  }

}
