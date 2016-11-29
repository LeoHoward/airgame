module fighter{

    export class BgMap extends egret.DisplayObjectContainer{

        private bmpArr:egret.Bitmap[];
        private rowCount:number;
        private stageW:number;
        private stageH:number;
        private textureHeight:number;
        private speed:number = 2;

        public constructor(){
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage,this);
        }

        private onAddToStage(event:egret.Event){
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            var texture:egret.Texture = RES.getRes("bgImage");
            //保留原始纹理的高度，用于后续的计算
            this.textureHeight = texture.textureHeight;
            //计算在当前屏幕中，需要的图片数量
            this.rowCount = Math.ceil(this.stageH/this.textureHeight) + 1;
            this.bmpArr = [];
            //创建这些图片，并设置y坐标，让它们连接起来
            for(var i:number = 0; i < this.rowCount;i++){
                var bgBmp:egret.Bitmap = fighter.CreateBitMapByName("bgImage");
                bgBmp.y = this.textureHeight*i-(this.textureHeight*this.rowCount-this.stageH);
                this.bmpArr.push(bgBmp);
                this.addChild(bgBmp);
            }
        }

        public start():void{
            this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this);
            this.addEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this);
        }

        private enterFrameHandler(event:egret.Event):void{
            for(var i:number=0; i<this.rowCount;i++){
                var bgBmp:egret.Bitmap = this.bmpArr[i];
                bgBmp.y += this.speed;
                //判断超出屏幕后，回到队首，这样来实现循环反复
                if(bgBmp.y > this.stageH){
                    bgBmp.y = this.bmpArr[0].y - this.textureHeight;
                    this.bmpArr.pop();
                    this.bmpArr.unshift(bgBmp);

                }
            }
        }
        public pause():void{
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        }
    }
}