export default class HomeController {
  constructor($state) {
    let vm = this;
    this.$state = $state;
    vm.filmsData = ['X-man', 'X-man 2', 'X-man 3', 'X-man-4'];
  }

  getCurrentFilm(name) {
    localStorage.setItem('filmName', name);
    this.$state.go('film', { name });
  }
}