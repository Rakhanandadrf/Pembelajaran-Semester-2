function perkalian(a,b) { 
    return a*b;
}

// console.log(perkalian(3,3));

let kali = (c, d) => c * d;
console.log(kali(4, 2));


let zodiak = (bulan,tanggal) => {
    let hasil = "angka tidak ada";
    if (bulan > 0 && bulan < 13 && tanggal > 0 && tanggal < 33) {
        hasil = "Zodiac Belum Dibuat";
        if (bulan == 1) {
            hasil = "capricorn";
            if (tanggal > 21) {
                hasil = "aquarius";
            }
        }
    }
    return(hasil);
}
console.log(zodiak(1,28));

let lulus = (nilai) => {
    let jadi = "angka tidak valid";
    if (nilai >= 0 && nilai <= 100) {
        jadi = "TIDAK LULUS";
        if (nilai >= 80) {
            jadi = "LULUS";
        }
    }
    return(jadi);
}
console.log(lulus(80));