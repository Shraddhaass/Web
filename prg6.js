function res(){
    var n=prompt("Enter Number");
    var rev=0,rem;
    while(n>0){
        rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);

    }
    document.write("Reverse the number are:"+rev);
}
function pl_vowels(){
    var a=prompt("Enter String");
    a=a.search(/[aeiouAEIOU]/);
    document.write("The first occurence of ovewls"+(a+1));
}