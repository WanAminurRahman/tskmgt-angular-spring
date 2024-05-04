import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
    routeList: any;
    iconList: any = [
        {icon: 'bi bi-house-door-fill'},
        {icon: 'bi bi-info-square-fill'},
        {icon: 'bi bi-chevron-double-right'},
    ];

    constructor(
        router: Router,
    ) {
        this.routeList = router.config[0].children
    }
}
