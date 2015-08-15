var Song = require('nesly-sound');

var song = Song();
var note = song.note;

var sq1 = song.square1;
var sq2 = song.square2;
var tri = song.triangle;
var noi = song.noise;

function loop(n, fn) {
    if (n === 0) {
        return
    }

    fn()
    return loop(n - 1, fn)
}

function yes() {

    loop(4, function () {
        sq1(['A3', 'C3', 'E3'])
        .timing(1/16)

        sq2(['rest', 'rest', 'rest'])
        .timing(1/16)

        tri(['A2', 'C2', 'E2'])
        .timing(1/16)
    })


    loop(4, function () {
        sq1(['G3', 'B3', 'D3'])
        .timing(1/16)

        sq2(['rest', 'rest', 'rest'])
        .timing(1/16)

        tri(['G2', 'B2', 'D2'])
        .timing(1/16)
    })

    loop(8, function () {
        sq1(['F3', 'A3', 'C3'])
        .timing(1/16)

        sq2(['rest', 'rest', 'rest'])
        .timing(1/16)

        tri(['F2', 'A2', 'C2'])
        .timing(1/16)
    })
}

function no() {

    sq2(['C4']).timing(1/2)
    sq2(['E5']).timing(1/2)
    sq2(['G5']).timing(1/2)

    sq2(['E5']).timing(1/2)
    sq2(['C5']).timing(1)

    loop(4, function () {
        sq1(['A3', 'C3', 'E3'])
        .timing(1/16)

        tri(['A2', 'C2', 'E2'])
        .timing(1/16)
    })

    loop(4, function () {
        sq1(['G3', 'B3', 'D3'])
        .timing(1/16)

        tri(['G2', 'B2', 'D2'])
        .timing(1/16)
    })

    loop(8, function () {
        sq1(['F3', 'A3', 'C3'])
        .timing(1/16)

        tri(['F2', 'A2', 'C2'])
        .timing(1/16)
    })
}

yes()
no()

song.done();
song.write();
