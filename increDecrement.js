var a = 10;
var b = 18;
var x = a-- + b++ - ++b - ++a;
/*
a-- trả lại giá trị trước khi giảm (tăng)
--a trả lại giá trị sau khi giảm (tăng)
 */
/* từng bước làm 
a-- + b++ - ++b - ++a 
 10 + b++ - ++b - ++a  //  a 9   b 18
 10 + 18 - ++b - ++a   //  a 9   b 19
 10 + 18 -  20 - ++a   //  a 9   b 20
 10 + 18 -  20 - 10
        -2
 */
console.log(x);
