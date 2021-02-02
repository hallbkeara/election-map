var newPolitician = function(name, partyColor) {
  
  var politician = {};
    politician.name = name;
    politician.electionResults = null; 
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
  
// tallying votes
  politician.countTotalVotes = function () 
{
  this.totalVotes = 0;
  
  for (var i=0; i<this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
};
 
   return politician;

}; // newPolitician factory function finished

  var politician1 = newPolitician("Sheelah",[132, 17, 11]);
  var politician2 = newPolitician("Paul",[245, 141, 136]);

  politician1.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
  politician2.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

// updating array for Florida vote (9)
politician1.electionResults [9]= 1;
politician2.electionResults [9]= 28;
// updating array for California vote (4)
politician1.electionResults [4]= 17;
politician2.electionResults [4]= 38;
// updating array for Texas vote (43)
politician1.electionResults [43]= 11;
politician2.electionResults [43]= 27;

  politician1.countTotalVotes();
  politician2.countTotalVotes();
  
  console.log(politician1.totalVotes);
  console.log(politician2.totalVotes);


// announce the winner 
  var winner = "???";

if (politician1.totalVotes > politician2.totalVotes){
  winner = politician1.name;
} else if (politician1.totalVotes < politician2.totalVotes){
  winner = politician2.name;
} else {
    winner = "We have a draw!"
}

console.log("THE WINNER IS..." + winner + "!!!");

// making sure color is assigned
console.log("Sheelah's color is: " + politician1.partyColor);
console.log("Paul's color is: " + politician2.partyColor);

// assign winner of each state
  var setStateResults = function(state)
{
    theStates[state].winner = null; 
  
  if (politician1.electionResults[state]>politician2.electionResults[state]){
      theStates[state].winner = politician1;
  } else if (politician1.electionResults[state]<politician2.electionResults[state]) {
      theStates[state].winner = politician2;
  }

//change the color of each state based on the winner
  var stateWinner = theStates[state].winner;
  
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rbgColor = [11,32,57];
  }
  
  // stateResults table
// state name variable
var stateTable = document.getElementById('stateResults');
var header = stateTable.children[0];
var body = stateTable.children[1];
var stateName = header.children[0].children[0];
        //special syntax for full state name 
stateName.innerText = theStates[state].nameFull;

// state name abbreviation variable 
var stateNameAbr = header.children[0].children[1];
stateNameAbr.innerText = theStates[state].nameAbbrev;

// politician1
var candidate1Name = body.children[0].children[0];
candidate1Name.innerText = politician1.name;
var candidate1Results = body.children[0].children[1];
candidate1Results.innerText = politician1.electionResults[state];

// politician2
var candidate2Name = body.children[1].children[0];
candidate2Name.innerText = politician2.name;
var candidate2Results = body.children[1].children[1];
candidate2Results.innerText = politician2.electionResults[state];

// winner of state
var winnersName = body.children[2].children[1];
  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW!";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
  
}; //end of stateResults function

    // populate countryResults table
  var countryTable = document.getElementById('countryResults');
  var row = countryTable.children[0].children[0];
 
row.children[0].innerText = politician1.name;
row.children[1].innerText = politician1.totalVotes;
row.children[2].innerText = politician2.name;
row.children[3].innerText = politician2.totalVotes;
row.children[5].innerText = winner; 


   
  
 
 







