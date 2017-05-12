"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var player_service_1 = require("./player.service");
var GameComponent = (function () {
    function GameComponent(playerService) {
        this.playerService = playerService;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers().then(function (players) { return _this.players = players; });
    };
    GameComponent.prototype.updatePlayer = function (player) {
        this.playerService.update(this.player);
    };
    GameComponent.prototype.updateLifeTotal = function (val, player) {
        this.player = player;
        if (val === 'up') {
            this.player['startLife'] += 1;
        }
        else if (val === 'down') {
            this.player['startLife'] -= 1;
        }
        this.updatePlayer(this.player);
    };
    GameComponent.prototype.resetLifeTotal = function (player) {
        this.player = player;
        this.player['startLife'] = 20;
        this.updatePlayer(this.player);
    };
    return GameComponent;
}());
GameComponent = __decorate([
    core_1.Component({
        selector: 'game',
        templateUrl: './game.component.html',
        styleUrls: ['./game.component.css']
    }),
    __metadata("design:paramtypes", [player_service_1.PlayerService])
], GameComponent);
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map