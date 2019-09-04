var a = {
    foo: 'bar'
};
var b = {
    foo: 'bar'
};
console.log(a === b); 
// kết quả là false bởi vì hai object không tham chiếu đến cùng một ô nhớ 



var a = '1000';
var b = '200';

console.log(a > b); 
// kết quả là false vì nội dung hai chuỗi khác nhau 