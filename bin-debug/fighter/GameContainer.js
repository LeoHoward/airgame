var fighter;
(function (fighter) {
    var GameContainer = (function (_super) {
        __extends(GameContainer, _super);
        function GameContainer() {
            _super.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        var d = __define,c=GameContainer,p=c.prototype;
        p.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        p.createGameScene = function () {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            this.bg = new fighter.BgMap();
            this.addChild(this.bg);
            this.btnStart = fighter.CreateBitMapByName("btnStart");
            this.btnStart.x = (this.stageW - this.btnStart.width) / 2;
            this.btnStart.y = (this.stageH - this.btnStart.height) / 2;
            this.btnStart.touchEnabled = true;
            this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this);
            this.addChild(this.btnStart);
        };
        p.gameStart = function () {
            this.bg.start();
        };
        return GameContainer;
    }(egret.DisplayObjectContainer));
    fighter.GameContainer = GameContainer;
    egret.registerClass(GameContainer,'fighter.GameContainer');
})(fighter || (fighter = {}));
//# sourceMappingURL=GameContainer.js.map