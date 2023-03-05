
// klik.addEventListener('click',hasil(5));


klik.onclick = name(2); 
    function name(b) {
        alert(b);
}


function hasil(a) {
    alert(a);
}

// zodiac(2,31);
function zodiac() {
    let tampil = document.querySelector('#belajar');

    let bulan = document.getElementsByName('bln')[0].value; 
    let tanggal = document.getElementById('tanggal').value; //memanggil value tidak perlu pakai tanda (#,.)

    let hasil = "Salah";
    if (bulan > 0 && bulan < 13 && tanggal > 0 && tanggal < 33) {
        hasil = "Zodiac Belum Dibuat";
        if (bulan == 1) {
            hasil = "capricorn";
            if (tanggal > 21) {
                hasil = "aquarius";
            }
        }
        if (bulan == 2 && tanggal < 30) {
            hasil = "aquarius";
            if (tanggal > 18) {
                hasil = "pisces";
            }
        }
        if (bulan == 4) {
            hasil = "aries";
            if (tanggal > 18 && tanggal < 31) {
                hasil = "taurus";
            }
        }
    }
    console.log(hasil);
    tampil.innerHTML = hasil;
}

// lulus(90);

function lulus() {
    let tampil = document.querySelector('#belajar');
    let nilai = document.getElementById('angka').value;
    let kkm = 80;
    let output = "Nilai Salah"; 

    if (nilai >= 0 && nilai <= 100) {
        output = "Tidak Lulus";
        
        if (nilai >= kkm) {
            output = "Lulus";
        }

    }
    console.log(output);
    tampil.innerHTML = output;
}

terbilang(220);

function terbilang(angka) {
    var huruf=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];

    if(angka < 12){

        return huruf[angka];

    }else if(angka < 20){

        return terbilang(angka-10)+" belas";

    }else if(angka < 100){

        return terbilang(Math.floor(parseInt(angka)/10))+" puluh "+terbilang(parseInt(angka)%10);

    }else if(angka < 200){

        return "seratus "+terbilang(parseInt(angka)-100);

    }else if(angka < 1000){

        return terbilang(Math.floor(parseInt(angka)/100))+" ratus "+terbilang(parseInt(angka)%100);

    }else if(angka < 2000){

        return "seribu "+terbilang(parseInt(angka)-1000);

    }else if(angka < 1000000){

        return terbilang(Math.floor(parseInt(angka)/1000))+" ribu "+terbilang(parseInt(angka)%1000);

    }else if(angka < 1000000000){

        return terbilang(Math.floor(parseInt(angka)/1000000))+" juta "+terbilang(parseInt(angka)%1000000);

    }else if(angka < 1000000000000){

        return terbilang(Math.floor(parseInt(angka)/1000000000))+" milyar "+terbilang(parseInt(angka)%1000000000);

    }else if(angka < 1000000000000000){

        return terbilang(Math.floor(parseInt(angka)/1000000000000))+" trilyun "+terbilang(parseInt(angka)%1000000000000);

    }
}

prima();

function prima(bilangan) {
    let pembagi = 0;
    for(let i=1; i <= bilangan; i++){
        if(bilangan%i == 0){
            pembagi++
        }   
    }
    if(pembagi == 2){
        console.log("prima");
    }else{
        console.log("bukan prima");
    }
}