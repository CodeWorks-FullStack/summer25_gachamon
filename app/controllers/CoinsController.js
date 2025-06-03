import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    console.log('🪙🪙🪙 Coins controller!!!!');
  }

  addCoin() {
    console.log('Adding coin! 🪙');
    coinsService.increaseCoins()
    this.drawCoins()
  }

  drawCoins() {
    const coinsElem = document.getElementById('coin-count')
    console.log('drawing coins!', coinsElem);
    coinsElem.innerText = AppState.coins.toString()
  }
}