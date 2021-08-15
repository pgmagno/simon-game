function graphSoundPlayer (buttonPressed) {

    var soundToPlay;

    switch (buttonPressed) {
        case 0:
            $("#green").addClass("pressed");
            setTimeout (function () {
                $("#green").removeClass("pressed");
            }, 100);

            soundToPlay = new Audio("sounds/green.mp3");
            soundToPlay.play();
            break;

        case 1:
            $("#red").addClass("pressed");
            setTimeout (function () {
                $("#red").removeClass("pressed");
            }, 100);

            soundToPlay = new Audio("sounds/red.mp3");
            soundToPlay.play();
            break;

        case 2:
            $("#yellow").addClass("pressed");
            setTimeout (function () {
                $("#yellow").removeClass("pressed");
            }, 100);

            soundToPlay = new Audio("sounds/yellow.mp3");
            soundToPlay.play();
            break;

        case 3:
            $("#blue").addClass("pressed");
            setTimeout (function () {
                $("#blue").removeClass("pressed");
            }, 100);

            soundToPlay = new Audio("sounds/blue.mp3");
            soundToPlay.play();
            break;
        case 4:
            $("body").addClass("game-over");
            setTimeout (function () {
                $("body").removeClass("game-over");
            }, 100);

            soundToPlay = new Audio("sounds/wrong.mp3");
            soundToPlay.play();
            break;


        default:
    }


}

function gameStart () {

    gameObj.currentLevel = 1;
    gameObj.orderToFollow = [];
    gameObj.playerSeq = [];
    gameObj.count = 0;
    gameObj.playerButton = 0;

    $("h1").text("Level " + gameObj.currentLevel);
    setTimeout(sequenceRandomizer, 1000);
};

function sequenceRandomizer () {
    gameObj.buttonToPress = Math.floor(Math.random() * 4);
    graphSoundPlayer(gameObj.buttonToPress);
    gameObj.orderToFollow.push(gameObj.buttonToPress);
};

function gameChecker (playerButton) {

    if ((gameObj.orderToFollow[gameObj.count] === gameObj.playerButton) && (gameObj.playerSeq.length < gameObj.orderToFollow.length)) {
        gameObj.playerSeq.push(gameObj.playerButton);
        gameObj.count++;


        if  (gameObj.playerSeq.length === gameObj.orderToFollow.length) {
            setTimeout(sequenceRandomizer, 1000);
            gameObj.count = 0;
            gameObj.playerSeq = [];
            gameObj.currentLevel++;
            $("h1").text("Level " + gameObj.currentLevel);
        }

    } else {
        graphSoundPlayer(4);
        $("h1").text("Game Over, press any key to restart");
    }

};

var gameObj = {
    currentLevel: 1,
    orderToFollow: [],
    playerSeq: [],
    count: 0,
    buttonToPress: 0,
    playerButton: 0,
};



$("h1 .begin").on("click", gameStart);

$("div .btn").on("click", function () {

    switch (this.id) {
        case "green":
            gameObj.playerButton = 0;
            break;
        case "red":
            gameObj.playerButton = 1;
            break;
        case "yellow":
            gameObj.playerButton = 2;
            break;
        case "blue":
            gameObj.playerButton = 3;
            break;
        default:
    }
    graphSoundPlayer(gameObj.playerButton);
    gameChecker(gameObj.playerButton);

});
