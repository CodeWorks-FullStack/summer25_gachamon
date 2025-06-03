import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    console.log('🪙🪙🪙 Coins controller!!!!');
  }

  addCoin() {
    console.log('Adding coin! 🪙');
    coinsService.increaseCoins()
  }
}