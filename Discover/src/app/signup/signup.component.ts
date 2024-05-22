import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'
declare var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user :User={
    id:-1,
    firstName:"",
    lastName:"",
    email:"",
    tel:"",
    password:"",
    username:"",
    creationDate: new Date() ,
    accessToken:"",
  }
  

  constructor(private router:Router,private formBuilder:FormBuilder,private userService:UserService) {} 
  
  

  // register() {
  //   this.userService.register(this.user)
  //     .subscribe(newUser => {
  //       console.log('User registered successfully:', newUser);
  //       Swal.fire({
  //         title: "L'ajout de l'utilisateur a été effectué avec succès!",
  //         icon: "success",
  //         // confirmButtonText: "Yes, delete it!"
  //       });
  //     }, error => {
  //       console.error('Error registering user:', error);
  //       Swal.fire({
  //         title: "Problème  de signUp !",
  //         text: "User deja existant",
  //         icon: "warning"
  //       });
  //     });
  // }


  register() {
    if (!this.user || !this.user.username || !this.user.email) { // Replace with appropriate user validation
      console.error('No user data to register!');
      Swal.fire('Error!', 'No user data to register.', 'error');
      return;
    }

    Swal.fire({
      title: 'Are you sure you want to register?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SignUp!', 
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.register(this.user)
          .subscribe({
            next: (newUser) => {
              console.log('User registered successfully:', newUser);
              Swal.fire('success!', 'Bienvenu Dans DiscoverIT.', 'success');
              this.router.navigate(['home']);
            },
            error: (error) => {
              console.error('Error registering user:', error);
              Swal.fire('Error!', 'Remplir le formulaire', 'error');
            }
          });
      }
    });
  }

  
  
  gotoSignin(){
    this.router.navigate(['signin']);
  }

  gotoSignup(){
    this.router.navigate(['signup']);
  }
  gotoHome(){
    this.router.navigate(['accueil']);
    console.log('Home');
  }

  forminput!:FormGroup;
  forminput1!:FormGroup;
  forminput2!:FormGroup;
  forminput3!:FormGroup;
  forminput4!:FormGroup;
  forminput5!:FormGroup;


  ngOnInit(): void {
    this.forminput=this.formBuilder.group(
      {
        'nom':['',[Validators.required]]
      }
    );

    this.forminput1=this.formBuilder.group(
      {
        'prenom':['',[Validators.required]]
      }
    );

    this.forminput2=this.formBuilder.group(
      {
        'email':['',[Validators.required,Validators.email]]
      }
    );

    this.forminput3=this.formBuilder.group(
      {
        'password':['',[Validators.required]]
      }
    );

    this.forminput4=this.formBuilder.group(
      {
        'confPass':['',[Validators.required]]
      }
    );
    this.forminput4 = this.formBuilder.group({
      password: ['', Validators.required], 
      confPass: ['', Validators.required]
    });
    this.forminput5=this.formBuilder.group(
      {
        'pseudo':['',[Validators.required]]
      }
    );

  }
}




//test
