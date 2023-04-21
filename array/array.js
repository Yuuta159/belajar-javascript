// Membuat array
console.log("==========Membuat array==========");
let namaSantri = ["radit", "topan", "kalilah", "kailah", "rey", "arkana", "dafa"];
console.log(namaSantri);
console.log();
console.log("=================================");
console.log("\n");

//Mengakses elemen Array dengan index
console.log("==========akses elemen array pada index==========");
const kota = ["Makassar", "Maluku", "Bandung", "Ambon", "Balikpapan", "Jambi"];
console.log(kota[0]);
console.log(kota[1]);
console.log(kota[2]);
console.log(kota[3]);
console.log(kota[4]);
console.log("================================================");
console.log("\n");

// Method pada array :
//push()    ------> menambah data di akhir array.
console.log("=========== method push =============");
const brand = ["tokopedia", "lazada", "gojek", "grab", "shopee"];
brand.push("blibli");
console.log(brand);
console.log("=====================================");
console.log("\n");

//pop()     ------> mengeluarkan data atau elemen terakhir dari array.
console.log("=========== method pop ================");
const brand1 = ["tokopedia", "lazada", "gojek", "grab", "shopee"];
brand1.pop();
console.log(brand1);
console.log("=======================================");
console.log("\n");

//shift    ------> mengeluarkan elemen pertama dari array.
console.log("=========== method shift ================");
const asean = ["Indonesia", "Malaysia", "Singapura", "Thailand", "Vietnam", "Brunei Darussalam", "Laos", "Kamboja", "Myanmar"];
asean.shift();
console.log(asean);
console.log("=======================================");
console.log("\n");

//unshift   ------> menambah elemen di awal array.
console.log("=========== method unshift ================");
let buah = ["jeruk", "pisang", "apel"];
buah.unshift("pepaya");
console.log(buah);
console.log("=========================================");
console.log("\n");

//delete     ------> hanya menghapus data dari array bukan elemennya.
console.log("=========== method delete ================");
const club = ["Real Madrid", "Barcelona", "Bayern Munchen"];
delete club[1];
console.log(club);
console.log("=========================================");
console.log("\n");

//splice()   ------> menghapus elemen dan menambah elemen pada array caranya memberikan argumen ke-3 sebagai nilai yang akan dimasukkan pada index yang diberikan pada argumen pertama
console.log("=========== method splice menghapus elemen berdasarkan index  ================");
const hewankakiDua = ["Ayam", "Burung", "Kanguru", "Bebek"];
hewankakiDua.splice(3, 1); //menghapus dari index  ke-3 sebanyak 1 elemen
console.log(hewankakiDua);
console.log("=========================================");
console.log("\n");

console.log("=========== method splice menambahkan elemen berdasarkan index  ================");
const number = ["satu", "dua", "empat", "enam"];
number.splice(2, 0, "tiga");
number.splice(4, 0, "lima");
console.log(number);
