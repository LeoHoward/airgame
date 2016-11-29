var fighter;
(function (fighter) {
    var GameUtil = (function () {
        function GameUtil() {
        }
        var d = __define,c=GameUtil,p=c.prototype;
        GameUtil.hitTest = function (obj1, obj2) {
            var rect1 = obj1.getBounds();
            var rect2 = obj2.getBounds();
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            return rect1.intersects(rect2);
        };
        return GameUtil;
    }());
    fighter.GameUtil = GameUtil;
    egret.registerClass(GameUtil,'fighter.GameUtil');
    function CreateBitMapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    fighter.CreateBitMapByName = CreateBitMapByName;
})(fighter || (fighter = {}));
//# sourceMappingURL=GameUtil.js.map