let buah = ['mangga', 'apel', 'jeruk', 'jambu'];

console.log(buah);

// document.querySelector("#tampil").innerHTML = buah[1];

buah.forEach( a => {
    console.log(a);
});

// function kali(a,b) {
//     return a * b;
// }

// function tampil(a) {
//     return a;
// }

// console.log(kali(2,3));
// console.log(tampil(buah));

let kali = (a,b) => { return a*b };
let tampil = a => { console.log(a) };

console.log(kali(2,4));
tampil('belajar');

// let siswa = [
//     {
//         nama : 'Siti',
//         sekolah : "smkn 2 buduran",
//         kelas : 'XII-RPL'
//     },
//     {
//         nama : 'Budi',
//         sekolah : "smkn 3 buduran",
//         kelas : 'XI-RPL'
//     },
//     {
//         nama : 'Joni',
//         sekolah : "smkn 4 buduran",
//         kelas : 'X-RPL'
//     }
// ];

// console.log(siswa);
// console.log(siswa[0,1]);

let text = '{"Nama":[' +
'{"nama":"John","kelas":"Doe" },' +
'{"nama":"Anna","kelas":"Smith" },' +
'{"nama":"Nurdin","kelas":"gg" }' +
']}';

const obj = JSON.parse(text);
console.log(obj.Nama[0].nama);

obj.Nama.forEach(el => {
    document.querySelector("#tampil").innerHTML += el.nama + " " + el.kelas + "<br>";
})



