export default class GameBoard {
    static board = [];
    constructor() {
        this.init();
    }

    init() {
        this.createBoard();
        this.move();
    }
    createBoard() {
        const board = [];
        for (let i = 0; i < 8; i++) {
            board[i] = [];
            for (let j = 0; j < 8; j++) {
                board[i][j] = 0;
            }
        }
        return board;
    }
    move(){
        const board = this.createBoard();
        this.board = board;
        board[0][1] = "vavalo";
        return board;
    }   

}