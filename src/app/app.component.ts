import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Invoice Generator';
  mobileMode = false;

  constructor(private breakpoint: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(
      result => {
        this.mobileMode = false;
        if (result.matches) {
          this.mobileMode = true;
        }
      }
    )
  }
}
