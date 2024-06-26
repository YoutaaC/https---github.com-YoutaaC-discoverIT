import { Component } from '@angular/core';
// import { VisiteurService } from '../visiteur.service';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  users: User[] = [];
  posts: Post[] = [];
  currentUser!: User;
  accessToken!: any;
  user!:User;
  userId!: number;

  



  ngOnInit(): void {
    const userAccessToken = localStorage.getItem("accessToken"); 

    const userData = localStorage.getItem("accessToken");
       if (userData) {
      this.currentUser = JSON.parse(userData);

      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');
    }

    this.getAllUsers();
    this.getUserById(2);
    this.getAllPosts();
  }

  
  constructor(private userService: UserService, private router:Router,private postService : PostService,private activatedRoute: ActivatedRoute) {}

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
  
  
  getUserById(id: number): void {
    this.userService.getUserById(id).subscribe(user => {
      this.currentUser = user;
    }, error => {
      console.error('Error fetching user:', error);
    });
  }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(psts => {
      this.posts = psts;
    }, error => {
      console.error('Error fetching posts:', error);
    });
  }

  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
    this.router.navigate(["/"])
  }


    
  isLiked1 = false;
  likeCount1 = 21; 

  get likeIconClass1() {
    return this.isLiked1 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike1() {
    this.isLiked1 = !this.isLiked1;
    if (this.isLiked1) {
      this.likeCount1++;
    } else {
      this.likeCount1--;
    }
  }

  isLiked2 = false;
  likeCount2 = 10; // Initial count of likes

  get likeIconClass2() {
    return this.isLiked2 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike2() {
    this.isLiked2 = !this.isLiked2;
    if (this.isLiked2) {
      this.likeCount2++;
    } else {
      this.likeCount2--;
    }
  }

  isLiked3 = false;
  likeCount3 = 41; // Initial count of likes

  get likeIconClass3() {
    return this.isLiked3 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike3() {
    this.isLiked3 = !this.isLiked3;
    if (this.isLiked3) {
      this.likeCount3++;
    } else {
      this.likeCount3--;
    }
  }

  isLiked4 = false;
  likeCount4 = 12; // Initial count of likes

  get likeIconClass4() {
    return this.isLiked4 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike4() {
    this.isLiked4 = !this.isLiked4;
    if (this.isLiked4) {
      this.likeCount4++;
    } else {
      this.likeCount4--;
    }
  }

  isLiked5 = false;
  likeCount5 = 11; // Initial count of likes

  get likeIconClass5() {
    return this.isLiked5 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike5() {
    this.isLiked5 = !this.isLiked5;
    if (this.isLiked5) {
      this.likeCount5++;
    } else {
      this.likeCount5--;
    }
  }

  isLiked6 = false;
  likeCount6 = 22; // Initial count of likes

  get likeIconClass6() {
    return this.isLiked6 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike6() {
    this.isLiked6 = !this.isLiked6;
    if (this.isLiked6) {
      this.likeCount6++;
    } else {
      this.likeCount6--;
    }
  }

  isLiked7 = false;
  likeCount7 = 53; // Initial count of likes

  get likeIconClass7() {
    return this.isLiked7 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike7() {
    this.isLiked7 = !this.isLiked7;
    if (this.isLiked7) {
      this.likeCount7++;
    } else {
      this.likeCount7--;
    }
  }

  isLiked8 = false;
  likeCount8 = 81; // Initial count of likes

  get likeIconClass8() {
    return this.isLiked8 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike8() {
    this.isLiked8 = !this.isLiked8;
    if (this.isLiked8) {
      this.likeCount8++;
    } else {
      this.likeCount8--;
    }
  }

  isLiked9 = false;
  likeCount9 = 27; // Initial count of likes

  get likeIconClass9() {
    return this.isLiked9 ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
  }

  toggleLike9() {
    this.isLiked9 = !this.isLiked9;
    if (this.isLiked9) {
      this.likeCount9++;
    } else {
      this.likeCount9--;
    }
  }

  gotoDetailsPost(id :number) {
    this.router.navigate(["/detailsPost",id])
  }

  gotoadd() {
    this.router.navigate(["/UserAddPost"])
  }

  
}






