var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Pacman = (function (_super) {
    __extends(Pacman, _super);
    function Pacman(x, y) {
        _super.call(this);
        this.x = x * 8 + 3;
        this.y = y * 8 + 3;
        this.create();
        this._position = new egret.Point(x, y);
        this._duration = 300;
        this._direction = Constants.LEFT;
        this._timer = new egret.Timer(this._duration, 0);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.move, this);
        this._timer.start();
        this.move();
        this.controlListener();
    }
    Pacman.prototype.controlListener = function () {
        if (egret.MainContext.deviceType != egret.MainContext.DEVICE_MOBILE) {
            var self = this;
            document.addEventListener("keydown", function (event) {
                switch (event.keyCode) {
                    case 87:
                    case 38:
                        self._direction = Constants.UP;
                        break;
                    case 68:
                    case 39:
                        self._direction = Constants.RIGHT;
                        break;
                    case 83:
                    case 40:
                        self._direction = Constants.DOWN;
                        break;
                    case 65:
                    case 37:
                        self._direction = Constants.LEFT;
                        break;
                }
            });
        }
    };
    Pacman.prototype.create = function () {
        var pacman = GameManager.instance().createBitmapByName("pacman");
        this.addChild(pacman);
    };
    Pacman.prototype.move = function () {
        var x = this._position.x;
        var y = this._position.y;
        console.log(this._position);
        switch (this._direction) {
            case Constants.UP:
                if (GameManager.instance().isPassable(x, --y)) {
                    this._position.y--;
                }
                else {
                    return;
                }
                break;
            case Constants.RIGHT:
                if (GameManager.instance().isPassable(++x, y)) {
                    this._position.x++;
                }
                else {
                    return;
                }
                break;
            case Constants.DOWN:
                if (GameManager.instance().isPassable(x, ++y)) {
                    this._position.y++;
                }
                else {
                    return;
                }
                break;
            case Constants.LEFT:
                if (GameManager.instance().isPassable(--x, y)) {
                    this._position.x--;
                }
                else {
                    console.log("no");
                    return;
                }
                break;
        }
        egret.Tween.get(this).to({ x: x * 8 + 3, y: y * 8 + 3 }, this._duration);
    };
    return Pacman;
})(egret.Sprite);
Pacman.prototype.__class__ = "Pacman";
