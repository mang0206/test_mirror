
var memberCountConTxt = $('#my-data').data().name;
  

$({ val : 0 }).animate({ val : memberCountConTxt }, {
  duration: 500,
 step: function() {
   var num = this.val;
   $(".number_count").text(num);
 },
 complete: function() {
   var num = this.val;
   $(".number_count").text(num);
 }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

