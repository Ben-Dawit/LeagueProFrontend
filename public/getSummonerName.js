var summonerName;
var summonerLevel;
var championName;
var championLevel;
var championPoints;

function getSummonerName(summonerName){
    fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=RGAPI-ce1a57cb-27ee-4caf-8ce9-626d79c4b6c1").then(function(response) {
      //fetch line, replace this link with our api and change information accordingly. Delete this after
      //all relevent information about a given summoner will be included in this get.
      return response.json();
    }).then(function(data) {
        //below is a test set of data, uncomment and run to test inputs
        //data = '{"summonerName": "Pogitivity","summonerLevel": 320,"championName": ["Riven", "Akali", "Vayne"],"championLevel": [1000, 69, 2],"championPoints": [12912019209, 6969, 1]}'
        data = JSON.parse(data);
        summonerName = data['summonerName'];
        summonerLevel = data['summonerLevel'];
        championName = data['championName'];
        championLevel = data['championLevel'];
        championPoints = data['championPoints'];
        console.log(data);
      }).then(function(data) {
          //swap ins for the values present on the HTML page with proper read values from API
          document.getElementById("sumName").innerHTML = summonerName;
          document.getElementById("sumLevel").innerHTML = summonerLevel;
          document.getElementById("cName1").innerHTML = championName[0];
          document.getElementById("cName2").innerHTML = championName[1];
          document.getElementById("cName3").innerHTML = championName[2];
          document.getElementById("champlevel1").innerHTML = championLevel[0];
          document.getElementById("champlevel2").innerHTML = championLevel[1];
          document.getElementById("champlevel3").innerHTML = championLevel[2];
          document.getElementById("champpoint1").innerHTML = championPoints[0];
          document.getElementById("champpoint2").innerHTML = championPoints[1];
          document.getElementById("champpoint3").innerHTML = championPoints[2];
          document.getElementById("favchamp").innerHTML = championName[0];

      }).catch(function() {
        console.log("Booo");
      });
 };
 
 //function to read input from url, gives us the summoner name so it can be used to find further information
 function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  console.log(vars);
  return vars;
}


