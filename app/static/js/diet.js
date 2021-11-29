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