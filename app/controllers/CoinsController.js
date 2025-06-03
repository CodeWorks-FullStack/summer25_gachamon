import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    console.log('🪙🪙🪙 Coins controller!!!!');
    // NOTE 💂-----> AppState.coins
    // AppState.coins++ || AppState.coins--
    // 💂!!!!! --> drawCoins()
    AppState.on('coins', this.drawCoins)
  }

  addCoin() {
    // console.log('Adding coin! 🪙');
    coinsService.increaseCoins()
    // NOTE observer (guard) will call this method for us
    // this.drawCoins()
  }

  drawCoins() {
    const coinsElem = document.getElementById('coin-count')
    // console.log('drawing coins!', coinsElem);
    coinsElem.innerText = AppState.coins.toString()
  }
}