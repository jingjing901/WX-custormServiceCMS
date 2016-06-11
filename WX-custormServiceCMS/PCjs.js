/**
 * Created by Administrator on 15-12-22.
 */
//function update(){
//    $.ajax(function(){
//        method:"POST",
//            url:"",
//            success:function(return){
//            $("#tableData").html(return);
//        }
//    })
//}

$(document).ready(function(){

})
function rcheckpassword(){
    var pwd = document.getElementById("inputPassword2");
    var rpwd = document.getElementById("inputPassword3");
    if(pwd.value ==""){
        alert("密码不能为空！");
        return false;
    }else{
        if(rpwd.value==""){
            alert("请您输入重复的密码！");
            return false;
        }else{
            if(pwd.value != rpwd.value){
                alert("两次密码不一致，请重新输入");
                return false;
            }
        }
    }
    var pwd = document.getElementById("inputPassword");
    var rpwd = document.getElementById("inputPassword1");
    if(pwd.value ==""){
        alert("请输入原密码！");
        return false;
    }else{
        if(pwd.value != rpwd.value) {
            alert("原密码输入错误，请重新输入！");
            return false;
        }
    }
}