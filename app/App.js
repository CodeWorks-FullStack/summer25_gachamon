import { CoinsController } from "./controllers/CoinsController.js"

class App {

  // jeremysBreakfast = new CoinsController()
  coinsController = new CoinsController()
}

window['app'] = new App()


