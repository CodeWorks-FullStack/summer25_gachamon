import { Gachamon } from './models/Gachamon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  coins = 0
  gachamons = [
    new Gachamon({ name: 'oslo', emoji: '🦧', type: 'intellectual', rarity: 1 }),
    new Gachamon({ name: 'paulie', emoji: '🐩', type: 'rad', rarity: 0 }),
    new Gachamon({ name: 'ricky', emoji: '🦏', type: 'charger', rarity: 2 }),
    new Gachamon({ name: 'justin', emoji: '🦖', type: 'intellectual', rarity: 4 }),
    new Gachamon({ name: 'mick', emoji: '🐊', type: 'charger', rarity: 3 }),
    new Gachamon({ name: 'mr. worldwide', emoji: '🐢', type: 'rad', rarity: 5 }),
    new Gachamon({ name: 'snips', emoji: '🦞', type: 'charger', rarity: 1 }),
    new Gachamon({ name: 'squirrelttle', emoji: '🐿️', type: 'intellectual', rarity: 2 }),
    new Gachamon({ name: 'jumbotron', emoji: '🐞', type: 'rad', rarity: 1 }),
  ]

  // NOTE there will not be an activeGachamon when the application starts

  /** * @type {Gachamon}*/
  activeGachamon = null

  /** * @type {Gachamon[]}*/
  myGachamons = []
}

export const AppState = createObservableProxy(new ObservableAppState())