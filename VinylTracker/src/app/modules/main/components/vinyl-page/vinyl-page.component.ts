import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vinyl } from '../../interfaces/vinyl';
import { VINYL } from '../../mocking/VINYL';

@Component({
  selector: 'app-vinyl-page',
  templateUrl: './vinyl-page.component.html',
  styleUrls: ['./vinyl-page.component.css']
})
export class VinylPageComponent implements OnInit {

  currentVinyl: Vinyl = {id: 0, title: "", artist: "", user: ""};
  id: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.currentVinyl.id = Number(this.id);
    
    VINYL.map((vinyl)=>{
      if(vinyl.id == this.currentVinyl.id)
      {
        this.currentVinyl.title = vinyl.title;
        this.currentVinyl.artist = vinyl.artist;
        this.currentVinyl.user = vinyl.user;
      }
    })
  }

  back(){
    this.router.navigate(['/dashboard']);
  }

}
