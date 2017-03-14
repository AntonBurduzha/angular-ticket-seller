export default class FilmController {
  constructor() {
    let vm = this;
    vm.filmName = localStorage.getItem('filmName');
    vm.cinemaHall = vm.createCinemaHall(8,8);
    vm.placeData = {row: '', place: ''};
    vm.showingPlaceData = false;
  }

  setSelected(rowIndex, colIndex) {
    this.cinemaHall = this.createCinemaHall(8, 8);
    this.cinemaHall[rowIndex][colIndex] = 'X';
    this.placeData.row = rowIndex + 1;
    this.placeData.place = colIndex + 1;
    this.showingPlaceData = true;
  }

  createCinemaHall(rows, cols){
    let arr = [];
    for(let i = 0; i < cols; i++){
      arr[i] = [];
      for(let j = 0; j < rows; j++){
        arr[i][j] = '';
      }
    }
    return arr;
  }
}