import home from './components/home/home.html'
import film from './components/film/film.html'

export function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/',
    template: home,
    controller: 'HomeController',
    controllerAs: 'vm'
  })
  .state({
    name: 'film',
    url: '/film',
    template: film,
    controller: 'FilmController',
    controllerAs: 'vm'
  });
  $urlRouterProvider.otherwise('/');
}