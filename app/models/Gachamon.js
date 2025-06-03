import { AppState } from "../AppState.js"

export class Gachamon {
  // NOTE we can pass an object through the constructor
  constructor(data) {
    this.name = data.name
    this.type = data.type
    this.emoji = data.emoji
    this.rarity = data.rarity
  }

  // NOTE a getter is a computed property
  // a getter cannot take any arguments (can have no parameters)
  // a getter must return a value
  get cardHTMLTemplate() {

    return `
    <div class="col-md-2 mb-3">
      <div onclick="app.gachamonsController.selectGachamon('${this.name}')" class="rounded p-2 gachamon-border ${this.backgroundColor}">
        <div class="text-end">
          <b>${this.name}</b>
          <hr>
        </div>
        <div class="text-center">
          <span class="display-1">${this.emoji}</span>
        </div>
      </div>
    </div>`
  }

  get activeHTMLTemplate() {
    return `
    <div class="col-8">
      <div class="rounded p-2 gachamon-border ${this.backgroundColor}">
        <div class="text-end">
          <h1>${this.name}</h1>
          <hr>
        </div>
        <div class="text-center">
          <span class="active-gachamon-size">${this.emoji}</span>
        </div>
        <div class="fs-3 d-flex justify-content-between">
          <div>${this.type}</div>
          <div>x${this.quantity}</div>
        </div>
        <div class="text-center fs-3" title="Rarity is ${this.rarity}">
          ${this.starEmojis}
        </div>
      </div>
    </div>
    `
  }

  get backgroundColor() {
    if (this.type == 'intellectual') {
      return 'bg-primary'
    }

    if (this.type == 'rad') {
      return 'bg-info'
    }

    if (this.type == 'charger') {
      return 'bg-danger'
    }

    return 'bg-light'
  }

  get starEmojis() {
    let emojis = ''

    for (let i = 0; i < this.rarity; i++) {
      emojis += '⭐'
    }

    return emojis
  }

  get quantity() {
    let count = 0

    AppState.myGachamons.forEach(gachamon => {
      if (gachamon.name == this.name) {
        count++
      }
    })

    return count
  }
}
