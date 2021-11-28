// var memberCountConTxt= 296842;
// var memberCountConTxt = {{ result | safe}};
// var memberCountConTxt = {{ result | tojson}};
// var memberCountConTxt = JOSN.parse( {{ result | safe}} );
var memberCountConTxt = {{ result}} ;


  
  $({ val : 0 }).animate({ val : memberCountConTxt }, {
   duration: 2000,
  step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".number_count").text(num);
  },
  complete: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".number_count").text(num);
  }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}