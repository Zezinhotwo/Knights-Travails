class Knight {
  private initPoint: number[];
  private endPoint: number[];

  constructor(initPoint, endPoint) {
    this.initPoint = initPoint;
    this.endPoint = endPoint;

    this.init();
  }
  init(): void {
    this.move();
  }

  move(): void {
    const ctBoard: number[][] = this.board();
    const [initX, initY] = this.initPoint;
    const [endX, endY] = this.endPoint;
    // ctBoard[initX][initY] = 1;
    // ctBoard[endX][endY] = -1;

    const bfs: {
      distance: number | null;
      predecessor: [number, number] | null;
    }[][] = [];

    for (let i = 0; i < ctBoard.length; i++) {
      bfs[i] = []; // ← inicializa a linha i

      for (let j = 0; j < ctBoard[i].length; j++) {
        bfs[i][j] = {
          distance: null,
          predecessor: null,
        };
      }
    }
    bfs[initX][initY].distance = 0;
    const queue = [[initX, initY]];

    while (queue.length > 0) {
      const [x, y] = queue.shift()!;

      const neighbors = this.possibleKnightMoves(x,y);

      for (const [nx, ny] of neighbors) {
        if (bfs[nx][ny].distance === null) {
          bfs[nx][ny].distance = bfs[x][y].distance! + 1;
          bfs[nx][ny].predecessor = [x, y];
          queue.push([nx, ny]);
        }
      }
    }
  }
  possibleKnightMoves(x: number, y: number): number[][] {
    const moves = [
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
    ];

    return moves
      .map(([dx, dy]) => [x + dx, y + dy])
      .filter(([nx, ny]) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8); // dentro do tabuleiro
  }
  board(): number[][] {
    return Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => 0));
  }
}

new Knight([3, 3], [5, 4]);
