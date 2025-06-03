import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";
import { CoinsController } from "./CoinsController.js";

export class GachamonsController {
  // NOTE constructors in controllers *usually* run when the page loads
  constructor() {
    // observers (state change)
    AppState.on('activeGachamon', this.drawActiveGachamon)
    AppState.on('myGachamons', this.drawMyGachamons)

    // page load
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

  drawActiveGachamon() {
    const gachamon = AppState.activeGachamon
    console.log('drawing active', gachamon);
    const activeGachamonElem = document.getElementById('active-gachamon')
    activeGachamonElem.innerHTML = gachamon.activeHTMLTemplate
  }

  drawMyGachamons() {
    const gachamons = AppState.myGachamons
    let gachamonCards = ''
    gachamons.forEach(gachamon => gachamonCards += gachamon.cardHTMLTemplate)
    const myGachamonsElem = document.getElementById('my-gachamons')
    myGachamonsElem.innerHTML = gachamonCards
  }

  selectGachamon(gachamonName) {
    console.log('selecting gachamon', gachamonName);
    gachamonsService.setActiveGachamon(gachamonName)
    // this.drawActiveGachamon()
  }

  selectRandomGachamon() {
    gachamonsService.getRandomGachamon()
    // this.drawActiveGachamon()
  }

}