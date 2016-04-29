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
			en: {
				title:"Personality test",
				intro: {
					title: 'Answer the following questions to see if you are fit to be a member of a scientific expedition.',
				},
				questions: [
				{
				  question: "Are you a picky eater?",
				  image: "assets/tests/isiksuse_test_kys_01.png",
				  options: [
					"No, I eat everything I’m given.",
					"Not really. There are things I would not eat voluntarily (insects, mushrooms, certain vegetables etc.) but in an emergency situation I would be willing to eat almost anything.",
					"Yes. There are several foods I would never eat."
				  ],
				  points: [2,1,0],
				  answer: "When faced with the unknown, you can never tell what you will have to deal with. Being open to new experiences helps increase the chances of survival."
				},
				{
				  question: "Are you social?",
				  image: "assets/tests/isiksuse_test_kys_02.png",
				  options: [
					"Yes, I am an active communicator; solitude does not suit me well. I spend most of my free time with friends.",
					"I like being in the company of others but I also need some time alone.",
					"I prefer to spend my free time alone."
				  ],
				  points: [1,2,0],
				  answer: "Good communication skills are necessary if you spend a lot of time in the same company. At the same time, an excessive need for attention causes strain. Therefore, the best candidate is someone who does not shy away from communication but does not want to be the centre of attention either."
				},
				{
				  question: "How tidy is your writing desk?",
				  image: "assets/tests/isiksuse_test_kys_03.png",
				  options: [
					"Impeccable. Every object has its place and I cannot stand things left to lie around. ",
					"Some things here and there but mostly orderly.",
					"Notebooks, paper and dirty dishes have a tendency to pile up on the desk until I finally tidy them up"
				  ],
				  points: [2,1,0],
				  answer: "Keeping a room tidy is a sign of responsibility. This is especially important on a scientific expedition where the well-being and safety of the crew depends on the actions and diligence of each member."
				},
				{
				  question: "How sensitive to the weather are you?",
				  image: "assets/tests/isiksuse_test_kys_04.png",
				  options: [
					"Any weather is good. Well, maybe not too muddy, but that is also fine.",
					"I get noticeably moodier when the weather is bad.",
					"I only function in the temperature range +20–30°C."
				  ],
				  points: [2,1,0],
				  answer: "On an expedition, you will have to face all sorts of weather conditions. Even though good weather is a possibility, you might also find yourself in +40°C heat or freezing cold. "
				},
				{
				  question: "Do you worry often?",
				  image: "assets/tests/isiksuse_test_kys_05.png",
				  options: [
					"I am always positive and do not worry.",
					"Stressful situations cause me some worry but I do not dwell on those thoughts for long. ",
					"I worry constantly. Sometimes it even robs me of sleep. "
				  ],
				  points: [0,2,0],
				  answer: "Constant worrying is a sign of neuroticism. A high level of neuroticism can make a person easily irritable, causes mood swings, depression and uncertainty. On the other hand, being always carefree makes a person seem reckless and might create an untrustworthy image. On an expedition, the important thing is that dark thoughts should not paralyse one’s ability in taking action and keeping one’s resolve."
				},
				{
				  question: "You are the chief officer of a ship that has remained in the harbour for too long. The captain has given orders to set sail but rumours of a great oncoming storm are circulating in the port. You worry for the safety of the ship and crew but the captain is pressed for time and wants to leave immediately. What will you do?",
				  image: "assets/tests/isiksuse_test_kys_06.png",
				  options: [
					"Silently follow orders, even though you are convinced that he is wrong. ",
					"Argue with him in front of everyone and try to convince the crew to back you up. ",
					"Tell the captain of your concerns in private, knowing that he will have the last word. "
				  ],
				  points: [1,0,2],
				  answer: "Cooperative and helpful behaviour and compassion are all summed up with the characteristic of agreeableness. If a person does not have much of that trait it often means he is aggressive and has a tendency to pick fights. This person might seem too argumentative, untrustworthy and cause conflicts."
				},
				{
				  question: "Are you good at solving logic puzzles?",
				  image: "assets/tests/isiksuse_test_kys_07.png",
				  options: [
					"Yes, I love solving them.",
					"I solve simpler ones, until I just can not do them anymore and give up. ",
					"No, thank you!"
				  ],
				  points: [1,0,-1],
				  answer: "A quick understanding of the nature of things is a sign of an open nature. It may also be characteristic of a person searching for intensive and exciting activities."
				},
				{
				  question: "How do you like to travel the most? ",
				  image: "assets/tests/isiksuse_test_kys_08.png",
				  options: [
					"Getting a resort package to a warm land from some travel agency. ",
					"Making travel plans yourself, choosing accommodation that suits you. ",
					"Travelling to a desired place and making decisions on the spot. "
				  ],
				  points: [0,1,2],
				  answer: "Readiness to cope with unexpected situations is also useful on an expedition. At the same time it demonstrates openness and an adventurous spirit."
				},
				{
				  question: "Are you willing to give up the possibility to wash yourself and your clothes for a few weeks?",
				  image: "assets/tests/isiksuse_test_kys_09.png",
				  options: [
					"No, I am not willing to.",
					"Yes, if there is no other way.",
					"Yes, please! This is normal."
				  ],
				  points: [0,2,0],
				  answer: "When going on an expedition, you can only take a limited number of personal items with you. You must be ready for inadequate hygienic conditions. Therefore, it is possible you might be forced to wear the same clothes for several weeks in a row."
				},
				{
				  question: "Are you a scientist?",
				  image: "assets/tests/isiksuse_test_kys_10.png",
				  options: [
					"Yes",
					"No",
					"In my dreams"
				  ],
				  points: [5,0,2],
				  answer: "To go on a scientific expedition, you must be dedicated to solving research questions."
				}

				],
        results: [
          [16, "You are all set to go! Now all you need is to find a suitable expedition."],
          [11, "You have some of the necessary prerequisites but there is still room for development."],
          [-2, "You are not cut out for scientific expeditions. A well-planned trip with all the comforts would suit you better."]
        ]

			},

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
			en: {
			  title: 'Clothing test',
			  id:"clothing",
			  intro: {
				button:'Start',
				title: 'Answer the next questions to find out if you know how to dress in extreme conditions. ',
			  },
        questions: [
				{
				  question: "1. You are travelling in the Sahara desert where temperatures rise above +40 °C in the daytime. What are you wearing?",
				  image: "assets/tests/riietuse_test_kys_01.png",
				  options: [
					"Hat, shirt with shoulder straps, shorts, socks, comfortable shoes, sunglasses.",
					"Hat, scarf, baggy shirt, slacks, socks, comfortable shoes, sunglasses.",
					"A bathing suit."
				  ],
				  points: [0,1,0],
				  answer: "Even though it may seem that the desert is too hot for wearing long sleeves and slacks, they actually help to maintain body temperature. The prevention of sunburn is top priority as a sunburn damages the body’s ability to regulate temperature."
				},
				{
				  question: "2. It is the end of February on the Taymyr Peninsula in Norilsk and the temperature is -30 °C. Before going outside, you have to choose between three fur coats. Which one do you prefer?",
				  image: "assets/tests/riietuse_test_kys_02.png",
				  options: [
					"A reindeer hide coat.",
					"A bear skin coat.",
					"A sealskin coat."
				  ],
				  points: [1,0,0],
				  answer: "Even though bear and reindeer fur preserve heat equally well, bear pelt is much heavier and therefore tires the wearer more. Sealskin has good waterproof properties but its insulation is inferior to the other two.<br>A. Th. v. Middendorff wrote about the preferences of choosing the most suitable fur in the 19th century as follows: “The pelts in which the Siberian wraps himself have thick ground hair, are heavy and have coarse guard hair. They have an advantage over fine guard hair, as it protects the wearer much better from storms, sleet and rain. Bear pelts are too heavy, wolf pelts still too expensive, so they have to make do with reindeer pelts.” (“The Taymyr Expedition”)"
				},
				{
				  question: "3. You are once again in the desert; the temperature is +40 °C. What is your choice of headwear?",
				  image: "assets/tests/riietuse_test_kys_03.png",
				  options: [
					"Nothing, it is too hot for that!",
					"A cap",
					"A headscarf"
				  ],
				  points: [0,0,1],
				  answer: "Although even a cap can maintain the temperature of the head and prevent sunburn, it is best to wear a large headdress called shemagh (or keffiyeh). It simultaneously covers the head, neck and face."
				},
				{
				  question: "4. What might be the reason for a reindeer pelt’s good insulation properties?",
				  image: "assets/tests/riietuse_test_kys_04.png",
				  options: [
					"The reindeer pelt is very thick.",
					"The hairs are hollow.",
					"The hairs are very long."
				  ],
				  points: [1,1,0],
				  answer: "Kuigi oluline on ka karvkatte paksus, muutub soojapidavuse juures eriti tähtsaks see, et õhk jääks karvade vahele kinni ning moodustaks omaette isoleeriva kihi. Põhjapõtrade nahk koosneb pealis- ja aluskiht, millest esimese karvad on seest tühjad. Just nendesse õõnsustesse jääbki õhk kinni ning muudab karvkatte külma vastu veelgi tõhusamaks."
				},
				{
				  question: "5. What coloured clothes should you wear in a desert where the temperature is +40 °C",
				  image: "assets/tests/riietuse_test_kys_05.png",
				  options: [
					"Light",
					"Dark",
					"The colour does not matter"
				  ],
				  points: [0,0,1],
				  answer: "The colour of clothes traditionally worn in a desert is not important. For us it is unnatural to see people dressed in black in a desert but research has proven that with baggy clothes, the additional heat black clothing absorbs dissipates before reaching the body. Therefore, light-coloured clothes are as cool as dark ones."
				},
				{
				  question: "6. When travelling to a place where you will have to deal with very cold weather, it is very important to familiarise yourself with various dressing instructions. One of the most common tricks is to dress in layers to insulate warmth better. What is the optimal number of layers?",
				  image: "assets/tests/riietuse_test_kys_06.png",
				  options: [
					"Three",
					"Four",
					"Five"
				  ],
				  points: [0,1,0],
				  answer: "The United States Antarctic programme’s clothing guide suggests four layers.<br>Base layer: close-fitting long-johns made of polypropylene or natural materials such as wool. Cotton must be avoided—it gets wet when pressed against the skin.<br>Second layer: Shirt, jumper, trousers, etc. The aim is to get the moisture away from the underwear and guide it to the next layer.<br>Insulation layer: Trousers, jumper, down jacket etc. Down, wool or polar fleece (modern materials include, for example, Polarguard®, Holofill® Thinsulate® and Primaloft®) should be preferred.<br>Outer layer: Outerwear. The most important layer. It must be windproof, and depending on the conditions, sometimes also waterproof. In dry weather waterproof clothing should be avoided, as it does not allow sweat to escape. <br>Naturally, it is also important to wear a hat, scarf and mask. "
				},
				{
				  question: "7. What material is preferable for desert clothes?",
				  image: "assets/tests/riietuse_test_kys_07.png",
				  options: [
					"Cotton",
					"Linen",
					"Denim"
				  ],
				  points: [1,1,0],
				  answer: "Linen and cotton fit equally well. Linen is light and lets the body breathe well. Cotton is also a suitable material but it must be kept in mind that it absorbs sweat and humidity very well. On the one hand, it is a good way to cool the body but on the other hand, wet clothes might feel uncomfortable."
				},
				{
				  question: "8. You need to make do in Alaska in spring when the temperature is +2 °C and it is raining. Which boots will you choose?",
				  image: "assets/tests/riietuse_test_kys_08.png",
				  options: [
					"Caribou pelt boots",
					"Fox pelt boots",
					"Sealskin boots"
				  ],
				  points: [0,0,1],
				  answer: "Even though caribou pelt is considered to be the warmest and is mostly used in Alaska in winter, it is wiser to choose sealskin boots in a warmer, wetter time, owing to the pelt’s waterproof properties. This will guarantee dry and warm feet. "
				},
				{
				  question: "9. When travelling in the north on a sunny winter day, you must protect your eyes from the sunlight reflecting from the snowy surface. What did people use for it in the 19th century?",
				  image: "assets/tests/riietuse_test_kys_09.png",
				  options: [
					"Snow goggles",
					"Sunglasses",
					"A cap"
				  ],
				  points: [1,0,0],
				  answer: "People in the 19th century used snow goggles to protect their eyes from the sun. These were made of leather, wood or metal, with only thin slits cut into the material to see. People also carried a screen, similar to modern-day caps. Sunglasses as we know them appeared in the 20th century."
				},
				{
				  question: "10. What unit of measurement is used in calculating thermal insulation?",
				  image: "assets/tests/riietuse_test_kys_10.png",
				  options: [
					"wrm",
					"hth",
					"clo"
				  ],
				  points: [0,0,1],
				  answer: "The unit of measurement used for measuring the thermal insulation of clothing is clo, which corresponds to the thermal insulation of a person wearing a suit at +20 °C. In outdoor conditions clo is, in addition to the temperature, influenced by humidity, wind, and how well the clothing allows humidity to escape."
				}

				],
        results: [
          [8, "You have extensive knowledge about dressing for extreme conditions. You would be a great travelling companion!"],
          [4, "Good job! You know a thing or two about dressing. You have to learn just a little bit more and you can travel to a place with extreme weather without any worries."],
          [0, "The subject of dressing is still slightly foreign to you, so should you travel to a place with extreme climate, make sure to research what clothes to bring."]
        ]
			
			},
		}
	}
}
    