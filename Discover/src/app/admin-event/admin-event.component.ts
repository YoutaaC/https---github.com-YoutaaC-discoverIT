import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { Event } from '../models/event.model';
import Swal from 'sweetalert2'
import { UserService } from '../user.service';
declare var $:any;

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent {
  events: Event[] = [];
  accessToken!: any;
  currentUser!: User;
  eventToDelete!: Event | null;
  ngOnInit(): void {
    const userAccessToken = localStorage.getItem("accessToken"); 

    const userData = localStorage.getItem("accessToken");
       if (userData) {
      this.currentUser = JSON.parse(userData);

      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');   
    }
    this.getAllEvents();

  }
  constructor(private eventService: EventService, private router: Router,private userService: UserService) {}

  getAllEvents(): void {
    this.eventService.getAllEvents().subscribe(evtns => {
      this.events = evtns;
    }, error => {
      console.error('Error fetching events:', error);
    });
  }
  updateEvent(id :number){
    this.router.navigate(["/updateEvent",id])
   }

  EventToDelete!:Event;
  confirmDelete(event: Event) {
    this.eventToDelete = event; 

    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer cet événement ?',
      text: "Cette action est irréversible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        if (!this.eventToDelete) {
          console.error('No event selected for deletion!');
          return; 
        }

        this.eventService.deleteEvent(this.eventToDelete.id)
          .subscribe((response) => {
            console.log('Deleted:', response); 
            Swal.fire('Supprimé!', 'Événement supprimé avec succès.', 'success');
            
          }, (error) => {
            console.error('Error deleting event:', error);
            Swal.fire('Erreur!', 'Une erreur s\'est produite lors de la suppression.', 'error');
          });
      }
    });
  }
  


  deleteEvent()  {
    this.eventService.deleteEvent(this.EventToDelete.id)
    .subscribe(() =>{
      console.log("deleted")
      $('#deleteModal').modal('hide');
      window.location.reload();
  
    })
  
  }
  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
  }
}
