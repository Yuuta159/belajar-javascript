/* membuat objek

const private = {
  firstName: "Muhammad",
  lastName: "Dzakir",
  "No Hp": 085242394633,
};
console.log(private);*/

// Mengganti Nilai pada objek//
/*const buah = {
  nama: "apel",
  warna: "red",
  "warna dalam": "putih",
};

buah.nama = "jeruk";
buah.warna = "jingga";
buah["warna dalam"] = "jingga";

console.log("Ini adalah buah " + buah.nama);
console.log(`warna buah tersebut ialah ${buah.warna}`);
console.log(`warna didalam buah ${buah.nama} adalah ` + buah["warna dalam"]);
*/

// Menghapus key dalam object
const lemari = {
  bahan: "kayu",
  warna: "coklat",
  tekstur: "keras",
  jumlahPintu: 4,
  harga: 150000,
};

delete lemari.harga;
console.log(lemari);
