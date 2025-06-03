
export class Gachamon {
  // NOTE we can pass an object through the constructor
  constructor(data) {
    this.name = data.name
    this.type = data.type
    this.emoji = data.emoji
    this.rarity = data.rarity
    this.quantity = 0
  }

  // NOTE a getter is a computed property
  // a getter cannot take any arguments (can have no parameters)
  // a getter must return a value
  get cardHTMLTemplate() {

    return `
    <div class="col-md-2 mb-3">
      <div class="rounded p-2 gachamon-border ${this.backgroundColor}">
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
}
