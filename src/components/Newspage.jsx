import React, { Component } from 'react'
import Newsitem from './Newsitem'

articles: [
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "Kevin Lynch",
      "title": "Cricket Livestream: How to Watch India vs. England, 3rd Test From Anywhere - CNET",
      "description": "The teams head to Rajkot with the series delicately poised at 1-1.",
      "url": "https://www.cnet.com/tech/services-and-software/cricket-livestream-how-to-watch-india-vs-england-3rd-test-from-anywhere/",
      "urlToImage": "https://www.cnet.com/a/img/resize/2bdfce7f3894dcab2c36b2230253396834993c36/hub/2024/02/14/9804bf0c-507f-4d62-9480-7712067e3d5d/gettyimages-1987451210.jpg?auto=webp&fit=crop&height=675&width=1200",
      "publishedAt": "2024-02-15T01:00:05Z",
      "content": "Injury-ravaged India will be looking to build on their battling performance in the second Test as they face off with England once more for the third Test of the series in Rajkot. \r\nThe hosts leveled … [+9047 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Dezeen"
      },
      "author": "Kate Mazade",
      "title": "Populous designs \"modular\" Cricket World Cup stadium for New York",
      "description": "Global design firm Populous has unveiled designs for a temporary cricket stadium to be constructed with repurposed elements in New York. The Nassau County International Cricket Stadium is a modular sporting facility and will be constructed to host eight match…",
      "url": "https://www.dezeen.com/2024/01/29/world-cup-cricket-stadium-new-york-temporary-populous/",
      "urlToImage": "https://static.dezeen.com/uploads/2024/01/nassau-county-international-cricket-stadium-populous-sq2-600x600.jpg",
      "publishedAt": "2024-01-29T18:00:45Z",
      "content": "Global design firm Populous has unveiled designs for a temporary cricket stadium to be constructed with repurposed elements in New York.\r\nThe Nassau County International Cricket Stadium is a modular … [+3641 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Pakistan elections: Against the odds, Khan's PTI proves support is solid",
      "description": "Pakistan's election saw candidates aligned to the former PM spring a surprise, writes Caroline Davies.",
      "url": "https://www.bbc.co.uk/news/world-asia-68257232",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0ADC/production/_132608720_51b601a75e731d30d0a944fe52576ecc8d1b9a06.jpg",
      "publishedAt": "2024-02-09T21:45:15Z",
      "content": "Today's results are both clear and complicated.\r\nIndependent candidates - many of whom would have run under the banner of the PTI party but were prevented from doing so - have taken the largest numbe… [+2940 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Pakistan elections 2024: Count under way after controversial election",
      "description": "Election officials are calling for results to be speeded up, after delays in announcing vote tallies.",
      "url": "https://www.bbc.co.uk/news/world-asia-68223977",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A53B/production/_132599224_countepa.jpg",
      "publishedAt": "2024-02-08T22:58:34Z",
      "content": "Votes are being counted in Pakistan after Thursday's general election which was marred by the suspension of mobile phone services and violent unrest.\r\nResults have been slow to come out, prompting el… [+4614 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "bradypsnyder@gmail.com (Brady Snyder)",
      "title": "Google brings a bit of Pixel call magic to more Android phones",
      "description": "Google is testing Talk to a Live Representative in Search, which works similarly to Hold for Me on Pixel, with the caveat that Talk to a Live Representative initiates calls independently.",
      "url": "https://www.androidcentral.com/apps-software/google-search-labs-talk-to-live-representative",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/zSCpd8kkF78z2AMLqK4jAn-1200-80.jpg",
      "publishedAt": "2024-02-16T04:37:06Z",
      "content": "<ul><li>Google is testing a new feature in Google Search Labs that will call a company's customer service line on your behalf.</li><li>It's called Talk to a Live Representative, and it cuts out the n… [+3457 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Mental Floss"
      },
      "author": "Jake Rossen",
      "title": "The Differences Between a Cricket and a Grasshopper, Explained",
      "description": "Grasshoppers and crickets belong to the same insect order. But they aren't the same species.",
      "url": "https://www.mentalfloss.com/posts/crickets-vs-grasshoppers-whats-the-difference",
      "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_2014,h_1132,x_0,y_235/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01hmvk087vrdn3xbmb2w.jpg",
      "publishedAt": "2024-01-23T20:54:00Z",
      "content": "The number of living insect species is estimated to be around 900,000, with the total population in the neighborhood of 10 quintillion (10,000,000,000,000,000,000). Given that density, its not surpri… [+2913 chars]"
    },
    {
      "source": {
        "id": "time",
        "name": "Time"
      },
      "author": "Charlie Campbell",
      "title": "Pakistan Can Keep Imran Khan Out of Power, But It Can’t Keep His Popularity Down",
      "description": "The country’s military kingmakers can keep former Prime Minister Imran Khan out of power, but they can’t keep his popularity down.",
      "url": "https://time.com/6556335/pakistan-election-imran-khan-nawaz-sharif-military-pti/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2024/01/pakistan-election-imran-khan-nawaz-sharif-military-pti.jpg?quality=85",
      "publishedAt": "2024-01-17T08:30:00Z",
      "content": "Its not been a great couple of years for Pakistans Imran Khan. Since his ouster as Prime Minister in an April 2022 no-confidence vote, the cricketer-turned-politician has been shot, hit with over 180… [+7475 chars]"
    },
    {
      "source": {
        "id": "time",
        "name": "Time"
      },
      "author": "Charlie Campbell",
      "title": "Pakistan’s Military Used Every Trick to Sideline Imran Khan—and Failed. Now What?",
      "description": "Preliminary results of Pakistan’s election Thursday seem to show surprising success by Imran Khan’s repressed PTI party. What that means for the future of the country is uncertain.",
      "url": "https://time.com/6693147/pakistan-election-results-imran-khan-pti-military/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2024/02/Pakistan-Election-Results.jpg?quality=85",
      "publishedAt": "2024-02-09T08:05:00Z",
      "content": "Hes been shot, jailed, had his political party effectively banned, and name purged from mainstream media. But you just cant keep Imran Khan down.\r\nPreliminary results from Thursdays election in Pakis… [+5556 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "'Bazball' more than just attacking cricket - Dravid",
      "description": "India head coach Rahul Dravid says 'Bazball' is more than just attacking cricket after his side beat England by 106 runs in the second Test.",
      "url": "https://www.bbc.co.uk/sport/av/cricket/68208454",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/DDB3/production/_132555765_p0h950yb.jpg",
      "publishedAt": "2024-02-05T15:02:12Z",
      "content": "'Bazball' more than just attacking cricket - Dravid. Video, 00:01:00'Bazball' more than just attacking cricket - Dravid"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Mehrauli: A mosque demolished, and orphans displaced in India",
      "description": "Authorities have demolished a 600-year-old mosque in Delhi, claiming it was illegally built on forest land.",
      "url": "https://www.bbc.co.uk/news/world-asia-india-68137664",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/545E/production/_132589512_mosque.jpg",
      "publishedAt": "2024-02-09T00:21:12Z",
      "content": "Fawad says his favourite colour is green. \r\nThe 12-year-old loved looking at the grass, leaves and trees around the mosque where he lived and studied in India's capital Delhi. He moved here two years… [+9326 chars]"
    },
    {
      "source": {
        "id": "le-monde",
        "name": "Le Monde"
      },
      "author": "Le Monde avec AP et AFP",
      "title": "Pakistan : quatorze ans de prison pour l’ex-premier ministre Imran Khan, condamné une deuxième fois en deux jours",
      "description": "Imran Khan et son épouse ont été condamnés, mercredi, à quatorze ans de prison pour corruption. Mardi, l’ancien premier ministre pakistanais avait déjà reçu dix ans de prison pour une affaire de divulgation de documents classifiés.",
      "url": "https://www.lemonde.fr/international/article/2024/01/31/pakistan-quatorze-ans-de-prison-pour-l-ex-premier-ministre-imran-khan-condamne-une-deuxieme-fois-en-deux-jours_6213995_3210.html",
      "urlToImage": "https://img.lemde.fr/2024/01/30/0/12/5476/3651/1440/960/60/0/ad4d714_2024-01-30t082224z-418236526-rc2zvz9i9fg3-rtrmadp-3-pakistan-politics-khan.JPG",
      "publishedAt": "2024-01-31T05:49:52Z",
      "content": "Imran Khan à Lahore, au Pakistan, le 17 mars 2023. AKHTAR SOOMRO / REUTERS\r\nLancien premier ministre pakistanais Imran Khan et son épouse ont été condamnés, mercredi 31 janvier, à quatorze ans de pri… [+1761 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "/FILM"
      },
      "author": "staff@slashfilm.com (Danielle Ryan)",
      "title": "No, Macaulay Culkin Doesn't Play Cricket On It's Always Sunny, But You Might Recognize Who Does",
      "description": "Contrary to popular belief, David Hornsby plays the put-upon priest Rickety Cricket on It&amp;#39;s Always Sunny in Philadelphia, not Macaulay Culkin.",
      "url": "https://www.slashfilm.com/1504072/its-always-sunny-in-philadelphia-macaulay-culkin-not-cricket-david-hornsby/",
      "urlToImage": "https://www.slashfilm.com/img/gallery/no-macaulay-culkin-doesnt-play-cricket-on-its-always-sunny-but-you-might-recognize-who-does/l-intro-1706545236.jpg",
      "publishedAt": "2024-02-04T22:45:07Z",
      "content": "The ultimate put-upon priest isn't played by Macaulay Culkin but is instead portrayed by actor, writer, and producer David Hornsby. Hornsby has known the \"It's Always Sunny\" guys for some time and he… [+987 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "Windies' World Cup-winning quartet retire",
      "description": "West Indies quartet Anisa Mohammed, Shakera Selman, Kycia Knight and Kyshona Knight retire from international cricket.",
      "url": "https://www.bbc.co.uk/sport/cricket/68023935",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/CC16/production/_132364225_mohammed2.jpg",
      "publishedAt": "2024-01-18T17:09:40Z",
      "content": "Anisa Mohammed, right, took 180 one-day wickets at an average of just 20.75\r\nWest Indies quartet Anisa Mohammed, Shakera Selman, Kycia Knight and Kyshona Knight have retired from international cricke… [+1022 chars]"
    },
    {
      "source": {
        "id": "time",
        "name": "Time"
      },
      "author": "Munir Ahmed / AP",
      "title": "Pakistan’s Imran Khan Sentenced to 10 Years in Prison for Revealing State Secrets",
      "description": "The ruling comes ahead of the Feb. 8 parliamentary elections in Pakistan—a vote that Khan is barred from running in because of his previous criminal conviction.",
      "url": "https://time.com/6589935/pakistan-imran-khan-sentenced-state-secrets/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2024/01/Imran-Khan-Jail-Sentence.jpg?quality=85",
      "publishedAt": "2024-01-30T09:15:00Z",
      "content": "ISLAMABAD A Pakistani court on Tuesday sentenced former Prime Minister Imran Khan and one of his party deputies to 10 years in prison each, after finding them guilty of revealing official secrets. Th… [+3705 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Pakistan Cricket Board terminates bowler Haris Rauf’s contract",
      "description": "The national cricket body ends the fast bowler's central contract after he refused to play in Australia Test series.",
      "url": "https://www.aljazeera.com/sports/2024/2/15/pakistan-cricket-board-terminate-bowler-haris-raufs-contract",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/02/2023-10-27T000000Z_668413276_UP1EJAR17C19I_RTRMADP_3_CRICKET-WORLDCUP-PAK-ZAF-1708009926.jpg?resize=1200%2C630",
      "publishedAt": "2024-02-15T15:35:55Z",
      "content": "The Pakistan Cricket Board (PCB) has terminated the central contract of fast bowler Haris Rauf after he refused to join the Test team for the tour of Australia, which coincided with his stint at Aust… [+1593 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "Ponting named coach of MLC side Washington Freedom",
      "description": "Former Australia captain Ricky Ponting is named coach of Major League Cricket (MLC) side Washington Freedom on a two-year contract.",
      "url": "https://www.bbc.co.uk/sport/cricket/68226045",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13495/production/_132579987_gettyimages-1499156685.jpg",
      "publishedAt": "2024-02-07T09:43:06Z",
      "content": "Ricky Ponting made 560 appearances for Australia across all formats between 1995 and 2012\r\nFormer Australia captain Ricky Ponting has been named coach of Major League Cricket (MLC) side Washington Fr… [+1414 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "George eager to 'put smiles on fans' faces' again",
      "description": "England want to draw inspiration from the men's cricket team to \"put smiles on fans' faces\", says new captain Jamie George.",
      "url": "https://www.bbc.co.uk/sport/rugby-union/68128187",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E2A3/production/_132491085_gettyimages-1760512418.jpg",
      "publishedAt": "2024-01-29T12:30:42Z",
      "content": "Steve Borthwick relied heavily on hooker Jamie George during England's third-place finish at the World Cup\r\n<table><tr><th>Guinness Six Nations: Italy v England</th></tr>\r\n<tr><td>Venue: Stadio Olimp… [+2431 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "Pakistan end Rauf's contract for Australia tour refusal",
      "description": "The Pakistan Cricket Board terminates fast bowler Haris Rauf's central contract after he refused to go on the Test tour of Australia.",
      "url": "https://www.bbc.co.uk/sport/cricket/68305608",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17633/production/_132659759_gettyimages-1748799769.jpg",
      "publishedAt": "2024-02-15T13:46:56Z",
      "content": "Haris Rauf has played one Test, 37 one-day internationals and 66 T20s for Pakistan\r\nThe Pakistan Cricket Board has terminated fast bowler Haris Rauf's central contract after he refused to go on the T… [+1183 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Imran Khan: Pakistan ex-PM and wife Bushra Bibi jailed for illegal marriage",
      "description": "The court voids Khan's marriage with a faith healer, in the latest case against the Pakistani ex-PM.",
      "url": "https://www.bbc.co.uk/news/world-asia-68192196",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3962/production/_132509641_0221f6910879a68be9bf8f08a17de3342c65d754342_262_1243_6991243x699.jpg",
      "publishedAt": "2024-02-03T13:55:09Z",
      "content": "A Pakistani court has jailed Imran Khan and his wife for seven years after voiding their marriage, in the latest sentence against the ex-prime minister. \r\nThe court ruled that Khan's 2018 marriage wi… [+2528 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "insider@insider.com (Brendan Griffiths)",
      "title": "AFCON third-place playoff: How to watch free South Africa vs. DR Congo live stream from anywhere",
      "description": "There's a free South Africa vs. DR Congo live stream for today's consolation prize match at AFCON.",
      "url": "https://www.businessinsider.com/guides/streaming/afcon-where-to-watch-free-south-africa-vs-dr-congo-live-stream",
      "urlToImage": "https://i.insider.com/65c7a7c96fcb546d2d4e46a3?width=1200&format=jpeg",
      "publishedAt": "2024-02-10T17:30:01Z",
      "content": "When you buy through our links, Business Insider may earn an affiliate commission. Learn more\r\nIt's the game neither team really wants to be in, but it at least gives a chance to ease the pain of the… [+7215 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "insider@insider.com (Brendan Griffiths)",
      "title": "How to watch a free Gauff vs. Sabalenka live stream of Australian Open semi-final",
      "description": "It's the biggest match of the Australian Open so far. Don't miss this free Gauff vs. Sabalenka live stream to see two champions fight for a place in the final.",
      "url": "https://www.businessinsider.com/guides/streaming/how-to-watch-free-gauff-vs-sabalenka-australian-open-live-stream-2024",
      "urlToImage": "https://i.insider.com/65b14f2b617029e90a6008fd?width=1200&format=jpeg",
      "publishedAt": "2024-01-25T00:01:01Z",
      "content": "When you buy through our links, Insider may earn an affiliate commission. Learn more\r\nYou're just a few clicks away from a free Gauff vs. Sabalenka live stream of this huge Australian Open encounter.… [+7047 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (William Gallagher)",
      "title": "Apple opens new office in Bengaluru, India",
      "description": "Nine months after leasing an office block in the southern Indian state of Karnataka, Apple has now officially opened its 15-storey offices there.Apple's new office in Bengaluru (Source: Apple)Bengaluru is the capital of Karnataka, and Apple originally signed …",
      "url": "https://appleinsider.com/articles/24/01/17/apple-opens-new-office-in-bengaluru-india",
      "urlToImage": "https://photos5.appleinsider.com/gallery/58151-118498-000-lead-Bengaluru-office-xl.jpg",
      "publishedAt": "2024-01-17T12:00:47Z",
      "content": "Apple's new office in Bengaluru (Source: Apple)\r\nNine months after leasing an office block in the southern Indian state of Karnataka, Apple has now officially opened its 15-storey offices there.\r\nBen… [+1539 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Preview: India vs Australia – ICC Under-19 Cricket World Cup final",
      "description": "India's under-19 team will be eager to avenge their senior team's loss to Australia in the Cricket World Cup final.",
      "url": "https://www.aljazeera.com/sports/2024/2/10/india-vs-australia-under-19-icc-cricket-world-cup-final-preview",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/02/Uday-Saharan-of-India-speaks-to-his-side-in-the-huddle-ahead-of-the-ICC-U19-Mens-Cricket-World-Cup-South-Africa-2024-Semi-Final-match-between-India-and-South-Africa-at-Willowmoore-Park-on-February-06-2024-in-Ben-1707209619.jpg?resize=1920%2C1440",
      "publishedAt": "2024-02-10T14:34:49Z",
      "content": "Who: India vs AustraliaWhat: ICC Under-19 Cricket World Cup finalWhen: Sunday, February 11, 2024, 10am (08:00 GMT)Where: Willowmoore Park, Benoni, South Africa\r\nIndias Under-19 team step onto the fie… [+4206 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Science Daily"
      },
      "author": null,
      "title": "By growing animal cells in rice grains, scientists dish up hybrid food",
      "description": "From lab-grown chicken to cricket-derived protein, these innovative alternatives offer hope for a planet struggling with the environmental and ethical impacts of industrial agriculture. Now, scientists add a new recipe to the list -- cultured beef rice -- by …",
      "url": "https://www.sciencedaily.com/releases/2024/02/240214122601.htm",
      "urlToImage": "https://www.sciencedaily.com/images/scidaily-icon.png",
      "publishedAt": "2024-02-14T17:26:01Z",
      "content": "From lab-grown chicken to cricket-derived protein, these innovative alternatives offer hope for a planet struggling with the environmental and ethical impacts of industrial agriculture. Now, Korean s… [+3130 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Tanishq Vaddi",
      "title": "Interview: Mind guru Paddy Upton on why batting is proving difficult – ‘Decline in concentration due to intensity and volume of T20 games’",
      "description": "'There is a difference between attention focus in T20 Cricket and Test cricket. In T20 cricket the intensity of focus is high and it is a broad focus. In Tests, the focus needs to be regulated,' Paddy Upton tells The Indian Express.",
      "url": "https://indianexpress.com/article/sports/cricket/mind-guru-paddy-upton-on-why-batting-is-proving-difficult-9155055/",
      "urlToImage": "https://images.indianexpress.com/2024/02/Upton.png",
      "publishedAt": "2024-02-10T15:42:43Z",
      "content": "One of the trends so far in the ongoing Test series between India and England is a lot of batsmen have gotten off to starts but haven’t been able to build that into a long innings. In Hyderabad, Olli… [+6430 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "The Associated Press",
      "title": "Pakistani court sentences former Prime Minister Imran Khan to 10 years",
      "description": "A Pakistani court has sentenced former Prime Minister Imran Khan and one of his party deputies to 10 years in prison each, after finding them guilty of revealing official secrets",
      "url": "https://abcnews.go.com/International/wireStory/pakistani-court-sentences-former-prime-minister-imran-khan-106784974",
      "urlToImage": "https://i.abcnewsfe.com/a/7cbda473-dfcb-4594-bbec-765f2acd8ef5/wirestory_e2305d25c8b81f031a47507063e3b745_16x9.jpg?w=1600",
      "publishedAt": "2024-01-30T08:06:47Z",
      "content": "ISLAMABAD -- A Pakistani court on Tuesday sentenced former Prime Minister Imran Khan and one of his party deputies to 10 years in prison each, after finding them guilty of revealing official secrets.… [+2810 chars]"
    },
    {
      "source": {
        "id": "time",
        "name": "Time"
      },
      "author": "Charlie Campbell",
      "title": "Pakistan’s Elections Are Being Brazenly Rigged. Why Doesn’t the U.S. Seem to Care?",
      "description": "The Biden Administration may yet regret not taking a stronger stance to protect in Pakistan the democratic values it claims to hold so dear.",
      "url": "https://time.com/6663747/pakistan-imran-khan-election-democracy-us/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2024/02/imran-khan-pakistan-election.jpg?quality=85",
      "publishedAt": "2024-02-05T08:00:00Z",
      "content": "For a man staring down the barrel of a 10-year jail sentence, Imran Khan was oddly nonchalant in court last Tuesday. As his representatives argued passionately for a fair hearing, Pakistans ex-Prime … [+8528 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera Staff",
      "title": "Virat Kohli to miss India’s first two Tests vs England for personal reasons",
      "description": "Kohli will miss the Tests in Hyderabad and Rajkot, after missing the first T20 against Afghanistan for the same reason.",
      "url": "https://www.aljazeera.com/sports/2024/1/22/virat-kohli-to-miss-indias-first-two-tests-vs-england-for-personal-reasons-cricket",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/01/2024-01-03T132901Z_895895914_UP1EK1311GB2M_RTRMADP_3_CRICKET-TEST-ZAF-IND-1705933663.jpg?resize=1920%2C1357",
      "publishedAt": "2024-01-22T14:57:50Z",
      "content": "India batter Virat Kohli will miss the his sides first two Test matches against England due to personal reasons, the countrys cricket board has confirmed.\r\nThe former national-team captain missed the… [+1585 chars]"
    },
    {
      "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
      },
      "author": "ZEIT ONLINE: News -",
      "title": "Justiz: Weitere Haftstrafe für pakistanischen Ex-Premier Khan",
      "description": "Hier finden Sie Informationen zu dem Thema „Justiz“. Lesen Sie jetzt „Weitere Haftstrafe für pakistanischen Ex-Premier Khan“.",
      "url": "https://www.zeit.de/news/2024-01/31/weitere-haftstrafe-fuer-pakistanischen-ex-premier-khan",
      "urlToImage": "https://img.zeit.de/news/2024-01/31/weitere-haftstrafe-fuer-pakistanischen-ex-premier-khan-image-group/wide__1300x731",
      "publishedAt": "2024-01-31T07:12:18Z",
      "content": "Ein Gericht in Pakistan hat Ex-Premier Imran Khan und seine Frau zu jeweils 14 Jahren Haft verurteilt. Das teilte sein Anwalt dem örtlichen Fernsehsender Geo News mit. Die Justiz wirft dem Opposition… [+784 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Cricket: West Indies beat Australia by eight runs in Brisbane Test",
      "description": "Injured pacer Shamar Joseph took seven wickets as West Indies pulled off a remarkable eight-run win in the second Test.",
      "url": "https://www.aljazeera.com/sports/2024/1/28/australia-vs-west-indies-second-test-match-shamar-joseph-gabba",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/01/AP24028299018512-1706430609.jpg?resize=1920%2C1440",
      "publishedAt": "2024-01-28T08:17:03Z",
      "content": "West Indies fast bowler Shamar Joseph bowled through pain to rip through a shell-shocked Australia and help deliver an extraordinary eight-run upset for his inexperienced side on day four of the seco… [+4234 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Express News Service",
      "title": "Shah to inaugurate cricket premier league in his constituency",
      "description": "The cricket tournament has been organised with an objective of 'Khelo Gandhinagar' and the inauguration will take place at SGVP, Chharodi on the Sarkhej-Gandhinagar Highway in Ahmedabad.",
      "url": "https://indianexpress.com/article/cities/ahmedabad/amit-shah-inaugurates-night-cricket-tournament-gandhinagar-premier-league-bhupendra-patel-hardik-pandya-9156412/",
      "urlToImage": "https://images.indianexpress.com/2024/02/amit-shaaah.jpg",
      "publishedAt": "2024-02-11T19:30:39Z",
      "content": "Union Home Minister Amit Shah will on Monday inaugurate Gandhinagar Lok Sabha Premier League, a cricket tournament for the people of his Gandhinagar Lok Sabha constituency, an official release from t… [+738 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "India win toss & bat against England in third Test",
      "description": "Follow live text updates from day one of the third Test between India and England in Rajkot.",
      "url": "https://www.bbc.co.uk/sport/live/cricket/67781224",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      "publishedAt": "2024-02-14T15:12:07Z",
      "content": "After 10 long days without it, the cricket is back. \r\nIndia and England are ready to leap from their chairs for round three of this fascinating contest.\r\nThe series has moved on to the Gujarat city o… [+131 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Michelecoscia.com"
      },
      "author": null,
      "title": "Predictability, Home Advantage, and Fairness in Team Sports",
      "description": "Comments",
      "url": "https://www.michelecoscia.com/?p=2311",
      "urlToImage": null,
      "publishedAt": "2024-01-31T10:03:43Z",
      "content": "There was a nice paper published a while ago by the excellent Taha Yasseri showing that soccer is becoming more predictable over time: from the early 90s to now, models trying to guess who would win … [+3133 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Scimex.org"
      },
      "author": "",
      "title": "Researchers have developed a beef-rice hybrid",
      "description": "You've heard of lab grown meat, are you ready for rice-grown beef?\n\t\t\t\t\n\t\t\tInternational researchers have developed a beef-rice hybrid they say could be a protein-rich food of the future. The team says they took muscle and fat stem cells from cows, and transp…",
      "url": "https://www.scimex.org/newsfeed/youve-heard-of-lab-grown-meat-are-you-ready-for-rice-grown-beef",
      "urlToImage": "https://www.scimex.org/__data/assets/image/0012/964848/beef-rice_Growing-animal-muscle-and-fat-cells-inside-rice-grains-1-CREDIT-Yonsei-University.jpeg",
      "publishedAt": "2024-02-14T22:46:08Z",
      "content": "From: Cell Press\r\nBy growing animal cells in rice grains, scientists dish up hybrid food\r\nFrom lab-grown chicken to cricket-derived protein, these innovative alternatives offer hope for a planet stru… [+3834 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Rolling Stone"
      },
      "author": "Kyle Lamar Rice",
      "title": "Lil Nas X Is Learning to Accept Himself in New ‘Long Live Montero’ Documentary — Here’s How to Watch",
      "description": "Lil Nas X gets candid about his racial identity, sexuality, and challenges in HBO documentary 'Lil Nas X: Long Live Montero.' Here's how to watch.",
      "url": "http://www.rollingstone.com/product-recommendations/electronics/how-to-watch-lil-nas-x-long-live-montero-documentary-1234952617/",
      "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/01/LNX-Documentary-Lead.jpg?w=1600&h=900&crop=1",
      "publishedAt": "2024-01-23T23:05:19Z",
      "content": "If you purchase an independently reviewed product or service through a link on our website, Rolling Stone may receive an affiliate commission.\r\nQuick Answer: ‘Lil Nas X: Long Live Montero’ will be re… [+3251 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Torrentfreak.com"
      },
      "author": "Andy Maxwell",
      "title": "JW Player Suffers Severe Traffic Loss After Dynamic Piracy Blocking Blunder",
      "description": "A piracy blocking injunction handed down by an Indian court last September appears to have cost video delivery service JW Player over half of its usual website traffic from visitors in India. Plaintiffs Star India, Hotstar and Disney+ Hotstar, initially reque…",
      "url": "https://torrentfreak.com/jwplayer-suffers-severe-traffic-loss-after-dynamic-piracy-blocking-blunder-240116/",
      "urlToImage": "https://torrentfreak.com/images/jw_player.png",
      "publishedAt": "2024-01-16T19:57:25Z",
      "content": "JW Player was born around 2005 as an open source project, taking its name from the initials of main developer, Jeroen Wijering.\r\nDuring the mid to late 2,000s, most people who consumed video online e… [+6625 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Sports Desk",
      "title": "England will not win the series if they bat the way they did in Visakhapatnam: Michael Vaughan",
      "description": "Former captain says England's batting unit need to fine a balance between playing aggressive and traditional cricket to succeed in India.",
      "url": "https://indianexpress.com/article/sports/cricket/england-will-not-win-the-series-if-they-bat-the-way-they-did-in-visakhapatnam-michael-vaughan-9152719/",
      "urlToImage": "https://images.indianexpress.com/2024/02/Ben-Stokes.jpg",
      "publishedAt": "2024-02-09T07:44:10Z",
      "content": "Making a scathing attack on Ben Stokes-led England cricket team, former captain Michael Vaughan said the visitors will not be able to win the series, if they would continue to bat the way they batted… [+1632 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Kevin Hand",
      "title": "India can cope with Kohli’s loss but ‘phenomenal’ England need Test runs",
      "description": "India face England in the third Test in Rajkot on Thursday with the five-match series level at 1-1.",
      "url": "https://www.aljazeera.com/sports/2024/2/13/india-can-cope-with-kohlis-loss-as-phenomenal-england-must-find-runs",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/02/2024-01-03T132901Z_895895914_UP1EK1311GB2M_RTRMADP_3_CRICKET-TEST-ZAF-IND-1-1707825028.jpg?resize=1920%2C1357",
      "publishedAt": "2024-02-13T12:42:22Z",
      "content": "India face England in the third Test on Thursday looking to restore some normality and authority to their five-game series but they will do so knowing that Virat Kohli is now available for the remain… [+5624 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "James Farrell, Forbes Staff, \n James Farrell, Forbes Staff\n https://www.forbes.com/sites/jamesfarrell/",
      "title": "New NY Cricket Stadium Will Host World Cup Matches—Here’s What To Know",
      "description": "Officials unveiled plans for the temporary 34,000-seat stadium this week.",
      "url": "https://www.forbes.com/sites/jamesfarrell/2024/01/19/new-ny-cricket-stadium-will-host-world-cup-matches-heres-what-to-know/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65aa913f7e5806a56421e178/0x0.jpg?format=jpg&crop=2265,1274,x0,y116,safe&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-01-19T15:12:27Z",
      "content": "International Cricket Council and Nassau County officials unveiled plans for a temporary, 34,000-seat cricket stadium on Long Island that will hold a few matches in this years T20 Cricket World Cupth… [+3174 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Mental Floss"
      },
      "author": "Ellen Gutoskey",
      "title": "“Refreshingly Mad”: 10 Facts About the First Pole-to-Pole Journey Around the World",
      "description": "Ginnie and Ranulph Fiennes's Transglobe Expedition circled the globe—just not the normal way.",
      "url": "https://www.mentalfloss.com/posts/transglobe-expedition-first-pole-to-pole-journey-facts",
      "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_3000,h_1687,x_0,y_161/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01hm80p35ypr0951awq7.jpg",
      "publishedAt": "2024-01-22T13:00:00Z",
      "content": "In August 1982, a ship rolled into Greenwich, London, bearing explorers who hadnt been home in three years. They had been at the North Pole, the South Pole, and many places in betweencovering some 52… [+9748 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "Five-Day Test Cricket Endures Despite Financial Obstacles",
      "description": "Two remarkable Test matches come at an uncertain time for the traditional five-day format with some nations struggling to play the expensive format.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2024/01/29/five-day-test-cricket-endures-despite-financial-obstacles/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65b75ef5ef7074c6a6b728ad/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-01-29T14:19:05Z",
      "content": "England stunned India in surreal day for Test cricket (Photo by Stu Forster/Getty Images)\r\nGetty Images\r\nA match lasting up to five days and the equivalent of a working week is naturally going to be … [+4199 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Sports Desk",
      "title": "IND vs AUS Live Streaming, U19 World Cup 2024: When and where to watch India vs Australia final?",
      "description": "India vs Australia Live Streaming, U19 World Cup 2024:  Five time champions India led by Uday Saharan will take on three times champion led by Hugh Weibgen in the 2024 U19 World Cup at Willowmoore Park, Benoni",
      "url": "https://indianexpress.com/article/sports/cricket/ind-vs-aus-live-streaming-u19-world-cup-2024-final-from-willowmoore-park-benoni-date-9154251/",
      "urlToImage": "https://images.indianexpress.com/2024/02/icc-under-19-world-cup.jpg",
      "publishedAt": "2024-02-10T05:50:02Z",
      "content": "IND vs AUS Live Streaming, ICC U19 Word Cup 2024: India will take on Australia in the ICC Under 19 World Cup 2024 at Willowmoore Park in Benoni. Both teams are coming back off thrilling semifinal win… [+1101 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "Shamar Joseph Commits To Financially-Stricken Test Format After Cricket’s Biggest Upset",
      "description": "Shamar Joseph might prove the litmus test over whether smaller cricket nations can retain star players for Tests and ward off lucrative T20 private leagues.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2024/01/29/shamar-joseph-commits-to-financially-stricken-test-format-after-crickets-biggest-upset/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65b73ad62097aa5eb178b5fd/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-01-29T07:53:09Z",
      "content": "Shamar Joseph starred for West Indies (Photo by Albert Perez - CA/Cricket Australia via Getty ... [+] Images)\r\nCricket Australia via Getty Images\r\nShamar Joseph ran across the Gabba at a speed that p… [+4107 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "A Look At New York’s 34,000-Seat Cricket Ground For The T20 World Cup",
      "description": "New York will be the focus of the cricket world in June when the T20 World Cup is played at a 34,000-seat stadium near Manhattan.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2024/01/19/a-look-at-new-yorks-34000-seat-cricket-ground-for-the-t20-world-cup/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65aa1d6531cb07641f21dd86/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-01-19T13:53:00Z",
      "content": "A computer-generated rendering of New York's cricket ground in Nassau County Stadium\r\nSupplied \r\nNew York will be the focus of the cricket world in June when the T20 World Cup - headlined by the mone… [+3547 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "England cling to India despite Jaiswal century",
      "description": "England admirably cling on to India, despite Yashasvi Jaiswal making a sublime century on the opening day of the second Test in Visakhapatnam.",
      "url": "https://www.bbc.co.uk/sport/cricket/68171306",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13185/production/_132531287_yashasvijaiswal.jpg",
      "publishedAt": "2024-02-02T11:10:03Z",
      "content": "Yashasvi Jaiswal went to his second Test hundred by hitting Tom Hartley for six\r\n<table>\r\n<tr><td>Second Test, Visakhapatnam (day one of five):</td></tr><tr><td>India 336-6: (Jaiswal 179*; Ahmed 2-61… [+5034 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Phys.Org"
      },
      "author": "Science X",
      "title": "By growing animal cells in rice grains, scientists dish up hybrid food",
      "description": "From lab-grown chicken to cricket-derived protein, these innovative alternatives offer hope for a planet struggling with the environmental and ethical impacts of industrial agriculture. Now, Korean scientists add a new recipe to the list—cultured beef rice—by…",
      "url": "https://phys.org/news/2024-02-animal-cells-rice-grains-scientists.html",
      "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2024/by-growing-animal-cell.jpg",
      "publishedAt": "2024-02-14T16:00:01Z",
      "content": "From lab-grown chicken to cricket-derived protein, these innovative alternatives offer hope for a planet struggling with the environmental and ethical impacts of industrial agriculture. Now, Korean s… [+3822 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "Hundred women's pay rise 'step in right direction'",
      "description": "The increase to women's salaries in The Hundred is a 'step in the right direction', says England bowler Kate Cross.",
      "url": "https://www.bbc.co.uk/sport/cricket/68060172",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/D64B/production/_132395845_gettyimages-1642325204.jpg",
      "publishedAt": "2024-01-22T18:12:01Z",
      "content": "Alex Hartley and Kate Cross represented Welsh Fire and Northern Superchargers in last year's Hundred\r\nThe salary increases in The Hundred women's competition are a \"step in the right direction\" with … [+2336 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "England win toss and bat in first Test against India - text updates",
      "description": "Follow live text updates from day one of the first Test between India and England in Hyderabad.",
      "url": "https://www.bbc.co.uk/sport/live/cricket/67780789",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      "publishedAt": "2024-01-24T13:07:54Z",
      "content": "England's Stokes-McCullum era has faced India before, in that one-off rearranged Test match in the summer of 2022, which they won - but a five-match series away from home is an entirely different pro… [+490 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Sports Desk",
      "title": "Rishabh Pant opens up on his horror car accident: ‘First time in my life I felt like my time in this world was up’",
      "description": "Pant's near fatal road accident had left him with a ligament tear in his right knee and two cuts on his forehead and the 26-year-old has remained out of competitive cricket action since.",
      "url": "https://indianexpress.com/article/sports/cricket/rishabh-pant-car-accident-my-life-in-this-world-was-up-9133247/",
      "urlToImage": "https://images.indianexpress.com/2024/01/Rishabh-Pant.jpg",
      "publishedAt": "2024-01-29T13:35:30Z",
      "content": "Indian keeper batter Rishabh Pant has shared the bone-chilling thought that occurred to him following his road accident in December 2022.The near fatal accident near Roorkee, Uttarakhand had left Pan… [+1279 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "Legendary Ricky Ponting Joins America’s Major League Cricket After Its Financially Successful Debut",
      "description": "Ricky Ponting will coach Washington Freedom in a two-year deal that adds heft to the lucrative MLC, which lured a number of star international cricketers in its launch.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2024/02/08/legendary-ricky-ponting-joins-major-league-cricket-after-its-financially-successful-debut/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65c414515a1bbdc6fffdc945/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-02-08T09:10:03Z",
      "content": "Ricky Ponting will be coach of the Washington franchise in Major League Cricket (Photo by Matt ... [+] Roberts-ICC/ICC via Getty Images)\r\nICC via Getty Images\r\nMajor League Cricket, having surpassed … [+3875 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Pratyush Raj",
      "title": "Ranji Trophy: Fog, harsh winter playing spoilsport in North India",
      "description": "Veteran BCCI administrator Ratnakar Shetty says the board should implement the Sunil Gavaskar-led technical committee's recommendation given a decade ago and not host any First-Class matches in the northern part of the country from December 15 to January 15.",
      "url": "https://indianexpress.com/article/sports/cricket/ranji-trophy-fog-harsh-winter-playing-spoilsport-in-north-india-9122293/",
      "urlToImage": "https://images.indianexpress.com/2024/01/UP-RANJI-TROPHY-TEAM-CROP.png",
      "publishedAt": "2024-01-22T14:20:35Z",
      "content": "The Hostel Ground in Jammu hosted two games in the ongoing Ranji Trophy. In eight days, only 107.3 overs were bowled due to poor visibility. In the second round game between Jammu and Kashmir and Del… [+5615 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sky Sports"
      },
      "author": null,
      "title": "Ceferin won't run for UEFA presidency in 2027",
      "description": "UEFA president Aleksander Ceferin says he will not run for re-election in 2027.",
      "url": "https://www.skysports.com/football/news/11095/13066754/aleksander-ceferin-will-not-run-for-uefa-presidency-in-2027",
      "urlToImage": "https://e0.365dm.com/21/09/1600x900/skysports-football-aleksander-ceferin_5506363.jpg?20210909164757",
      "publishedAt": "2024-02-08T12:16:00Z",
      "content": "UEFA president Aleksander Ceferin says he will not run for re-election in 2027.\r\nMore to follow…\r\nThis is a breaking news story that is being updated and more details will be published shortly. Pleas… [+733 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "tagesschau.de"
      },
      "author": "tagesschau.de",
      "title": "Pakistans Ex-Premier Khan zu zehn Jahren Haft verurteilt",
      "description": "Der frühere Premierminister Pakistans, Imran Khan, ist zu zehn Jahren Haft verurteilt worden. Die Justiz wirft ihm die Weitergabe geheimer Dokumente vor. Das Urteil schwächt die Opposition vor der Parlamentswahl.",
      "url": "https://www.tagesschau.de/ausland/asien/asien-pakistan-khan-haft-100.html",
      "urlToImage": "https://images.tagesschau.de/image/c3896450-15b1-4202-9bdb-e2ab3b086eb1/AAABjVoEPyo/AAABibBxqrQ/16x9-1280/imran-khan-pakistan-haft-100.jpg",
      "publishedAt": "2024-01-30T10:57:24Z",
      "content": "Stand: 30.01.2024 11:57 Uhr\r\nDer frühere Premierminister Pakistans, Imran Khan, ist zu zehn Jahren Haft verurteilt worden. Die Justiz wirft ihm die Weitergabe geheimer Dokumente vor. Das Urteil schwä… [+1460 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
      "title": "Ben Stokes Cuts His Rough Diamond Into Shape For The 100th Test",
      "description": "Ben Stokes has been playing Test cricket for a decade. His rough patches have made him into a better player and captain.",
      "url": "https://www.forbes.com/sites/timellis/2024/02/14/ben-stokes-cuts-his-rough-diamond-into-shape-for-the-100th-test/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65cd4ec85552832881fab769/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-02-15T00:31:38Z",
      "content": "PERTH, AUSTRALIA - DECEMBER 17: Ben Stokes of England celebrates after reaching his century during ... [+] day five of the Third Ashes Test Match between Australia and England at WACA on December 17,… [+4612 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
      "title": "Will Bazball Get Bowled Over In India?",
      "description": "Controversially, England's cricket team arrive in India just 72 hours before the Test series starts. Bazball is insured against the outside noise.",
      "url": "https://www.forbes.com/sites/timellis/2024/01/18/will-bazball-get-bowled-over-in-india/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65a81e422110a400c38017a7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-01-18T10:38:30Z",
      "content": "RAWALPINDI, PAKISTAN - DECEMBER 05: Ben Stokes of England celebrates with coach Brendon McCullum ... [+] after winning the First Test Match between Pakistan and England at Rawalpindi Cricket Stadium … [+4515 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka Android"
      },
      "author": "Iván Ramírez",
      "title": "Lo último de Asistente de Google es esperar por ti a que te responda una persona al llamar a una línea de atención al cliente",
      "description": "Search Labs, el apartado experimental dentro de la aplicación de Google, tiene un nuevo experimento disponible: Talk to a live representative o, en lenguaje plano \"que se ponga un humano\". Es en esencia un servicio por el cual el Asistente de Google espera se…",
      "url": "https://www.xatakandroid.com/aplicaciones-android/ultimo-asistente-google-esperar-ti-a-que-te-responda-persona-al-llamar-a-linea-atencion-al-cliente",
      "urlToImage": "https://i.blogs.es/c33bdc/habla/840_560.jpeg",
      "publishedAt": "2024-02-16T07:01:25Z",
      "content": "Search Labs, el apartado experimental dentro de la aplicación de Google, tiene un nuevo experimento disponible: Talk to a live representative o, en lenguaje plano \"que se ponga un humano\". Es en esen… [+2397 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "PTI",
      "title": "Imran Khan's PTI party to be invited by President Alvi to form govt claims Gohar Khan",
      "description": "Imran Khan, 71, a cricketer-turned-politician and the founding chairman of the PTI, is behind bars and barred from contesting. PTI candidates are running as independents after they were not allowed to use the party symbol - a cricket 'bat'.",
      "url": "https://economictimes.indiatimes.com/news/international/world-news/imran-khans-pti-party-to-be-invited-by-president-alvi-to-form-govt-claims-gohar-khan/articleshow/107589214.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-107589642,width-1200,height-630,imgsize-35940,overlay-economictimes/photo.jpg",
      "publishedAt": "2024-02-10T18:05:23Z",
      "content": "Pakistan Tehreek-e-Insaf Chairman Barrister Gohar Ali Khan on Saturday claimed that President Arif Alvi would invite his party to form the government as they had secured a majority in the National As… [+2801 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Abid Hussain",
      "title": "As early results come in, could Pakistan election spring a surprise?",
      "description": "As I reported from across Lahore on election day, one thing became clear: It's a closer contest than many had predicted.",
      "url": "https://www.aljazeera.com/features/2024/2/9/as-early-results-come-in-could-pakistan-election-spring-a-surprise",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/02/PXL_20240208_082542237-1707452859.jpg?resize=1200%2C675",
      "publishedAt": "2024-02-09T07:20:04Z",
      "content": "Lahore, Pakistan: When I stepped out on a cool Thursday morning to cover Pakistans 12th general election, there was an air of inevitability about the whole exercise.\r\nMost respectable analysts had al… [+9166 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "New York’s India-Pakistan Cricket Match Will Be The Hottest Ticket As Prices Announced",
      "description": "It is almost certain that the India-Pakistan blockbuster in New York will be a sell-out in a clear indication that it is the hottest ticket of the T20 World Cup.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2024/02/04/new-yorks-india-pakistan-cricket-match-will-be-the-hottest-ticket-as-prices-announced/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6584bf6cbc16f3faff89c11c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-02-04T07:03:52Z",
      "content": "India and Pakistan is the most anticipated match in cricket (Photo by Daniel Pockett-ICC/ICC via ... [+] Getty Images)\r\nICC via Getty Images\r\nIn just four months, the U.S. will be the focus of the cr… [+3336 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Kumar Mehta, Contributor, \n Kumar Mehta, Contributor\n https://www.forbes.com/sites/kmehta/",
      "title": "Will LIV's Three-Round Format Grow Golf – History Suggests It Can",
      "description": "History shows that a sport grows with the introduction of new formats. LIV Golf's new version met with resistance dividing the game. This does not have to be the case.",
      "url": "https://www.forbes.com/sites/kmehta/2024/01/16/will-livs-three-round-format-grow-golf--history-suggests-it-can/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65a6b87bcc72e750efa57670/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-01-16T18:10:08Z",
      "content": "Cameron Smith of Australia during the final round of the LIV Golf Invitational - Boston \r\nGetty Images\r\nMost businesses have grown by expanding or modifying their product and offering variations to a… [+6277 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Destructoid"
      },
      "author": "Eric Van Allen",
      "title": "Death Stranding 2 is coming in 2025, just as long as it takes to digest the trailer",
      "description": "There's something comforting in not only Death Stranding getting a sequel, but its trailers not getting any less strange. In fact, today's State of Play trailer was maybe the most bizarre look yet, spotlighting an entire new region for Sam to connect, and a r…",
      "url": "https://www.destructoid.com/death-stranding-2-is-coming-in-2025-just-as-long-as-it-takes-to-digest-the-trailer/",
      "urlToImage": "https://www.destructoid.com/wp-content/uploads/2024/01/DeathStranding2_OnTheBeach_013124.jpg",
      "publishedAt": "2024-01-31T22:57:51Z",
      "content": "There’s something comforting in not only Death Stranding getting a sequel, but its trailers not getting any less strange. In fact, today’s State of Play trailer was maybe the most bizarre look yet, s… [+1252 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "'Botham and Brearley rolled into one - enjoy Stokes while you can'",
      "description": "Ben Stokes' journey to 100 Tests has been one of the most compelling stories in British sport, writes Stephan Shemilt.",
      "url": "https://www.bbc.co.uk/sport/cricket/68287805",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/0F35/production/_132639830_ben_stokes_getty3.jpg",
      "publishedAt": "2024-02-14T13:22:23Z",
      "content": "Ben Stokes will become the 16th man to reach 100 Tests for England\r\nBen Stokes is right again. He doesn't get much wrong these days.\r\nThe England skipper will win his 100th cap in the third Test agai… [+5749 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Pratyush Raj",
      "title": "Journey of India U-19 opener Adarsh Singh: Father and brother lost their jobs in Covid, sold plot to secure his cricketing dreams",
      "description": "The southpaw from Kanpur showed grit, and played a determined knock of 76 to help India U-19 register a 84-run win over Bangladesh.",
      "url": "https://indianexpress.com/article/sports/cricket/journey-of-india-u-19-opener-adarsh-singh-world-cup-2024-9119408/",
      "urlToImage": "https://images.indianexpress.com/2024/01/Adarsh.png",
      "publishedAt": "2024-01-20T16:34:02Z",
      "content": "The people from Kanpur are generally sharp-tongued and dont back down under provocation. India U-19 opener Adarsh Singh kept his inner Kanpur in check and never responded to the continuous sledging f… [+5056 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Debraj Deb",
      "title": "Tripura cricketer Manisankar Murasingh gets Lala Amarnath Award for Best All-Rounder in 2019-20 Ranji cricket",
      "description": "Manishankar Murasingh is a right-arm pacer and a lower-order batsman.",
      "url": "https://indianexpress.com/article/india/tripura-cricketer-manisankar-murasingh-lala-amarnath-award-ranji-cricket-9125021/",
      "urlToImage": "https://images.indianexpress.com/2024/01/murasingh.jpg",
      "publishedAt": "2024-01-24T04:31:20Z",
      "content": "Tripura cricketer Manisankar Murasingh was awarded the prestigious Lala Amarnath Award by the Board of Control for Cricket in India (BCCI) on Tuesday for being the best all-rounder in Ranji Trophy cr… [+905 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "England can 'dream' after Pope 'masterclass' - Root",
      "description": "England can \"dream the dream\" after Ollie Pope's masterclass gives them hope of winning the first Test against India, according to Joe Root.",
      "url": "https://www.bbc.co.uk/sport/cricket/68117441",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/113FE/production/_132445607_poper.jpg",
      "publishedAt": "2024-01-27T14:17:02Z",
      "content": "Ollie Pope's 148 not out eclipsed his previous Test best against India of 81 at The Oval\r\nEngland can \"dream the dream\" after Ollie Pope's \"masterclass\" gave them hope of winning the first Test again… [+3698 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Pakistan: Who is Bushra Bibi, the mystical wife of Imran Khan?",
      "description": "Bushra Bibi, who married Khan in 2018, is given a 14 year prison sentence amid corruption allegations.",
      "url": "https://www.bbc.co.uk/news/world-asia-68151420",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/111CA/production/_132509007_gettyimages-1966063399-1.jpg",
      "publishedAt": "2024-01-31T20:49:42Z",
      "content": "The rumours about Imran Khan's third wife did not take long to start swirling.\r\nFor a start, Bushra Maneka - as she was known before her marriage to Pakistan's former cricket captain-turned-politicia… [+5657 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "Rohit Sharma Backed to Help End Cricket Powerhouse India’s Title Drought",
      "description": "Rohit Sharma will lead India at the T20 World Cup as cricket's richest team look to end a 13-year title drought.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2024/02/16/rohit-sharma-backed-to-help-end-cricket-powerhouse-indias-title-drought/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65cd9379a311b96ec78b3a1d/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-02-16T05:06:33Z",
      "content": "Rohit Sharma will lead India at the T20 World Cup (Photo by Mark Kolbe/Getty Images)\r\nGetty Images\r\nRohit Sharma looked dishevelled as he stared in the distance. The sombre sea of blue in the terrace… [+3084 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Journal du geek"
      },
      "author": "Arthur Nicolle",
      "title": "L’atterisage sur la Lune a été détroné par la finale du Super Bowl",
      "description": "Cette année, le fameux tournoi de football américain a fini par dépasser un moment historique en termes d'audience.",
      "url": "https://www.journaldugeek.com/2024/02/14/latterisage-sur-la-lune-a-ete-detrone-par-la-finale-du-super-bowl/",
      "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/02/super-bowl-2024-audiences-lune-atterissage.jpg",
      "publishedAt": "2024-02-14T07:34:05Z",
      "content": "Pour la première fois dans l’histoire de la télévision américaine, l’alunissage de la mission Apollo 11 n’est plus l’émission la plus regardée à l’échelle nationale. Toujours plus populaire que jamai… [+2705 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "India's Kohli to miss rest of England Test series",
      "description": "India batter Virat Kohli will miss the rest of the Test series against England for personal reasons.",
      "url": "https://www.bbc.co.uk/sport/cricket/68234342",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1725B/production/_132611849_gettyimages-1761632661.jpg",
      "publishedAt": "2024-02-10T06:23:23Z",
      "content": "Kohli has played 113 Tests for India, scoring almost 9,000 runs\r\nIndia batter Virat Kohli will miss the rest of the Test series against England for personal reasons.\r\nThe 35-year-old ex-captain previ… [+1064 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Archinect"
      },
      "author": "Josh Niland",
      "title": "Populous designs modular Cricket World Cup stadium on Long Island",
      "description": "Populous has announced its design for the International Cricket Council Men’s T20 World Cup 2024 stadium in Nassau County, Long Island.  The modular, 34,000-seat facility will be used for eight matches of the two-week tournament, which commences in June. Cons…",
      "url": "https://archinect.com/news/article/150414338/populous-designs-modular-cricket-world-cup-stadium-on-long-island",
      "urlToImage": "https://archinect.imgix.net/uploads/bc/bcdfab2c784340070a65d5c6b19282b6.jpeg?fit=crop&auto=compress%2Cformat&crop=faces&w=1200&h=707",
      "publishedAt": "2024-01-26T23:31:00Z",
      "content": "Populous has announced its design for the International Cricket Council Mens T20 World Cup 2024 stadium in Nassau County, Long Island. \r\nThe modular, 34,000-seat facility will be used for eight match… [+1241 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Tushar Bhaduri",
      "title": "England cricketer Shoaib Bashir granted visa: MEA sources",
      "description": "Clearance for individuals with Pak roots takes time, says source; nod comes too late for spinner to make Test debut in Hyderabad",
      "url": "https://indianexpress.com/article/sports/cricket/england-cricketer-shoaib-bashir-granted-visa-mea-sources-9125925/",
      "urlToImage": "https://images.indianexpress.com/2024/01/bassir.jpg",
      "publishedAt": "2024-01-24T12:52:00Z",
      "content": "England cricketer Shoaib Bashir has finally got an India visa even though the travel formalities were completed too late for the youngster to make his debut in the first Test starting in Hyderabad on… [+4959 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Imran Khan: Run out?",
      "description": "With exclusive access, we look at events that led to Imran Khan and his party being sidelined in Pakistan's elections.",
      "url": "https://www.aljazeera.com/program/people-power/2024/2/9/imran-khan-run-out",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/02/image-1707480787.jpg?resize=1920%2C1080&quality=80",
      "publishedAt": "2024-02-09T12:34:45Z",
      "content": "With exclusive access, we look at the events that led to Imran Khan and his party being sidelined in Pakistans elections.Its not a movement. Its more like a tsunami that will sweep the country. This … [+868 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Thousands protest Australia Day celebrations",
      "description": "Thousands of 'Invasion Day' protesters demanded the date of the annual Australia Day celebrations be changed.",
      "url": "https://www.aljazeera.com/gallery/2024/1/26/thousands-protest-australia-day-celebrations",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/01/AFP__20240126__34GT3GR__v1__Preview__AustraliaPoliticsHoliday-1706263148.jpg?resize=1200%2C630",
      "publishedAt": "2024-01-26T10:55:54Z",
      "content": "Tens of thousands of Australians took to the streets to protest a contentious national holiday that also marks the arrival of European colonists more than 200 years ago.\r\nIn Sydney, Melbourne and sev… [+1305 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "England stun India in thrilling 28-run victory in first Test in Hyderabad",
      "description": "England beat India by 28 runs in the first Test in Hyderabad as Tom Hartley takes seven wickets on debut.",
      "url": "https://www.aljazeera.com/sports/2024/1/28/england-stun-india-in-28-run-victory-in-first-test-in-hyderabad",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/01/2024-01-28T113324Z_849865329_UP1EK1S0W3NAE_RTRMADP_3_CRICKET-TEST-IND-ENG-1706441885.jpg?resize=1200%2C630",
      "publishedAt": "2024-01-28T13:42:10Z",
      "content": "Ollie Pope and Tom Hartley scripted a remarkable turnaround for England to set up a thrilling 28-run win in the first Test match against India.\r\nEnglands win at the Rajiv Gandhi International Stadium… [+3179 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Indian model Poonam Pandey fakes cervical cancer death, triggering a row",
      "description": "Poonam Pandey announces death on Instagram, inviting flurry of reports and obituaries. Next day, she says it was fake.",
      "url": "https://www.aljazeera.com/news/2024/2/4/indian-model-poonam-pandey-fakes-cervical-cancer-death-triggering-a-row",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/02/AFP__20131214__Del6273703__v2001__HighRes__Irfw-1707044727.jpg?resize=1920%2C1440",
      "publishedAt": "2024-02-04T10:49:33Z",
      "content": "An Indian model has sparked an online backlash after revealing she had faked her death in an Instagram post as part of a cervical cancer awareness campaign.\r\nPoonam Pandey bravely fought the disease … [+2751 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sky Sports"
      },
      "author": null,
      "title": "Spurs host Man City as Chelsea & Man Utd discover Women's FA Cup QF fate",
      "description": "Tottenham will host Manchester City in the quarter-finals of the Women's FA Cup, while last year's finalists Chelsea and Manchester United also discovered their fate.",
      "url": "https://www.skysports.com/football/news/11095/13070290/womens-fa-cup-quarter-final-draw-tottenham-host-man-city-chelsea-face-everton-man-utd-travel-to-brighton",
      "urlToImage": "https://e0.365dm.com/24/02/1600x900/skysports-womens-fa-cup-trophy_6453415.jpg?20240212182651",
      "publishedAt": "2024-02-12T19:32:00Z",
      "content": "Tottenham will host Manchester City in the quarter-finals of the Women's FA Cup, while reigning champions Chelsea travel to Everton.\r\nManchester United, last season's runners-up, face an away game ag… [+1324 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sky Sports"
      },
      "author": null,
      "title": "Mbappe to leave PSG this summer",
      "description": "Kylian Mbappe will leave Paris Saint-Germain this summer.",
      "url": "https://www.skysports.com/football/news/11095/13072335/kylian-mbappe-to-leave-paris-saint-germain-this-summer",
      "urlToImage": "https://e0.365dm.com/24/02/1600x900/skysports-kylian-mbappe-psg_6445402.jpg?20240205154117",
      "publishedAt": "2024-02-15T16:41:00Z",
      "content": "Kylian Mbappe will leave Paris Saint-Germain this summer.\r\nMbappe, out of contract in the summer, has communicated his decision to the French champions.\r\nThe terms of the forward's exit are yet to be… [+1258 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Theregister.com"
      },
      "author": "Simon Sharwood",
      "title": "Two of India's most prominent startup tech giants are in deep trouble",
      "description": "Paytm's bank has been locked out, edtech darling Byju's faces bankruptcy\nTwo of India's tech leaders, both of which have been widely hailed as exemplars of local entrepreneurialism, are in deep trouble.…",
      "url": "https://www.theregister.com/2024/02/05/india_paytm_byjus_in_trouble/",
      "urlToImage": "https://regmedia.co.uk/2020/03/25/india_on_off_switch.jpg",
      "publishedAt": "2024-02-05T04:19:52Z",
      "content": "Two of India's tech leaders, both of which have been widely hailed as exemplars of local entrepreneurialism, are in deep trouble.\r\nLet's start with Paytm, a payment service that accounts for over 45 … [+3676 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Pratyush Raj",
      "title": "Kwena Maphaka: A left-handed Kagiso Rabada, who idolises Dale Steyn and wants to take Virat Kohli’s wicket in Test cricket",
      "description": "At 17, Kwena Maphaka is playing in his second U-19 World Cup, has played for South Africa A and started the tournament with a five-wicket haul against West Indies.",
      "url": "https://indianexpress.com/article/sports/cricket/kwena-maphaka-left-handed-kagiso-rabada-who-idolises-dale-steyn-9120707/",
      "urlToImage": "https://images.indianexpress.com/2024/01/SA.png",
      "publishedAt": "2024-01-21T15:04:15Z",
      "content": "Kwena Maphaka bowls quick and his progress has been meteoric. The 17-year-old left-arm seamer has been in the fast lane. Maphaka is already playing his second U-19 World Cup, has represented South Af… [+6514 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Genbeta.com"
      },
      "author": "José Alberto Lizana",
      "title": "Así puedes crear gratis una espectacular imagen en 3D personalizada con tu nombre gracias a la potencia de Copilot y DALL-E 3",
      "description": "Generar una imagen a través de una simple frase descriptiva hace unos años era algo realmente futurista. Esto ha cambiado totalmente en los últimos meses con la llegada de diferentes modelos de inteligencia artificial como por ejemplo DALL-E 3 que se puede us…",
      "url": "https://www.genbeta.com/paso-a-paso/asi-puedes-crear-gratis-espectacular-imagen-3d-personalizada-tu-nombre-gracias-a-potencia-copilot-dall-e-3",
      "urlToImage": "https://i.blogs.es/a6e3a4/_e55977ac-fbac-4437-a201-642bb6f28637/840_560.jpeg",
      "publishedAt": "2024-01-21T14:01:02Z",
      "content": "Generar una imagen a través de una simple frase descriptiva hace unos años era algo realmente futurista. Esto ha cambiado totalmente en los últimos meses con la llegada de diferentes modelos de intel… [+4342 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Polly Thompson,Matt Weinberger",
      "title": "Satya Nadella's life and career, from computer-science student to CEO of Microsoft and turning it into a $3 trillion titan",
      "description": "Satya Nadella has been running Microsoft for a decade. Here's how the company became a $3 trillion titan under his leadership.",
      "url": "https://www.businessinsider.com/satya-nadella-life-career-microsoft-ceo-computer-science-2024-1",
      "urlToImage": "https://i.insider.com/65b3711df4b446f3be9d2c96?width=1200&format=jpeg",
      "publishedAt": "2024-01-28T09:50:01Z",
      "content": "Satya Nadella is CEO of Microsoft.Ethan Miller/Getty Images\r\n<ul>\n<li>Satya Nadella became only the third CEO of Microsoft almost a decade ago. </li>\n<li>The former engineer reformed its corporate cu… [+13670 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Adam Marshall",
      "title": "Private Internet Access PIA VPN review: Solid performance at a very low price",
      "description": "Private Internet Access is one of the cheapest VPNs out there on longer plans. Our PIA VPN review tests it on streaming, security, speed, DNS leaks, and more.",
      "url": "https://www.businessinsider.com/guides/tech/private-internet-access-pia-vpn-review",
      "urlToImage": "https://i.insider.com/65c1065d6fcb546d2d4c174a?width=1200&format=jpeg",
      "publishedAt": "2024-02-06T12:19:50Z",
      "content": "When you buy through our links, Business Insider may earn an affiliate commission. Learn more\r\nThere's an expression over in the UK that describes a product as doing 'exactly what it says on the tin.… [+15189 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sky Sports"
      },
      "author": null,
      "title": "Arteta has no plans to leave Arsenal at end of season",
      "description": "Mikel Arteta has no plans to leave Arsenal at the end of the season, Sky Sports News has been told.",
      "url": "https://www.skysports.com/football/news/11670/13059077/mikel-arteta-arsenal-boss-has-no-plans-to-leave-managerial-post-at-end-of-season",
      "urlToImage": "https://e0.365dm.com/24/01/1600x900/skysports-mikel-arteta-arsenal_6436449.jpg?20240128210614",
      "publishedAt": "2024-01-28T21:42:00Z",
      "content": "Mikel Arteta has no plans to leave Arsenal at the end of the season, Sky Sports News has been told.\r\nReports in Spain have suggested the Gunners boss intends to step down in the summer, with a number… [+957 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ComingSoon.net"
      },
      "author": "Debmitra Chatterjee",
      "title": "Jersey Ending Explained & Spoilers: How Did Shahid Kapoor’s Movie End?",
      "description": "Jersey is a 2022 Indian Hindi-language sports drama film. It is a remake of the 2019 Telugu film of the same name. Jersey is directed and written by Gowtam Tinnanuri in his Hindi directorial debut. The film stars Shahid Kapoor, Mrunal Thakur, and Pankaj Kapoo…",
      "url": "https://www.comingsoon.net/indian/news/1527004-jersey-ending-explained-spoilers-how-did-shahid-kapoors-movie-end",
      "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/Untitled-design-2024-02-06T180031.254.png?resize=1200,630",
      "publishedAt": "2024-02-06T14:54:47Z",
      "content": "Jersey is a 2022 Indian Hindi-language sports drama film. It is a remake of the 2019 Telugu film of the same name. Jersey is directed and written by Gowtam Tinnanuri in his Hindi directorial debut. T… [+3484 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ComingSoon.net"
      },
      "author": "Devanshi Basu",
      "title": "Nayanthara, Siddharth, R. Madhavan’s Movie The Test Release Date Window Revealed",
      "description": "The Test, starring Nayanthara, Siddharth, and R. Madhavan, has officially completed its production. The announcement came through a behind-the-scenes video released by the film’s makers, giving fans a sneak peek of The Test. Not only that, but the upcoming fi…",
      "url": "https://www.comingsoon.net/indian/news/1520647-nayanthara-siddharth-r-madhavans-movie-the-test-release-date-window-revealed",
      "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/Untitled-design-2024-02-02T131648.018.png?resize=1200,630",
      "publishedAt": "2024-02-02T09:04:02Z",
      "content": "The Test, starring Nayanthara, Siddharth, and R. Madhavan, has officially completed its production. The announcement came through a behind-the-scenes video released by the films makers, giving fans a… [+1551 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Courrier International"
      },
      "author": null,
      "title": "À Binh Phuoc, l’usine de grillons ultramoderne qui veut nourrir la planète",
      "description": "En septembre, l’entreprise Cricket One a inauguré une usine de production de grillons ultramoderne. En ligne de mire notamment, le marché européen, où la consommation de l’insecte sous forme de poudre est désormais autorisée. Un journaliste du “Straits Times”…",
      "url": "https://www.courrierinternational.com/article/vietnam-a-binh-phuoc-l-usine-de-grillons-ultramoderne-qui-veut-nourrir-la-planete",
      "urlToImage": "https://focus.courrierinternational.com/2024/01/17/0/0/2200/1405/1200/630/60/0/a870eac_1705496550688-rtr1hgia.jpg",
      "publishedAt": "2024-02-03T11:23:32Z",
      "content": "De Binh Phuoc En janvier 2023, la Commission européenne a autorisé la mise sur le marché de la poudre de grillon domestique fabriquée par la société vietnamienne Cricket One, en vue dune utilisation … [+1621 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Quartz India"
      },
      "author": "Susan Howson",
      "title": "Shah Rukh Khan: The king of cinema is back",
      "description": "He's the world's biggest movie star, and he reenergized Hindi cinema in 2023.",
      "url": "https://qz.com/emails/quartz-obsession/1851193320/shah-rukh-khan-the-king-of-cinema-is-back",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ab36dd4905fad76f26e1cc4cdbaa47b9.jpg",
      "publishedAt": "2024-01-24T21:08:00Z",
      "content": "Back with a bang\r\nBy many metrics, hes the most popular movie star in the world. But if you live outside of the Indian diaspora, you may not have ever heard of the Baadshah of Bollywood. Were here to… [+7727 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Entertainment Desk",
      "title": "What Lagaan director Ashutosh Gowariker was told by Western festival director reluctant to screen Aamir Khan film: ‘Too long, too commercial, and it has cricket’",
      "description": "Lagaan director Ashutosh Gowariker looked back at the film's grand screening at the Locarno Film Festival, and how it helped their Oscars campaign.",
      "url": "https://indianexpress.com/article/entertainment/bollywood/aamir-khan-lagaan-too-long-too-commercial-and-it-has-cricket-director-ashutosh-gowariker-locarno-9126794/",
      "urlToImage": "https://images.indianexpress.com/2021/06/Lagaan-1200-4.jpg",
      "publishedAt": "2024-01-25T06:10:32Z",
      "content": "Filmmaker Ashutosh Gowariker, best known for directing the Oscar-nominated period drama Lagaan, recalled the difficulty he faced in convincing Western audiences to give the film a chance. Addressing … [+2455 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GSMArena.com"
      },
      "author": "Vlad",
      "title": "Moto G Play (2024) is now official with $149 price tag, 50 MP main camera",
      "description": "Today Motorola has officially taken the wraps off the Moto G Play (2024). This phone will become available in the US at Amazon, Best Buy, and Motorola's online store on February 8 for just $149.99. Subsequently, you'll also find it at Consumer Cellular, Veriz…",
      "url": "https://www.gsmarena.com/moto_g_play_2024_is_now_official_with_149_price_tag_50_mp_main_camera-news-61248.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/01/motorola-moto-g-play-2024-announced/-952x498w6/gsmarena_000.jpg",
      "publishedAt": "2024-01-16T20:49:11Z",
      "content": "Today Motorola has officially taken the wraps off the Moto G Play (2024). This phone will become available in the US at Amazon, Best Buy, and Motorola's online store on February 8 for just $149.99. S… [+1565 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Rahul Pandey",
      "title": "Monty Panesar explains how tall offspinner Shoaib Bashir, Axar-clone Tom Hartley, attacking Rehan Ahmed fit into England’s Bazball tactics",
      "description": "With just one Test match under their belt, Bashir, Hartley and Ahmed arrive in India to partner Jack Leach with Bazball's initiation to spin bowling",
      "url": "https://indianexpress.com/article/sports/cricket/monty-panesar-explains-how-tall-offspinner-shoaib-bashir-axar-clone-tom-hartley-attacking-rehan-ahmed-fit-into-englands-bazball-tactics-9124332/",
      "urlToImage": "https://images.indianexpress.com/2024/01/ENGLAND-CRCIKET-TEAM-CROP.png",
      "publishedAt": "2024-01-23T16:23:39Z",
      "content": "One. Thats the grand total of Test matches Rehan Ahmed, Shoaib Bashir and Tom Hartley have played between each other. The first class outings of the trio doesnt even add up to 40. And yet, it is them… [+6044 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Pratyush Raj",
      "title": "India vs South Africa Live Score, U19 World Cup 2024 Semi-Final: Defending champions India to take on hosts South Africa",
      "description": "IND vs SA Live Score, U19 World Cup 2024 Semi-Final: India will take on South Africa in the U-19 World Cup semi-finals on Tuesday.",
      "url": "https://indianexpress.com/article/sports/cricket/india-vs-south-africa-live-score-u19-world-cup-2024-semi-final-ind-vs-sa-icc-under-19-wc-latest-scorecard-9146347/",
      "urlToImage": "https://images.indianexpress.com/2024/02/India-VS-South-Africa_U-19-World-Cup-copy-1.jpg",
      "publishedAt": "2024-02-06T06:21:09Z",
      "content": "Raj Limbani: A swing bowler from Rann of Kutch shining in U19 World Cup\r\n (LEFT) Raj Limbani's father Basant Patel at his farm in Dayapar in Kutch. (RIGHT) Raj bowls during the ICC U19 Cricket World … [+680 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sky Sports"
      },
      "author": null,
      "title": "Deeney sacked by Forest Green just days after player rant",
      "description": "Forest Green Rovers manager Troy Deeney has been sacked, just days after publicly criticising his team following a 2-0 defeat by Harrogate.",
      "url": "https://www.skysports.com/football/news/11095/13051238/troy-deeney-forest-green-rovers-sack-former-watford-striker-as-clubs-manager-after-six-winless-games-in-charge",
      "urlToImage": "https://e0.365dm.com/24/01/1600x900/skysports-troy-deeney-forest-green-rovers_6426095.jpg?20240118213253",
      "publishedAt": "2024-01-18T19:59:00Z",
      "content": "Forest Green Rovers manager Troy Deeney has been sacked, just days after publicly criticising his team following a 2-0 defeat by Harrogate.\r\nDeeney, who has lasted 29 days in his first managerial rol… [+1417 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sky Sports"
      },
      "author": null,
      "title": "Aberdeen sack manager Robson",
      "description": "Aberdeen have sacked manager Barry Robson.",
      "url": "https://www.skysports.com/football/news/11789/13060682/aberdeen-sack-manager-barry-robson-after-tuesdays-draw-with-dundee",
      "urlToImage": "https://e0.365dm.com/24/01/1600x900/skysports-aberdeen-boss-barry-robson_6439194.jpg?20240131120218",
      "publishedAt": "2024-01-31T12:00:00Z",
      "content": "Aberdeen have sacked manager Barry Robson.\r\nThe Dons were held to a 1-1 draw by Dundee at Pittodrie on Tuesday night, meaning their hopes of matching last term's third-place Scottish Premiership fini… [+1520 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Deadline"
      },
      "author": "Lynette Rice",
      "title": "‘Big City Greens’ Creators Chris Houghton, Shane Houghton Sign Multi-Year Deal With Disney Branded TV",
      "description": "Chris Houghton and Shane Houghton, the creators and executive producers of Disney Channel’s Big City Greens, have signed a deal with Disney Branded Television. Under this multiyear producing pact, the Houghtons will produce animated projects with Disney Telev…",
      "url": "http://deadline.com/2024/02/big-city-greens-creators-chris-houghton-shane-houghton-multi-year-deal-disney-branded-tv-1235821100/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2024/02/Screen-Shot-2024-02-09-at-5.40.39-PM.png?w=752",
      "publishedAt": "2024-02-10T18:30:00Z",
      "content": "Chris Houghton and Shane Houghton, the creators and executive producers of Disney Channel’s Big City Greens, have signed a deal with Disney Branded Television.\r\nUnder this multiyear producing pact, t… [+1366 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sky Sports"
      },
      "author": "Sam Blitz",
      "title": "Arteta: Arsenal have to be in Mbappe conversation",
      "description": "Mikel Arteta says his Arsenal side have to be in the conversation to sign PSG forward Kylian Mbappe this summer - but hinted that the Frenchman is likely to join Real Madrid.",
      "url": "https://www.skysports.com/football/news/11095/13072839/kylian-mbappe-mikel-arteta-says-arsenal-have-to-be-in-the-conversation-to-sign-psg-forward-but-hints-real-madrid-move-is-likely",
      "urlToImage": "https://e0.365dm.com/24/02/1600x900/skysports-mikel-arteta-kylian-mbappe_6457481.jpg?20240216095525",
      "publishedAt": "2024-02-16T09:49:00Z",
      "content": "Mikel Arteta says his Arsenal side have to be in the conversation to sign PSG forward Kylian Mbappe this summer - but hinted that the Frenchman is likely to join Real Madrid.\r\nMbappe told PSG this we… [+1385 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Police"
      },
      "author": "Jules Wang, Samuel Contreras",
      "title": "Best value smartphone data plans for single lines and families in 2024",
      "description": "If you need unlimited data, or just a gig, there are a lot of great wireless plans to help you save.",
      "url": "https://www.androidpolice.com/best-value-smartphone-data-plans/",
      "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/05/ap-best-smartphone-data-plans.jpg",
      "publishedAt": "2024-01-28T15:01:12Z",
      "content": "The easiest mistake to make when signing up for a new smartphone data plan is overbuying. Carriers are happy to push new customers toward their biggest and most fully-featured plans with phone deals … [+15008 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Dr. Ruth Gotian, Contributor, \n Dr. Ruth Gotian, Contributor\n https://www.forbes.com/sites/ruthgotian/",
      "title": "Gym Owner Transforms Fitness For Individuals With Disabilities",
      "description": "“I want to make you forget for 30 minutes that you are fighting terminal cancer. I want to create a fantasy world where you forget about the hurt and pain.”",
      "url": "https://www.forbes.com/sites/ruthgotian/2024/02/04/gym-owner-transforms-fitness-for-individuals-with-disabilities/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65bd16049620a3a0a0f0f6c7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-02-04T14:00:00Z",
      "content": "Javeno McLean wants those with disabilities to be part of the action, not watching from the ... [+] sidelines.\r\nCourtesy of Javeno McLean\r\nIn a world often focused on personal gains and material succ… [+3598 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Beast"
      },
      "author": "Dan Ladden-Hall",
      "title": "Cricket Icon Hit With Second Prison Sentence in 2 Days Ahead of Election",
      "description": "Mohsin Raza/Reuters\r\nPakistan’s jailed former Prime Minister Imran Khan has been sentenced to 14 years in prison, his party said Wednesday, the day after he was given a 10-year sentence in a separate case.The cricket legend’s wife, Bushra Bibi, was also found…",
      "url": "https://www.thedailybeast.com/imran-khan-hit-with-second-prison-sentence-in-2-days-ahead-of-election",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_3094,w_5500,x_0,y_14/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1706707026/2024-01-30T082226Z_831543740_RC2711AHQAHW_RTRMADP_3_PAKISTAN-POLITICS-KHAN_jqpqxq",
      "publishedAt": "2024-01-31T13:38:50Z",
      "content": "Pakistans jailed former Prime Minister Imran Khan has been sentenced to 14 years in prison, his party said Wednesday, the day after he was given a 10-year sentence in a separate case.\r\nThe cricket le… [+1826 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Beast"
      },
      "author": "Dan Ladden-Hall",
      "title": "Cricket Icon Jailed for 10 Years in ‘Sham Trial’ Before Pakistan Election",
      "description": "Akhtar Soomro/Reuters\r\nA court in Pakistan on Tuesday convicted former Prime Minister Imran Khan for revealing state secrets and sentenced him to a decade in prison, his latest legal punishment which comes just days before elections are due to take place.The …",
      "url": "https://www.thedailybeast.com/imran-khan-jailed-for-10-years-in-sham-trial-before-pakistan-election",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_3094,w_5500,x_0,y_320/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1706615316/2024-01-30T082224Z_418236526_RC2ZVZ9I9FG3_RTRMADP_3_PAKISTAN-POLITICS-KHAN_imqrq7",
      "publishedAt": "2024-01-30T12:18:49Z",
      "content": "A court in Pakistan on Tuesday convicted former Prime Minister Imran Khan for revealing state secrets and sentenced him to a decade in prison, his latest legal punishment which comes just days before… [+1157 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "'Greyhound' Stokes 'good to go' for India Test",
      "description": "England captain Ben Stokes is \"good to go\" for the first Test against India in Hyderabad on Thursday, says coach Brendon McCullum.",
      "url": "https://www.bbc.co.uk/sport/cricket/68054608",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/162C3/production/_132391809_benstokes.jpg",
      "publishedAt": "2024-01-22T09:58:36Z",
      "content": "Ben Stokes is yet to lose a Test series as England captain\r\nEngland captain Ben Stokes is \"good to go\" for the first Test against India in Hyderabad on Thursday, says coach Brendon McCullum.\r\nStokes,… [+3789 chars]"
    }
  ]

export default class Newspage extends Component {
    constructor(){
        super();
        this.state = {
            articles : this.articles,
            loading : false
        }
        
    }
  render() {
    
    return (
     
        <div className='container my-4'>
            <h2>Top - Headlines</h2>
            <div className="row">

                <div className='col-md-4 '>
                    <Newsitem title = "welcome to newsmonkey" description=" this is the news app you will see all news here "/>
                </div>
                <div className='col-md-4'>
                    <Newsitem title = "welcome to newsmonkey" description=" this is the news app you will see all news here "/>
                </div>
                <div className='col-md-4'>
                    <Newsitem title = "welcome to newsmonkey" description=" this is the news app you will see all news here "/>
                </div>
                <div className='col-md-4 my-2'>
                    <Newsitem title = "welcome to newsmonkey" description=" this is the news app you will see all news here "/>
                </div>
            </div>

        </div>
      
    )
  }
}
