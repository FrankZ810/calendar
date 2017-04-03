var _tab = document.getElementById("tab");
var _li = _tab.getElementsByTagName("li");
var _txt = document.getElementById("txt");
var pArr = [
    "1月活动内容……",
    "2月活动内容……",
    "3月活动内容……",
    "4月活动内容……",
    "5月活动内容……",
    "6月活动内容……",
    "7月活动内容……",
    "8月活动内容……",
    "9月活动内容……",
    "10月活动内容……",
    "11月活动内容……",
    "12月活动内容……"
]
for (var i = 0; i < _li.length; i++) {
    _li[i].index = i;
    _li[i].onmouseover = function () {
        for (var j = 0; j < _li.length; j++) {
            _li[j].className = "";
        }
        this.className = "active";
        _txt.innerHTML = "<h2>" + (this.index + 1) + "月活动</h2><p>" + pArr[this.index] + "</p>";
    }
}