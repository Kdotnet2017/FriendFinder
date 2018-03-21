var friendsData = require("../data/friends.js");
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function (req, res) {
      
        var currentUser = req.body;
        friendsData.push(currentUser);

        res.json(findFriend(friendsData));
    })
};

// loop through array of friends object data to find the best match for currentUser(last push())
function findFriend(friendsData) {
    var currentScores=friendsData[friendsData.length-1]["scores"];
    var resultIndex = -1;
    var resultTotalDifference = 41;

    for (var i = 0; i < friendsData.length - 1; i++) {
        var friendScores = friendsData[i]["scores"];
        var totalDifference = 0;
        for (var j = 0; j < friendScores.length; j++) {
            var difference = Math.abs(parseInt(currentScores[j]) - parseInt(friendScores[j]));
            totalDifference += difference;
        }
        if (totalDifference < resultTotalDifference) {
            resultIndex = i;
            resultTotalDifference = totalDifference;
        }
    }
    if(resultIndex!==-1){
        return friendsData[resultIndex];
    }
    else{
        return null;
    }
}