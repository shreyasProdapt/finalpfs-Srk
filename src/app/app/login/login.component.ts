import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ngOnInit() {}

 

  displayStyle = "block";

  closePopup() {

    this.displayStyle = "none";

  }

  login: any;

 

  loader = true;

  constructor(private router: Router) {

    this.router.events.subscribe((e: RouterEvent) => {

      this.navigationInterceptor(e);

    })

  }

  // Shows and hides the loading spinner during RouterEvent changes

  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {

                             

        this.loader = true;

   

    }

    if (event instanceof NavigationEnd) {

      setTimeout(()=>{                          

        this.loader = false;

    }, 2000);

    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails

    if (event instanceof NavigationCancel) {

      setTimeout(()=>{                          

        this.loader = true;

    }, 2000);

    }

    if (event instanceof NavigationError) {

      setTimeout(()=>{                          

          this.loader = true;

      }, 2000);

    }

   

  }

}
