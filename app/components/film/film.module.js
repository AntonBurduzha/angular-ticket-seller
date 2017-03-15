import FilmController from './film.controller'
import { ModalDemoController, ModalInstanceController } from './modal.film.controller'
import { ModalThanksDemoController, ModalThanksInstanceController } from './modal.thanks.controller'

angular.module('app.film', [])
  .controller('FilmController', FilmController)
  .controller('ModalDemoController', ModalDemoController)
  .controller('ModalInstanceController', ModalInstanceController)
  .controller('ModalThanksDemoController', ModalThanksDemoController)
  .controller('ModalThanksInstanceController', ModalThanksInstanceController);