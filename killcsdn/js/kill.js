window.csdn.anonymousUserLimit.judgment = function(){return true}
var targetBtn = document.getElementById("btn-readmore");
if(targetBtn)
{
    targetBtn.click();
}
(function killAdblock(){
    var target = document.querySelector(".adblock");
    if(target)
    {
        target.remove();
    }
})();