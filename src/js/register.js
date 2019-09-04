$(function(){
   $(".zhuce").click(function(){
        var uName = $(".in-1").val();
        var uPassword = $(".in-2").val();
        //console.log(uName);
        if(!uName){
            $(".tishi").html("用户名不能为空");
            return;
        }

        if(!uPassword){
            $(".tishi").html("密码不能为空");
            return;
        }
        var cookieStr = $cookie.get("registor")?$cookie.get('registors') : '';
        var cookieObj = convertCookieStrToCookieObj(cookieStr);
        if(uName in cookieObj){
            $(".tishi").html("用户名已存在");
            return;
        }else{
            cookieObj[uName] = uPassword;    
        }
        $cookie.create("registor",JSON.stringify(cookieObj),7);
        $(".tishi").html("注册成功");
   }) 
})
function convertCookieStrToCookieObj(str) {
    if (!str) {
        return {};
    }
    return JSON.parse(str);
}