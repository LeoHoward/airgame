var fighter;
(function (fighter) {
    var BgMap = (function (_super) {
        __extends(BgMap, _super);
        function BgMap() {
            _super.call(this);
            this.speed = 2;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        var d = __define,c=BgMap,p=c.prototype;
        p.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            var texture = RES.getRes("bgImage");
            //保留原始纹理的高度，用于后续的计算
            this.textureHeight = texture.textureHeight;
            //计算在当前屏幕中，需要的图片数量
            this.rowCount = Math.ceil(this.stageH / this.textureHeight) + 1;
            this.bmpArr = [];
            //创建这些图片，并设置y坐标，让它们连接起来
            for (var i = 0; i < this.rowCount; i++) {
                var bgBmp = fighter.CreateBitMapByName("bgImage");
                bgBmp.y = this.textureHeight * i - (this.textureHeight * this.rowCount - this.stageH);
                this.bmpArr.push(bgBmp);
                this.addChild(bgBmp);
            }
        };
        p.start = function () {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        };
        p.enterFrameHandler = function (event) {
            for (var i = 0; i < this.rowCount; i++) {
                var bgBmp = this.bmpArr[i];
                bgBmp.y += this.speed;
                //判断超出屏幕后，回到队首，这样来实现循环反复
                if (bgBmp.y > this.stageH) {
                    bgBmp.y = this.bmpArr[0].y - this.textureHeight;
                    this.bmpArr.pop();
                    this.bmpArr.unshift(bgBmp);
                }
            }
        };
        p.pause = function () {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        };
        return BgMap;
    }(egret.DisplayObjectContainer));
    fighter.BgMap = BgMap;
    egret.registerClass(BgMap,'fighter.BgMap');
})(fighter || (fighter = {}));
//# sourceMappingURL=BgMap.js.map