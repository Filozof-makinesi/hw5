var dogrusayici = 0;           
var yanlıssayici = 0;
var yanıtlanmamissayici = 0;
var zamanlayici;
const WAIT_TIME = 10;
var süreId;
var soruZamanasimi;
var soruListesi = [];
var SoruSeti = {
	soru: null,
	answer1:  null,
	answer2:  null,
	answer3:  null,
	answer4:  null,
	key: 0,
}//..........................................................................................................................................................................
var soru1 = Object.create(SoruSeti);
soru1.soru = "Piramitler şu an hangi ülkenin sınırları içerisinde yer almaktadır?";
soru1.answer1 = "Tunus";
soru1.answer2 = "Mısır";
soru1.answer3 = "Fas";
soru1.answer4 = "Ürdün";
soru1.key = 2;
soruListesi.push(soru1);
var soru2 = Object.create(SoruSeti);
soru2.soru = "Doğru akımın temsilcisi olarak bilinen ünlü bilim adamı kimdir?";
soru2.answer1 = "Nikola Tesla";
soru2.answer2 = "Andre Amper";
soru2.answer3 = "Thomas Edison";
soru2.answer4 = "Hiçbiri";
soru2.key = 3;
soruListesi.push(soru2);
var soru3 = Object.create(SoruSeti);
soru3.soru = "Kuantum mekaniğinin bazı sonuçlarına, özellikle belirsizlik ilkesine oldukça şüpheci yaklaşmış fakat bu yaklaşımlar ileride geniş kabul görmüştür.-Bahsedilen bilim adamı kimdir?";
soru3.answer1 = "Albert Einstein";
soru3.answer2 = "Max Planck";
soru3.answer3 = "Maxwell";
soru3.answer4 = "Stephen Hawking";
soru3.key = 1;
soruListesi.push(soru3);
console.log(soruListesi);
var soru4 = Object.create(SoruSeti);
soru4.soru = "Bu dahi bilim adamımız, Leonardo da Vinci'den tam 300 sene evvel dişli çarklar ve esaslarına dair kaideleri kitabında anlattı. Hatta Leonardo da Vinci bu kaidelerin birçoğunu bilmemektedir.- Bu bilim adamımız kimdir?";
soru4.answer1 = "Takiyüddin";
soru4.answer2 = "Ali Kuşcu";
soru4.answer3 = "Uluğ Bey";
soru4.answer4 = "El-Cezeri";
soru4.key = 4;
soruListesi.push(soru4);
var soru5 = Object.create(SoruSeti);
soru5.soru = "Dünyada ilk defa alternatif akım patenti alan şirketin kurucusu, mucid ve bilim adamı kimdir?";
soru5.answer1 = "Nikola Tesla";
soru5.answer2 = "Thomas Edison";
soru5.answer3 = "George Westinghouse";
soru5.answer4 = "Werner von Siemens";
soru5.key = 3;
soruListesi.push(soru5);
var soru6 = Object.create(SoruSeti);
soru6.soru = "Kuantum sabiti hangi bilim adamının ismiyle alınır?";
soru6.answer1 = "Albert Einstein";
soru6.answer2 = "Max Planck";
soru6.answer3 = "Schrödinger";
soru6.answer4 = "Louis de Broglie";
soru6.key = 2;
soruListesi.push(soru6);
var soru7 = Object.create(SoruSeti);
soru7.soru = "Radyo ilk defa hangi bilim adamı tarafından icat edilmiştir?";
soru7.answer1 = "Nikola Tesla";
soru7.answer2 = "Thomas Edison";
soru7.answer3 = "Guglielm Marconi";
soru7.answer4 = "George Westinghouse";
soru7.key = 1;
soruListesi.push(soru7);
var soru8 = Object.create(SoruSeti);
soru8.soru = "İlk elektrikli süpürge kim tarafından icat edilmiştir?";
soru8.answer1 = "Robert Bosch";
soru8.answer2 = "Gerbert";
soru8.answer3 = "Ernst von Siemens";
soru8.answer4 = "Hubert Booth";
soru8.key = 4;
soruListesi.push(soru8);//.................................................................................................................................................
var dogSoru = 0;
$(document).ready(function() {
function Seceneksecimi(key) {
	var str =null;
	switch (key) {
		case 1: {
			str = soruListesi[dogSoru].answer1;
			break;
		}
		case 2: {
			str = soruListesi[dogSoru].answer2;
			break;
		}
		case 3: {
			str = soruListesi[dogSoru].answer3;
			break;
		}
		case 4: {
			str = soruListesi[dogSoru].answer4;
			break;
		}
	}
	return (str);
}//*******************************************************************************************************************************************************************
function SonGoster(correct) {
	$('.q-a-row').hide();
	$('#timer').css('background', '#a9cb9d');	
	$('#timer').html('<h3 class="text-center">' + 'Kalan Süre: ' + zamanlayici + '</h3>');
	$('#timer').show();
	if (correct) {
		$('#Y_N').css('background', '#1f4');
		$('#Y_N').html('<h2 class="text-center">' + 'Doğru!' + '</h2>');
	}
	else {
		$('#Y_N').css('background', '#df3118');
		$('#Y_N').html('<h2 class="text-center">' + 'Yanlış!' + '</h2>');
		var str = Seceneksecimi(soruListesi[dogSoru].key);
		console.log(str);
		$('#answer-key').css('background', '#31daef');
		$('#answer-key').html('<h2 class="text-center">' + 'Doğru Cevap: ' + str + '</h2>');
		$('#answer-key').show();
	}
	$('#Y_N').show();
}
function soruSayfasiGostr(dogSoru) {
	zamanlayici = WAIT_TIME;
	$('#Y_N').hide();
	$('#answer-key').hide();
	$('')
	$('.q-a-row').show();
	$('#soru-text').css('background','#d1ef07');
	$('#soru-text').html('<h3 class="text-center">' + soruListesi[dogSoru].soru + '</h3>');
	$('.answer').css('background','#1ec957');
	$('#answer1-text').html('<h3 class="text-center">' + soruListesi[dogSoru].answer1 + '</h3>');
	$('#answer2-text').html('<h3 class="text-center">' + soruListesi[dogSoru].answer2 + '</h3>');
	$('#answer3-text').html('<h3 class="text-center">' + soruListesi[dogSoru].answer3 + '</h3>');
	$('#answer4-text').html('<h3 class="text-center">' + soruListesi[dogSoru].answer4 + '</h3>');
	$('#timer').css('background', '#f2e807');
	$('#timer').html('<h3 class="text-center">' + 'Kalan Süre: ' + zamanlayici + '</h3>');
	süreId = setInterval(geriSayim, 1000);
	 soruZamanasimi = setTimeout(sonnSoru, zamanlayici * 1000, süreId);
}
function sonucGoster() {
	$('#end-msg').css('background', '#15d51e');
	$('#end-msg').html('<h2 class="text-center">Hepsi tamam. Aferin!! </h2>');
	$('#end-msg').show();
	$('#result-stat').css('background', '#9b7d7d');
	$('.stat').css('background', '#06bbdf');
	$('#correct-stat').html('<h3 class="text-center">Doğru: ' + dogrusayici + '</h3>');
	$('#incorrect-stat').html('<h3 class="text-center">Yanlış: ' + yanlıssayici + '</h3>');
	$('#unanswer-stat').html('<h3 class="text-center">Yanıtlanmamış: ' + yanıtlanmamissayici + '</h3>');
	$('.end-result').show();
	$('#restart').addClass("text-center");
	var restartBtn = $("<button>");
	restartBtn.text("Yeniden Başlat?");
	restartBtn.attr("id", "restart-button");
	restartBtn.addClass("btn btn-success btn-lg");
	$('#restart').append(restartBtn);
	$('#restart-button').click(restart);
}
function restart() {
	console.log("restart");
	$('#restart-button').remove();
	$('#end-msg').hide();
	$('.end-result').hide();
	dogSoru = 0;
	dogrusayici = 0;
	yanlıssayici = 0;
	yanıtlanmamissayici = 0;
	soruSayfasiGostr(dogSoru);
}
function oyunson() {
	$('#answer-key').hide();
	$('#Y_N').hide();
	sonucGoster();
}
function snbekle(sn) {
	if (++dogSoru < soruListesi.length) {
		var sonSoruZamanasimi = setTimeout(soruSayfasiGostr, sn, dogSoru);
	}
	else {
		var sonSoruZamanasimi = setTimeout(oyunson, sn);
	}
}
function cevapTıkla() {
	console.log($(this));
	clearInterval(süreId);
	clearTimeout(soruZamanasimi);
	var userVal = parseInt(($(this)[0].id).charAt(6));
	console.log(userVal);
	var correct = false;
	if (userVal === soruListesi[dogSoru].key) {
		dogrusayici++;
		correct = true;
	}
	else {
		yanlıssayici++;
	}
	SonGoster(correct);
	snbekle(2000);
}
$(document).on("click", ".answer", cevapTıkla);
$('#startbtn').click(function() {
	$('#startbtn').hide();
	soruSayfasiGostr(dogSoru);
});
function geriSayim() {
	$('#timer').html('<h3 class="text-center">' + 'Kalan Süre: ' + --zamanlayici + '</h3>');
}
function sonnSoru(id) {
	clearInterval(id);
	$('#timer').html('<h3 class="text-center">' + "time out" + '</h3');
	yanıtlanmamissayici++;
	SonGoster(false);
	snbekle(2000);
}
}); 
