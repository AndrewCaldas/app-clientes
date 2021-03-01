import { Component, AfterViewInit } from '@angular/core';

import jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  title = 'app-clientes';

  ngAfterViewInit(): void {
    ($ => {
      'use strict';

      // Add active state to sidbar nav links
      const path = window.location.href; // because the 'href' property of the DOM element is the absolute path
      // tslint:disable-next-line:typedef
      $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(function() {
        if (this.href === path) {
          $(this).addClass('active');
        }
      });

      // Toggle the side navigation
      // tslint:disable-next-line:only-arrow-functions
      $('#sidebarToggle').on('click', function(e: any): void {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
      });
    })(jQuery);
  }
}
