var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameManager = (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        _super.call(this);
        this._sheet = RES.getRes("pacman_json");
        this._noWay = RES.getRes("noWay");
    }
    GameManager.instance = function () {
        if (GameManager._instance == null) {
            GameManager._instance = new GameManager();
        }
        return this._instance;
    };
    GameManager.prototype.run = function (stage) {
        this._gameScene = new GameScene();
        this._beans = this._gameScene.createBeans();
        this._pacman = new Pacman(8, 4);
        stage.addChild(this._gameScene);
        stage.addChild(this._pacman);
    };
    Object.defineProperty(GameManager.prototype, "noWay", {
        get: function () {
            return this._noWay;
        },
        enumerable: true,
        configurable: true
    });
    GameManager.prototype.isPassable = function (x, y) {
        if (x < 0 || y < 0) {
            return false;
        }
        if (x > 24) {
            return false;
        }
        if (y > 18) {
            return false;
        }
        for (var i = 0; i < this._noWay.length; i++) {
            if (this._noWay[i] === x + "," + y) {
                return false;
            }
        }
        return true;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    GameManager.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = this._sheet.getTexture(name);
        result.texture = texture;
        return result;
    };
    return GameManager;
})(egret.DisplayObjectContainer);
GameManager.prototype.__class__ = "GameManager";
