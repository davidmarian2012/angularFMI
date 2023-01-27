import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Vinyl } from '../../interfaces/vinyl';
import { VinylService } from '../../services/vinyl.service';

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.css']
})
export class VinylComponent implements OnInit {

  @Input() currentVinyl: Vinyl = {id:0, artist:'', title:'', user:''};

  vinyls: Vinyl[] = [];
  currentUser = "";

  constructor(private authService: AuthService, private vinylService: VinylService, private router:Router) { }

  ngOnInit(): void {
    this.vinyls = this.vinylService.getAllVinyls();
    this.currentUser = this.authService.currentUser;
    //this.currentUser = this.authService.currentUser;
  }

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    artist: new FormControl('', [
      Validators.required
    ])
  })

  addVinyl(){
    let vinyl: Vinyl = {
      id: 0,
      title: '',
      artist: '',
      user: '',
    }

    vinyl.title = this.form.get('title')!.value!;
    vinyl.artist = this.form.get('artist')!.value!;
    vinyl.user = this.authService.currentUser;

    this.vinylService.addVinyl(vinyl);
    console.log(this.currentUser);
  }

  goToVinyl(){
    this.router.navigate(['/vinyl', this.currentVinyl.id]);
  }

}
