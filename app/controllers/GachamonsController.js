import { AppState } from "../AppState.js";

export class GachamonsController {
  // NOTE constructors in controllers *usually* run when the page loads
  constructor() {
    console.log('GACHAMONS ARE READY TO BE ACQUIRED 🐿️🦞🐢');
    this.drawGachamons()
  }

  drawGachamons() {
    const gachamons = AppState.gachamons
    const gachamonsListElem = document.getElementById('gachamons-list')
    let gachamonCards = ''
    gachamons.forEach(gachamon => gachamonCards += gachamon.cardHTMLTemplate)
    // console.log(gachamonCards);

    gachamonsListElem.innerHTML = gachamonCards
  }

  selectGachamon(gachamonName) {
    console.log('selecting gachamon', gachamonName);

  }

}