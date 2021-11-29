//클릭 버튼 색 변경
$(function(){
    let $label_chk = $(".label_chk");

    $label_chk.click(function(){
        if($label_chk.hasClass("clicked")) {
            $label_chk.removeClass("clicked")
        }
        $(this).addClass("clicked");
    });
    
});

$(function(){
    let $gender_chk = $(".gender_chk");

    $gender_chk.click(function(){
        if($gender_chk.hasClass("clicked")) {
            $gender_chk.removeClass("clicked")
        }
        $(this).addClass("clicked");
    });
    
});

//개인정보 입력 완료 안내 창
// function personal() {
//     let answer = document.getElementById("personal_submit").Value;
//     if(answer == null){
//         alert("개인정보 입력 후 버튼을 눌러주세요 :)")
//     }
// }

// function personal(){
//     thrForm=document.personal_form;
//     if(theForm.gender.value == ""){
//         alert("개인정보 입력 후 버튼을 눌러주세요 :)")
//     }
//     if(theForm.age == ""){
//         alert("개인정보 입력 후 버튼을 눌러주세요 :)")
//     }
//     if(theForm.weight == ""){
//         alert("개인정보 입력 후 버튼을 눌러주세요 :)")
//     }
//     if(theForm.height == ""){
//         alert("개인정보 입력 후 버튼을 눌러주세요 :)")
//     }
//     if(theForm.activity == ""){
//         alert("개인정보 입력 후 버튼을 눌러주세요 :)")
//     }
//     theForm.submit();
// }

// $("#personal_submit").click(function(){
//     if($.trim($(".gender").val())==""){
//         alert("개인정보 입력 후 버튼을 눌러주세요 :)")
//         return false
//     }else{
//         $("#form_personal").submit();
//     }
// });

function personal_submit() {
    if (!check_gender(form.gender.value)){
        return false;
    } else if (!check_age(form.age.value)){
        return false;
    } else if (!check_weight(form.weight.value)){
        return false;
    } else if (!check_height(form.height.value)){
        return false;
    } else if (!check_activity(form.activity.value)){
        return false;
    }
    return true;
}

function exist_data(value, dataname) {
    if (value == "") {
        alert(dataname + " 입력해주세요!");
        return false;
    }
    return true;
}
// 성별 입력
function check_gender(gender) {
    if (!exist_data(gender, "성별을"))
        return false;
    
    return true;
}
// 나이 입력
function check_age(age) {
    if (!exist_data(age, "나이를"))
        return false;
    
    return true;
}
// 몸무게 입력
function check_weight(weight) {
    if (!exist_data(weight, "몸무게를"))
        return false;
    
    return true;
}
// 키 입력
function check_height(height) {
    if (!exist_data(height, "키를"))
        return false;
    
    return true;
}
// 활동량 입력
function check_activity(activity) {
    if (!exist_data(activity, "활동량을"))
        return false;
    
    return true;
}

console.log("hi")