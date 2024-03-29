import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Vinyl } from '../../interfaces/vinyl';
import { VINYL } from '../../mocking/VINYL';
import { VinylService } from '../../services/vinyl.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vinyls: Vinyl[] = [];
  currentUser = "";
  nextId: number = 0;

  constructor(private authService: AuthService, private vinylService: VinylService) { }

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

    VINYL.map((vinyl)=>{
      this.nextId = vinyl.id;
    })
    this.nextId = this.nextId + 1;

    vinyl.id = this.nextId;
    vinyl.title = this.form.get('title')!.value!;
    vinyl.artist = this.form.get('artist')!.value!;
    vinyl.user = this.authService.currentUser;

    this.form.reset();
    this.vinylService.addVinyl(vinyl);
    console.log(this.currentUser);
  }

}
