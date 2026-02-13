import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  menuType = "guest"
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        var em = localStorage.getItem("emailid")
        if (em != null) {
          this.menuType = "user"

        }
        else {
          var aem = localStorage.getItem("aemailid")
          if (aem != null) {
            this.menuType = "admin"
          }
          else
            this.menuType = 'guest'
        }

      }
    })
  }
  slogout() {
    localStorage.removeItem('emailid')
    this.router.navigate(['/'])
  }
  alogout() {
    localStorage.removeItem('aemailid')
    this.router.navigate(['/'])
  }
}
