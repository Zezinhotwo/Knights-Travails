var Knight = /** @class */ (function () {
    function Knight(initPoint, endPoint) {
        this.initPoint = initPoint;
        this.endPoint = endPoint;
        this.init();
    }
    Knight.prototype.init = function () {
        this.move();
    };
    Knight.prototype.move = function () {
        var ctBoard = this.board();
        var _a = this.initPoint, initX = _a[0], initY = _a[1];
        var _b = this.endPoint, endX = _b[0], endY = _b[1];
        // ctBoard[initX][initY] = 1;
        // ctBoard[endX][endY] = -1;
        var bfs = [];
        for (var i = 0; i < ctBoard.length; i++) {
            bfs[i] = []; // ← inicializa a linha i
            for (var j = 0; j < ctBoard[i].length; j++) {
                bfs[i][j] = {
                    distance: null,
                    predecessor: null,
                };
            }
        }
        bfs[initX][initY].distance = 0;
        var queue = [[initX, initY]];
        while (queue.length > 0) {
            var _c = queue.shift(), x = _c[0], y = _c[1];
            var neighbors = this.possibleKnightMoves(x, y);
            for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
                var _d = neighbors_1[_i], nx = _d[0], ny = _d[1];
                if (bfs[nx][ny].distance === null) {
                    bfs[nx][ny].distance = bfs[x][y].distance + 1;
                    bfs[nx][ny].predecessor = [x, y];
                    queue.push([nx, ny]);
                }
            }
        }
    };
    Knight.prototype.possibleKnightMoves = function (x, y) {
        var moves = [
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
            .map(function (_a) {
            var dx = _a[0], dy = _a[1];
            return [x + dx, y + dy];
        })
            .filter(function (_a) {
            var nx = _a[0], ny = _a[1];
            return nx >= 0 && nx < 8 && ny >= 0 && ny < 8;
        }); // dentro do tabuleiro
    };
    Knight.prototype.board = function () {
        return Array.from({ length: 8 }, function () { return Array.from({ length: 8 }, function () { return 0; }); });
    };
    return Knight;
}());
new Knight([3, 3], [5, 4]);
