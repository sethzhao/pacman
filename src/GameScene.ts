class GameScene extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.createScene();
    }

    /**
     * 创建游戏场景
     */
    private createScene(){
        var bg = GameManager.instance().createBitmapByName("bg");
        this.addChild(bg);
    }


    /**
     * 创建豆子
     */
    public createBeans():Array<string>{

        var beans:Array<string> = [];

        var noWay:Array<string> = GameManager.instance().noWay;

        //除了不能走的位置以外，画上豆子
        for (var i = 0; i < 25;i++) {//y轴25行
            x: for (var j = 0; j < 19; j++) {//x轴19列

                for (var k = 0; k < noWay.length;k++) {
                    if (noWay[k] === j + "," + i) {
                        continue x;
                    }
                }

                var bean: egret.Bitmap = GameManager.instance().createBitmapByName("bean");
                this.addChild(bean);
                //每个格子8像素 偏移边界9像素
                bean.x = j * 8 + 9;
                bean.y = i * 8 + 9;
                beans.push(j+","+i);
            }
        }

        return beans;

    }


}