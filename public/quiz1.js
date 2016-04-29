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
					"Jah olen. On mitmeid toite mida ma knagi süüa ei soovi."
				  ],
				  points: [2,1,0],
				  answer: "Vastus: Tundmatuga silmitsi seistes ei tea kunagi, millega pead kokku puutuma. <br>Avatus uutele kogemustele aitab suurendada ellujäämise tõenäosust."
				},
				{
				  question: "Kas oled seltskondlik?",
				  image: "assets/tests/isiksuse_test_kys_02.png",
				  options: [
					"Ei, söön kõike, mis mulle antakse.",
					"Mitte väga. On mõned asjad, mida ma vabatahtlikult ei söö (näiteks putukad, rupskid jms), aga hädaolukorras olen valmis peaaegu kõike sööma.",
					"Jah olen. On mitmeid toite mida ma knagi süüa ei soovi."
				  ],
				  points: [1,2,0],
				  answer: "Vastus: Tundmatuga silmitsi seistes ei tea kunagi, millega pead kokku puutuma. <br>Avatus uutele kogemustele aitab suurendada ellujäämise tõenäosust."
				}

				],
        results: [
          [16, "Oled minekuks valmis! Vaja on vaid leida endale sobiv ekspeditsioon."],
          [11, "Sul on olemas mõned vajalikud eeldused, kuid on veel natukene arenguruumi."],
          [0, "Teaduslikud ekspeditsioonid ei sobi sulle. Paremini võib sobida korralikult planeeritud ja kõigi mugavustega reis."]
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
				title: 'Vasta järgmistele küsimustele, et teada saada, kas sobid teadusliku ekspeditsiooni liikmeks',
			  },
			
			},
			en: {}
		}
	}
}
    