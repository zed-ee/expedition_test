app_data = {
    languages: [ 
        { code: 'ee', 'index': 1 },
        { code: 'gb', 'index': 2 },
    ],        
    messages: {
      et: {
          app: {
            restart:'Algusesse',
            next_lang:'ENG',
            lang:'In English',
            start:'Alusta',
            next:'Järgmine',
            result:'Sinu tulemus',
          },
		},
      en: {
          app: {
            restart:'Restart',
            next_lang:'EST',
            lang:'Eesti keeles',
            start:'Start',
            next:'Next',
            result:'Your score',
          },
		},
	},
	tests: {
		personality: {
			et: {
				title:"Isiksuse test",
				intro: {
					title: 'Vasta järgmistele küsimustele, et teada saada, kas sobid teadusliku ekspeditsiooni liikmeks',
				},
				questions: [
				{
				  question: "Kas oled toidu suhtes valiv?",
				  image: "assets/tests/isiksuse_test_kys_01.png",
				  options: [
					"Ei, söön kõike, mis mulle antakse.",
					"Mitte väga. On mõned asjad, mida ma vabatahtlikult ei söö (näiteks putukad, rupskid jms), aga hädaolukorras olen valmis peaaegu kõike sööma.",
					"Jah olen. On mitmeid toite mida ma kunagi süüa ei soovi."
				  ],
				  points: [2,1,0],
				  answer: "Vastus: Tundmatuga silmitsi seistes ei tea kunagi, millega pead kokku puutuma. <br>Avatus uutele kogemustele aitab suurendada ellujäämise tõenäosust."
				},
				{
				  question: "Kas oled seltskondlik?",
				  image: "assets/tests/isiksuse_test_kys_02.png",
				  options: [
					"Jah, olen aktiivne suhtleja, üksinda mulle väga olla ei meeldi. Veedan enamiku vabast ajast sõprade seltsis.",
					"Mulle meeldib suhelda, aga vajan ka aega üksiolemiseks. ",
					"Vaba aja veedan pigem üksi olles."
				  ],
				  points: [1,2,0],
				  answer: "Vastus: Hea suhtlemisoskus on vajalik, kui viibid pikka aega ühes seltskonnas. Samas mõjub liigne tähelepanuvajadus koormavalt. Seetõttu on parim kandidaat keegi, kes ei karda suhelda, kuid ei taha olla tähelepanu keskpunktis."
				},
				{
				  question: "Kui korras on sinu kirjutuslaud?",
				  image: "assets/tests/isiksuse_test_kys_03.png",
				  options: [
					"Laitmatus korras. Igal esemel on oma koht ja laokile jäänud asju ma ei kannata.",
					"Mõned asjad siin-seal, aga üldiselt on laud korras.",
					"Vihikud, paberid ja mustad nõud kipuvad lauale kuhjuma, kuni need lõpuks kunagi ära panen."
				  ],
				  points: [2,1,0],
				  answer: "Vastus: Toa korrashoidmine näitab kohusetunnet. See on eriti oluline teaduslikul ekspeditsioonil viibides, kus iga reisiliikme käitumisest ja hoolikusest sõltub teiste heaolu ja turvalisus."
				},
				{
				  question: "Kui tundlik oled ilma suhtes?",
				  image: "assets/tests/isiksuse_test_kys_04.png",
				  options: [
					"Iga ilm on hea ilm. Noh, võib-olla väga porine mitte, aga sobib ka see.",
					"Muutun märgatavalt tujukamaks, kui ilm on halb. ",
					"Funktsioneerin ainult temperatuurivahemikus +20–30 °C."
				  ],
				  points: [2,1,0],
				  answer: "Vastus: Ekspeditsioonil viibides peab kokku puutuma igasuguste ilmastikutingimustega. Kuigi võid sattuda meeldivatesse oludesse, võid end hoopis leida ka +40°C soojas või jäises külmas."
				},
				{
				  question: "Kas muretsed sageli?",
				  image: "assets/tests/isiksuse_test_kys_05.png",
				  options: [
					"Olen alati positiivne ega muretse.",
					"Stressirikkad olukorrad panevad aeg-ajalt muretsema, aga ma ei jää muremõtetesse pikalt kinni.",
					"Muretsen pidevalt. Aeg-ajalt röövib see minult isegi une."
				  ],
				  points: [0,2,0],
				  answer: "Vastus: Pidev muretsemine viitab neurootilisusele. Kõrge neurootilisuse tase muudab kergesti ärrituvaks, tekitab tujukõikumisi, masendust ja muudab ebakindlaks. Muretus jätab aga inimesest kergemeelse mulje ja võib luua ebausaldusväärse kuvandi. Ekspeditsioonil olles on oluline just see, et muremõtted ei halvaks tegutsemisvõimet ning säiliks kindlameelsus."
				},
				{
				  question: "Oled pootsman laeval, mis on jäänud liiga kauaks sadamasse. Kapten andis käsu merele seilata, kuid sadamas levivad kuuldused raske tormi lähenemisest. Tunned muret laeva ja meeskonna turvalisuse pärast, kuid kapten soovib ajahäda tõttu kohe lahkuda. Mida teed",
				  image: "assets/tests/isiksuse_test_kys_06.png",
				  options: [
					"Täidad vaikides käsku, kuigi oled veendunud, et ta eksib.",
					"Vaidled talle kõigi ees vastu ja üritad veenda meeskonnakaaslasi ennast toetama. ",
					"Räägid murest kaptenile eraviisiliselt, kuid tead, et temale jääb viimane sõna."
				  ],
				  points: [1,0,2],
				  answer: "Vastus: Koostöö- ja abivalmidus ning kaastundlikkus võetakse kokku meeldivuse ühisnimetajaga. Antud omaduse vähene avaldumine tähendab sageli, et inimene on võitlushimuline ning tal on kalduvus tüli otsida. Taoline isik võib tunduda liigselt vaiglushimuline ja ebausaldusväärne ning kutsuda esile konflikte."
				},
				{
				  question: "Kas oled hea loogikaülesannete lahendaja?",
				  image: "assets/tests/isiksuse_test_kys_07.png",
				  options: [
					"Jah, mulle meeldib neid lahendada.",
					"Teen lihtsamaid ülesandeid, kuni jõud neist enam üle ei käi.",
					"Tänan, ei! "
				  ],
				  points: [1,0,-1],
				  answer: "Vastus: Asjade sisust kergesti arusaamine viitab avatud loomusele. See võib olla iseloomulik inimesele, kes otsib intensiivseid ja adrenaliini pakkuvaid tegevusi."
				},
				{
				  question: "Milline on sinu arvates meeldivaim reisimisviis? ",
				  image: "assets/tests/isiksuse_test_kys_08.png",
				  options: [
					"Võtta mõnest reisibüroost kuurortpakett soojale maale.",
					"Koostada reisiplaan ise, valides välja sobilikud ööbimispaigad.",
					"Reisida soovitud kohta ja vaadata seal, mis saab."
				  ],
				  points: [0,1,2],
				  answer: "Vastus: Valmidus tulla toime ootamatute olukordadega tuleb kasuks ka ekspeditsioonil. Ühtlasi näitab see avatust ja seiklushimu."
				},
				{
				  question: "Kas oled valmis paariks nädalaks loobuma võimalusest pesta riideid ning iseennast?",
				  image: "assets/tests/isiksuse_test_kys_09.png",
				  options: [
					"Ma pole selleks suuteline.",
					"Jah, kui muud võimalust pole.",
					"Jah, palun! See ongi normaalne."
				  ],
				  points: [0,2,0],
				  answer: "Vastus: Ekspeditsioonile minnes saab kaasa võtta vaid piiratud koguse isiklikke esemeid. Valmis tuleb olla puudulike hügieenitingimustega toimetulekuks. Nii võib juhtuda, et pead kandma samu riideid mitu nädalat järjest."
				},
				{
				  question: "Kas oled teadlane?",
				  image: "assets/tests/isiksuse_test_kys_10.png",
				  options: [
					"Jah.",
					"Ei.",
					"Unistustes küll."
				  ],
				  points: [5,0,2],
				  answer: "Vastus: Teaduslikule ekspeditsioonile minekuks pead olema pühendunud uurimusküsimuste lahendamisele."
				}

				],
        results: [
          [16, "Oled minekuks valmis! Vaja on vaid leida endale sobiv ekspeditsioon."],
          [11, "Sul on olemas mõned vajalikud eeldused, kuid on veel natukene arenguruumi."],
          [-2, "Teaduslikud ekspeditsioonid ei sobi sulle. Paremini võib sobida korralikult planeeritud ja kõigi mugavustega reis."]
        ]

			},
			en: {}
		},
		clothing: {
			et: {
			  title: 'Riietuse test',
			  id:"clothing",
			  intro: {
				button:'Alusta',
				title: 'Vasta järgmistele küsimustele, et saada teada, kas oskad ekstreemsetes olukordades riietuda',
			  },
        questions: [
				{
				  question: "1. Reisid Sahara kõrbes, kus on päevasel ajal üle 40 °C sooja. Mis sul seljas on?",
				  image: "assets/tests/riietuse_test_kys_01.png",
				  options: [
					"Müts, õlapaeltega pluus, lühikesed püksid, sokid, mugavad jalanõud, päikeseprillid.",
					"Müts, sall, lohmakas pluus, pikad püksid, sokid, mugavad jalanõud, päikeseprillid.",
					"Päevitusriided."
				  ],
				  points: [0,1,0],
				  answer: "Kuigi võib tunduda, et pikkade riietega hakkab kõrbes palav, aitavad need tegelikult hoida kehatemperatuuri. Kõige olulisem on end päikesepõletuse eest kaitsta, kuna see kahjustab keha võimalusi ise temperatuuri reguleerida."
				},
				{
				  question: "2. On veebruari lõpp ning Taimõri poolsaarel Norilskis näitab kraadiklaas -30 °C. Et õue minna, on sul valida kolme nahast kasuka vahel. Millist eelistad?",
				  image: "assets/tests/riietuse_test_kys_02.png",
				  options: [
					"Põhjapõdranahast kasukat.",
					"Karunahast kasukat.",
					"Hülgenahast kasukat."
				  ],
				  points: [1,0,0],
				  answer: "Kuigi karu- ja põhjapõdra nahk hoiavad sooja sama hästi, on karunahast kasukas märksa raskem ning seetõttu väsitab kandjat. Hülgenahk on heade vettpidavate omadustega, kuid jääb soojapidavuselt eelnimetatutele alla. <br>Eelistustest sobivaima karusnaha valikul kirjutas A. Th. v. Middendorff 19. sajanadil järgmiselt: “Karusnahad, millesse siberlane end mähib, on paksu aluskarvaga, rasked ja jämedakiulise pealiskarvaga. Neil on see eelis peenekiulise pealiskarva ees, et nad kaitsevad märksa paremini tormi, lörtsi ja vihma eest. Karunahad on liiga rasked, hundinahad ikka veel liiga kallid, nii et tuleb kasutada põhjapõdranahku.” (“Reis Taimõrile”)"
				},
				{
				  question: "3. Oled jälle kõrbes, kus on 40 °C sooja. Mida kannad peas?",
				  image: "assets/tests/riietuse_test_kys_03.png",
				  options: [
					"Mitte midagi – palav hakkab ju!",
					"Nokamütsi",
					"Rätikut"
				  ],
				  points: [0,0,1],
				  answer: "Kuigi ka nokamüts aitab hoida pea temperatuuri ning kaitsta põletuse eest, on kõige parem kanda suurt rätikut shemagh’i (ka keffiyeh). Sellega saab korraga katta nii pea, kaela kui ka näo."
				},
				{
				  question: "4. Mida võib pidada põhjapõdranaha hea soojapidavuse põhjuseks?",
				  image: "assets/tests/riietuse_test_kys_04.png",
				  options: [
					"Põhjapõdranahk on väga paks.",
					"Karvad on seest õõnsad.",
					"Karvad on väga pikad."
				  ],
				  points: [1,1,0],
				  answer: "Kuigi oluline on ka karvkatte paksus, muutub soojapidavuse juures eriti tähtsaks see, et õhk jääks karvade vahele kinni ning moodustaks omaette isoleeriva kihi. Põhjapõtrade nahk koosneb pealis- ja aluskiht, millest esimese karvad on seest tühjad. Just nendesse õõnsustesse jääbki õhk kinni ning muudab karvkatte külma vastu veelgi tõhusamaks."
				},
				{
				  question: "5. Mis värvi riideid peaksid kandma, kui liigud kõrbes, kus kraadiklaas näitab +40 °C",
				  image: "assets/tests/riietuse_test_kys_05.png",
				  options: [
					"Heledaid.",
					"Tumedaid.",
					"Pole oluline, mis värvi."
				  ],
				  points: [0,0,1],
				  answer: "Kõrbes kantavate traditsiooniliste riiete puhul ei ole oluline, mis värvi need on. Meie jaoks on harjumatu näha kõrbes inimesi mustades riietes, kuid teadlased on tõestanud, et laiade riiete puhul kaob see lisasoojus, mida musta värvi riided neelavad, enne kehani jõudmist. Seega on heledad riided sama jahedad kui tumedad."
				},
				{
				  question: "6. Reisides aladele, kus tuleb kokku puutuda väga külma ilmaga, on oluline viia end kurssi erinevate riietumisalaste juhistega. Üks levinumaid nippe on riietuda kihtide kaupa, et võimalikult hästi soojust isoleerida. Mitut kihti riideid soovitatakse?",
				  image: "assets/tests/riietuse_test_kys_06.png",
				  options: [
					"Kolme",
					"Nelja",
					"Viit"
				  ],
				  points: [0,1,0],
				  answer: "Ameerika Ühendriikide Antarktika programmi riietusjuhendis eristatakse nelja kihti.<br><b>Aluskiht Pikk</b> ja keha vastu liibuv aluspesu, mis on valmistatud polüpropüleenist või looduslikest materjalidest, näiteks villast. Vältida tuleb puuvilla, kuna see läheb keha vastas märjaks.<br><b>Teine kiht</b> Särk, kampsun, püksid jms. Eesmärk saada aluspesust niiskus kätte ning juhtida see edasi järgmisesse kihti.<br><b>Isolatsioonikiht</b> Püksid, kampsun, sulevest jms. Materjalidest tasub eelistada udusulgi, villa või polaarfliisi.<br><b>Välimine kiht</b> Üleriided. Kõige olulisem kiht. Peab olema tuule- ja olenevalt tingimustest ka veekindel. Kuiva ilma puhul on parem vältida veekindlaid riideid, kuna need ei lase higil hästi riietest väljuda. <br>Oluline on muidugi kanda ka mütsi, salli ja näomaski. "
				},
				{
				  question: "7. Millisest materjalist riideid tasub kõrbes kanda?",
				  image: "assets/tests/riietuse_test_kys_07.png",
				  options: [
					"Puuvillaseid.",
					"Linaseid.",
					"Teksariidest "
				  ],
				  points: [1,1,0],
				  answer: "Sobivad nii linane kui puuvillane riie. Lina on kerge ning laseb kehal hästi hingata. Materjalina sobib ka puuvill, kuid peab arvestama, et see imab higi ja niiskust väga hästi endasse. Ühest küljest saab nii keha jahutada, kuid samal ajal võib märg riie tunduda ka ebamugav."
				},
				{
				  question: "8. Pead kevadisel  ajal saama hakkama Alaskal, kus on 2 °C sooja ning sajab vihma. Millised saapad valid?",
				  image: "assets/tests/riietuse_test_kys_08.png",
				  options: [
					"Põhjapõdranahast saapad",
					"Rebasenahast saapad",
					"Hülgenahast saapad"
				  ],
				  points: [0,0,1],
				  answer: "Kuigi karibuunahka peetakse kõige soojemaks ning kasutatakse Alaskal põhiliselt talvisel ajal, on soojemal, kuid märjemal ajal kasulikum valida hülgenahast saapad tänu nende vetthülgavavusele. Nii kindlustad, et jalad jäävad kuivaks ning ei hakka külmuma. "
				},
				{
				  question: "9. Päikselisel talvepäeval põhjamaades liikudes peab kaitsma silmi lumelt peegelduva päikese eest. Mida kasutati selleks 19. sajandil?",
				  image: "assets/tests/riietuse_test_kys_09.png",
				  options: [
					"Lumeprille",
					"Päikseprille",
					"Nokamütsi"
				  ],
				  points: [1,0,0],
				  answer: "Päikese eest kaitsmiseks kasutati 19. sajandil lumeprille. Neid valmistati nahast, puust, puidust või metallist, kuhu lõigati nägemiseks sisse vaid kitsad pilud. Kanti ka sirmi, mis meenutab tänaseid nokamütse. Tänapäevasel kujul päikeseprillid on pärit 20. sajandist."
				},
				{
				  question: "10. Mis mõõtühikut kasutatakse soojusisolatsiooni arvestamisel?",
				  image: "assets/tests/riietuse_test_kys_10.png",
				  options: [
					"wrm",
					"hth",
					"clo"
				  ],
				  points: [0,0,1],
				  answer: "Riietuse soojusisolatsiooni mõõtmisel kasutatakse mõõtühikuna clo-d, mis vastab ülikonnas inimese soojusisolatsioonile +20 °C juures. Välistingimustes hakkavad clo väärtust lisaks temperatuurile mõjutama veel õhuniiskus, tuul ning see, kui hästi seljasolev riietus niiskust läbi laseb."
				}

				],
        results: [
          [8, "Sul on ekstreemsetes oludes riietumise kohta väga head teadmised. Reisile läheks sinuga küll!"],
          [4, "Tubli! Tead riietumise kohta nii mõndagi. Natukene veel ja võid juba julgelt mõnda ekstreemsete ilmastikutingimustega paika rännata."],
          [0, "Riietumise teema on sulle veel natukene võõras, nii et kui peaksid mõnda ekstreemse kliimaga paika rändama, siis uuri kindlasti, millised riided peaksid kaasa võtma."]
        ]
			
			},
			en: {}
		}
	}
}
    