import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    constructor(public router: Router) { }
    menu: Array<string> | null = ['home', 'news', 'about'];
    linkRouter(item) {
        this.router.navigate(['/' + item]);
    }
}