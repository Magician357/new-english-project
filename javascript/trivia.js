const trivia = [
    {
        question: "What year did the Tiananmen Square protests occur?",
        choices: ["1987", "1989", "1991", "1993"],
        answer: "1989"
    },
    {
        question: "Which protest is associated with the chant 'We are the 99%'?",
        choices: ["Arab Spring", "Occupy Wall Street", "Hong Kong Protests", "Yellow Vests"],
        answer: "Occupy Wall Street"
    },
    {
        question: "Where did the Velvet Revolution take place?",
        choices: ["Poland", "Romania", "Czechoslovakia", "Hungary"],
        answer: "Czechoslovakia"
    },
    {
        question: "What sparked the Arab Spring in Tunisia?",
        choices: ["Food shortage", "Internet censorship", "Police brutality", "Self-immolation of Mohamed Bouazizi"],
        answer: "Self-immolation of Mohamed Bouazizi"
    },
    {
        question: "What was the main issue protested during the 1963 March on Washington?",
        choices: ["Tax reform", "Environmental regulation", "Civil rights", "Vietnam War"],
        answer: "Civil rights"
    },
    {
        question: "The Salt March led by Gandhi was a protest against what?",
        choices: ["British military rule", "Religious persecution", "Tax on salt", "Land reforms"],
        answer: "Tax on salt"
    },
    {
        question: "Which country was the site of the Gezi Park protests in 2013?",
        choices: ["Greece", "Turkey", "Egypt", "Iran"],
        answer: "Turkey"
    },
    {
        question: "What year did the Hong Kong Umbrella Movement begin?",
        choices: ["2010", "2012", "2014", "2016"],
        answer: "2014"
    },
    {
        question: "What protest in South Africa helped to end apartheid?",
        choices: ["Sharpeville Massacre", "Freedom Charter", "Soweto Uprising", "Truth and Reconciliation March"],
        answer: "Soweto Uprising"
    },
    {
        question: "Which protest occurred in France over fuel taxes and inequality in 2018?",
        choices: ["Red Ribbon", "White Helmets", "Yellow Vests", "Green Shirts"],
        answer: "Yellow Vests"
    },
    {
        question: "What was the 1980 Gdańsk Shipyard strike primarily about?",
        choices: ["Nuclear disarmament", "Labor rights", "Education reform", "Religious freedom"],
        answer: "Labor rights"
    },
    {
        question: "Who led the Montgomery Bus Boycott?",
        choices: ["Malcolm X", "Rosa Parks", "Martin Luther King Jr.", "Frederick Douglass"],
        answer: "Martin Luther King Jr."
    },
    {
        question: "Which city was the center of the 2020 George Floyd protests?",
        choices: ["Chicago", "Los Angeles", "Minneapolis", "New York"],
        answer: "Minneapolis"
    },
    {
        question: "In what country did the 2019–2020 anti-extradition protests take place?",
        choices: ["Taiwan", "Thailand", "Hong Kong", "South Korea"],
        answer: "Hong Kong"
    },
    {
        question: "The Women’s March on Versailles occurred during which revolution?",
        choices: ["American", "Russian", "French", "Haitian"],
        answer: "French"
    },
    {
        question: "Which protest movement was famous for sit-ins at lunch counters?",
        choices: ["Occupy", "Black Lives Matter", "Civil Rights Movement", "Anti-War Protests"],
        answer: "Civil Rights Movement"
    },
    {
        question: "The Maidan protests in Ukraine began in response to what?",
        choices: ["Russian invasion", "EU trade deal rejection", "Corruption", "Language policy"],
        answer: "EU trade deal rejection"
    },
    {
        question: "Where did the 2020–2021 farmers' protest take place?",
        choices: ["Pakistan", "Bangladesh", "India", "Sri Lanka"],
        answer: "India"
    },
    {
        question: "Who was president during the Kent State shootings?",
        choices: ["Lyndon B. Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter"],
        answer: "Richard Nixon"
    },
    {
        question: "What was the goal of the suffragette protests in the early 20th century?",
        choices: ["Education", "Abolition", "Voting rights", "Healthcare"],
        answer: "Voting rights"
    },
    {
        question: "Which movement is Greta Thunberg most associated with?",
        choices: ["Fridays for Future", "Extinction Rebellion", "Sunrise Movement", "Earth First!"],
        answer: "Fridays for Future"
    },
    {
        question: "What major protest happened in Egypt in 2011?",
        choices: ["Cairo Climate Strike", "Tahrir Square Uprising", "Pyramid Protest", "Red Sea Revolt"],
        answer: "Tahrir Square Uprising"
    },
    {
        question: "In which country did the 2019 Chilean protests begin over a subway fare increase?",
        choices: ["Argentina", "Brazil", "Colombia", "Chile"],
        answer: "Chile"
    },
    {
        question: "Which American protest opposed the Vietnam War in 1967?",
        choices: ["Selma March", "Pentagon March", "March on Washington", "Berkeley Protest"],
        answer: "Pentagon March"
    },
    {
        question: "What student-led protest happened in China in 1989?",
        choices: ["Cultural Revolution", "Tiananmen Square", "Red Guard Rebellion", "Shanghai Uprising"],
        answer: "Tiananmen Square"
    },
    {
        question: "The Dakota Access Pipeline protests centered around which tribe?",
        choices: ["Apache", "Cherokee", "Standing Rock Sioux", "Navajo"],
        answer: "Standing Rock Sioux"
    },
    {
        question: "Which protest was catalyzed by the killing of Michael Brown?",
        choices: ["Minneapolis Uprising", "Ferguson Protests", "Charlotte Unrest", "Portland Movement"],
        answer: "Ferguson Protests"
    },
    {
        question: "Which law was the target of India’s CAA protests?",
        choices: ["Labor Law", "Citizenship Amendment Act", "Right to Education", "Farm Bill"],
        answer: "Citizenship Amendment Act"
    },
    {
        question: "Which protest movement began in response to police violence in Nigeria?",
        choices: ["#EndSARS", "Bring Back Our Girls", "Green March", "Youth for Change"],
        answer: "#EndSARS"
    },
    {
        question: "Who inspired the ‘No More Page 3’ protests in the UK?",
        choices: ["Newspapers", "School policies", "TV networks", "Magazine publishers"],
        answer: "Newspapers"
    },
    {
        question: "The 1989 Baltic Way protest linked which three countries?",
        choices: ["Estonia, Latvia, Lithuania", "Poland, Czech Republic, Hungary", "Russia, Ukraine, Belarus", "Finland, Sweden, Norway"],
        answer: "Estonia, Latvia, Lithuania"
    },
    {
        question: "What did the Standing Rock protests primarily oppose?",
        choices: ["Logging", "Nuclear testing", "Oil pipeline construction", "Mining"],
        answer: "Oil pipeline construction"
    },
    {
        question: "What movement protested sexual harassment with #MeToo?",
        choices: ["Women's Rights", "Labor Movement", "Climate Action", "Civil Liberties"],
        answer: "Women's Rights"
    },
    {
        question: "Which country's protests led to the resignation of President Evo Morales?",
        choices: ["Peru", "Chile", "Bolivia", "Paraguay"],
        answer: "Bolivia"
    },
    {
        question: "Which famous protest involved Gandhi walking 240 miles?",
        choices: ["Quit India Movement", "Salt March", "Kheda Satyagraha", "Champaran Protest"],
        answer: "Salt March"
    },
    {
        question: "What caused the massive protests in Belarus in 2020?",
        choices: ["Internet bans", "Tax increases", "Election fraud", "Language policy"],
        answer: "Election fraud"
    },
    {
        question: "In what year did the George Floyd protests begin?",
        choices: ["2018", "2019", "2020", "2021"],
        answer: "2020"
    },
    {
        question: "What was the focus of the Women's March in 2017?",
        choices: ["Environmental issues", "Anti-war", "Reproductive rights and equality", "Gun control"],
        answer: "Reproductive rights and equality"
    },
    {
        question: "Where did the anti-Putin protests in 2021 gain major traction?",
        choices: ["St. Petersburg", "Moscow", "Omsk", "Yekaterinburg"],
        answer: "Moscow"
    },
    {
        question: "Who led the nonviolent Salt Satyagraha?",
        choices: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "Subhas Chandra Bose"],
        answer: "Mahatma Gandhi"
    },
    {
        question: "What did the 1968 student protests in France demand?",
        choices: ["Tuition waivers", "Democratic reforms", "Housing subsidies", "University reforms and social changes"],
        answer: "University reforms and social changes"
    },
    {
        question: "Where did the Zapatista uprising occur?",
        choices: ["Venezuela", "Mexico", "Guatemala", "Nicaragua"],
        answer: "Mexico"
    },
    {
        question: "What did the anti-globalization protests in Seattle in 1999 target?",
        choices: ["G8 Summit", "IMF", "World Bank", "WTO"],
        answer: "WTO"
    },
    {
        question: "What sparked the Iran protests in 2022?",
        choices: ["Rising fuel costs", "Hijab laws", "Water shortages", "Election fraud"],
        answer: "Hijab laws"
    },
    {
        question: "What major protest involved environmental concerns in Brazil?",
        choices: ["Amazon Day March", "March for the Rainforest", "Deforestation Protest", "Indigenous Rights March"],
        answer: "Indigenous Rights March"
    },
    {
        question: "Which protest in 1989 helped trigger German reunification?",
        choices: ["Rosa Parks Rally", "Berlin Unity March", "Leipzig Monday Demonstrations", "East Side Protest"],
        answer: "Leipzig Monday Demonstrations"
    },
    {
        question: "The Prague Spring was a protest against what?",
        choices: ["Nazi occupation", "Stalinist control", "EU policies", "Global warming"],
        answer: "Stalinist control"
    },
    {
        question: "What was the 'Bonus Army' protesting in the U.S. in 1932?",
        choices: ["Education rights", "Veterans' compensation", "Prohibition", "Minimum wage"],
        answer: "Veterans' compensation"
    },
    {
        question: "The Anti-Apartheid Movement had major international support during which decade?",
        choices: ["1950s", "1960s", "1970s", "1980s"],
        answer: "1980s"
    }
];


const trivia_indexes = [...Array(trivia.length).keys()].sort(() => Math.random() - 0.5);
var   trivia_index   = 0;

function get_trivia(){
    return trivia[trivia_indexes[(trivia_index++)%trivia_indexes.length]];
}