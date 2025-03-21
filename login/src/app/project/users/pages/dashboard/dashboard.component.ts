import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = [
    { title: 'Daily Sales', value: '$5,230', icon: 'bar_chart' },
    { title: 'Customers Today', value: '45', icon: 'group' },
    { title: 'Refunds', value: '5', icon: 'undo' },
    { title: 'Low Stock', value: '8', icon: 'error' }
  ];
}
