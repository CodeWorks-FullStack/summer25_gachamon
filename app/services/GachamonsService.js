import { AppState } from "../AppState.js";

class GachamonsService {
  getRandomGachamon() {
    if (AppState.coins < 1) {
      return
    }

    AppState.coins-- // 💂!!! triggers observer
    // console.log(AppState.coins);
    const gachamons = AppState.gachamons
    const randomIndex = Math.floor(Math.random() * gachamons.length)
    const randomGachamon = gachamons[randomIndex]
    // console.log('index is ' + randomIndex);
    // console.log('gachamon is ' + randomGachamon.name);
    AppState.myGachamons.push(randomGachamon) // 💂!!! triggers observer
    AppState.activeGachamon = randomGachamon // 💂!!! triggers observer
  }

  setActiveGachamon(name) {
    const gachamons = AppState.gachamons
    const foundGachamon = gachamons.find(gachamon => gachamon.name == name)

    // NOTE sets aside a single gachamon in a separate place in the AppState that is easily accessible to the rest of the application
    // 🗄️ ---> 📁
    AppState.activeGachamon = foundGachamon // 💂!!! triggers observer
    // console.log('setting ' + name, AppState.activeGachamon);
  }

}

export const gachamonsService = new GachamonsService()