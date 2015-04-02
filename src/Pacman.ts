class Pacman extends egret.Sprite {

    private _timer:egret.Timer;
    private _position:egret.Point;
    private _duration:number;
    private _direction:number;


    public constructor(x:number, y:number) {
        super();
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

    private controlListener() {

        if (egret.MainContext.deviceType != egret.MainContext.DEVICE_MOBILE) {
            var self = this;
            document.addEventListener("keydown", function (event:KeyboardEvent) {
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
    }


    private create() {
        var pacman:egret.Bitmap = GameManager.instance().createBitmapByName("pacman");
        this.addChild(pacman);
    }

    public move() {
        var x = this._position.x;
        var y = this._position.y;

        switch (this._direction) {
            case Constants.UP:
                if(GameManager.instance().isPassable(x,--y)) {
                    this._position.y--;
                }else{
                    return;
                }
                break;
            case Constants.RIGHT:
                if(GameManager.instance().isPassable(++x,y)){
                    this._position.x++;
                }else{
                    return;
                }
                break;
            case Constants.DOWN:
                if(GameManager.instance().isPassable(x,++y)){
                    this._position.y++;
                }else{
                    return;
                }
                break;
            case Constants.LEFT:
                if(GameManager.instance().isPassable(--x,y)){
                    this._position.x--;
                }else{
                    console.log("no");
                    return;
                }
                break;
        }

        egret.Tween.get(this).to({ x: x * 8 + 3, y: y * 8 + 3 }, this._duration);
    }
}