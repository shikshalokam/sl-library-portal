import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-bread-crum',
  templateUrl: './bread-crum.component.html',
  styleUrls: ['./bread-crum.component.scss']
})
export class BreadCrumComponent implements OnInit {
  breadcrumData: any;
  crumData: any;
  edit: any;
  show: boolean = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationEnd) {
        if (e.snapshot.data && e.snapshot.data.title) {
          this.crumData = e.snapshot.data;
          this.edit = e.snapshot.routeConfig.path;
          if (this.edit == 'edit/:id' || this.edit == 'entitydetails/:id') {
            this.show = false;
          } else {
            this.show = true;
          }
        }

      }
    });

  }

  ngOnInit() {
    // this.route
    //   .data
    //   .subscribe(data => {
    //     this.crumData = data;
    //     console.log('BreadCrumComponent', this.crumData);
    //   });
  }

}
