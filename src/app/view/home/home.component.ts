import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  navigateToDashboard(): void {
    const button = document.getElementById('dashboardButton');
    if (button) {
      button.classList.add('clicked');
    }

    // Navega para a página de dashboard após a animação
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 200); // Ajuste o tempo conforme necessário
  }

}
