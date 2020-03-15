function connect() {
    let stompClient = null;
    let socket = new SockJS('https://sack-live-score.herokuapp.com/live'); //todo :
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/test-match', function (match) {
            setValues(JSON.parse(match.body));

        });
    });
}

function setValues(message) {
    console.log(message);

    //team one set values
    $("#team-one-first-innings-score").text(message.teamOneFirstInning.score);
    $("#team-one-first-innings-wickets").text(message.teamOneFirstInning.wickets);
    $("#team-one-first-innings-overs").text(message.teamOneFirstInning.overs);
    $("#team-one-first-innings-balls").text(message.teamOneFirstInning.balls);
    $("#team-one-first-innings-player-one").text(message.teamOneFirstInning.playerOne.name);
    $("#team-one-first-innings-player-two").text(message.teamOneFirstInning.playerTwo.name);
    if (message.teamOneFirstInning.playerOne.isBatting === true && message.teamOneFirstInning.playerTwo.isBatting === false) {
        $('#team-one-first-innings-player-one-batting').show();
        $('#team-one-first-innings-player-two-batting').hide();
    }
    if (message.teamOneFirstInning.playerTwo.isBatting === true && message.teamOneFirstInning.playerOne.isBatting === false) {
        $('#team-one-first-innings-player-one-batting').hide();
        $('#team-one-first-innings-player-two-batting').show();
    }

    $("#team-one-second-innings-score").text(message.teamOneSecondInning.score);
    $("#team-one-second-innings-wickets").text(message.teamOneSecondInning.wickets);
    $("#team-one-second-innings-overs").text(message.teamOneSecondInning.overs);
    $("#team-one-second-innings-balls").text(message.teamOneSecondInning.balls);
    $("#team-one-second-innings-player-one").text(message.teamOneSecondInning.playerOne.name);
    $("#team-one-second-innings-player-two").text(message.teamOneSecondInning.playerTwo.name);
    if (message.teamOneSecondInning.playerOne.isBatting === true && message.teamOneSecondInning.playerTwo.isBatting === false) {
        $('#team-one-second-innings-player-one-batting').show();
        $('#team-one-second-innings-player-two-batting').hide();
    }
    if (message.teamOneSecondInning.playerTwo.isBatting === true && message.teamOneSecondInning.playerOne.isBatting === false) {
        $('#team-one-second-innings-player-one-batting').hide();
        $('#team-one-second-innings-player-two-batting').show();
    }

    //team two set values
    $("#team-two-first-innings-score").text(message.teamTwoFirstInning.score);
    $("#team-two-first-innings-wickets").text(message.teamTwoFirstInning.wickets);
    $("#team-two-first-innings-overs").text(message.teamTwoFirstInning.overs);
    $("#team-two-first-innings-balls").text(message.teamTwoFirstInning.balls);
    $("#team-two-first-innings-player-one").text(message.teamTwoFirstInning.playerOne.name);
    $("#team-two-first-innings-player-two").text(message.teamTwoFirstInning.playerTwo.name);
    if (message.teamTwoFirstInning.playerOne.isBatting === true && message.teamTwoFirstInning.playerTwo.isBatting === false) {
        $('#team-one-first-innings-player-one-batting').show();
        $('#team-two-first-innings-player-two-batting').hide();
    }
    if (message.teamTwoFirstInning.playerTwo.isBatting === true && message.teamTwoFirstInning.playerOne.isBatting === false) {
        $('#team-two-first-innings-player-one-batting').hide();
        $('#team-two-first-innings-player-two-batting').show();
    }

    $("#team-two-second-innings-score").text(message.teamTwoSecondInning.score);
    $("#team-two-second-innings-wickets").text(message.teamTwoSecondInning.wickets);
    $("#team-two-second-innings-overs").text(message.teamTwoSecondInning.overs);
    $("#team-two-second-innings-balls").text(message.teamTwoSecondInning.balls);
    $("#team-two-second-innings-player-one").text(message.teamTwoSecondInning.playerOne.name);
    $("#team-two-second-innings-player-two").text(message.teamTwoSecondInning.playerTwo.name);
    if (message.teamTwoSecondInning.playerOne.isBatting === true && message.teamTwoSecondInning.playerTwo.isBatting === false) {
        $('#team-two-second-innings-player-one-batting').show();
        $('#team-two-second-innings-player-two-batting').hide();
    }
    if (message.teamTwoSecondInning.playerTwo.isBatting === true && message.teamTwoSecondInning.playerOne.isBatting === false) {
        $('#team-two-second-innings-player-one-batting').hide();
        $('#team-two-second-innings-player-two-batting').show();
    }
}

$(function () {
    connect()
});
