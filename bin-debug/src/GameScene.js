var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        _super.call(this);
        this.createScene();
    }
    /**
     * 创建游戏场景
     */
    GameScene.prototype.createScene = function () {
        var bg = GameManager.instance().createBitmapByName("bg");
        this.addChild(bg);
    };
    /**
     * 创建豆子
     */
    GameScene.prototype.createBeans = function () {
        var beans = [];
        var noWay = GameManager.instance().noWay;
        for (var i = 0; i < 25; i++) {
            x: for (var j = 0; j < 19; j++) {
                for (var k = 0; k < noWay.length; k++) {
                    if (noWay[k] === j + "," + i) {
                        continue x;
                    }
                }
                var bean = GameManager.instance().createBitmapByName("bean");
                this.addChild(bean);
                //每个格子8像素 偏移边界9像素
                bean.x = j * 8 + 9;
                bean.y = i * 8 + 9;
                beans.push(j + "," + i);
            }
        }
        return beans;
    };
    return GameScene;
})(egret.DisplayObjectContainer);
GameScene.prototype.__class__ = "GameScene";
