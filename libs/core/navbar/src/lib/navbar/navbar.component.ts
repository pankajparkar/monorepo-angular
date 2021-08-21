import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'monorepo-angular-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() appName = 'Admin';

  constructor() { }

  ngOnInit(): void {
  }

}
