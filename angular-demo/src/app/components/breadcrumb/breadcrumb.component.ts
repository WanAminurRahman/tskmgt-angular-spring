import { Component, DoCheck } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements DoCheck{
    linkString: any;

    constructor(private router: Router) {
        this.router.config[0].children?.forEach(child => {
            if (this.router.url == '/' + child.path){
                this.linkString = child.path
            }
        });
    }

    ngDoCheck(): void {
        if (this.router.navigated) {
            this.router.config[0].children?.forEach(child => {
                if (this.router.url == '/' + child.path){
                    this.linkString = child.title
                    // console.log(child)
                }
            });
        }
    }

}
