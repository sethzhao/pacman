class GameManager extends egret.DisplayObjectContainer {

    private _sheet: egret.SpriteSheet;
    private _gameScene:GameScene;
    private _pacman:Pacman;
    private _noWay:Array<string>;//不能走的位置
    private _beans:Array<string>;//豆子的位置

    public constructor() {
        super();
        this._sheet = RES.getRes("pacman_json");

        this._noWay = RES.getRes("noWay");
    }

    private static _instance:GameManager;

    public static instance():GameManager{
        if(GameManager._instance == null){
            GameManager._instance = new GameManager();
        }
        return this._instance;
    }


    public run(stage:egret.DisplayObjectContainer){
        this._gameScene = new GameScene();
        this._beans = this._gameScene.createBeans();

        this._pacman = new Pacman(8,4);

        stage.addChild(this._gameScene);
        stage.addChild(this._pacman);

    }

    public get noWay():Array<string>{
        return this._noWay;
    }

    public isPassable(x:number,y:number):boolean{
        //是否超出边界
        if(x < 0 || y < 0){
            return false;
        }
        if(x > 24){
            return false;
        }
        if(y > 18){
            return false;
        }
        //是否不能走
        for (var i = 0; i < this._noWay.length;i++) {
            if (this._noWay[i] === x + "," + y) {
                return false;
            }
        }
        return true;
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    public createBitmapByName(name: string): egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = this._sheet.getTexture(name);
        result.texture = texture;
        return result;
    }

}