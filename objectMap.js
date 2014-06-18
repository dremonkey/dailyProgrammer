/*
var matches = [{
    userId: { user stuff },
    oppId: { opp stuff },
    userInterest: 4,
    answers: [null, "", ""]
}];

var opportunities = [{
    opp stuff,
    match: {
        userInterest: 4,
        answers: []
    },
    user: {
        user stuff
    }
}];
*/

var matches = [];
var opportunities = matches.map(function(match) {
    var opportunity = match.oppId;
    opportunity.user = match.userId;
    opportunity.match = match;

    delete opportunity.match.oppId;
    delete opportunity.match.userId;
    return opportunity;
});

var opportunities = [{
    opp stuff,
    match: {
        userInterest: 4,
        answers: []
    },
    user: {
        user stuff
    }
}];