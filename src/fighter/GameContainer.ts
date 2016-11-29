module fighter
{
    export class GameContainer extends egret.DisplayObjectContainer{

        private stageW:number;
        private stageH:number;
        private btnStart:egret.Bitmap;

        private bg:fighter.BgMap;

        public constructor(){
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        private onAddToStage(event:egret.Event){
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage,this);
            this.createGameScene();
        }

        private createGameScene():void{
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;

            this.bg = new fighter.BgMap();
            this.addChild(this.bg);

            this.btnStart = fighter.CreateBitMapByName("btnStart");
            this.btnStart.x = (this.stageW - this.btnStart.width)/2;
            this.btnStart.y = (this.stageH - this.btnStart.height)/2;
            this.btnStart.touchEnabled = true;
            this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this)
            this.addChild(this.btnStart);
        }

        private gameStart():void{
            this.bg.start();
        }
    }
}