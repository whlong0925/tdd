/**
 * Created by tiandandan-pc on 26/3/21.
 */

$(document).ready(function() {



    //点击右侧菜单分类显示
   /* $("a.file-multi").tap(function(){
        //alert("aaaa");
        $("#HCpanel").panel("close");

        $(".hc-p-list a[name!='s2']").hide();

    });*/
    $.get('navig.html',function(data){
        $("#navigation").html(data);
    });

    $("#navigation").on('tap','a',function(){
        var name = this.name;
        $("#HCpanel").panel("close");
        setTimeout(function(){window.location.href="index.html?type="+name}, 200);

    });
    var name = GetQueryString("type");
    if(name==null){
        name = "s1";
    }
    if(name == 's1'){
        $(".hc-p-list a").show();
    }else{
        $(".hc-p-list a[name!='" + name + "']").hide();
        $(".hc-p-list a[name='" + name + "']").show();
    }


});
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
