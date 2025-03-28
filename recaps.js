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
  recap: 'Jonah Heim solo-homered twice off All-Star Red Sox starting pitcher Tanner Houck and Jack Leiter notched a quality start, scattering 5 hits and a walk in 5 innings to get his first career win. LF Wyatt Langford made a nice run-saving catch in the 2nd and Leiter pitched out of trouble in the 3rd and 4th. Boston threatened in the 7th after Marc Church put 2 on, but Hoby Milner pitched out of a bases-loaded, one-out jam. Five Ranger relievers combined for four shutout innings and Luke Jackson pitched a perfect 9th to get the save. '
  },
  {
  id: 'mar29',
  date: 'March 29',
  opp: 'vs Boston',
  score: '',
  recap: ''
  },
  {
  id: 'mar30',
  date: 'March 30',
  opp: 'vs Boston',
  score: '',
  recap: ''
  },
  {
  id: 'mar31',
  date: 'March 31',
  opp: 'at Cincinnati',
  score: '',
  recap: ''
  },
  {
    id: 'apr1',
    date: 'April 1',
    opp: 'at Cincinnati',
    score: '',
    recap: ''
    },
    {
    id: 'apr2',
    date: 'April 2',
    opp: 'at Cincinnati',
    score: '',
    recap: ''
    },
    {
    id: 'apr4',
    date: 'April 4',
    opp: 'Tampa Bay',
    score: '',
    recap: ''
    },
    {
    id: 'apr5',
    date: 'April 5',
    opp: 'Tampa Bay',
    score: '',
    recap: ''
    },
    {
    id: 'apr6',
    date: 'April 6',
    opp: 'Tampa Bay',
    score: '',
    recap: ''
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
        <image src = "motherpigSMALL.png" class = "motherpigSMALL">
      </div>\n`
      html += newHTML
    });
  
    document.querySelector('.container').innerHTML = html;