import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-footer',
  templateUrl: './portal-footer.component.html',
  styleUrls: ['./portal-footer.component.scss']
})
export class PortalFooterComponent implements OnInit {
  footerLink: any;
  constructor() {
    const currentyear = new Date().getFullYear();
    this.footerLink = [
      {
        name: "Copyright @" + currentyear +" Shikshalokam"
      },
      {
        name: "Terms of Service"
      },
      {
        name: "Privacy Policy"
      },
      {
        name: "Contact Us"
      }
    ];
  }

  ngOnInit() {
  }

}
