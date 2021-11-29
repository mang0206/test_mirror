// var memberCountConTxt= 0.423453;
// let memberCountConTxt = {{ result|safe }};
// var memberCountConTxt = {{ result | tojson}};
// var memberCountConTxt = JSON.parse( {{ result|safe }} );
// var memberCountConTxt = '{{ result }}' ;
// var memberCountConTxt = test_func({{result}})
var memberCountConTxt = $('#my-data').data().name;
  
//   $({ val : 0 }).animate({ val : memberCountConTxt }, {
//    duration: 2000,
//   step: function() {
//     var num = numberWithCommas(Math.floor(this.val));
//     $(".number_count").text(num);
//   },
//   complete: function() {
//     var num = numberWithCommas(Math.floor(this.val));
//     $(".number_count").text(num);
//   }
// });
$({ val : 0 }).animate({ val : memberCountConTxt }, {
  duration: 2000,
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

function test_func(data) {
  data;
}