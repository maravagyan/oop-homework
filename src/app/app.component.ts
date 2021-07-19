import { Component } from '@angular/core';
import { Player } from './Player';
import { Ranger } from './Ranger';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Inheritance

export class AppComponent extends Player {
  title = 'classTask';
  ranger_1 = 'Ranger1';
  ranger_2 = 'Ranger2';
  ranger_1_life: number;
  ranger_2_life: number;
  player_1: any;
  player_2: any;
  isplayer_1: boolean = false;
  
  // Polimorfizm 

  hit(param): void {
    let startTime = new Date().getTime();
    this[param]();
    let interval = setInterval(() => {
      this.isplayer_1 = !this.isplayer_1;
      this.isplayer_1 ? this.ranger_1_life = this.player_1?.fight(3) : this.ranger_2_life = this.player_2?.fight(2);
      param === 'stop' || this.ranger_1_life <= 0 || this.ranger_2_life <= 0 ? clearInterval(interval) : null;
      if ((new Date().getTime() - startTime) > 3000) {
        clearInterval(interval);
        this.ranger_1_life > this.ranger_2_life ? alert('the winner is Ranger 1') : alert('the winner is Ranger 2');  
      }
    }, 100);
  }

  generateRanger(param): void {
    this[param] = new Ranger(param);
  }
}
