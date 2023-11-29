import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MarketPlace';

  products: any[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://localhost:5128/api/products').subscribe((responce: any) => {
      this.products = responce.data
    }, error => {
      console.log(error)
    })
  }
}