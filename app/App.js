import { CoinsController } from "./controllers/CoinsController.js"
import { GachamonsController } from "./controllers/GachamonsController.js"

class App {

  // jeremysBreakfast = new CoinsController()
  coinsController = new CoinsController()
  gachamonsController = new GachamonsController()
}

window['app'] = new App()


