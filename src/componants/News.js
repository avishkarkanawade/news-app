import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  articles = [

      {
      "source": {
        "id": null,
        "name": "News18"
      },
      "author": "Education and Careers Desk",
      "title": "Bihar Board 10th Result 2022 Declared LIVE Updates: 79.88% Pass, Ramayani Roy Tops Exam - News18",
      "description": "Bihar Board 10th Result 2022, BSEB matric result LIVE Updates: Marksheet can be assessed using roll number at biharboardonline.bihar.gov.in, onlinebseb.in. Students can also get the matric exam result, toppers list at news18.com",
      "url": "https://www.news18.com/news/education-career/bihar-board-10th-result-2022-bseb-sarkari-result-2022-live-updates-bihar-matric-result-declared-how-to-check-online-direct-link-biharboardonline-bihar-gov-in-marks-sheet-toppers-list-livenews-4926584.html",
      "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/03/biharboardbseb10-164870001416x9.jpg",
      "publishedAt": "2022-03-31T10:14:15Z",
      "content": "2022 for Bihar Board students in 34 days. The Board credits its high-tech measures, 50% of questions in the exams being MCQ among other reasons for producing fast results. Since the past five years, … [+3328 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cricbuzz"
      },
      "author": null,
      "title": "Pakistan vs Australia, 2nd ODI, Australia tour of Pakistan, 2022 - Cricbuzz",
      "description": "Follow Pakistan vs Australia, 2nd ODI, Mar 31, Australia tour of Pakistan, 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz",
      "url": "https://www.cricbuzz.com/live-cricket-scores/40366/pak-vs-aus-2nd-odi-australia-tour-of-pakistan-2022",
      "urlToImage": null,
      "publishedAt": "2022-03-31T10:02:25Z",
      "content": "Mohammad Wasim Jr to McDermott, 1 run, to third man\r\nMohammad Wasim Jr to McDermott, no run, back of a length outside off, McDermott stays back and jabs this to cover\r\nPowerplay-1 has gone to plan fo… [+2982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Express Web Desk",
      "title": "Imran Khan No-Trust Vote Live Updates: Pakistan PM to address nation today; Parliament to debate no-confidence motion - The Indian Express",
      "description": "Pakistan News LIVE Updates, Imran Khan No-Trust Vote Live News: The National Assembly is set to meet Thursday to debate the no-confidence motion against Khan moved by Shahbaz Sharif, Leader of the Opposition.",
      "url": "https://indianexpress.com/article/pakistan/imran-khan-trust-vote-live-updates-7844466/",
      "urlToImage": "https://images.indianexpress.com/2022/03/Imran.jpg",
      "publishedAt": "2022-03-31T09:56:17Z",
      "content": "Imran Khan’s Pakistan Tehreek-e-Insaf (PTI) party has 155 members in the 342-member National Assembly, which means that they need at least 172 lawmakers to retain power. This gap was plugged by build… [+923 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Northeast Areas Under Controversial Law AFPSA Reduced, Says Amit Shah - NDTV",
      "description": "Home Minister Amit Shah today said that areas covered under the controversial law Armed Forces (Special Powers) Act in Nagaland, Assam and Manipur will be reduced after decades.",
      "url": "https://www.ndtv.com/india-news/areas-under-controversial-law-afpsa-in-nagaland-assam-and-manipur-reduced-says-amit-shah-2854257",
      "urlToImage": "https://c.ndtvimg.com/2020-06/r9595sn_lockdown-in-guwahati-_625x300_26_June_20.jpg",
      "publishedAt": "2022-03-31T09:45:00Z",
      "content": "AFSPA in Northeast gives sweeping power to the security forces and also offers them legal immunity.\r\nNew Delhi: In a major outreach to Northeastern states, Home Minister Amit Shah today announced tha… [+2948 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "Realme Buds Air 3, Realme Book Prime and Smart TV Stick to launch on April 7 in India - Times of India",
      "description": "Realme is all set to expand its product lineup with a slew of launches. The company has confirmed that it will launch Realme Buds Air 3, Realme Book P",
      "url": "https://timesofindia.indiatimes.com/gadgets-news/realme-buds-air-3-realme-book-prime-and-smart-tv-stick-to-launch-on-april-7-in-india/articleshow/90564178.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-90564166,width-1070,height-580,imgsize-428280,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2022-03-31T09:19:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Thewire.in"
      },
      "author": "Chris Impey",
      "title": "Key Science Questions for the Next Generation of Astronomy - The Wire Science",
      "description": "Every 10 years since the 1960s, US astronomers and astrophysicists have gathered to create a priority list for new facilities and instruments.",
      "url": "https://science.thewire.in/the-sciences/science-questions-next-generation-astronomy-decadal-survey/",
      "urlToImage": "https://cdn.thewire.in/wp-content/uploads/2022/03/31133227/9772693411_908ab1e2eb_h.jpg",
      "publishedAt": "2022-03-31T08:29:51Z",
      "content": "The Hubble Space Telescope. Photo: NASA Johnson/Flickr, CC BY-NC 4.0\r\n<ul><li>Every 10 years, US scientists outline priorities for the hardware they need in the decadal survey on astronomy and astrop… [+7939 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "MacBook Air 2022 looks exciting in these concept renders! Check them out - HT Tech",
      "description": "MacBook Air 2022 renders done by a creator shows a radical new design approach to Apple’s most affordable laptop. Have a look.",
      "url": "https://tech.hindustantimes.com/laptops-pc/news/macbook-air-2022-looks-exciting-in-these-concept-renders-check-them-out-71648712219698.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2022/03/31/1600x900/MacBook_Air_2022_concept_1648712458258_1648712471546.jpg",
      "publishedAt": "2022-03-31T07:43:29Z",
      "content": "The MacBook Air 2022 is one of the most highly Anticipated Apple products this year. Apples most affordable laptop hasnt seen a major design upgrade in years and with rumours suggesting a big overhau… [+1890 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Express News Service",
      "title": "‘Not your party headquarters’: Delhi HC refuses to interfere with Paswan family’s eviction from 12 Janpath bungalow - The Indian Express",
      "description": "The bungalow is presently occupied by Ram Vilas Paswan's son Chirag Paswan, who is Lok Janshakti Party (LJP) president and Lok Sabha MP from Jamui in Bihar.",
      "url": "https://indianexpress.com/article/cities/delhi/delhi-hc-dismissed-paswan-familys-petition-eviction-from-12-janpath-bungalow-7845851/",
      "urlToImage": "https://images.indianexpress.com/2022/03/chirag-paswan-bungalow.jpg",
      "publishedAt": "2022-03-31T07:13:47Z",
      "content": "The Delhi High Court on Thursday dismissed a petition filed by the family of late Ram Vilas Paswan, a former Union minister, against the Centre’s decision to evict the family members from the 12 Janp… [+1350 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": "Annesha Ghosh",
      "title": "Recent Match Report - ENG Women vs SA Women 2nd Semi Final 2021/22 - ESPNcricinfo",
      "description": "Wyatt added 116 with Dunkley before Ecclestone's career-best ODI figures polished off South Africa",
      "url": "https://www.espncricinfo.com/series/icc-women-s-world-cup-2021-22-1219028/south-africa-women-vs-england-women-2nd-semi-final-1243937/match-report",
      "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/337100/337111.6.jpg",
      "publishedAt": "2022-03-31T07:06:42Z",
      "content": "Healy and Haynes, the fine line between desire and deed, and a date with World Cup destiny"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Reuters",
      "title": "Reliance defends takeover of Future stores in letter - Economic Times",
      "description": "The March 8 letter, seen by Reuters, reveals for the first time Reliance's stance on the events of the night of Feb. 25, when staff suddenly showed up at many of its rival's stores to take control over missed lease payments.",
      "url": "https://economictimes.indiatimes.com/industry/services/retail/indias-reliance-defends-takeover-of-future-stores-in-letter/articleshow/90560824.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-90560973,width-1070,height-580,imgsize-104018,overlay-economictimes/photo.jpg",
      "publishedAt": "2022-03-31T07:02:00Z",
      "content": "India's top retailer, Reliance, has privately defended an abrupt takeover of the stores of debt-laden rival Future Retail, saying mounting dues of $634 million compelled it to act beyond expectations… [+2287 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Hubble Discovers Most Distant Star, Its Light Took 12.9 Billion years To Reach Earth - NDTV",
      "description": "The star will soon be observed by NASAs James Webb Space Telescope. Researchers said the new telescope will measure its brightness.",
      "url": "https://www.ndtv.com/world-news/hubble-discovers-most-distant-star-its-light-took-12-9-billion-years-to-reach-earth-2853993",
      "urlToImage": "https://c.ndtvimg.com/2022-03/r2ujp96o_hubble-captures-earendel-650_625x300_31_March_22.jpg",
      "publishedAt": "2022-03-31T07:00:17Z",
      "content": "Earendel's light too 12.9 billion years to reach Earth, according to NASA.\r\nThe Hubble Space telescope has captured the light from the most distant star ever seen. A releases posted on the website of… [+2045 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Shubhra Gupta",
      "title": "Sharmaji Namkeen movie review: Rishi Kapoor shows us how to live in this delightful swan song - The Indian Express",
      "description": "Sharmaji Namkeen movie review: Rishi Kapoor is truly namkeen in this film, showing us how it is done, light on his feet, light in his eyes, a will to live. Jeena isi ka naam hai.",
      "url": "https://indianexpress.com/article/entertainment/movie-review/sharmaji-namkeen-review-rishi-kapoor-shows-us-how-to-live-paresh-rawal-juhi-chawla-7845450/",
      "urlToImage": "https://images.indianexpress.com/2022/03/Shubhra-Gupta-Reviews-1.jpg",
      "publishedAt": "2022-03-31T06:46:44Z",
      "content": "There are countless men like our Brij Gopal Sharma. Too young, at 58, to be given a golden handshake and turfed out of his workplace. Too active to chill in his modest home and watch unending soaps w… [+3600 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Watch: US astronaut, two Russian cosmonauts share ride back to earth amid tensions over Ukraine - Hindustan Times",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9RP6n9ZgeYI",
      "urlToImage": null,
      "publishedAt": "2022-03-31T06:42:12Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Amit Mudgill",
      "title": "GAIL announces Rs 1,083 crore buyback plan, price set at Rs 190 - Economic Times",
      "description": "The plan, it told exchanges, is to buyback shares, not exceeding 5,69,85,463 fully paid up equity shares of face value of Rs 10 each at a price of Rs 190.",
      "url": "https://economictimes.indiatimes.com/markets/stocks/news/gail-announces-rs-1083-crore-buyback-plan-price-set-at-rs-190/articleshow/90559835.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-90559808,width-1070,height-580,imgsize-20770,overlay-etmarkets/photo.jpg",
      "publishedAt": "2022-03-31T06:20:00Z",
      "content": "NEW DELHI: State-run GAIL on Thursday said it intends to buyback Rs 1,082.72 crore worth shares of the company under a share buyback plan. \r\nThe plan, it told exchanges, is to buyback shares, not exc… [+1367 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "SC strikes down 10.5% reservation for Vanniyars in Tamil Nadu - Times of India",
      "description": "India News: NEW DELHI: The Supreme Court on Thursday struck down the 10.",
      "url": "https://timesofindia.indiatimes.com/india/sc-strikes-down-10-5-reservation-for-vanniyars-in-tamil-nadu/articleshow/90559559.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-90559543,width-1070,height-580,imgsize-41464,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2022-03-31T06:09:00Z",
      "content": "SC strikes down 10.5% reservation for Vanniyars in Tamil Nadu\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>SC strikes down 10.5% reservation for Vanniyars in Tamil Nadu</li></ul>"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": "Abhimanyu Bose",
      "title": "IPL 2022: What Yuzvendra Chahal Tweeted After RCB Leg-Spinner Stole The Show vs KKR - NDTV Sports",
      "description": "IPL 2022: Wanindu Hasaranga's brilliant show against Kolkata Knight Riders had Yuzvendra Chahal excited for his former franchise.",
      "url": "https://sports.ndtv.com/ipl-2022/what-yuzvendra-chahal-tweeted-after-rcb-leg-spinner-stole-the-show-vs-kkr-2853895",
      "urlToImage": "https://c.ndtvimg.com/2022-03/6g1m44uo_wanindu-hasaranga-bcciipl_625x300_31_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2022-03-31T06:06:16Z",
      "content": "For several years, Yuzvendra Chahal was the strike bowler for Royal Challengers Bangalore (RCB), picking key wickets and doing so in heaps. However, he was released by the franchise ahead of Indian P… [+1638 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "Bloomberg",
      "title": "'Deeply disappointing...': US' criticism as Russian FM visits India - Hindustan Times",
      "description": "India has pushed back against U.S. concerns by noting that it needs Russian arms to counter China, particularly after border clashes in 2020. | World News",
      "url": "https://www.hindustantimes.com/world-news/deeply-disappointing-us-criticism-as-russian-foreign-minister-visits-india-101648706133252.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/03/31/1600x900/UKRAINE-CRISIS-LAVROV-ICRC-1_1648632938014_1648706416679.JPG",
      "publishedAt": "2022-03-31T06:03:25Z",
      "content": "The U.S. and Australia criticized India for considering a Russian proposal that would undermine sanctions imposed by America and its allies, showing a deepening rift between the emerging security par… [+3275 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "India.com"
      },
      "author": "IANS",
      "title": "Sun erupts with 17 flares, solar storms likely to hit Earth today - Zee News",
      "description": "At least 17 solar eruptions from a single sunspot on the sun have blasted into space in recent days, and may reach Earth as moderate geomagnetic storms by Thursday (March 31).",
      "url": "https://zeenews.india.com/world/sun-erupts-with-17-flares-solar-storms-likely-to-hit-earth-today-2449406.html",
      "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/03/31/1027105-sun-pixabay-sunspot.jpg",
      "publishedAt": "2022-03-31T05:54:37Z",
      "content": "Washington (US): At least 17 solar eruptions from a single sunspot on the sun have blasted into space in recent days, and may reach Earth as moderate geomagnetic storms by Thursday (March 31). The su… [+1977 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "Parmita Uniyal",
      "title": "Diet for diabetes: 6 healthy foods to control your blood sugar levels - Hindustan Times",
      "description": "People with diabetes do not have to skip foods that they like altogether. Balancing portions and eating at regular gaps can be effective in maintaining blood glucose levels | Health",
      "url": "https://www.hindustantimes.com/lifestyle/health/diet-for-diabetes-6-healthy-foods-to-control-your-blood-sugar-levels-101648704526334.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/03/31/1600x900/diabetes_diet_thumb_1648704702569_1648704712138.jpg",
      "publishedAt": "2022-03-31T05:47:45Z",
      "content": "Poor food choices coupled with sedentary lifestyle can increase risk of type 2 diabetes significantly. Fried food, high-carb and sugar-laden food may please the taste buds, but contribute majorly to … [+2731 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Chris Rock, \"Thank You For Your Resilience\": Academy's Apology After Will Smith Slap - NDTV Movies",
      "description": "Chris Rock received a standing ovation at the first show of his comedy tour",
      "url": "https://www.ndtv.com/entertainment/chris-rock-thank-you-for-your-resilience-academys-apology-after-will-smith-slap-2853859",
      "urlToImage": "https://c.ndtvimg.com/2022-03/c8ghck1_chrisrockoscars650_625x300_31_March_22.jpg",
      "publishedAt": "2022-03-31T05:39:18Z",
      "content": "Chris Rock at the Oscars (Image Credit: AFP)\r\nHighlights\r\n<ul><li>Chris Rock was assaulted by Will Smith live on camera at the Oscars\r\n</li><li>\"Still processing what happened,\" he said at his comedy… [+2553 chars]"
    }
  ]


  constructor() {
    super();
    console.log("constructor");
    this.state = {
      articles: this.articles,
      loading: false
    }

  }

  render() {
    return (
      <>

    <div className="container">
    <div className="row">
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
    </div>


    </div>

    <div className="container">
    <div className="row">
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
    </div>


    </div>
        <div className="container my-3">
          <div className="row" >
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>

    <div className="container">
    <div className="row">
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
    </div>


    </div>
                <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
        </div>

    <div className="container">
    <div className="row">
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
      <div className="col-md-4">
      <Newsitem title ="main news" description="This is news description"/>
      </div>
    </div>


    </div>

      </>
    )
  }
}