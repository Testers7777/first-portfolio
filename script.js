tippy('#discord', {
    content: 'discord',
    theme: "type",
    offset: [0, 12],
    arrow: false,
});
tippy('#github', {
    content: 'github',
    theme: "type",
    offset: [0, 12],
    arrow: false,
});
tippy('#chess', {
    content: 'chess',
    theme: "type",
    offset: [0, 12],
    arrow: false,
});

window.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

const options = {
    method: 'GET',
};
const chessPp = document.querySelector('.chessPp');
const chessName = document.querySelector('.chessUsername');
const chessLeague = document.querySelector('.chessLeague');
const chessBulletGames = document.querySelector('.chessBulletGames');
const chessBulletRating = document.querySelector('.chessBulletRating');
const chessBlitzGames = document.querySelector('.chessBlitzGames');
const chessBlitzRating = document.querySelector('.chessBlitzRating');
const chessRapidGames = document.querySelector('.chessRapidGames');
const chessRapidRating = document.querySelector('.chessRapidRating');
fetch(`https://api.chess.com/pub/player/diislay`, options)
    .then(response => response.json())
    .then(data => {
        chessPp.src = data.avatar
        chessName.innerText = data.username
        chessLeague.src = "assets/images/" + data.league + ".png"
        fetch(`https://api.chess.com/pub/player/diislay/stats`, options)
            .then(response => response.json())
            .then(data => {
                chessBulletRating.innerText = data.chess_bullet.last.rating
                chessBulletGames.innerText = data.chess_bullet.record.win + data.chess_bullet.record.loss + data.chess_bullet.record.draw
                chessBlitzRating.innerText = data.chess_blitz.last.rating
                chessBlitzGames.innerText = data.chess_blitz.record.win + data.chess_blitz.record.loss + data.chess_blitz.record.draw
                chessRapidRating.innerText = data.chess_rapid.last.rating
                chessRapidGames.innerText = data.chess_rapid.record.win + data.chess_rapid.record.loss + data.chess_rapid.record.draw
            })
    })
