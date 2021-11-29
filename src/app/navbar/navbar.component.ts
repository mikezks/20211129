import { Component } from '@angular/core';

@Component({
    selector: 'flight-navbar-cmp',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent {

    private sidebarVisible: boolean = false;

    sidebarToggle(){
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
