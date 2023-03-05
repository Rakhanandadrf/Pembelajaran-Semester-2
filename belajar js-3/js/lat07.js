let bil = [1, 2, 3, 4, 5];

function kali(num) {
  return num * 2;
}

console.log(kali(2));

let hasil = bil.map((num) => num + 2);

console.log(hasil);

hasil.forEach((e) => {
  console.log[0];
});

document.querySelector("#tampil").innerHTML = tampil;

// let out = "<table>";

// hasil.forEach((element) => {
//   out += `<tr><td>${element}</td></tr>`;
// });

// out += "</table>";

// document.querySelector("#tabel").innerHTML = out;




let siswa = [
  { nama: "Neni", skolah: "SMKN 2 BUDURAN", kelas: "XI-RPL" },
  { nama: "Esti", skolah: "SMKN 7 BUDURAN", kelas: "X-RPL" },
  { nama: "Nurdin", skolah: "SMKN 5 BUDURAN", kelas: "XII-RPL" },
];

out = "<table><thead><tr><th>Nama</th><th>Sekolah</th></tr></thead><tbody>";
has = siswa.map(n => out += `<tr><td>${n.nama}</td><td>${n.skolah}</td></tr>`);
out += "</tbody>";

document.querySelector('#tabel').innerHTML = out;

