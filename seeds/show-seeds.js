const { Show } = require('../models');

const showData = [
    {
        title: "Loki",
        overview: "After stealing the Tesseract during the events of 'Avengers: Endgame,' an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a 'time variant' or help fix the timeline and stop a greater threat.",
        poster_path: "/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
        genre: "Sci-Fi & Fantasy",
        season_count: 1,
        episode_count: 6,
        apiId: 84958
    },
    {
        title: "Control Z",
        overview: "When a hacker begins releasing students' secrets to the entire high school, the socially isolated but observant Sofía works to uncover his/her identity.",
        poster_path: "/fl6S0hvaYvFeRYGniMm9KzNg3AN.jpg",
        genre: "Drama",
        season_count: 2,
        episode_count: 16,
        apiId: 102903
    },
    {
        title: "Riverdale",
        overview: "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
        poster_path: "/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg",
        genre: "Drama",
        season_count: 6, 
        episode_count: 91,
        apiId: 69050
    },
    {
        title: "Lucifer",
        overview: "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
        poster_path: "/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
        genre: "Crime",
        season_count: 6,
        episode_count: 93,
        apiId: 63174

    },
    {
        title: "Jeopardy!",
        overview: "America's favorite quiz show where contestants are presented with general knowledge clues in the form of answers, and must phrase their responses in question form.",
        poster_path: "/hnKAKk7T9MvWaLoOymVNAzaGZf8.jpg",
        genre: "Game Show",
        season_count: 38,
        episode_count: 7132,
        apiId: 2912
    },
    {
        title: "Grey's Anatomy",
        overview: "Follows the personal and professional lives of a group of doctors at Seattle's Grey Sloan Memorial Hospital.",
        poster_path: "/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg",
        genre: "Drama",
        season_count: 18,
        episode_count: 380,
        apiId: 1416
    },
    {
        title: 'La Reina del Flow',
        overview: "After spending seventeen years in prison unfairly, a talented songwriter seeks revenge on the men who sank her and killed her family.",
        poster_path: "/fuVuDYrs8sxvEolnYr0wCSvtyTi.jpg",
        genre: "Drama",
        season_count: 2,
        episode_count: 161,
        apiId: 80240
    },
    {
        title: "Broker",
        overview: "A broker with a hidden agenda plots to steal a scientist's research, yet a mutual attraction develops between them.",
        poster_path: "/nOlZJPDWIbQAQniAmdlVWnFqBcq.jpg",
        genre: "Action & Adventure",
        season_count: 2,
        episode_count: 42,
        apiId: 117874
    },
    {
        title: "Anupamaa",
        overview: "Anupama had to sacrifice a lot to become an ideal wife, daughter-in-law, and mother. After a bitter realisation, she sets out to live on her own terms.",
        poster_path: "/9R4Qtm01pNh0CzdoIyvHKefe5RL.jpg",
        genre: "Drama",
        season_count: 1,
        episode_count: 355,
        apiId: 116479
    },
    {
       title: "Game of Thrones",
       overview: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
       poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
       genre: "Sci-Fi & Fantasy",
       season_count: 8,
       episode_count: 73,
       apiId: 1399
    },
    {
        title: "The Vampire Diaries",
        overview: "The story of two vampire brothers obsessed with the same girl, who bears a striking resemblance to the beautiful but ruthless vampire they knew and loved in 1864.",
        poster_path: "/kLEha9zVVv8acGFKTX4gjvSR2Q0.jpg",
        genre: "Sci-Fi & Fantasy",
        season_count: 8,
        episode_count: 171,
        apiId: 18165
    },
    {
        title: "Law & Order: Special Victims Unit",
        overview: "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
        poster_path: "/jDCgWVlejIo8sQYxw3Yf1cVQUIL.jpg",
        genre: "Crime",
        season_count: 23,
        episode_count: 497,
        apiId: 2734
    }
    
];

const seedShows = () => Show.bulkCreate(showData);

module.exports = seedShows;