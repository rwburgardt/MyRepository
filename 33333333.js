document.getElementById("findButton").addEventListener("click", () => {
  let searchTerm = document.getElementById("inputBoxValue").value;
  if (searchTerm==='Ari'||searchTerm==='Ath'||searchTerm==='Atl'||searchTerm==='Bal'||searchTerm==='Bos'||searchTerm ==='CHC'||searchTerm==='CHW'||searchTerm==='Cin'||searchTerm==='Cle'||searchTerm==='Col'||searchTerm==='Det'||searchTerm==='Hou'||searchTerm==='KC'||searchTerm==='LAA'||searchTerm==='LAD'||searchTerm==='Mia'||searchTerm==='Mil'||searchTerm ==='Min'||searchTerm==='NYM'||searchTerm==='NYY'||searchTerm==='Phi'||searchTerm==='Pit'||searchTerm==='SD'||searchTerm==='Sea'||searchTerm==='SF'||searchTerm ==='SL'||searchTerm ==='TB'||searchTerm ==='Tor'||searchTerm==='Was') {
    let text = document.getElementById("search").innerHTML;
    let re = new RegExp(searchTerm,"g"); // search for all instances
    let newText = text.replace(re, `<mark>${searchTerm}</mark>`);
    document.getElementById("search").innerHTML = newText;
  } else {
      unsearchForTeam(inputBoxValue.value);
    }
  })

  const unsearchForTeam = (inputBoxValue) => {
    let searchTerm = document.getElementById("inputBoxValue").value;
    let text = document.getElementById("search").innerHTML;
    let re = new RegExp(`<mark>${searchTerm}</mark>`,"g"); // search for all instances
    let newText = text.replace(re, `${searchTerm}`);
    document.getElementById("search").innerHTML = newText;
    document.getElementById("inputBoxValue").value = '';
  }

  document.getElementById("colorflipper").addEventListener("click", () => {
    window.open("colorflipper.html",'_blank').focus();
  })
  document.getElementById("locked-on-rangers").addEventListener("click", () => {
    window.open("https://lockedonpodcasts.com/podcasts/locked-on-texas-rangers/",'_blank').focus();
  })
  document.getElementById("straight-up-texas").addEventListener("click", () => {
    window.open("https://podcasts.apple.com/us/podcast/straight-up-texas-podcast/id902525872",'_blank').focus();
  }) 
  document.getElementById("dlls").addEventListener("click", () => {
    window.open("https://alldlls.com/rangers/podcast/",'_blank').focus();
  })

  const calendar = [
    {
    id: '1',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '2',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '3',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '4',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '5',
    month: 'mar',
    class: 'mar27',
    day: 'Thu',
    date: '27',
    opp: 'Bos',
    time: '',
    score: 'W 5-4',
    recap: '<a href = "55555555.html#mar27">Recap</a>'
    },
    {
    id: '6',
    month: 'mar',
    class: 'mar28',
    day: 'Fri',
    date: '28',
    opp: 'Bos',
    time: '',
    score: 'W 2-1',
    recap: '<a href = "55555555.html#mar28">Recap</a>'
    },
    {
    id: '7',
    month: 'mar',
    class: 'mar29',
    day: 'Sat',
    date: '29',
    opp: 'Bos',
    time: '',
    score: 'W 7-0',
    recap: '<a href = "55555555.html#mar29">Recap</a>'
    },
    {
    id: '8',
    month: 'mar',
    class: 'mar30',
    day: 'Sun',
    date: '30',
    opp: 'Bos',
    time: '',
    score: 'W 5-4',
    recap: '<a href = "55555555.html#mar30">Recap</a>'
    },
    {
    id: '9',
    month: 'mar',
    class: 'mar31',
    day: 'Mon',
    date: '31',
    opp: 'at Cin',
    time: '',
    score: 'L 3-2',
    recap: '<a href = "55555555.html#mar31">Recap</a>'
    },
    {
    id: '10',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '11',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '12',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '13',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '14',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '15',
    month: 'apr',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '16',
    month: 'apr',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '17',
    month: 'apr',
    class: 'apr1',
    day: 'Tue',
    date: '1',
    opp: 'at Cin',
    time: '5:40',
    score: '',
    recap: '<a href = "55555555.html#apr1">Recap</a>'
    },
    {
    id: '18',
    month: 'apr',
    class: 'apr2',
    day: 'Wed',
    date: '2',
    opp: 'at Cin',
    time: '11:40',
    score: '',
    recap: '<a href = "55555555.html#apr2">Recap</a>'
    },
    {
    id: '19',
    month: 'apr',
    class: 'apr3',
    day: 'Thu',
    date: '3',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '20',
    month: 'apr',
    class: 'apr4',
    day: 'Fri',
    date: '4',
    opp: 'TB',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#apr4">Recap</a>'
    },
    {
    id: '21',
    month: 'apr',
    class: 'apr5',
    day: 'Sat',
    date: '5',
    opp: 'TB',
    time: '6:05',
    score: '',
    recap: '<a href = "55555555.html#apr5">Recap</a>'
    },
    {
    id: '22',
    month: 'apr',
    class: 'apr6',
    day: 'Sun',
    date: '6',
    opp: 'TB',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#apr6">Recap</a>'
    },
    {
    id: '23',
    month: 'apr',
    class: 'apr7',
    day: 'Mon',
    date: '7',
    opp: 'at CHC',
    time: '6:40',
    score: '',
    recap: '<a href = "55555555.html#apr7">Recap</a>'
    },
    {
    id: '24',
    month: 'apr',
    class: 'apr8',
    day: 'Tue',
    date: '8',
    opp: 'at CHC',
    time: '6:40',
    score: '',
    recap: '<a href = "55555555.html#apr8">Recap</a>'
    },
    {
    id: '25',
    month: 'apr',
    class: 'apr9',
    day: 'Wed',
    date: '9',
    opp: 'at CHC',
    time: '1:20',
    score: '',
    recap: '<a href = "55555555.html#apr9">Recap</a>'
    },
    {
    id: '26',
    month: 'apr',
    class: 'apr10',
    day: 'Thu',
    date: '10',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '27',
    month: 'apr',
    class: 'apr11',
    day: 'Fri',
    date: '11',
    opp: 'at Sea',
    time: '8:40',
    score: '',
    recap: '<a href = "55555555.html#apr11">Recap</a>'
    },
    {
    id: '28',
    month: 'apr',
    class: 'apr12',
    day: 'Sat',
    date: '12',
    opp: 'at Sea',
    time: '8:40',
    score: '',
    recap: '<a href = "55555555.html#apr12">Recap</a>'
    },
    {
    id: '29',
    month: 'apr',
    class: 'apr13',
    day: 'Sun',
    date: '13',
    opp: 'at Sea',
    time: '3:10',
    score: '',
    recap: '<a href = "55555555.html#apr13">Recap</a>'
    },
    {
    id: '30',
    month: 'apr',
    class: 'apr14',
    day: 'Mon',
    date: '14',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '31',
    month: 'apr',
    class: 'apr15',
    day: 'Tue',
    date: '15',
    opp: 'LAA',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#apr15">Recap</a>'
    },
    {
    id: '32',
    month: 'apr',
    class: 'apr16',
    day: 'Wed',
    date: '16',
    opp: 'LAA',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#apr16">Recap</a>'
    },
    {
    id: '33',
    month: 'apr',
    class: 'apr17',
    day: 'Thu',
    date: '17',
    opp: 'LAA',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#apr17">Recap</a>'
    },
    {
    id: '34',
    month: 'apr',
    class: 'apr18',
    day: 'Fri',
    date: '18',
    opp: 'LAD',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#apr18">Recap</a>'
    },
    {
    id: '35',
    month: 'apr',
    class: 'apr19',
    day: 'Sat',
    date: '19',
    opp: 'LAD',
    time: '3:05',
    score: '',
    recap: '<a href = "55555555.html#apr19">Recap</a>'
    },
    {
    id: '36',
    month: 'apr',
    class: 'apr20',
    day: 'Sun',
    date: '20',
    opp: 'LAD',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#apr20">Recap</a>'
    },
    {
    id: '37',
    month: 'apr',
    class: 'apr21',
    day: 'Mon',
    date: '21',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '38',
    month: 'apr',
    class: 'apr22',
    day: 'Tue',
    date: '22',
    opp: 'at Ath',
    time: '9:05',
    score: '',
    recap: '<a href = "55555555.html#apr22">Recap</a>'
    },
    {
    id: '39',
    month: 'apr',
    class: 'apr23',
    day: 'Wed',
    date: '23',
    opp: 'at Ath',
    time: '9:05',
    score: '',
    recap: '<a href = "55555555.html#apr23">Recap</a>'
    },
    {
    id: '40',
    month: 'apr',
    class: 'apr24',
    day: 'Thu',
    date: '24',
    opp: 'at Ath',
    time: '9:05',
    score: '',
    recap: '<a href = "55555555.html#apr24">Recap</a>'
    },
    {
    id: '41',
    month: 'apr',
    class: 'apr25',
    day: 'Fri',
    date: '25',
    opp: 'at SF',
    time: '9:15',
    score: '',
    recap: '<a href = "55555555.html#apr25">Recap</a>'
    },
    {
    id: '42',
    month: 'apr',
    class: 'apr26',
    day: 'Sat',
    date: '26',
    opp: 'at SF',
    time: '3:05',
    score: '',
    recap: '<a href = "55555555.html#apr26">Recap</a>'
    },
    {
    id: '43',
    month: 'apr',
    class: 'apr27',
    day: 'Sun',
    date: '27',
    opp: 'at SF',
    time: '3:05',
    score: '',
    recap: '<a href = "55555555.html#apr27">Recap</a>'
    },
    {
    id: '44',
    month: 'apr',
    class: 'apr28',
    day: 'Mon',
    date: '28',
    opp: 'Ath',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#apr28">Recap</a>'
    },
    {
    id: '45',
    month: 'apr',
    class: 'apr29',
    day: 'Tue',
    date: '29',
    opp: 'Ath',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#apr29">Recap</a>'
    },
    {
    id: '46',
    month: 'apr',
    class: 'apr30',
    day: 'Wed',
    date: '30',
    opp: 'Ath',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#apr30">Recap</a>'
    },
    {
    id: '47',
    month: 'apr',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '48',
    month: 'apr',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '49',
    month: 'apr',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '50',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '51',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '52',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '53',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '54',
    month: 'may',
    class: 'may1',
    day: 'Thu',
    date: '1',
    opp: 'Ath',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#may1">Recap</a>'
    },
    {
    id: '55',
    month: 'may',
    class: 'may2',
    day: 'Fri',
    date: '2',
    opp: 'Sea',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#may2">Recap</a>'
    },
    {
    id: '56',
    month: 'may',
    class: 'may3',
    day: 'Sat',
    date: '3',
    opp: 'Sea',
    time: '6:05',
    score: '',
    recap: '<a href = "55555555.html#may3">Recap</a>'
    },
    {
    id: '57',
    month: 'may',
    class: 'may4',
    day: 'Sun',
    date: '4',
    opp: 'Sea',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#may4">Recap</a>'
    },
    {
    id: '58',
    month: 'may',
    class: 'may5',
    day: 'Mon',
    date: '5',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '59',
    month: 'may',
    class: 'may6',
    day: 'Tue',
    date: '6',
    opp: 'at Bos',
    time: '5:45',
    score: '',
    recap: '<a href = "55555555.html#may6">Recap</a>'
    },
    {
    id: '60',
    month: 'may',
    class: 'may7',
    day: 'Wed',
    date: '7',
    opp: 'at Bos',
    time: '5:45',
    score: '',
    recap: '<a href = "55555555.html#may7">Recap</a>'
    },
    {
    id: '61',
    month: 'may',
    class: 'may8',
    day: 'Thu',
    date: '8',
    opp: 'at Bos',
    time: '12:35',
    score: '',
    recap: '<a href = "55555555.html#may8">Recap</a>'
    },
    {
    id: '62',
    month: 'may',
    class: 'may9',
    day: 'Fri',
    date: '9',
    opp: 'at Det',
    time: '5:40',
    score: '',
    recap: '<a href = "55555555.html#may9">Recap</a>'
    },
    {
    id: '63',
    month: 'may',
    class: 'may10',
    day: 'Sat',
    date: '10',
    opp: 'at Det',
    time: '5:10',
    score: '',
    recap: '<a href = "55555555.html#may10">Recap</a>'
    },
    {
    id: '64',
    month: 'may',
    class: 'may11',
    day: 'Sun',
    date: '11',
    opp: 'at Det',
    time: '12:40',
    score: '',
    recap: '<a href = "55555555.html#may11">Recap</a>'
    },
    {
    id: '65',
    month: 'may',
    class: 'may12',
    day: 'Mon',
    date: '12',
    opp: 'Col',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#may12">Recap</a>'
    },
    {
    id: '66',
    month: 'may',
    class: 'may13',
    day: 'Tue',
    date: '13',
    opp: 'Col',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#may13">Recap</a>'
    },
    {
    id: '67',
    month: 'may',
    class: 'may14',
    day: 'Wed',
    date: '14',
    opp: 'Col',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#may14">Recap</a>'
    },
    {
    id: '68',
    month: 'may',
    class: 'may15',
    day: 'Thu',
    date: '15',
    opp: 'Hou',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#may15">Recap</a>'
    },
    {
    id: '69',
    month: 'may',
    class: 'may16',
    day: 'Fri',
    date: '16',
    opp: 'Hou',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#may16">Recap</a>'
    },
    {
    id: '70',
    month: 'may',
    class: 'may17',
    day: 'Sat',
    date: '17',
    opp: 'Hou',
    time: '6:05',
    score: '',
    recap: '<a href = "55555555.html#may17">Recap</a>'
    },
    {
    id: '71',
    month: 'may',
    class: 'may18',
    day: 'Sun',
    date: '18',
    opp: 'Hou',
    time: '12:05',
    score: '',
    recap: '<a href = "55555555.html#may18">Recap</a>'
    },
    {
    id: '72',
    month: 'may',
    class: 'may19',
    day: 'Mon',
    date: '19',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '73',
    month: 'may',
    class: 'may20',
    day: 'Tue',
    date: '20',
    opp: 'at NYY',
    time: '6:05',
    score: '',
    recap: '<a href = "55555555.html#may20">Recap</a>'
    },
    {
    id: '74',
    month: 'may',
    class: 'may21',
    day: 'Wed',
    date: '21',
    opp: 'at NYY',
    time: '6:05',
    score: '',
    recap: '<a href = "55555555.html#may21">Recap</a>'
    },
    {
    id: '75',
    month: 'may',
    class: 'may22',
    day: 'Thu',
    date: '22',
    opp: 'at NYY',
    time: '11:35',
    score: '',
    recap: '<a href = "55555555.html#may22">Recap</a>'
    },
    {
    id: '76',
    month: 'may',
    class: 'may23',
    day: 'Fri',
    date: '23',
    opp: 'at CHW',
    time: '6:40',
    score: '',
    recap: '<a href = "55555555.html#may23">Recap</a>'
    },
    {
    id: '77',
    month: 'may',
    class: 'may24',
    day: 'Sat',
    date: '24',
    opp: 'at CHW',
    time: '3:10',
    score: '',
    recap: '<a href = "55555555.html#may24">Recap</a>'
    },
    {
    id: '78',
    month: 'may',
    class: 'may25',
    day: 'Sun',
    date: '25',
    opp: 'at CHW',
    time: '1:15',
    score: '',
    recap: '<a href = "55555555.html#may25">Recap</a>'
    },
    {
    id: '79',
    month: 'may',
    class: 'may26',
    day: 'Mon',
    date: '26',
    opp: 'Tor',
    time: '3:05',
    score: '',
    recap: '<a href = "55555555.html#may26">Recap</a>'
    },
    {
    id: '80',
    month: 'may',
    class: 'may27',
    day: 'Tue',
    date: '27',
    opp: 'Tor',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#may27">Recap</a>'
    },
    {
    id: '81',
    month: 'may',
    class: 'may28',
    day: 'Wed',
    date: '28',
    opp: 'Tor',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#may28">Recap</a>'
    },
    {
    id: '82',
    month: 'may',
    class: 'may29',
    day: 'Thu',
    date: '29',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '83',
    month: 'may',
    class: 'may30',
    day: 'Fri',
    date: '30',
    opp: 'SL',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#may30">Recap</a>'
    },
    {
    id: '84',
    month: 'may',
    class: 'may31',
    day: 'Sat',
    date: '31',
    opp: 'SL',
    time: '3:05',
    score: '',
    recap: '<a href = "55555555.html#may31">Recap</a>'
    },
    {
    id: '85',
    month: 'jun',
    class: 'jun1',
    day: 'Sun',
    date: '1',
    opp: 'SL',
    time: '12:05',
    score: '',
    recap: '<a href = "55555555.html#jun1">Recap</a>'
    },
    {
    id: '86',
    month: 'jun',
    class: 'jun2',
    day: 'Mon',
    date: '2',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '87',
    month: 'jun',
    class: 'jun3',
    day: 'Tue',
    date: '3',
    opp: 'at TB',
    time: '6:35',
    score: '',
    recap: '<a href = "55555555.html#jun3">Recap</a>'
    },
    {
    id: '88',
    month: 'jun',
    class: 'jun4',
    day: 'Wed',
    date: '4',
    opp: 'at TB',
    time: '6:35',
    score: '',
    recap: '<a href = "55555555.html#jun4">Recap</a>'
    },
    {
    id: '89',
    month: 'jun',
    class: 'jun5',
    day: 'Thu',
    date: '5',
    opp: 'at TB',
    time: '6:35',
    score: '',
    recap: '<a href = "55555555.html#jun5">Recap</a>'
    },
    {
    id: '90',
    month: 'jun',
    class: 'jun6',
    day: 'Fri',
    date: '6',
    opp: 'at Was',
    time: '5:45',
    score: '',
    recap: '<a href = "55555555.html#jun6">Recap</a>'
    },
    {
    id: '91',
    month: 'jun',
    class: 'jun7',
    day: 'Sat',
    date: '7',
    opp: 'at Was',
    time: '3:05',
    score: '',
    recap: '<a href = "55555555.html#jun7">Recap</a>'
    },
    {
    id: '92',
    month: 'jun',
    class: 'jun8',
    day: 'Sun',
    date: '8',
    opp: 'at Was',
    time: '12:35',
    score: '',
    recap: '<a href = "55555555.html#jun8">Recap</a>'
    },
    {
    id: '93',
    month: 'jun',
    class: 'jun9',
    day: 'Mon',
    date: '9',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '94',
    month: 'jun',
    class: 'jun10',
    day: 'Tue',
    date: '10',
    opp: 'at Min ',
    time: '6:40',
    score: '',
    recap: '<a href = "55555555.html#jun10">Recap</a>'
    },
    {
    id: '95',
    month: 'jun',
    class: 'jun11',
    day: 'Wed',
    date: '11',
    opp: 'at Min ',
    time: '6:40',
    score: '',
    recap: '<a href = "55555555.html#jun11">Recap</a>'
    },
    {
    id: '96',
    month: 'jun',
    class: 'jun12',
    day: 'Thu',
    date: '12',
    opp: 'at Min ',
    time: '12:10',
    score: '',
    recap: '<a href = "55555555.html#jun12">Recap</a>'
    },
    {
    id: '97',
    month: 'jun',
    class: 'jun13',
    day: 'Fri',
    date: '13',
    opp: 'CHW',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jun13">Recap</a>'
    },
    {
    id: '98',
    month: 'jun',
    class: 'jun14',
    day: 'Sat',
    date: '14',
    opp: 'CHW',
    time: '3:05',
    score: '',
    recap: '<a href = "55555555.html#jun14">Recap</a>'
    },
    {
    id: '99',
    month: 'jun',
    class: 'jun15',
    day: 'Sun',
    date: '15',
    opp: 'CHW',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#jun15">Recap</a>'
    },
    {
    id: '100',
    month: 'jun',
    class: 'jun16',
    day: 'Mon',
    date: '16',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '101',
    month: 'jun',
    class: 'jun17',
    day: 'Tue',
    date: '17',
    opp: 'KC',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jun17">Recap</a>'
    },
    {
    id: '102',
    month: 'jun',
    class: 'jun18',
    day: 'Wed',
    date: '18',
    opp: 'KC',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jun18">Recap</a>'
    },
    {
    id: '103',
    month: 'jun',
    class: 'jun19',
    day: 'Thu',
    date: '19',
    opp: 'KC',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#jun19">Recap</a>'
    },
    {
    id: '104',
    month: 'jun',
    class: 'jun20',
    day: 'Fri',
    date: '20',
    opp: 'at Pit',
    time: '5:40',
    score: '',
    recap: '<a href = "55555555.html#jun20">Recap</a>'
    },
    {
    id: '105',
    month: 'jun',
    class: 'jun21',
    day: 'Sat',
    date: '21',
    opp: 'at Pit',
    time: '3:05',
    score: '',
    recap: '<a href = "55555555.html#jun21">Recap</a>'
    },
    {
    id: '106',
    month: 'jun',
    class: 'jun22',
    day: 'Sun',
    date: '22',
    opp: 'at Pit',
    time: '12:35',
    score: '',
    recap: '<a href = "55555555.html#jun22">Recap</a>'
    },
    {
    id: '107',
    month: 'jun',
    class: 'jun23',
    day: 'Mon',
    date: '23',
    opp: 'at Bal',
    time: '5:35',
    score: '',
    recap: '<a href = "55555555.html#jun23">Recap</a>'
    },
    {
    id: '108',
    month: 'jun',
    class: 'jun24',
    day: 'Tue',
    date: '24',
    opp: 'at Bal',
    time: '5:35',
    score: '',
    recap: '<a href = "55555555.html#jun24">Recap</a>'
    },
    {
    id: '109',
    month: 'jun',
    class: 'jun25',
    day: 'Wed',
    date: '25',
    opp: 'at Bal',
    time: '5:35',
    score: '',
    recap: '<a href = "55555555.html#jun25">Recap</a>'
    },
    {
    id: '110',
    month: 'jun',
    class: 'jun26',
    day: 'Thu',
    date: '26',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '111',
    month: 'jun',
    class: 'jun27',
    day: 'Fri',
    date: '27',
    opp: 'Sea',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jun27">Recap</a>'
    },
    {
    id: '112',
    month: 'jun',
    class: 'jun28',
    day: 'Sat',
    date: '28',
    opp: 'Sea',
    time: '3:05',
    score: '',
    recap: '<a href = "55555555.html#jun28">Recap</a>'
    },
    {
    id: '113',
    month: 'jun',
    class: 'jun29',
    day: 'Sun',
    date: '29',
    opp: 'Sea',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#jun29">Recap</a>'
    },
    {
    id: '114',
    month: 'jun',
    class: 'jun30',
    day: 'Mon',
    date: '30',
    opp: 'Bal',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jun30">Recap</a>'
    },
    {
    id: '115',
    month: 'jun',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '116',
    month: 'jun',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '117',
    month: 'jun',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '118',
    month: 'jun',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '119',
    month: 'jun',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '120',
    month: 'jul',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '121',
    month: 'jul',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '122',
    month: 'jul',
    class: 'jul1',
    day: 'Tue',
    date: '1',
    opp: 'Bal',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jul1">Recap</a>'
    },
    {
    id: '123',
    month: 'jul',
    class: 'jul2',
    day: 'Wed',
    date: '2',
    opp: 'Bal',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jul2">Recap</a>'
    },
    {
    id: '124',
    month: 'jul',
    class: 'jul3',
    day: 'Thu',
    date: '3',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '125',
    month: 'jul',
    class: 'jul4',
    day: 'Fri',
    date: '4',
    opp: 'at SD',
    time: '5:40',
    score: '',
    recap: '<a href = "55555555.html#jul4">Recap</a>'
    },
    {
    id: '126',
    month: 'jul',
    class: 'jul5',
    day: 'Sat',
    date: '5',
    opp: 'at SD',
    time: '8:40',
    score: '',
    recap: '<a href = "55555555.html#jul5">Recap</a>'
    },
    {
    id: '127',
    month: 'jul',
    class: 'jul6',
    day: 'Sun',
    date: '6',
    opp: 'at SD',
    time: '8:10',
    score: '',
    recap: '<a href = "55555555.html#jul6">Recap</a>'
    },
    {
    id: '128',
    month: 'jul',
    class: 'jul7',
    day: 'Mon',
    date: '7',
    opp: 'at LAA',
    time: '8:38',
    score: '',
    recap: '<a href = "55555555.html#jul7">Recap</a>'
    },
    {
    id: '129',
    month: 'jul',
    class: 'jul8',
    day: 'Tue',
    date: '8',
    opp: 'at LAA',
    time: '8:38',
    score: '',
    recap: '<a href = "55555555.html#jul8">Recap</a>'
    },
    {
    id: '130',
    month: 'jul',
    class: 'jul9',
    day: 'Wed',
    date: '9',
    opp: 'at LAA',
    time: '8:38',
    score: '',
    recap: '<a href = "55555555.html#jul9">Recap</a>'
    },
    {
    id: '131',
    month: 'jul',
    class: 'jul10',
    day: 'Thu',
    date: '10',
    opp: 'at LAA',
    time: '8:38',
    score: '',
    recap: '<a href = "55555555.html#jul10">Recap</a>'
    },
    {
    id: '132',
    month: 'jul',
    class: 'jul11',
    day: 'Fri',
    date: '11',
    opp: 'at Hou',
    time: '7:10',
    score: '',
    recap: '<a href = "55555555.html#jul11">Recap</a>'
    },
    {
    id: '133',
    month: 'jul',
    class: 'jul12',
    day: 'Sat',
    date: '12',
    opp: 'at Hou',
    time: '6:35',
    score: '',
    recap: '<a href = "55555555.html#jul12">Recap</a>'
    },
    {
    id: '134',
    month: 'jul',
    class: 'jul13',
    day: 'Sun',
    date: '13',
    opp: 'at Hou',
    time: '1:10',
    score: '',
    recap: '<a href = "55555555.html#jul13">Recap</a>'
    },
    {
    id: '135',
    month: 'jul',
    class: 'jul14',
    day: 'Mon',
    date: '14',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '136',
    month: 'jul',
    class: 'jul15',
    day: 'Tue',
    date: '15',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '137',
    month: 'jul',
    class: 'jul16',
    day: 'Wed',
    date: '16',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '138',
    month: 'jul',
    class: 'jul17',
    day: 'Thu',
    date: '17',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '139',
    month: 'jul',
    class: 'jul18',
    day: 'Fri',
    date: '18',
    opp: 'Det',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jul18">Recap</a>'
    },
    {
    id: '140',
    month: 'jul',
    class: 'jul19',
    day: 'Sat',
    date: '19',
    opp: 'Det',
    time: '6:05',
    score: '',
    recap: '<a href = "55555555.html#jul19">Recap</a>'
    },
    {
    id: '141',
    month: 'jul',
    class: 'jul20',
    day: 'Sun',
    date: '20',
    opp: 'Det',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#jul20">Recap</a>'
    },
    {
    id: '142',
    month: 'jul',
    class: 'jul21',
    day: 'Mon',
    date: '21',
    opp: 'Ath',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jul21">Recap</a>'
    },
    {
    id: '143',
    month: 'jul',
    class: 'jul22',
    day: 'Tue',
    date: '22',
    opp: 'Ath',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jul22">Recap</a>'
    },
    {
    id: '144',
    month: 'jul',
    class: 'jul23',
    day: 'Wed',
    date: '23',
    opp: 'Ath',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jul23">Recap</a>'
    },
    {
    id: '145',
    month: 'jul',
    class: 'jul24',
    day: 'Thu',
    date: '24',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '146',
    month: 'jul',
    class: 'jul25',
    day: 'Fri',
    date: '25',
    opp: 'Atl',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#jul25">Recap</a>'
    },
    {
    id: '147',
    month: 'jul',
    class: 'jul26',
    day: 'Sat',
    date: '26',
    opp: 'Atl',
    time: '6:05',
    score: '',
    recap: '<a href = "55555555.html#jul26">Recap</a>'
    },
    {
    id: '148',
    month: 'jul',
    class: 'jul27',
    day: 'Sun',
    date: '27',
    opp: 'Atl',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#jul27">Recap</a>'
    },
    {
    id: '149',
    month: 'jul',
    class: 'jul28',
    day: 'Mon',
    date: '28',
    opp: 'at LAA',
    time: '8:38',
    score: '',
    recap: '<a href = "55555555.html#jul28">Recap</a>'
    },
    {
    id: '150',
    month: 'jul',
    class: 'jul29',
    day: 'Tue',
    date: '29',
    opp: 'at LAA',
    time: '8:38',
    score: '',
    recap: '<a href = "55555555.html#jul29">Recap</a>'
    },
    {
    id: '151',
    month: 'jul',
    class: 'jul30',
    day: 'Wed',
    date: '30',
    opp: 'at LAA',
    time: '8:38',
    score: '',
    recap: '<a href = "55555555.html#jul30">Recap</a>'
    },
    {
    id: '152',
    month: 'jul',
    class: 'jul31',
    day: 'Thu',
    date: '31',
    opp: 'at Sea',
    time: '8:40',
    score: '',
    recap: '<a href = "55555555.html#jul31">Recap</a>'
    },
    {
    id: '153',
    month: 'jul',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '154',
    month: 'jul',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '155',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '156',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '157',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '158',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '159',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '160',
    month: 'aug',
    class: 'aug1',
    day: 'Fri',
    date: '1',
    opp: 'at Sea',
    time: '9:10',
    score: '',
    recap: '<a href = "55555555.html#aug1">Recap</a>'
    },
    {
    id: '161',
    month: 'aug',
    class: 'aug2',
    day: 'Sat',
    date: '2',
    opp: 'at Sea',
    time: '3:10',
    score: '',
    recap: '<a href = "55555555.html#aug2">Recap</a>'
    },
    {
    id: '162',
    month: 'aug',
    class: 'aug3',
    day: 'Sun',
    date: '3',
    opp: 'at Sea',
    time: '3:10',
    score: '',
    recap: '<a href = "55555555.html#aug3">Recap</a>'
    },
    {
    id: '163',
    month: 'aug',
    class: 'aug4',
    day: 'Mon',
    date: '4',
    opp: 'NYY',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#aug4">Recap</a>'
    },
    {
    id: '164',
    month: 'aug',
    class: 'aug5',
    day: 'Tue',
    date: '5',
    opp: 'NYY',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#aug5">Recap</a>'
    },
    {
    id: '165',
    month: 'aug',
    class: 'aug6',
    day: 'Wed',
    date: '6',
    opp: 'NYY',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#aug6">Recap</a>'
    },
    {
    id: '166',
    month: 'aug',
    class: 'aug7',
    day: 'Thu',
    date: '7',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '167',
    month: 'aug',
    class: 'aug8',
    day: 'Fri',
    date: '8',
    opp: 'Phi',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#aug8">Recap</a>'
    },
    {
    id: '168',
    month: 'aug',
    class: 'aug9',
    day: 'Sat',
    date: '9',
    opp: 'Phi',
    time: '6:15',
    score: '',
    recap: '<a href = "55555555.html#aug9">Recap</a>'
    },
    {
    id: '169',
    month: 'aug',
    class: 'aug10',
    day: 'Sun',
    date: '10',
    opp: 'Phi',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#aug10">Recap</a>'
    },
    {
    id: '170',
    month: 'aug',
    class: 'aug11',
    day: 'Mon',
    date: '11',
    opp: 'Ari',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#aug11">Recap</a>'
    },
    {
    id: '171',
    month: 'aug',
    class: 'aug12',
    day: 'Tue',
    date: '12',
    opp: 'Ari',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#aug12">Recap</a>'
    },
    {
    id: '172',
    month: 'aug',
    class: 'aug13',
    day: 'Wed',
    date: '13',
    opp: 'Ari',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#aug13">Recap</a>'
    },
    {
    id: '173',
    month: 'aug',
    class: 'aug14',
    day: 'Thu',
    date: '14',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '174',
    month: 'aug',
    class: 'aug15',
    day: 'Fri',
    date: '15',
    opp: 'at Tor',
    time: '6:07',
    score: '',
    recap: '<a href = "55555555.html#aug15">Recap</a>'
    },
    {
    id: '175',
    month: 'aug',
    class: 'aug16',
    day: 'Sat',
    date: '16',
    opp: 'at Tor',
    time: '2:07',
    score: '',
    recap: '<a href = "55555555.html#aug16">Recap</a>'
    },
    {
    id: '176',
    month: 'aug',
    class: 'aug17',
    day: 'Sun',
    date: '17',
    opp: 'at Tor',
    time: '12:37',
    score: '',
    recap: '<a href = "55555555.html#aug17">Recap</a>'
    },
    {
    id: '177',
    month: 'aug',
    class: 'aug18',
    day: 'Mon',
    date: '18',
    opp: 'at KC',
    time: '6:40',
    score: '',
    recap: '<a href = "55555555.html#aug18">Recap</a>'
    },
    {
    id: '178',
    month: 'aug',
    class: 'aug19',
    day: 'Tue',
    date: '19',
    opp: 'at KC',
    time: '6:40',
    score: '',
    recap: '<a href = "55555555.html#aug19">Recap</a>'
    },
    {
    id: '179',
    month: 'aug',
    class: 'aug20',
    day: 'Wed',
    date: '20',
    opp: 'at KC',
    time: '6:40',
    score: '',
    recap: '<a href = "55555555.html#aug20">Recap</a>'
    },
    {
    id: '180',
    month: 'aug',
    class: 'aug21',
    day: 'Thu',
    date: '21',
    opp: 'at KC',
    time: '1:10',
    score: '',
    recap: '<a href = "55555555.html#aug21">Recap</a>'
    },
    {
    id: '181',
    month: 'aug',
    class: 'aug22',
    day: 'Fri',
    date: '22',
    opp: 'Cle',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#aug22">Recap</a>'
    },
    {
    id: '182',
    month: 'aug',
    class: 'aug23',
    day: 'Sat',
    date: '23',
    opp: 'Cle',
    time: '6:05',
    score: '',
    recap: '<a href = "55555555.html#aug23">Recap</a>'
    },
    {
    id: '183',
    month: 'aug',
    class: 'aug24',
    day: 'Sun',
    date: '24',
    opp: 'Cle',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#aug24">Recap</a>'
    },
    {
    id: '184',
    month: 'aug',
    class: 'aug25',
    day: 'Mon',
    date: '25',
    opp: 'LAA',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#aug25">Recap</a>'
    },
    {
    id: '185',
    month: 'aug',
    class: 'aug26',
    day: 'Tue',
    date: '26',
    opp: 'LAA',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#aug26">Recap</a>'
    },
    {
    id: '186',
    month: 'aug',
    class: 'aug27',
    day: 'Wed',
    date: '27',
    opp: 'LAA',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#aug27">Recap</a>'
    },
    {
    id: '187',
    month: 'aug',
    class: 'aug28',
    day: 'Thu',
    date: '28',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '188',
    month: 'aug',
    class: 'aug29',
    day: 'Fri',
    date: '29',
    opp: 'at Ath',
    time: '9:05',
    score: '',
    recap: '<a href = "55555555.html#aug29">Recap</a>'
    },
    {
    id: '189',
    month: 'aug',
    class: 'aug30',
    day: 'Sat',
    date: '30',
    opp: 'at Ath',
    time: '9:05',
    score: '',
    recap: '<a href = "55555555.html#aug30">Recap</a>'
    },
    {
    id: '190',
    month: 'aug',
    class: 'aug31',
    day: 'Sun',
    date: '31',
    opp: 'at Ath',
    time: '3:05',
    score: '',
    recap: '<a href = "55555555.html#aug31">Recap</a>'
    },
    {
    id: '191',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '192',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '193',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '194',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '195',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '196',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '197',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '198',
    month: 'sep',
    class: 'sep1',
    day: 'Mon',
    date: '1',
    opp: 'at Ari',
    time: '7:10',
    score: '',
    recap: '<a href = "55555555.html#sep1">Recap</a>'
    },
    {
    id: '199',
    month: 'sep',
    class: 'sep2',
    day: 'Tue',
    date: '2',
    opp: 'at Ari',
    time: '8:40',
    score: '',
    recap: '<a href = "55555555.html#sep2">Recap</a>'
    },
    {
    id: '200',
    month: 'sep',
    class: 'sep3',
    day: 'Wed',
    date: '3',
    opp: 'at Ari',
    time: '2:40',
    score: '',
    recap: '<a href = "55555555.html#sep3">Recap</a>'
    },
    {
    id: '201',
    month: 'sep',
    class: 'sep4',
    day: 'Thu',
    date: '4',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '202',
    month: 'sep',
    class: 'sep5',
    day: 'Fri',
    date: '5',
    opp: 'Hou',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#sep5">Recap</a>'
    },
    {
    id: '203',
    month: 'sep',
    class: 'sep6',
    day: 'Sat',
    date: '6',
    opp: 'Hou',
    time: '6:15',
    score: '',
    recap: '<a href = "55555555.html#sep6">Recap</a>'
    },
    {
    id: '204',
    month: 'sep',
    class: 'sep7',
    day: 'Sun',
    date: '7',
    opp: 'Hou',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#sep7">Recap</a>'
    },
    {
    id: '205',
    month: 'sep',
    class: 'sep8',
    day: 'Mon',
    date: '8',
    opp: 'Mil',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#sep8">Recap</a>'
    },
    {
    id: '206',
    month: 'sep',
    class: 'sep9',
    day: 'Tue',
    date: '9',
    opp: 'Mil',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#sep9">Recap</a>'
    },
    {
    id: '207',
    month: 'sep',
    class: 'sep10',
    day: 'Wed',
    date: '10',
    opp: 'Mil',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#sep10">Recap</a>'
    },
    {
    id: '208',
    month: 'sep',
    class: 'sep11',
    day: 'Thu',
    date: '11',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '209',
    month: 'sep',
    class: 'sep12',
    day: 'Fri',
    date: '12',
    opp: 'at NYM',
    time: '6:10',
    score: '',
    recap: '<a href = "55555555.html#sep12">Recap</a>'
    },
    {
    id: '210',
    month: 'sep',
    class: 'sep13',
    day: 'Sat',
    date: '13',
    opp: 'at NYM',
    time: '3:10',
    score: '',
    recap: '<a href = "55555555.html#sep13">Recap</a>'
    },
    {
    id: '211',
    month: 'sep',
    class: 'sep14',
    day: 'Sun',
    date: '14',
    opp: 'at NYM',
    time: '12:40',
    score: '',
    recap: '<a href = "55555555.html#sep14">Recap</a>'
    },
    {
    id: '212',
    month: 'sep',
    class: 'sep15',
    day: 'Mon',
    date: '15',
    opp: 'at Hou',
    time: '7:10',
    score: '',
    recap: '<a href = "55555555.html#sep15">Recap</a>'
    },
    {
    id: '213',
    month: 'sep',
    class: 'sep16',
    day: 'Tue',
    date: '16',
    opp: 'at Hou',
    time: '7:10',
    score: '',
    recap: '<a href = "55555555.html#sep16">Recap</a>'
    },
    {
    id: '214',
    month: 'sep',
    class: 'sep17',
    day: 'Wed',
    date: '17',
    opp: 'at Hou',
    time: '7:10',
    score: '',
    recap: '<a href = "55555555.html#sep17">Recap</a>'
    },
    {
    id: '215',
    month: 'sep',
    class: 'sep18',
    day: 'Thu',
    date: '18',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '216',
    month: 'sep',
    class: 'sep19',
    day: 'Fri',
    date: '19',
    opp: 'Mia',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#sep19">Recap</a>'
    },
    {
    id: '217',
    month: 'sep',
    class: 'sep20',
    day: 'Sat',
    date: '20',
    opp: 'Mia',
    time: '6:05',
    score: '',
    recap: '<a href = "55555555.html#sep20">Recap</a>'
    },
    {
    id: '218',
    month: 'sep',
    class: 'sep21',
    day: 'Sun',
    date: '21',
    opp: 'Mia',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#sep21">Recap</a>'
    },
    {
    id: '219',
    month: 'sep',
    class: 'sep22',
    day: 'Mon',
    date: '22',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '220',
    month: 'sep',
    class: 'sep23',
    day: 'Tue',
    date: '23',
    opp: 'Min',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#sep23">Recap</a>'
    },
    {
    id: '221',
    month: 'sep',
    class: 'sep24',
    day: 'Wed',
    date: '24',
    opp: 'Min',
    time: '7:05',
    score: '',
    recap: '<a href = "55555555.html#sep24">Recap</a>'
    },
    {
    id: '222',
    month: 'sep',
    class: 'sep25',
    day: 'Thu',
    date: '25',
    opp: 'Min',
    time: '1:35',
    score: '',
    recap: '<a href = "55555555.html#sep25">Recap</a>'
    },
    {
    id: '223',
    month: 'sep',
    class: 'sep26',
    day: 'Fri',
    date: '26',
    opp: 'at Cle',
    time: '6:10',
    score: '',
    recap: '<a href = "55555555.html#sep26">Recap</a>'
    },
    {
    id: '224',
    month: 'sep',
    class: 'sep27',
    day: 'Sat',
    date: '27',
    opp: 'at Cle',
    time: '5:10',
    score: '',
    recap: '<a href = "55555555.html#sep27">Recap</a>'
    },
    {
    id: '225',
    month: 'sep',
    class: 'sep28',
    day: 'Sun',
    date: '28',
    opp: 'at Cle',
    time: '2:10',
    score: '',
    recap: '<a href = "55555555.html#sep28">Recap</a>'
    },
    {
    id: '226',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '227',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '228',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '229',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '230',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '231',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    }
  ]
  
  let marchCalendar = calendar.filter((element) => element.month === 'mar');
    
  let html = '';
  
    marchCalendar.forEach((element) => {
      newHTML = 
      `<div class = ${element.class}>
          <div>
            ${element.day}
          </div>
          <div class = "date">
            ${element.date}
          </div>
          <div>
            ${element.opp}
          </div>
          <div>
            ${element.time}
          </div>
          <div>
            ${element.score}
          </div>
          <div>
            ${element.recap}
          </div>
         </div>\n`
      html += newHTML
    });
  
    document.querySelector('.two-week-month').innerHTML = html;

    let aprilCalendar = calendar.filter((element) => element.month === 'apr');
        
    html = '';
    
      aprilCalendar.forEach((element) => {
        newHTML = 
        `<div class = ${element.class}>
            <div>
              ${element.day}
            </div>
            <div class = "date">
              ${element.date}
            </div>
            <div>
              ${element.opp}
            </div>
            <div>
              ${element.time}
            </div>
            <div>
              ${element.score}
            </div>
            <div>
              ${element.recap}
            </div>
           </div>\n`
        html += newHTML
      });
    
      document.querySelector('.apr').innerHTML = html;

      let mayCalendar = calendar.filter((element) => element.month === 'may');
        
    html = '';
    
      mayCalendar.forEach((element) => {
        newHTML = 
        `<div class = ${element.class}>
            <div>
              ${element.day}
            </div>
            <div class = "date">
              ${element.date}
            </div>
            <div>
              ${element.opp}
            </div>
            <div>
              ${element.time}
            </div>
            <div>
              ${element.score}
            </div>
            <div>
              ${element.recap}
            </div>
           </div>\n`
        html += newHTML
      });
    
      document.querySelector('.may').innerHTML = html;

      let juneCalendar = calendar.filter((element) => element.month === 'jun');
        
    html = '';
    
      juneCalendar.forEach((element) => {
        newHTML = 
        `<div class = ${element.class}>
            <div>
              ${element.day}
            </div>
            <div class = "date">
              ${element.date}
            </div>
            <div>
              ${element.opp}
            </div>
            <div>
              ${element.time}
            </div>
            <div>
              ${element.score}
            </div>
            <div>
              ${element.recap}
            </div>
           </div>\n`
        html += newHTML
      });
    
      document.querySelector('.jun').innerHTML = html;

      let julyCalendar = calendar.filter((element) => element.month === 'jul');
        
    html = '';
    
      julyCalendar.forEach((element) => {
        newHTML = 
        `<div class = ${element.class}>
            <div>
              ${element.day}
            </div>
            <div class = "date">
              ${element.date}
            </div>
            <div>
              ${element.opp}
            </div>
            <div>
              ${element.time}
            </div>
            <div>
              ${element.score}
            </div>
            <div>
              ${element.recap}
            </div>
           </div>\n`
        html += newHTML
      });
    
      document.querySelector('.jul').innerHTML = html;

      let augustCalendar = calendar.filter((element) => element.month === 'aug');
        
    html = '';
    
      augustCalendar.forEach((element) => {
        newHTML = 
        `<div class = ${element.class}>
            <div>
              ${element.day}
            </div>
            <div class = "date">
              ${element.date}
            </div>
            <div>
              ${element.opp}
            </div>
            <div>
              ${element.time}
            </div>
            <div>
              ${element.score}
            </div>
            <div>
              ${element.recap}
            </div>
           </div>\n`
        html += newHTML
      });
    
      document.querySelector('.six-week-month').innerHTML = html;

      let septemberCalendar = calendar.filter((element) => element.month === 'sep');
            
      html = '';
      
        septemberCalendar.forEach((element) => {
          newHTML = 
          `<div class = ${element.class}>
              <div>
                ${element.day}
              </div>
              <div class = "date">
                ${element.date}
              </div>
              <div>
                ${element.opp}
              </div>
              <div>
                ${element.time}
              </div>
              <div>
                ${element.score}
              </div>
              <div>
                ${element.recap}
              </div>
             </div>\n`
          html += newHTML
        });
      
        document.querySelector('.sep').innerHTML = html;

      