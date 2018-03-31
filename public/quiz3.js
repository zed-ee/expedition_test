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
				title:"Näituse<br> „Kuritöö ja Karistus“<br> viktoriin",
				intro: {
					button:'Alusta',
					title: 'Kui hästi tunned kuritööd ja karistust?',
				},
				questions: [
				{
				  question: "Millises riigis tuvastati esimest korda kurjategija tänu sõrmejälgedele?",
				  image: "assets/quiz3/q1.jpg",
				  options: [
					"Argentiina",
					"Prantsusmaa",
					"Suurbritannia",
					"Šveits"
				  ],
				  points: [1,0,0,0],
				  answer: "Politseiametnik Juan Vucetich hakkas 1891. aastal kasutama sõrmejälgi politseitöös ja tuvastas 1892. aastal tänu neile mõrvari."
				},
				{
				  question: "Mis aastal teostati Eestis viimane surmanuhtluse otsus?",
				  image: "assets/quiz3/q2.jpg",
				  options: [
					"1989",
					"1991",
					"1993",
					"1997"
				  ],
				  points: [0,1,0,0],
				  answer: "Viimast korda viidi Eestis kohtuotsusega kinnitatud surmaotsus täide 11. septembril 1991, kui Tallinnas hukati kaksikmõrva eest Rein Oruste. Surmanuhtlus säilis Eesti seadustikus kuni 1998. aastani. Surmanuhtlusest loobumine oli nõudeks, et ühineda Euroopa Liiduga."
				},
				{
				  question: "1990 aastate alguses lokkas Eestis salarelvaäri ning relvadega sooritatud kuritegude arv. Mitu relvaekspertiisi tehti 1992 aastal?",
				  image: "assets/quiz3/q3.jpg",
				  options: [
					"umbes 200",
					"umbes 500",
					"umbes 700",
					"umbes 1000"
				  ],
				  points: [0,0,1,0],
				  answer: "1990ndate alguses oli tõesti vaja teha umbes 700 relvaekspertiisi aastas. Tänapäeval tehakse neid aastas keskmiselt 140–160 tükki.",
                  reference:"Eesti Rahvusarhiiv ERA.R.280.8.1213.39"
				},
				{
				  question: "Šveitsi päritolu arst ja loodusteadlane Paracelsus ütles 16. sajandil, et iga aine on surmav olenevalt tema kogusest. Milline aine on maailmas kõige surmavam?",
				  image: "assets/quiz3/q4.png",
				  options: [
					"botuliin",
					"plutoonium",
					"tsüaniid",
					"sariin"
				  ],
				  points: [1,0,0,0],
				  answer: "Maailma surmavaim aine on botuliin. Botuliin A tüüpi ehk Botoxit kasutatakse ilutööstuses. Surmav kogus on 1,3 kuni 2,1 nanogrammi kilogrammi kohta ehk 80 kg kaaluvale isikule  0,000168 mg. Selliselt on botuliin 10 000 korda surmavam kui teisel kohal olev plutoonium.",
                  reference:"3D mudel Botoxist Lacy, D.B., Tepp, W., Cohen, A.C., DasGupta, B.R., Stevens, R.C. (1998)"
				},
				{
				  question: "Vangistust on peetud kas rehabiliteerivaks või karistavaks meetmeks. On neid, kes kannavad eluaegset vanglakaristust kui ka neid, kellele otsustatakse armu anda. Kui mitu aastat istus kinni  mees, kes pidi kõige kauem vangistuses ootama, enne kui talle lõpuks armu anti?",
				  image: "assets/quiz3/q5.jpg",
				  options: [
					"70 aastat",
					"69 aastat",
					"68 aastat",
					"67 aastat"
				  ],
				  points: [0,0,1,0],
				  answer: "Kõige kauem on enne vabastamist vangis istunud ameeriklane Paul Geidel Jr., kes 17-aastasena tappis 1911. aastal röövi käigus mehe ning mõisteti selle eest 20 aastaks vangi. Aastal 1926 tunnistati Paul vaimuhaigeks ning ta jäi edasi kinnipidamisasutusse. 1974.aastal anti mehele pärast 62 aastat armu, kuid ta ei soovinud lahkuda ning alles 1980. aasta mais, pärast 68 aastat ja 245 päeva vangistuses, saadeti ta vanadekodusse kus ta 93-aastaselt suri."
				},
				{
				  question: "Surmanuhtlust rakendatakse tänapäeval veel 52 riigis ning suuremal osal neist toimub hukkamine vahetult pärast otsuse välja kuulutamist. Mõnel pool on aga võimalik otsust aastaid edasi kaevata. Kui mitu aastat on kõige rohkem surmanuhtlust edasi lükatud?",
				  image: "assets/quiz3/q6.jpg",
				  options: [
					"50 aastat",
					"46 aastat",
					"42 aastat",
					"39 aastat"
				  ],
				  points: [0,1,0,0],
				  answer: "Jaapanis ootas kodanik Iwao Hakamada surmanuhtluse järjekorras 46 aastat. 2014. aastal pääses ta vabadusse pärast seda, kui ta oli aastaid nõudnud uut kohtuistungit, milles ta lõpuks süütuks tunnistati, kuna tema vastu kasutatud asitõendid olid olnud võltsitud."
				},
				{
				  question: "Aastatel 1944–1992 oli Eestis käibel Nõukogude rubla. Sellesse perioodi mahtusid 1947. ja 1961. aasta rahareformid. Millise kursiga toimus rahavahetus?",
				  image: "assets/quiz3/q7.jpg",
				  options: [
					"1:15",
					"1:5",
					"1:20",
					"1:10"
				  ],
				  points: [0,0,0,1],
				  answer: "Mõlemal puhul 10 vana rubla = 1 uus rubla. 1992. aasta, kui tuli Eesti kroon, oli vahetuskurss 1 kroon = 100 rubla. Vahetati ainult 150 krooni (1500 rubla) igale eraisikule. Fikseeriti kurss 1 Saksa mark = 8 krooni."
				},
				{
				  question: "1984. aastal töötati välja meetod, kuidas inimest DNA abil kindlaks teha. Tänapäeval on DNA uurimine kriminalistika lahutamatu osa. Mis aastal telliti esimene DNA-ekspertiis Eestis?",
				  image: "assets/quiz3/q8.jpg",
				  options: [
					"1990",
					"1992",
					"1995",
					"1997"
				  ],
				  points: [0,0,1,0],
				  answer: "3.mail 1995 tellis Eesti politsei geeniteadlastelt esimese DNA-ekspertiisi. Tänapäeval tehakse aastas juba tuhandeid DNA-ekspertiise isaduse tuvastamisest kurjategijate kindlaks tegemiseni. "
				},
				{
				  question: "2001. aastal tabas Eestit metanoolitragöödia, mille käigus viis salaviin hauda 68 inimest. Kui mitu inimest anti kohtusse süüdistatuna „ettevaatamatuse tõttu surma põhjustamises“?",
				  image: "assets/quiz3/q9.png",
				  options: [
					"9",
					"8",
					"10",
					"12"
				  ],
				  points: [1,0,0,0],
				  answer: "Ettevaatamatuse tõttu surma põhjustamises anti kohtusse üheksa inimest, kokku sai süüdistuse aga 18 inimest. Pikim karistus oli viis aastat, sest kohus leidis, et süüdistatavad ei olnud teadlikud salaviina mürgisusest."
				},
				{
				  question: "Tänapäeva krimiseriaalidest on tuntud „õiguste ette lugemine“, kui inimest vahistatakse. Komme on alguse saanud Ameerika Ühendriikidest ning seda kutsutakse „Miranda hoiatusteks või õigusteks“. Mis aastast on seda rakendatud?",
				  image: "assets/quiz3/q10.png",
				  options: [
					"1933",
					"1947",
					"1954",
					"1966"
				  ],
				  points: [0,0,0,1],
				  answer: "Sel aastal dikteeris ülemkohtu otsus kohtuprotsessil Miranda v. Arizona, et inimesele peab meelde tuletama, et tal on põhiseaduslik õigus iseenda vastu mitte tunnistada. Sama õigus kehtib ka Eestis."
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
				  question: "Which country was the first to use fingerprints to solve a murder?",
				  image: "assets/quiz3/q1.jpg",
				  options: [
					"Argentina",
					"France",
					"United Kingdom",
					"Switzerland"
				  ],
				  points: [1,0,0,0],
				  answer: "Police official Juan Vucetich began to use fingerprints in 1891 and managed to capture a murderer in 1892."
				},
				{
				  question: "When was the last death penalty carried out in Estonia?",
				  image: "assets/quiz3/q2.jpg",
				  options: [
					"1989",
					"1991",
					"1993",
					"1997"
				  ],
				  points: [0,1,0,0],
				  answer: "The last death penalty was carried on September 11th, 1991, when Rein Oruste was executed in Tallinn. The death penalty was listed as a punishment in the Estonian criminal system until 1998. The abolishment of the death penalty was a requirement for joining the EU."
				},
				{
				  question: "Black market gun sales were booming in the early 1990s in Estonia. How many forensic ballistic tests were carried out in 1992?",
				  image: "assets/quiz3/q3.jpg",
				  options: [
					"Approximately 200",
					"Approximately 500",
					"Approximately 700",
					"Approximately 1000"
				  ],
				  points: [0,0,1,0],
				  answer: "There were approximately 700 forensic ballistic tests carried out in 1992. Today the annual number stands between 140 and 160.",
                  reference:"Eesti Rahvusarhiiv ERA.R.280.8.1213.39"
				},
				{
				  question: "Swiss physician and natural scientist Paracelsus declared in the 16th century that 'the dose makes the poison'; meaning that any substance is lethal, it only depends on its quantity. What is the most lethal substance in the world?",
				  image: "assets/quiz3/q4.png",
				  options: [
					"botulinum",
					"plutonium",
					"cyanide",
					"sarin "
				  ],
				  points: [1,0,0,0],
				  answer: "Botulinum is the most lethal substance in the world and it is used in the beauty industry as 'Botox'. The lethal dose is 1.3 to 2.1 nanograms per kilogram, meaning that it takes 0.000168 mg to kill an 80 kg individual. It is 10 000 times more lethal than plutonium that holds the second place.",
                  reference:"3D mudel Botoxist Lacy, D.B., Tepp, W., Cohen, A.C., DasGupta, B.R., Stevens, R.C. (1998)"
				},
				{
				  question: "Prisons have been seen as a form of rehabilitation or punishment. There are those who face life sentences and there are those who are given parole. How long was the longest time served in prison before parole?",
				  image: "assets/quiz3/q5.jpg",
				  options: [
					"70 years",
					"69 years",
					"68 years",
					"67 years"
				  ],
				  points: [0,0,1,0],
				  answer: "The longest time served before parole was by the American Paul Geidel Jr, who in the year 1911 (when he was 17) was sentenced to 20 years in prison for killing a man during a robbery. He was declared legally insane in 1926 and institutionalized. In 1974, after 62 years in prison, he was granted parole but he did not wish to leave. It was only in 1980, after 68 years and 245 days, that he was sent to a retirement home where he died at 93."
				},
				{
				  question: "The death penalty is still in place in 52 countries and in most of them, the verdict is carried out quickly. There are countries where you can postpone an execution for years. What is the longest recorded time on death row?",
				  image: "assets/quiz3/q6.jpg",
				  options: [
					"50 years",
					"46 years",
					"42 years",
					"39 years"
				  ],
				  points: [0,1,0,0],
				  answer: "Iwao Hakamada waited 46 years for his execution in Japan. He was released in 2014, after finally receiving a retrial where he was declared innocent. It was confirmed that the evidence against him in the original 1968 trial had been fabricated."
				},
				{
				  question: "During 1944–1992 Estonian currency was the Soviet ruble. There were two conversions in this period, one in 1947 and the other in 1961. What was the exchange rate?",
				  image: "assets/quiz3/q7.jpg",
				  options: [
					"1:15",
					"1:5",
					"1:20",
					"1:10"
				  ],
				  points: [0,0,0,1],
				  answer: "On both occasions the exchange rate was 10 old rubles = 1 new ruble. In 1992 Estonia took on its own currency the kroon (EEK), the rate of which was 1 kroon = 100 rubles. Only 150 kroons (1500 rubles) was exchanged for a single individual. The kroon was fixed with the German mark at 1 mark = 8 kroons."
				},
				{
				  question: "In 1984 forensic science established the way of linking DNA to a single individual. When was the first DNA profiling in Estonia?",
				  image: "assets/quiz3/q8.jpg",
				  options: [
					"1990",
					"1992",
					"1995",
					"1997"
				  ],
				  points: [0,0,1,0],
				  answer: "May 3rd, 1995. On this day the Estonian police requested the first DNA profiling in Estonia. Nowadays the laboratory carries out thousands in a year, from paternal tests to crime scene samples."
				},
				{
				  question: "In a span of a few days in September 2001 Estonia lost 68 people to illegally produced alcohol, known as the methanol tragedy. How many individuals were charged with ‘causing death due to negligence’?",
				  image: "assets/quiz3/q9.png",
				  options: [
					"9",
					"8",
					"10",
					"12"
				  ],
				  points: [1,0,0,0],
				  answer: "‘Death due to negligence’ was the charge for 9 individuals, 18 people in total where charged with involvement. 5 years was the longest sentence as the evidence supported the notion that it was not a deliberate act."
				},
				{
				  question: "Popular crime television shows often depict the reading of the rights to the suspects. This custom started in the USA and are called the ‘Miranda rights or warnings’. Since when have the rights been read?",
				  image: "assets/quiz3/q10.png",
				  options: [
					"1933",
					"1947",
					"1954",
					"1966"
				  ],
				  points: [0,0,0,1],
				  answer: "In 1966 the Supreme Court of the United States declared in the verdict of Miranda v. Arizona that a person has the institutional right not to incriminate themselves and that the police have to remind them of this fact."
				},
                
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
    