import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.model';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'
declare var $:any;
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  currentUser!: User;
  contacts: Contact[] = [];
  users: User[] = [];
  accessToken!:any;
  contactToDelete!: Contact | null;

  ngOnInit(): void {
    const userAccessToken = localStorage.getItem('accessToken'); 
    const userData = localStorage.getItem('accessToken');
       if (userData) {
      this.currentUser = JSON.parse(userData);
      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }
    
    this.getAllContacts();
  }
  constructor(private messageService: MessageService, private router: Router,private userService: UserService) { }
  getAllContacts(): void {
    this.messageService.getAllContacts().subscribe(msgs => {
      this.contacts = msgs;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }

  confirmDelete(contact: Contact) {
    this.contactToDelete = contact; 

    Swal.fire({
      title: 'Are you sure you want to delete this contact?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.contactToDelete) { 
          this.messageService.deleteContact(this.contactToDelete.id)
            .subscribe(() => {
              console.log('Contact deleted!');
              Swal.fire('Deleted!', 'Contact deleted successfully.', 'success');
            
            }, (error) => {
              console.error('Error deleting contact:', error);
              Swal.fire('Error!', 'An error occurred during deletion.', 'error');
            });
        } else {
          console.error('No contact selected for deletion!');
        }
      }
    });
  }

  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");

    window.location.reload();
  }
}
