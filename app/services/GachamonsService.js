import { AppState } from "../AppState.js";

class GachamonsService {
  setActiveGachamon(name) {
    const gachamons = AppState.gachamons
    const foundGachamon = gachamons.find(gachamon => gachamon.name == name)
    AppState.activeGachamon = foundGachamon
    console.log('setting ' + name, AppState.activeGachamon);
  }

}

export const gachamonsService = new GachamonsService()