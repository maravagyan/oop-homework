export class Ranger {
    player = {
        name: '',
        life: 30,
    }
    constructor(player) {
        this.player.name = player;
        console.log(`${this.player.name} is genereted`);
    }

    fight(score): number {
        if (this.player.life <= 0) {
            return;
        };
        this.player.life <= 0 ? 0 : this.player.life -= score;
        console.log(`the ${this.player.name}'s life is ${this.player.life}`);
        
    }
}