import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HttpClientModule,SidebarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
   //users = [{id: 1, username: 'john'}, {id: 2, username: 'jane'}];
   ingredientList = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];

  httpClient = inject(HttpClient);
  public data: Array<any> = [];
  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.data = data;
        }, error: (err) => console.log(err)
      });
  }
}
