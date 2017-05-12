import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
    selector: 'players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
    players: Player[];
    player: Player;

    constructor(
        private playerService: PlayerService,
        private location: Location
    ) {}

    getPlayers(): void {
        this.playerService.getPlayers().then(players => this.players = players);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return undefined; }
        this.playerService.create(name)
            .then(player => {
                this.players.push(player);
                this.player = null;
        });
    }

    ngOnInit(): void {
        this.getPlayers();
    }

    goBack(): void {
        this.location.back();
    }
}
