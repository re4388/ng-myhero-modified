import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { IP } from '../interface/hero';

@Component({
  selector: 'app-showip',
  templateUrl: './showip.component.html',
  styleUrls: ['./showip.component.css'],
})
export class ShowipComponent implements OnInit {
  myIp: IP;
  constructor(private heroService: HeroService) {}

  getMyIp(): void {
    this.heroService.getMyIp().subscribe( ip => (this.myIp = ip));
  }

  ngOnInit(): void {
    this.getMyIp();
  }
}
