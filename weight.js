
document.getElementById('lbsInput').addEventListener('input', function(e){
    let lbs = e.target.value;
    console.log(lbs);
    console.log("123");

    document.getElementById('gramsOutput').innerHTML= ML = lbs/0.0022046;

    document.getElementById('kgOutput').innerHTML = KL = lbs/2.205;


    document.getElementById('ouncesOutput').innerHTML = TL = lbs*16;
});



