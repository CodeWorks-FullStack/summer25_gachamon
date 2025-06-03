
export class Gachamon {
  // NOTE we can pass an object through the constructor
  constructor(data) {
    this.name = data.name
    this.type = data.type
    this.emoji = data.emoji
    this.rarity = data.rarity
    this.quantity = 0
  }

}

// new Gachamon({ name: 'oslo', emoji: '🦧', type: 'intellectual', rarity: 1 })