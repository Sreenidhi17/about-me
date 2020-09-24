const myFunction = () => {
    var side1 = document.getElementById("txt1").value;
    var side2 = document.getElementById("txt2").value;
    var side3 = document.getElementById("txt3").value;
    console.log('all the sides values are entered as :'+side1,+side2,+side3 );
    var s =(+side1 + +side2 + +side3)/2;
    var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    console.log('Area calculated as :' +area);
    document.getElementById("calc").innerHTML = area;
};
