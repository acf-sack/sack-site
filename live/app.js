function connect() {
    const socket = new SockJS('https://sack-live-score.herokuapp.com/live'); //todo :
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/test-match', function (match) {
            setValues(JSON.parse(match.body));
        });
    });
}

function setValues(payload) {
    //team one set values
    $("#team-one-first-innings-score").text(payload.teamOneFirstInning.score);
    $("#team-one-first-innings-wickets").text(payload.teamOneFirstInning.wickets);
    $("#team-one-first-innings-overs").text(payload.teamOneFirstInning.overs);
    $("#team-one-first-innings-balls").text(payload.teamOneFirstInning.balls);
    $("#team-one-first-innings-player-one").text(payload.teamOneFirstInning.playerOne.name);
    $("#team-one-first-innings-player-two").text(payload.teamOneFirstInning.playerTwo.name);
    if (payload.teamOneFirstInning.playerOne.isBatting === true && payload.teamOneFirstInning.playerTwo.isBatting === false) {
        $('#team-one-first-innings-player-one-batting').show();
        $('#team-one-first-innings-player-two-batting').hide();
    }
    if (payload.teamOneFirstInning.playerTwo.isBatting === true && payload.teamOneFirstInning.playerOne.isBatting === false) {
        $('#team-one-first-innings-player-one-batting').hide();
        $('#team-one-first-innings-player-two-batting').show();
    }
    $("#team-one-second-innings-score").text(payload.teamOneSecondInning.score);
    $("#team-one-second-innings-wickets").text(payload.teamOneSecondInning.wickets);
    $("#team-one-second-innings-overs").text(payload.teamOneSecondInning.overs);
    $("#team-one-second-innings-balls").text(payload.teamOneSecondInning.balls);
    $("#team-one-second-innings-player-one").text(payload.teamOneSecondInning.playerOne.name);
    $("#team-one-second-innings-player-two").text(payload.teamOneSecondInning.playerTwo.name);
    if (payload.teamOneSecondInning.playerOne.isBatting === true && payload.teamOneSecondInning.playerTwo.isBatting === false) {
        $('#team-one-second-innings-player-one-batting').show();
        $('#team-one-second-innings-player-two-batting').hide();
    }
    if (payload.teamOneSecondInning.playerTwo.isBatting === true && payload.teamOneSecondInning.playerOne.isBatting === false) {
        $('#team-one-second-innings-player-one-batting').hide();
        $('#team-one-second-innings-player-two-batting').show();
    }

    //team two set values
    $("#team-two-first-innings-score").text(payload.teamTwoFirstInning.score);
    $("#team-two-first-innings-wickets").text(payload.teamTwoFirstInning.wickets);
    $("#team-two-first-innings-overs").text(payload.teamTwoFirstInning.overs);
    $("#team-two-first-innings-balls").text(payload.teamTwoFirstInning.balls);
    $("#team-two-first-innings-player-one").text(payload.teamTwoFirstInning.playerOne.name);
    $("#team-two-first-innings-player-two").text(payload.teamTwoFirstInning.playerTwo.name);
    if (payload.teamTwoFirstInning.playerOne.isBatting === true && payload.teamTwoFirstInning.playerTwo.isBatting === false) {
        $('#team-one-first-innings-player-one-batting').show();
        $('#team-two-first-innings-player-two-batting').hide();
    }
    if (payload.teamTwoFirstInning.playerTwo.isBatting === true && payload.teamTwoFirstInning.playerOne.isBatting === false) {
        $('#team-two-first-innings-player-one-batting').hide();
        $('#team-two-first-innings-player-two-batting').show();
    }
    $("#team-two-second-innings-score").text(payload.teamTwoSecondInning.score);
    $("#team-two-second-innings-wickets").text(payload.teamTwoSecondInning.wickets);
    $("#team-two-second-innings-overs").text(payload.teamTwoSecondInning.overs);
    $("#team-two-second-innings-balls").text(payload.teamTwoSecondInning.balls);
    $("#team-two-second-innings-player-one").text(payload.teamTwoSecondInning.playerOne.name);
    $("#team-two-second-innings-player-two").text(payload.teamTwoSecondInning.playerTwo.name);
    if (payload.teamTwoSecondInning.playerOne.isBatting === true && payload.teamTwoSecondInning.playerTwo.isBatting === false) {
        $('#team-two-second-innings-player-one-batting').show();
        $('#team-two-second-innings-player-two-batting').hide();
    }
    if (payload.teamTwoSecondInning.playerTwo.isBatting === true && payload.teamTwoSecondInning.playerOne.isBatting === false) {
        $('#team-two-second-innings-player-one-batting').hide();
        $('#team-two-second-innings-player-two-batting').show();
    }
}

$(function () {
    connect()
});
