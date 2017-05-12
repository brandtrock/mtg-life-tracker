import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';

import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
    players: Player[];
    player: Player;

    constructor(
        private playerService: PlayerService
    ) {}

    ngOnInit(): void {
        this.playerService.getPlayers().then(players => this.players = players);
    }

    updatePlayer(player: Player): void {
        this.playerService.update(this.player);
    }

    updateLifeTotal(val: string, player: Player): void {
        this.player = player;
        if (val === 'up') {
            this.player['startLife'] += 1;
        } else if (val === 'down') {
            this.player['startLife'] -= 1;
        }
        this.updatePlayer(this.player);
    }

    resetLifeTotal(player: Player): void {
        this.player = player;
        this.player['startLife'] = 20;
        this.updatePlayer(this.player);
    }
}
