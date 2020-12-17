/** 
*Program akisi:
*1.  Ciftlikteki hayvanlar bir array icerisinde karisik sekilde tutulur.
*2.  Ciftlikte inek, tavuk, domuz ve koyun bulunur.
*3.  Arraydaki hayvanlarin bacak sayilari toplanir. Ancak sadece helal olan hayvanlar kullanilabilir.
*4.  Toplam kullanilabilir bacak sayisi konsola yazdirilir.
*/

let hayvanlar = ["inek", "domuz", "domuz", "tavuk", "tavuk", "koyun", "koyun", "tavuk", "inek", "tavuk", "inek", "domuz"]
let kullanilabilirAyakSayisi = 0
let toplamAyakSayisi = 0
const domuz = "domuz" 
const tavuk = "tavuk"
const DOMUZ_AYAK_SAYISI = 0
const TAVUK_AYAK_SAYISI = 2
const BÜYÜKBAS_AYAK_SAYISI = 4

for (let index = 0; index < hayvanlar.length; index++){
    if(hayvanlar[index]===domuz){
        kullanilabilirAyakSayisi = DOMUZ_AYAK_SAYISI; // domuz haram oldugu icin necip usta domuz bacaklari ile ilgilenmez.
    }else if(hayvanlar[index]===tavuk){
        kullanilabilirAyakSayisi = TAVUK_AYAK_SAYISI 
        toplamAyakSayisi = toplamAyakSayisi + kullanilabilirAyakSayisi // tavuk bacaklarini toplar
    }else{
        kullanilabilirAyakSayisi = BÜYÜKBAS_AYAK_SAYISI
        toplamAyakSayisi = toplamAyakSayisi + kullanilabilirAyakSayisi // inek ve koyun bacaklarini toplar
    }  
}

console.log(toplamAyakSayisi);      

