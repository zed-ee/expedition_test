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
          options: ["a)","b)","c)"],
          correct_answer:"Õige vastus"
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
          options: ["a)","b)","c)"],
          correct_answer:"Correct answer"          
        },
		},
	},
	tests: {
		quiz: {
			et: {
				title:"Näituse<br> „Maailma mõõtmine“<br> viktoriin",
				intro: {
					button:'Alusta',
					title: 'Mõõda oma teadmisi maailmast!',
				},
				questions: [
				{
				  question: "Kus Euraasias kasvatatakse tänapäeval kõige rohkem põhjapõtru?",
				  image: "assets/tests/q1.jpg",
				  options: [
					"Saamide asualal Põhja-Skandinaavias.",
					"Kesk-Jakuutias.",
					"Taimõri piirkonnas."
				  ],
				  points: [0,0,1],
				  answer: "Taimõril karjatati 2009. aastal 700 000 põhjapõtra. Kuid ka seal on nende arv vähenenud, veel 2000. aastal oli Taimõris 1 000 000 põhjapõtra."
				},
				{
				  question: "Millisest keelest pärineb sõna „tundra“",
				  image: "assets/tests/q2.jpg",
				  options: [
					"Eenetsi keelest",
					"Sölkupi keelest",
					"Kildini saami keelest"
				  ],
				  points: [0,0,1],
				  answer: "Kildini saami keele kõnelejad elavad Venemaal Koola poolsaare keskosas. Kildini saami keel on väga ohustatud, igapäevaselt tarvitab seda vähem kui 100 inimest."
				},
				{
				  question: "Venemaal Magadani oblastis on järv, mis kannab ühe Ameerika kirjaniku nime. Millise?",
				  image: "assets/tests/q3.jpg",
				  options: [
					"Truman Capote",
					"William Faulkner",
					"Jack London"
				  ],
				  points: [0,0,1],
				  answer: "Mägede vahel asuv järv on 10 km pikk ja 60 m sügav. Jack Londoni nime sai järv 1932. aastal."
				},
				{
				  question: "Milline on kõige magedama veega ookean?",
				  image: "assets/tests/q4.jpg",
				  options: [
					"Põhja-Jäämeri",
					"India ookean",
					"Vaikne ookean"
				  ],
				  points: [1,0,0],
				  answer: "Selle põhjuseks on külmast kliimast tulenev väiksem aurumine, suurte magedaveeliste jõgede sissevool ning piiratud ühendus teiste soolasemate ookeanitega."
				},
				{
				  question: "Kuidas nimetatakse putukat, kes kannab edasi malaariat?",
				  image: "assets/tests/q5.jpg",
				  options: [
					"hallasääsk",
					"tsetsekärbes",
					"Aasia tiiger-sääsk"
				  ],
				  points: [1,0,0],
				  answer: "Malaariat levitavad hallasääsed ehk Anopheles’e perekonda kuuluvate sääskede emased isendid. Tsetsekärbes kannab edasi Aafrikas laialt levinud haigust nimega unitõbi. Aasia tiiger-sääsk on üks Chikungunya palaviku levitajaid, mis on rännanud läbi Lõuna- ja Kagu-Aasia, Aafrika ning jõudnud viimase sajandi jooksul ka Lõuna-Euroopasse ning Ameerikasse. Haigusega kaasnevad tavaliselt palavik, liigesevalu ja –põletik."
				},
				{
				  question: "Aafrika pügmeed ehk kääbusrahvas on tuntud lühikese kasvu poolest. Milline on nende meeste keskmine pikkus?",
				  image: "assets/tests/q6.jpg",
				  options: [
					"110–130 cm",
					"130–150 cm",
					"150–170 cm"
				  ],
				  points: [0,1,0],
				  answer: "Aafrika keskosas elavate pügmeede keskmine pikkus on 130–150 cm. Nad rändavad vihmametsas ja tegelevad põhiliselt küttimise ning korilusega. Teiste Kesk-Aafrika rahvastega võrreldes on nende nahavärv palju heledam. Vastsündinud pügmeedel on ka pikad siledad juuksed, mis 3–5 kuuga välja langevad ning mille asemele kasvavad krussis juuksed."
				},
				{
				  question: "Maakera madalaim õhutemperatuur on mõõdetud Vostoki polaarjaamas Antarktises. Kui madal see on?",
				  image: "assets/tests/q7.jpg",
				  options: [
					"–96,6 °C",
					"–89,2 °C",
					"–79,4 °C"
				  ],
				  points: [0,1,0],
				  answer: "Tulemus mõõdeti 21. juulil 1983 Vostoki polaarjaamas. Tegemist on maakera kõige külmema piirkonnaga, kus aasta keskmine õhutemperatuur jääb vahemikku –45 kuni –55 °C"
				},
				{
				  question: "Esimese inimesena maailmas alustas Antarktises helkivate ööpilvede vaatlusi 1966. aastal eestlane Enn Kreem. Molodjožnaja jaamas talvitudes tegi Enn Kreem 262 vaatlusöö jooksul 5145 vaatlust. Mitu korda õnnestus tal helkivaid ööpilvi tabada?",
				  image: "assets/tests/q8.jpg",
				  options: [
					"üks kord",
					"27 korda",
					"368 korda"
				  ],
				  points: [1,0,0],
				  answer: "Kohapeal selgus, et Molodjožnaja jaam on helkivate ööpilvede vaatlemiseks ebasobiv koht. Lisaks raskendas vaatlusi hämarikuperioodil ilmuv liustikutuul, mis põhjustas sageli madaltuisku. Nii juhtus ka Enn Kreemi vaatluskorral. Madaltuisu tõttu sai Enn Kreem helkivaid ööpilvi vaadelda vaid palja silmaga."
				},
				{
				  question: "Mitmest saarest koosneb Hawaii saarestik?",
				  image: "assets/tests/q9.png",
				  options: [
					"15 saarest",
					"78 saarest",
					"132 saarest"
				  ],
				  points: [0,0,1],
				  answer: "Hawaii saarestiku moodustavad kaheksa suuremat ja 124 väiksemat saart ja atolli. Suuremad saared on O'ahu, Hawaii, Maui, Kauai, Molokai, Lana'i, Ni'ihau ja Kaho'olawe."
				},
				{
				  question: "Kuidas hävis Elugelabi atoll Marshalli saarestikus?",
				  image: "assets/tests/q10.jpg",
				  options: [
					"Jäi vee alla",
					"Vesinikupommi katsetamisel",
					"Vulkaanipurske tagajärjel"
				  ],
				  points: [0,1,0],
				  answer: "Atoll hävitasid Ameerika Ühendriigid 1952. aastal maailma esimesel vesinikupommi katsetamisel. Plahvatusest jäi Elugelabi atolli asemel 1,9 km läbimõõduga ja 50 m sügavune kraater."
				},
				{
				  question: "Mitmendal kohal on Kaspia meri suuruse poolest maailma järvede seas?",
				  image: "assets/tests/q11.jpg",
				  options: [
					"2. kohal",
					"3. kohal",
					"1. kohal"
				  ],
				  points: [0,0,1],
				  answer: "Kaspia mere pindala on 371 000 km2 ja pikkus 1199 km. Teisel ja kolmandal kohal on Ülemjärv Põhja-Ameerikas ja Victoria järv Aafrikas."
				},
				{
				  question: "Mis aastani kandis Iraan Pärsia nime",
				  image: "assets/tests/q12.jpg",
				  options: [
					"1935. aastani",
					"1979. aastani",
					"1918. aastani"
				  ],
				  points: [1,0,0],
				  answer: "Kuna pärsia keeles nimetasid elanikud ise riiki Iraaniks, siis 1935. aastal paluti nime kasutada ka rahvusvahelisel tasandil."
				},

				],
        results: [
          [12, "<br><br>Väga tubli, vastasid õigesti kõigile küsimustele."],
          [11, "<br><br>Väga tubli, eksisid ainult ühe vastusega."],
          [10, "<br><br>Väga tubli, eksisid ainult kahe vastusega."],
          [9, "<br><br>Tubli, vastasid õigesti üheksale küsimusele 12-st."],
          [8, "<br><br>Tubli, Vastasid õigesti kaheksale küsimusele 12-st."],
          [7, "<br><br>Tubli, Vastasid õigesti seitsmele küsimusele 12-st."],
          [6, "<br><br>Tubli, Vastasid õigesti täpselt pooltele küsimusele."],
          [5, "<br><br>Vastasid õigesti viiele küsimusele 12-st, proovi uuesti."],
          [4, "<br><br>Vastasid õigesti neljale küsimusele 12-st, proovi uuesti."],
          [3, "<br><br>Vastasid õigesti kolmele küsimusele 12-st, proovi uuesti."],
          [2, "<br><br>Vastasid õigesti ainult kahele küsimusele 12-st, proovi uuesti."],
          [1, "<br><br>Vastasid õigesti ainult ühele küsimusele 12-st, proovi uuesti."],
          [0, "<br><br>Sa ei vastanud ühelegi küsimusele õigesti, proovi uuesti."]
        ]        

			},
			en: {
				title:"Quiz of the exibition<br>„Maailma mõõtmine“",
				intro: {
					button:'Start',
					title: 'Measure your knowledge of the world!',
				},
				questions: [
				{
				  question: "Which region in Eurasia is responsible for breeding the largest number of reindeer?",
				  image: "assets/tests/q1.jpg",
				  options: [
					"Area of the Sami people in North Scandinavia.",
					"Central Yakutia.",
					"Taymyr region."
				  ],
				  points: [0,0,1],
				  answer: "700,000 reindeer were grazed in Taymyr in 2009. However, the number has decreased even in there—1,000,000 reindeer were grazed in Taymyr as recently as in 2000."
				},
				{
				  question: "From which language does the word <i>tundra</i> originate",
				  image: "assets/tests/q2.jpg",
				  options: [
					"the Enets language",
					"the Selkup language",
					"the Kildin Sami language"
				  ],
				  points: [0,0,1],
				  answer: "Speakers of the Kildin Sami language live in the central part of the Kola Peninsula in Russia. The Kildin Sami language is highly endangered, less than 100 people speak it in their daily lives."
				},
				{
				  question: "There is a lake bearing the name of an American writer in Magadan oblast, Russia. What is the writer’s name?",
				  image: "assets/tests/q3.jpg",
				  options: [
					"Truman Capote",
					"William Faulkner",
					"Jack London"
				  ],
				  points: [0,0,1],
				  answer: "The lake that is located in between mountains is 10 km long and 60 m deep. The lake was named after Jack London in 1932."
				},
				{
				  question: "Which ocean has the least saline water?",
				  image: "assets/tests/q4.jpg",
				  options: [
					"Arctic Ocean",
					"Indian Ocean",
					"Pacific Ocean"
				  ],
				  points: [1,0,0],
				  answer: "The low salinity is caused by the low levels of evaporation due to the cold climate, the inflow of large freshwater rivers and restricted connection to other more saline oceans."
				},
				{
				  question: "What is the name of the insect that spreads malaria?",
				  image: "assets/tests/q5.jpg",
				  options: [
					"Anopheles mosquito",
					"Tsetse fly",
					"Asian tiger mosquito"
				  ],
				  points: [1,0,0],
				  answer: "Malaria is spread by females of the species of mosquitos that belong to the Anopheles genus. Tsetse flies spread human sleeping sickness—a disease widespread in Africa. Asian tiger mosquitos are one of the species that spreads the Chikungunya virus, which has travelled through South and South East Asia, Africa, and reached South Europe and America during the previous century. Common symptoms of the disease are fever, joint pain and inflammation."
				},
				{
				  question: "African Pygmy peoples are known for being unusually short. How tall are Pygmy men on average?",
				  image: "assets/tests/q6.jpg",
				  options: [
					"110–130 cm",
					"130–150 cm",
					"150–170 cm"
				  ],
				  points: [0,1,0],
				  answer: "The average height of the Pygmy people living in Central Africa is 130–150 cm. They lead a nomadic lifestyle in the rainforests, and live mainly on hunting and gathering. Their skin is much lighter compared to other peoples in the Central Africa. New-born Pygmy also have long straight hair that falls out in 3–5 months—curly hair grows to replace it."
				},
				{
				  question: "The lowest temperature on Earth was measured in the Vostok Station in the Antarctic. How low was the temperature?",
				  image: "assets/tests/q7.jpg",
				  options: [
					"–96,6 °C",
					"–89,2 °C",
					"–79,4 °C"
				  ],
				  points: [0,1,0],
				  answer: "This measurement was recorded on 21 July 1983 in the Vostok polar station. This is the coldest region on Earth, the average yearly temperature of which ranges from –45 to –55 °C."
				},
				{
				  question: "The first person to observe noctilucent clouds in the Antarctic was the Estonian researcher Enn Kreem in 1966. While wintering in the Molodyozhnaya station Enn Kreem made 5,145 observations in 262 observing nights. How many times did he manage to see noctilucent clouds?",
				  image: "assets/tests/q8.jpg",
				  options: [
					"once",
					"27 times",
					"368 times"
				  ],
				  points: [1,0,0],
				  answer: "It became apparent at the location that the Molodyozhnaya station was unsuitable for observing noctilucent clouds. Additionally, observation was made more difficult by katabatic wind (a high-speed wind that carries high density air down) that often caused blowing snow. It was like that during Enn Kreem’s observations as well. Due to the blowing snow Enn Kreem could only observe noctilucent clouds with the naked eye."
				},
				{
				  question: "How many islands are there in the Hawaiian archipelago?",
				  image: "assets/tests/q9.png",
				  options: [
					"15 islands",
					"78 islands",
					"132 islands"
				  ],
				  points: [0,0,1],
				  answer: "The Hawaiian archipelago includes eight major and 124 small islands and atolls. The major islands are O'ahu, Hawai’i, Maui, Kaua’i, Moloka’i, Lana’i, Ni’ihau and Kaho’olawe."
				},
				{
				  question: "How did the Elugelab atoll in the Marshall Islands perish?",
				  image: "assets/tests/q10.jpg",
				  options: [
					"it was flooded ",
					"it was destroyed during the testing of the hydrogen bomb",
					"it was destroyed as a result of a volcanic eruption"
				  ],
				  points: [0,1,0],
				  answer: "The atoll was destroyed by the United States of America in 1952 during the testing of the world’s first hydrogen bomb. The explosion created a crater with a diameter of 1.9 km and depth of 50 m in the place where the Elugelab atoll used to be.."
				},
				{
				  question: "Which place does the Caspian Sea hold among the lakes of the world in terms of size?",
				  image: "assets/tests/q11.jpg",
				  options: [
					"second",
					"third",
					"first"
				  ],
				  points: [0,0,1],
				  answer: "The area of the Caspian Sea is 371,000 km<sup>2</sup> and its length is 1,199 km. Lake Superior in North America and Lake Victoria in Africa rank second and third. "
				},
				{
				  question: "When was Persia’s name changed to Iran",
				  image: "assets/tests/q12.jpg",
				  options: [
					"in 1935",
					"in 1979",
					"in 1918"
				  ],
				  points: [1,0,0],
				  answer: "As the residents of the state called the county Iran in Farsi, it was asked that the international community use the same name as of 1935."
				},

				],
        results: [
          [12, "<br><br>Väga tubli, vastasid õigesti kõigile küsimustele."],
          [11, "<br><br>Väga tubli, eksisid ainult ühe vastusega."],
          [10, "<br><br>Väga tubli, eksisid ainult kahe vastusega."],
          [9, "<br><br>Tubli, vastasid õigesti üheksale küsimusele 12-st."],
          [8, "<br><br>Tubli, Vastasid õigesti kaheksale küsimusele 12-st."],
          [7, "<br><br>Tubli, Vastasid õigesti seitsmele küsimusele 12-st."],
          [6, "<br><br>Tubli, Vastasid õigesti täpselt pooltele küsimusele."],
          [5, "<br><br>Vastasid õigesti viiele küsimusele 12-st, proovi uuesti."],
          [4, "<br><br>Vastasid õigesti neljale küsimusele 12-st, proovi uuesti."],
          [3, "<br><br>Vastasid õigesti kolmele küsimusele 12-st, proovi uuesti."],
          [2, "<br><br>Vastasid õigesti ainult kahele küsimusele 12-st, proovi uuesti."],
          [1, "<br><br>Vastasid õigesti ainult ühele küsimusele 12-st, proovi uuesti."],
          [0, "<br><br>Sa ei vastanud ühelegi küsimusele õigesti, proovi uuesti."]
        ]        

			}
		}
	}
}
    