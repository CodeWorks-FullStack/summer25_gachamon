
export class Gachamon {
  // NOTE we can pass an object through the constructor
  constructor(data) {
    this.name = data.name
    this.type = data.type
    this.emoji = data.emoji
    this.rarity = data.rarity
    this.quantity = 0
  }

  gachamonCardHTMLTemplate() {

    return `
    <div class="col-md-2 mb-3">
      <div class="rounded bg-primary p-2 gachamon-border">
        <div class="text-end">
          <b>Oslo</b>
          <hr>
        </div>
        <div class="text-center">
          <span class="display-1">🦧</span>
        </div>
      </div>
    </div>`
  }
}
