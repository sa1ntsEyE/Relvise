import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up-cookies',
  templateUrl: './pop-up-cookies.component.html',
  styleUrls: ['./pop-up-cookies.component.scss']
})
export class PopUpCookiesComponent implements OnInit {
  showPopup: boolean = true;

  ngOnInit() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
