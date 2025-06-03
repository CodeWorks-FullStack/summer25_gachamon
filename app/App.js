import { CoinsController } from "./controllers/CoinsController.js"
import { GachamonsController } from "./controllers/GachamonsController.js"

class App {

  // NOTE this works but doesn't make much sense
  // jeremysBreakfast = new CoinsController()

  // NOTE you can add as many controllers as needed to the App
  coinsController = new CoinsController()
  gachamonsController = new GachamonsController()
}

window['app'] = new App()


