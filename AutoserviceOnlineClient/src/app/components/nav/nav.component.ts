import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {STATES} from '../../modules/routing/states';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public STATES = STATES;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public navigate(url) {
    this.router.navigate([url]);
  }

  public isActive(url): boolean {
    let currentUrl = this.router.url;
    // console.log(currentUrl);
    // console.log(url);
    return currentUrl === '/' + url;
  }

}
