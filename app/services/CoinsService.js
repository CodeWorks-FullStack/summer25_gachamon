import { AppState } from "../AppState.js";

class CoinsService {
  increaseCoins() {
    // NOTE stupid primitives
    // let coins = AppState.coins
    // coins++
    AppState.coins++
    // console.log('increasing coins', AppState.coins);
  }
}

// singleton
export const coinsService = new CoinsService()