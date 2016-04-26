app_data = {
    languages: [ 
        { code: 'ee', 'index': 1 },
        { code: 'gb', 'index': 2 },
    ],        
    messages: {
        et: {
            app: {
              restart:'Algusesse',
              next_lang:'ENG'
            },
            index: {
              lang:'In English',
              tests: ['Isiksuse test', 'Riietuse test' ]
            },
            tests: [{
              title:"Isiksuse test",
              intro: {
                button:'Alusta',
                title: 'Vasta järgmistele küsimustele, et teada saada, kas sobid teadusliku ekspeditsiooni liikmeks',
              },
              questions: [
                {
                  question: "Kas oled toidu suhtes valiv?",
                  image: "assets/images/isiksuse_test_kys_01.png",
                  options: [
                    "Ei, söön kõike, mis mulle antakse.",
                    "Mitte väga. On mõned asjad, mida ma vabatahtlikult ei söö (näiteks putukad, rupskid jms), aga hädaolukorras olen valmis peaaegu kõike sööma.",
                    "Jah olen. On mitmeid toite mida ma knagi süüa ei soovi."
                  ],
                  points: [5,3,0],
                  answer: "Vastus: Tundmatuga silmitsi seistes ei tea kunagi, millega pead kokku puutuma. <br>Avatus uutele kogemustele aitab suurendada ellujäämise tõenäosust."
                },
               {
                  question: "Kas oled seltskondlik?",
                  image: "assets/images/isiksuse_test_kys_02.png",
                  options: [
                    "Ei, söön kõike, mis mulle antakse.",
                    "Mitte väga. On mõned asjad, mida ma vabatahtlikult ei söö (näiteks putukad, rupskid jms), aga hädaolukorras olen valmis peaaegu kõike sööma.",
                    "Jah olen. On mitmeid toite mida ma knagi süüa ei soovi."
                  ],
                  points: [5,3,0],
                  answer: "Vastus: Tundmatuga silmitsi seistes ei tea kunagi, millega pead kokku puutuma. <br>Avatus uutele kogemustele aitab suurendada ellujäämise tõenäosust."
                }
                
              ]
              
            },
            {
              title: 'Riietuse test',
              intro: {
                button:'Alusta',
                title: 'Vasta järgmistele küsimustele, et teada saada, kas sobid teadusliku ekspeditsiooni liikmeks',
              },
                
            }]
        }, 'en': {
        }
	}
}
    