import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  boxes : any[];
  isNext : boolean;
  winner : string;
  
  constructor() { }

  ngOnInit() {
    this.restart();
  }

  restart(){
    this.boxes = Array(9).fill(null);
    this.winner = null;
    this.isNext = true;    
  }

  get player(){
    return this.isNext ? 'X' : 'O'; 
  }

  choose(id : number){
    if ( !this.boxes[id]){
      this.boxes.splice(id, 1, this.player);
      this.isNext = !this.isNext;
    }
    this.winner = this.whoIsTheWinner();
  }

  whoIsTheWinner() : string{
    //Board is numbered as this
    // 0 1 2
    // 3 4 5
    // 6 7 8
    const winningOptions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    for( var i = 0; i< winningOptions.length; i++){
      let [a, b, c] = winningOptions[i];
      if(this.boxes[a] && this.boxes[a] == this.boxes[b] && this.boxes[a] == this.boxes[c]){
        return this.boxes[a];
      }      
    }
    return null;
    
  }
}
