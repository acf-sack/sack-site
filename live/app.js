function connect() {
    const socket = new SockJS('https://sack-live-score.herokuapp.com/live');
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
    $('#team-one-first-innings-player-one-batting').toggle(payload.teamOneFirstInning.playerOne.isBatting);
    $('#team-one-first-innings-player-two-batting').toggle(payload.teamOneFirstInning.playerTwo.isBatting);
    $("#team-one-second-innings-score").text(payload.teamOneSecondInning.score);
    $("#team-one-second-innings-wickets").text(payload.teamOneSecondInning.wickets);
    $("#team-one-second-innings-overs").text(payload.teamOneSecondInning.overs);
    $("#team-one-second-innings-balls").text(payload.teamOneSecondInning.balls);
    $("#team-one-second-innings-player-one").text(payload.teamOneSecondInning.playerOne.name);
    $("#team-one-second-innings-player-two").text(payload.teamOneSecondInning.playerTwo.name);
    $('#team-one-second-innings-player-one-batting').toggle(payload.teamOneSecondInning.playerOne.isBatting);
    $('#team-one-second-innings-player-two-batting').toggle(payload.teamOneSecondInning.playerTwo.isBatting);
    //team two set values
    $("#team-two-first-innings-score").text(payload.teamTwoFirstInning.score);
    $("#team-two-first-innings-wickets").text(payload.teamTwoFirstInning.wickets);
    $("#team-two-first-innings-overs").text(payload.teamTwoFirstInning.overs);
    $("#team-two-first-innings-balls").text(payload.teamTwoFirstInning.balls);
    $("#team-two-first-innings-player-one").text(payload.teamTwoFirstInning.playerOne.name);
    $("#team-two-first-innings-player-two").text(payload.teamTwoFirstInning.playerTwo.name);
    $('#team-two-first-innings-player-one-batting').toggle(payload.teamTwoFirstInning.playerOne.isBatting);
    $('#team-two-first-innings-player-two-batting').toggle(payload.teamTwoFirstInning.playerTwo.isBatting);
    $("#team-two-second-innings-score").text(payload.teamTwoSecondInning.score);
    $("#team-two-second-innings-wickets").text(payload.teamTwoSecondInning.wickets);
    $("#team-two-second-innings-overs").text(payload.teamTwoSecondInning.overs);
    $("#team-two-second-innings-balls").text(payload.teamTwoSecondInning.balls);
    $("#team-two-second-innings-player-one").text(payload.teamTwoSecondInning.playerOne.name);
    $("#team-two-second-innings-player-two").text(payload.teamTwoSecondInning.playerTwo.name);
    $('#team-two-second-innings-player-one-batting').toggle(payload.teamTwoSecondInning.playerOne.isBatting);
    $('#team-two-second-innings-player-two-batting').toggle(payload.teamTwoSecondInning.playerTwo.isBatting);
}

$(function () {
    connect();
});
