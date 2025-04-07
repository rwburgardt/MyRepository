const schedule = [
  {
  id: 'mar27',
  date: 'March 27',
  opp: 'vs Boston',
  score: 'L 5-2',
  recap: 'Nathan Eovaldi outpitched Red Sox opening day starter and 2024 All-Star Garrett Crochet and left the game in a 2-2 tie after 6 innings. Eovaldi threw 87 pitches, giving up 3 hits and no walks and striking out 9. Newcomers Kevin Pillar (CF) and Kyle Higaahioka (C) had the RBIs against Crochet. Rangers reliever Luke Jackson gave up 3 runs in the 9th on a one-out walk, followed by a single and a HR by rightfielder Wilyer Abreu, his second of the game. The Boston bullpen held the Ranger offense to a pair of singles over the last 4 innings.'
  },
  {
  id: 'mar28',
  date: 'March 28',
  opp: 'vs Boston',
  score: 'W 4-1',
  recap: 'Jonah Heim solo-homered twice off All-Star Red Sox starting pitcher Tanner Houck and Jack Leiter notched a quality start, scattering 5 hits and a walk in 5 innings to get his first career win. LF Wyatt Langford made a nice run-saving catch in the 2nd and Leiter pitched out of trouble in the 3rd and 4th. Boston threatened in the 7th after Marc Church put 2 on, but Hoby Milner pitched out of a bases-loaded, one-out jam. 5 Ranger relievers combined for four shutout innings and Luke Jackson pitched a perfect 9th to get the save. '
  },
  {
  id: 'mar29',
  date: 'March 29',
  opp: 'vs Boston',
  score: 'W 4-3',
  recap: `Tyler Mahle couldn't find the plate in his first start of the season and didn't survive the 2nd inning as 31 of his 61 pitches were balls. But the Rangers led 2-1 after 2 innings when Red Sox LF Kristian Campbell made what appeared to be a diving catch of a Garcia line drive only to have the ball leave his glove when he hit the ground. The bullpen was excellent as 5 relievers kept the Rangers in the game and Adolis Garcia provided the offense with 3 RBIs on 2 doubles and a HR. The Rangers entered the 9th with a 4-3 lead. Arlington High School graduate Chris Martin pitched a perfect 9th for his first save of the season. Starting pitcher Walker Buehler took the loss for Boston.`
  },
  {
  id: 'mar30',
  date: 'March 30',
  opp: 'vs Boston',
  score: 'W 3-2',
  recap: `Jacob deGrom was sharp in his season debut pitching 5 scoreless innings and leaving with a 1-0 lead. Boston took a 2-1 lead in the 6th off reliever Shawn Armstrong on a looping double deep down the left field line and a throwing error by 3B Ezequiel Duran. Boston's rookie starter Richard Fitts had retired 12 straight entering the Rangers 6th. A 330-foot "wall-scraper" by Wyatt Langford down the RF line tied the game. 2 batters later Adolis Garcia homered 431-feet into the second deck in LF for what proved to be the game winner. Robert Garcia pitched a perfect 7th. Chris Martin stranded Alex Bregman at 3B in the 8th by striking out Kristian Campbell and Connor Wong. Luke Jackson allowed 2 baserunners in the 9th but struckout Alex Bregman with the tying run at 2B for his second save.`
  },
  {
  id: 'mar31',
  date: 'March 31',
  opp: 'at Cincinnati',
  score: 'L 14-3',
  recap: `The Reds started the game against rookie Kumar Rocker with a single, HR, single, and double and this one was never in doubt: 6 runs on 7 hits and 2 walks against Rocker in 3 innings. The relievers fared no better, as Gerson Garabito gave up 8 runs, 4 of them earned, on 7 hits and 2 hit-batters in his 2 2/3 innings. Meanwhile the weak-hitting Rangers made Brady Singer, who was 9-13 last year on a good Royals team, look like a Cy Young candidate. He pitched 7 innings of 1-hit ball, striking out 8. The Rangers managed a pair of runs in the 9th on Jake Burger's 1st HR of the season. Adolis Garcia's batting average is .357 while the remainder of the team is hitting .195.`
  },
  {
  id: 'apr1',
  date: 'April 1',
  opp: 'at Cincinnati',
  score: 'W 1-0',
  recap: `Nathan Eovaldi was brilliant, throwing a complete game 4-hit shutout, striking out 8 and walking none. Reds starting pitcher Carson Spiers was unimpressive in 2024 posting an ERA of 5.64 and an opponent batting avg of .297, but the Rangers lineup needed all of Eovaldi's excellence as Spiers and a trio of Reds relievers held them to a single run on 4 hits. The lone run came in the 1st inning on Wyatt Langford's 361-foot HR to LF, his 2nd of the season. Eovaldi retired Elly De La Cruz on a bouncing ball to 1B to end the game with the tying run at 2nd.`
  },
  {
  id: 'apr2',
  date: 'April 2',
  opp: 'at Cincinnati',
  score: 'W 1-0',
  recap: `The pitching matchup featured Jack Leiter, who won his first start against the Red Sox, versus hard-throwing Reds ace and All-Star Hunter Greene. The Rangers managed a run off Greene in the 4th on a Joc Pederson single and a 2-out double by Josh Smith on a 100-mph fastball. Leiter was spectacular in his 5 innings, allowing just one hit, walking none, and striking out six. Bruce Bochy pulled Leiter before the 6th inning as a precaution due to a blister on his middle finger.
  Hunter Greene pitched 7 innings of 3-hit ball for the Reds, allowing the one run, walking 1, and striking out 8. Jacob Webb, Robert Garcia, Chris Martin, and Luke Jackson combined to shutout the Reds over the last 4 innings. For the first time in their history the Rangers won back-to-back 1-0 games.`
  },
  {
  id: 'apr4',
  date: 'April 4',
  opp: 'Tampa Bay',
  score: 'W 5-2',
  recap: `The Rangers took a 4-run lead in the 3rd on 5 consecutive base hits by Smith, Higashioka, Taveras, Semien, and Seager against Tampa Bay's Zack Littell. Littell was coming off an excellent start against Colorado in which he gave up just 1 run on 4 hits in 6 innings, walking none and striking out 7. Tyler Mahle shook off his control issues in his first start and was very effective tonight against a good hitting Rays team, throwing 5 shutout innings and not allowing a runner past first base. The Rays countered with 2 runs in the 7th, but Josh Smith homered in the Rangers half to extend the lead to 3. Luke Jackson pitched a perfect 9th for his 4th save.`
  },
  {
  id: 'apr5',
  date: 'April 5',
  opp: 'Tampa Bay',
  score: 'W 6-4',
  recap: `Marcus Semien homered to left in the Rangers' first at bat and Jake Burger followed with a 3-run shot after walks to Langford and Garcia to give Jacob deGrom a 4-run 1st inning lead against 24-year-old Rays starter Taj Bradley (1-0, 3.00). But the Rangers couldn't hold the lead. Brandon Lowe homered off deGrom in the 3rd and Jonathan Aranda drew the Rays to within a run with a towering HR off the rightfield foul pole in the 6th. After a 2-out double by Kameron Misner, deGrom's night was over. Reliever Jacob Webb allowed a double to the first batter he faced to tie the game. The Rangers would not get another hit until the 7th when Kevin Pillar pinch hit for Taveras and singled to left. With 2 outs Wyatt Langford hit a line drive HR that just cleared the wall in LF. Garcia, Martin, and Jackson pitched 2-1/3 scoreless innings and Jackson got his 5th save. The Rangers were outhit 10 to 4 but drew 6 walks and out-homered the Rays 3 to 2.`
  },
  {
  id: 'apr6',
  date: 'April 6',
  opp: 'Tampa Bay',
  score: 'W 4-3',
  recap: `The pitching matchup was Kumar Rocker (0-1, 13.50) versus Drew Rasmussen who pitched 5 shutout innings in his first start against Pittsburgh. Rocker rebounded nicely from his first start, giving up a run on 6 hits and no walks in 5 innings. Corey Seager homered to right in the 6th off Rays reliever Garrett Cleavinger for a 2-1 lead. The Rangers added another with 2 outs in the 7th after Jonah Heim reached on an error and stole 2B, and Taveras singled to CF to score him. Hoby Milner from Ft.Worth Paschal HS retired all 6 hitters he faced. Marc Church pitched the 8th and blew the lead giving up a leadoff walk followed by a double, with both runners eventually scoring. Jacob Webb pitched a shutout ninth. In the bottom of the inning with 2 outs, Josh Smith doubled down the LF line and scored on Jonah Heim's single to CF to complete the sweep of the Rays.`
  },
  {
  id: 'apr7',
  date: 'April 7',
  opp: 'at Chicago Cubs',
  score: '',
  recap: ''
  },
  {
  id: 'apr8',
  date: 'April 8',
  opp: 'at Chicago Cubs',
  score: '',
  recap: ''
  },  
  {
  id: 'apr9',
  date: 'April 9',
  opp: 'at Chicago Cubs',
  score: '',
  recap: ''
  },
  {
  id: 'apr11',
  date: 'April 11',
  opp: 'at Seattle',
  score: '',
  recap: ''
  },
  {
    id: 'apr12',
    date: 'April 12',
    opp: 'at Seattle',
    score: '',
    recap: ''
  },   
  {
  id: 'apr13',
  date: 'April 13',
  opp: 'at Seattle',
  score: '',
  recap: ''
  },
  {
  id: 'apr15',
  date: 'April 15',
  opp: 'LA Angels',
  score: '',
  recap: ''
  },
  {
  id: 'apr16',
  date: 'April 16',
  opp: 'LA Angels',
  score: '',
  recap: ''
  },    
]

let html = '';
  
    schedule.forEach((element) => {
      newHTML = 
      `<div class = "card" id = "${element.id}">
        <h3 class = "date">
          ${element.date}
        </h3>
        <h4 class = "opp">
          ${element.opp}
        </h4>
        <h4 class = "score">
          ${element.score}
        </h4>
        <p>
          ${element.recap}
        </p>
        <image src = "images/motherpigSMALL.png" class = "motherpigSMALL">
      </div>\n`
      html += newHTML
    });
  
    document.querySelector('.container').innerHTML = html;