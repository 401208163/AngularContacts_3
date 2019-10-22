import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public contacts: any;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getContacts();
  }
  getContacts() {
    // const token = window.localStorage.getItem('auth_token');
    // if (!token) {
    //   this.router.navigate(['/signin']);
    // }
    this.http.get('http://106.15.206.216:3000/contacts')
    .toPromise()
    .then(data => {
      this.contacts = data;
    })
    .catch(err => {
      console.log(err);
    });
  }

  deleteContactById(id, e) {
    e.preventDefault();
    if (!window.confirm('确定删除吗?')) {
      return;
    }
    this.http.delete(`http://106.15.206.216:3000/contacts/${id}`)
    .toPromise()
    .then(data => {
      this.getContacts();
    })
    .catch(err => {
      console.log(err);
    });
  }
}
