import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var jquery: any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSignIn () {
    $('.ui.modal.sign-in').modal('show');
  }

}
