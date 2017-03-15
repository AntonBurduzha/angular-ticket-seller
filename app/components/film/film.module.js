import FilmController from './film.controller'
import modal from 'angular-ui-bootstrap/src/modal';
import { ModalDemoController, ModalInstanceController } from './modal.film.controller'

angular.module('app.film', ['ui.bootstrap.tpls', modal])
  .controller('FilmController', FilmController)
  .controller('ModalDemoController', ModalDemoController)
  .controller('ModalInstanceController', ModalInstanceController);