import { AppState } from "../AppState.js";

class GachamonsService {
  getRandomGachamon() {
    if (AppState.coins < 1) {
      return
    }

    AppState.coins--
    console.log(AppState.coins);


    const gachamons = AppState.gachamons
    const randomIndex = Math.floor(Math.random() * gachamons.length)
    const randomGachamon = gachamons[randomIndex]
    console.log('index is ' + randomIndex);
    console.log('gachamon is ' + randomGachamon.name);
    AppState.myGachamons.push(randomGachamon)
    AppState.activeGachamon = randomGachamon
    console.log(AppState.myGachamons);

  }

  setActiveGachamon(name) {
    const gachamons = AppState.gachamons
    const foundGachamon = gachamons.find(gachamon => gachamon.name == name)
    AppState.activeGachamon = foundGachamon
    console.log('setting ' + name, AppState.activeGachamon);
  }

}

export const gachamonsService = new GachamonsService()