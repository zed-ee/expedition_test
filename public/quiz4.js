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
				title:"Viktoriin / Quiz",
				intro: {
					button:'Alusta',
					title: 'Kui hästi tunned kuritööd ja karistust?',
				},
				questions: [
				{
				  question: "Kes oli rahvusülikooli esimese põhikirja projekti autor?",
				  image: "assets/quiz3/q1.jpg",
				  options: [
					"Peeter Põld",
					"Albert Valdes",
					"Johan Kõpp",
					"Jüri Uluots"
				  ],
				  points: [1,0,0,0],
				  answer: "Tartu Ülikooli kuraatori Peeter Põllu mustandkäsikiri pärineb aastast  1919 ning seal sätestatakse Tartu Ülikooli põhiülesannetena:"+
"<br>1) üleüldist ja eriti Eesti elu käsitawat teadust arendada ja edendada; "+
"<br>2) noorsoole ja igale soovijale kõrgemat teaduslist haridust anda ja teadust rahva keskele kanda ja "+
"<br>3) Eesti riigi ja rahva tööle tarwilikkude eriteadmistega warustatud asjatundjaid ettewalmistada. "+
""
				},
				{
				  question: "Millises teaduskonnas õppis 1920. aastatel kõige rohkem naisüliõpilasi?",
				  image: "assets/quiz3/q2.jpg",
				  options: [
					"arstiteaduskonnas",
					"filosoofiateaduskonnas ",
					"põllumajandusteaduskonnas",
					"majandusteaduskonnas "
				  ],
				  points: [0,1,0,0],
				  answer: "Kõige suurema naiste esindatusega paistis silma filosoofiateaduskond. Ajavahemikul 1922–1932 lõpetas teaduskonna 238 naist. Kokku jõudis neil aastatel Tartu Ülikooli lõpetamiseni 803 naist."
				},
				{
				  question: "Kes oli see Eesti esimese põlvkonna professionaalne ajaloolane, kelle peatoimetamisel nägi ilmavalgust esimene eestlaste kirjutatud terviklik käsitlus Eesti muinasajast?",
				  image: "assets/quiz3/q3.jpg",
				  options: [
					"Harri Moora",
					"Julius Mägiste",
					"Hans Kruus",
					"Eerik Lai"
				  ],
				  points: [0,0,1,0],
				  answer: "Hans Kruusi pärand on vastuoluline. Asutava Kogu saadikuna osales ta Eesti Vabariigi ülesehitamisel, 1934. aastast sai temast Tartu Ülikooli Eesti ja Põhjamaade ajaloo professor, 1935. aastast prorektor. 1940. aastal juunis sai Kruusist Johannes Vares Barbaruse valitsuse minister ning septembris määrati ta Eesti NSV Tartu ülikooli rektoriks.",
				},
				{
				  question: "Millal suleti Tartu Ülikooli usuteaduskond?",
				  image: "assets/quiz3/q4.png",
				  options: [
					"augustis 1940 ",
					"märtsis 1941",
					"novembris 1944",
					"juunis 1947 "
				  ],
				  points: [1,0,0,0],
				  answer: "Usuteaduskond suleti kohe Nõukogude okupatsiooni alguses, augustis 1940. Sulgemise otsus tuli vormistada usuteaduskonnal endal. Sulgemise ametlikuks põhjenduseks toodi usuteaduskonna vastuolud Eesti NSV konstitutsiooniga. Likvideerimise tähtajaks seati 31. august. Selleks ajaks pidi ülikool vallandama kõik usuteaduskonna õppejõud ja teised töötajad.",
				},
				{
				  question: "Millist Tartu ülikooli teaduskonda puudutas 1950. aastate alguses toimunud puhastuslaine kõige rohkem?",
				  image: "assets/quiz3/q5.jpg",
				  options: [
					"ajaloo- ja keeleteaduskonda",
					"õigusteaduskonda",
					"kehakultuuriteaduskonda",
					"arstiteaduskonda"
				  ],
				  points: [0,0,1,0],
				  answer: "Kõige suurem puhastustöö tehti ülikooli väikseimas teaduskonnas, kehakultuuriteaduskonnas. Kommunistliku partei Tartu linnakomitee büroo 2. märtsi 1950. aasta otsusega tuli Tartu Riikliku Ülikooli kehakultuuriteaduskond puhastada n-ö klassivaenulikust elemendist. Kokku puudutas see otsus 13 õppejõudu ja töötajat. Dekaan Fred Kudu sai noomituse ebarahuldava kaadripoliitika eest, hiljem vallandati ka tema."
				},
				{
				  question: "Märtsis 1964 toimus Soome Vabariigi presidendi visiit Eesti NSV-sse. Visiidi käigus külastas president Tartut ning pidas ülikooli aulas eestikeelse kõne. Milliste sõnadega Soome riigipea kõnet alustas?",
				  image: "assets/quiz3/q6.jpg",
				  options: [
					"Lugupeetud seltsimees, rektor Fjodor Klement, ülikooli pere ja külalised. Nõukogude Liidu ja Soome Vabariigi heanaaberlike suhete kinnituseks sai minu külaskäik Eesti NSVsse teoks. ",
					"Hea hõimurahvas, Tartu ülikooli pere ja sõbrad. Meie kahe rahva liit on olnud aastasade kestel tugev ja ühtne. ",
					"Härra rektor, lugupeetud ülikooli õppejõud, üliõpilased. Vabandage, et räägin eesti keelt, kuigi oskan seda halvemini kui soome keelt."
				  ],
				  points: [0,0,1],
				  answer: "Urho Kaleva Kekkonen pidas aulas peetud tervituskõne eesti keeles. Kõne oli emotsionaalne, vaba ideoloogilisest painest ning üllatas kuulajaid oma eestimeelsusega."
				},
				{
				  question: "Tartu Riikliku Ülikooli 1975. aastal välja antud „Kombeka üliõpilase käsiraamatus“ käsitletakse muu hulgas ka noorte meeste juukselõikuse teemat. Kuidas iseloomustati käsiraamatus pikki juukseid?",
				  image: "assets/quiz3/q7.jpg",
				  options: [
					"Pole tähtis, kas juuksed on pikad või lühikesed, oluline on, et juuksed oleksid puhtad ja kammitud.",
					"Üliõpilasmütsi all mõjuvad naisejuuksed mehel otse eemalepeletavalt, eriti kui nad on pesemata.",
					"Õlgadeni ulatuvad juuksed on viimastel aegadel olnud naise au ja ilu, mehele nad praegu, mil juuksuriasjanduses lambakäärid ja kauss ammu on asendatud paremate riistadega, ei sobi."
				
				  ],
				  points: [0,1,1],
				  answer: "Kombekale nõukogude noormehele õlgadeni ulatuvad pikad juuksed ei sobinud."
				},
				{
				  question: "1989. aasta kevade kuumimaks protestiaktsiooniks kujunes sõjalise õppe kaotamine Tartu ülikoolis. 1989. aasta aprillis korraldasid tudengid sõjalise õppe kaotamiseks hoiatusnäljastreike. Milliste tulemustega need lõppesid?",
				  image: "assets/quiz3/q8.jpg",
				  options: [
					"Näljastreigis osalejaid viidi miilitsajaoskonda ning neile määrati kolm päeva aresti.",
					"Näljastreik kuulutati välja, kuid kuna osalejaid ei leidunud, jäi plaan katki.",
					"Pärast nädal kestnud protesti otsustas ülikooli juhtkond sõjalise õppe kaotada. ",
					"Ülikooli nõukogu otsusega muudeti sõjaline õpe vabatahtlikuks."
				  ],
				  points: [0,0,0,1],
				  answer: "28. aprillil 1989 ülikooli nõukogus toimunud hääletuse tulemusena muudeti sõjaline õpetus tudengitele vabatahtlikuks ning anti rektorile õigus mitte rakendada varasemat korda, mille kohaselt tulnuks üliõpilased, kel on sõjalises õppes võlgnevused, eksmatrikuleerida.  Sõjaline õpe kaotati ülikoolis 1990. aastal."
				},
				{
				  question: "Millisele Tartu Ülikoolis õpetatavale erialale oli 1990. aastate teisel poolel suurim tung?",
				  image: "assets/quiz3/q9.png",
				  options: [
					"õigusteadus",
					"majandus",
					"hispaania keel ja kirjandus",
					"psühholoogia"
				  ],
				  points: [0,0,1,0],
				  answer: "Kõik mainitud erialad olid väga populaarsed, kuid suurim konkurss oli filosoofiateaduskonnas hispaania keele ja kirjanduse erialale, kuhu võeti õppima üle aasta. 1999. aastal kujunes hispaania keeles ja kirjanduses konkurss 21,9 inimest kohale."
				},
				{
				  question: "2018. õppeaastal õppis Tartu Ülikoolis 1457 välisüliõpilast 105 riigist. Millisest riigist oli välisüliõpilasi kõige rohkem?",
				  image: "assets/quiz3/q10.png",
				  options: [
					"Soome ",
					"Venemaa",
					"Hiina ",
					"Ukraina"
				  ],
				  points: [0,1,0,0],
				  answer: "Kõige rohkem oli välisüliõpilasi Venemaalt, kokku 192. Soome järgnes 132 ja Ukraina 119 välisüliõpilasega. Ka 2017. aastal oli kõige rohkem välisüliõpilasi Venemaalt, 2016. aastal aga Soomest."
				}

				],
        results: [
          [10, "<br><br>Väga tubli, vastasid õigesti kõigile küsimustele."],
          [9, "<br><br>Väga tubli, eksisid ainult ühe vastusega."],
          [8, "<br><br>Väga tubli, eksisid ainult kahe vastusega."],
          [7, "<br><br>Tubli, Vastasid õigesti seitsmele küsimusele 10-st."],
          [6, "<br><br>Tubli, Vastasid õigesti kuuele küsimusele 10-st."],
          [5, "<br><br>Tubli, Vastasid õigesti täpselt pooltele küsimusele."],
          [4, "<br><br>Vastasid õigesti neljale küsimusele 10-st, proovi uuesti."],
          [3, "<br><br>Vastasid õigesti kolmele küsimusele 10-st, proovi uuesti."],
          [2, "<br><br>Vastasid õigesti ainult kahele küsimusele 10-st, proovi uuesti."],
          [1, "<br><br>Vastasid õigesti ainult ühele küsimusele 10-st, proovi uuesti."],
          [0, "<br><br>Sa ei vastanud ühelegi küsimusele õigesti, proovi uuesti."]
        ]        

			},
			en: {
				title:"Quiz of the exhibition<br> „Crime and Punishment“<br>",
				intro: {
					button:'Start',
					title: 'How well do you know crimes and punishments?',
				},
				questions: [
				{
				  question: "Who was the author of the Estonian national university’s first articles of association? ",
				  image: "assets/quiz3/q1.jpg",
				  options: [
					"Peeter Põld",
					"Albert Valdes",
					"Johan Kõpp",
					"Jüri Uluots"
				  ],
				  points: [1,0,0,0],
				  answer: "The draft manuscript of the University of Tartu’s curator Peeter Põld dates back to 1919 and lists the University of Tartu’s main tasks as follows:<br>"+
"1) developing and facilitating science in general and research that explores life in Estonia <br>"+
"2) providing higher research education for the young and anyone who wishes to obtain it; disseminating scientific results among the people and <br>"+
"3) preparing experts with specialist knowledge necessary for the Estonian state and nation. <br>"
				},
				{
				  question: "Which faculty had the greatest number of women students in the 1920s?",
				  image: "assets/quiz3/q2.jpg",
				  options: [
					"faculty of medicine",
					"faculty of philosophy",
					"faculty of agriculture",
					"faculty of economy"
				  ],
				  points: [0,1,0,0],
				  answer: "The greatest number of women studied at the faculty of philosophy. 238 women graduated from the faculty from 1922 to 1932. Altogether, 803 women managed to graduate from the University of Tartu during this period."
				},
				{
				  question: "Which of these first-generation professional Estonian historians was the editor-in-chief of the first complete treatment of Estonian ancient history written and published by Estonians?",
				  image: "assets/quiz3/q3.jpg",
				  options: [
					"Harri Moora",
					"Julius Mägiste",
					"Hans Kruus",
					"Eerik Lai"
				  ],
				  points: [0,0,1,0],
				  answer: "Hans Kruus’s legacy is controversial. He participated in building the Republic of Estonia as a member of the Constituent Assembly; in 1934 he became Professor of Estonian and Nordic history at the University of Tartu; in 1935 he was appointed Vice-Rector. In June 1940 Kruus became a minister in Johannes Vares-Barbarus’s government and was appointed the Rector of the Estonian SSR’s University of Tartu in September. ",
				},
				{
				  question: "When was the University of Tartu’s faculty of theology closed?",
				  image: "assets/quiz3/q4.png",
				  options: [
					"August 1940 ",
					"March 1941",
					"November 1944",
					"June 1947 "
				  ],
				  points: [1,0,0,0],
				  answer: "The Faculty of Theology was closed in the very beginning of Soviet occupation, in August 1940. The faculty itself had to prepare the decision of closure. The official reason for terminating the faculty of theology was said to be its conflict with the constitution of the Estonian SSR. 31 August was set as the deadline for liquidation. By that time, the university was to fire all the lecturers and other employees of the faculty of theology. .",
				},
				{
				  question: "5.	Which of the University of Tartu’s faculties was the most affected by the purge in the early 1950s?",
				  image: "assets/quiz3/q5.jpg",
				  options: [
					"faculty of history and languages ",
					"faculty of law",
					"faculty of physical education",
					"faculty of medicine"
				  ],
				  points: [0,0,1,0],
				  answer: "The purge was the worst in the university’s smallest faculty, that of physical education. Tartu State University’s faculty of physical education was to be cleansed of so-called hostile class elements pursuant to the communist party’s Tartu city party committee office’s decision from 2 March 1950. It affected 13 lecturers and employees altogether. Dean Fred Kudu was reprimanded for his unsatisfactory human resources policy and was later also fired."
				},
				{
				  question: "The President of the Republic of Finland visited the Estonian SSR in March 1964. During his visit, the president came to Tartu and made a speech in Estonian at the assembly hall of the university. How did the Finnish head of state start his speech? ",
				  image: "assets/quiz3/q6.jpg",
				  options: [
					"Dear comrade, Rector Fjodor Klement, university family and guests. My visit to the Estonian SSR is a sign of the Soviet Union and Finland’s neighbourly relations. ",
					"Dear kin nation, Tartu university family and friends. The alliance of our two nations has been strong and close throughout centuries. ",
					"Mr Rector, most honourable university lecturers, students. Excuse me for talking in Estonian, although I don’t speak it as fluently as Finnish."
				  ],
				  points: [0,0,1],
				  answer: "Urho Kaleva Kekkonen held his greeting speech at the university assembly hall in Estonian. It was emotional, free of ideological clutter and surprised the listeners with its Estophile sentiments."
				},
				{
				  question: "The subject of young men’s haircuts is discussed in the 1975 Handbook of a Proper Student (Kombeka üliõpilase käsiraamat) published at the Tartu State University. How are long hair characterised in the publication?",
				  image: "assets/quiz3/q7.jpg",
				  options: [
					"It is not important whether you wear your hair long or short, as long as they’re clean and neatly kempt. ",
					"Women’s hairstyles worn by male students who don their university cap are repelling, especially if the hair is unwashed. ",
					"Shoulder-length hair has become a thing of beauty and pride for women in the past years, but this does not befit a man in our times when sheep shearing scissors and barber’s bowls have been long replaced with better hairdressing tools."
				
				  ],
				  points: [0,1,1],
				  answer: "A proper Soviet youngster didn’t wear shoulder-length hair."
				},
				{
				  question: "Abolishing military basic training courses at the University of Tartu became the hottest protest action in the spring of 1989. In April 1989 students organised warning hunger strikes to demand that basic military training courses must be ended. What was the result?",
				  image: "assets/quiz3/q8.jpg",
				  options: [
					"The hunger strikers were taken to a militsiya station and got three days of detention.",
					"The hunger strike was announced but as there were no participants, the plan wasn’t realised.",
					"The university administration decided to abolish basic military training courses after a week of protest.",
					"Basic military training courses became voluntary pursuant to the university council’s decision."
				  ],
				  points: [0,0,0,1],
				  answer: "As a result of a vote organised on 28 April 1989 at the university council, basic military training courses became voluntary for students and the Rector was granted the right to waive the previous procedure, according to which students who had failed to perform all the requirements of the courses were exmatriculated. Basic military training courses were abolished at the university in 1990."
				},
				{
				  question: "What was the most popular specialty taught at the University of Tartu in the second half of the 1990s?",
				  image: "assets/quiz3/q9.png",
				  options: [
					"law",
					"economy",
					"Spanish language and literature",
					"psychology"
				  ],
				  points: [0,0,1,0],
				  answer: "All the listed specialties were very popular but the greatest number of people competed for Spanish language and literature at the faculty of philosophy, where students were admitted every other year. 21.9 people competed for one vacancy to study Spanish language and literature in 1999."
				},
				{
				  question: "1,457 students from 105 states studied at the University of Tartu in the academic year of 2018. Which state ranked the first on the basis of student numbers?",
				  image: "assets/quiz3/q10.png",
				  options: [
					"Finland  ",
					"Russia",
					"China  ",
					"Ukraine"
				  ],
				  points: [0,1,0,0],
				  answer: "The greatest number of foreign students, altogether 192, came from Russia. Finland ranked second with 132 and Ukraine third with 119 students. Russia was also first in terms of student numbers in 2017, while Finland was at the top in 2016."
				}

				],
                
        results: [
                [10,"<br><br>Very good, You answered all the questions correctly."],
                [9, "<br><br>Very good, You missed with only one answer."],
                [8, "<br><br>Very good, You missed with only two responses."],
                [7, "<br><br>Good, You correctly answered seven questions out of 10."],
                [6, "<br><br>Good, You correctly answered six out of the 10 questions."],
                [5, "<br><br>Good, You answered half of the question right."],
                [4, "<br><br>You answered correctly four of the 10 questions, please try again."],
                [3, "<br><br>You answered correctly three of the 10 questions, please try again."],
                [2, "<br><br>You only answered two of the 10 questions correctly, try again."],
                [1, "<br><br>You just answered one of the 10 questions correctly, try again."],
                [0, "<br><br>You did not answer any question correctly, please try again."]
        ]        

		}	
		}
	}
}
    