let playlist = [
    {
        name: "Computers",
        artist: "Rowdy Rebel"
    },
    {
        name: "Yosemite",
        artist: "Travis Scott"
    },
    {
        name: "Orange Soda",
        artist: "Baby Keem"
    },
    {
        name: "Come This Way",
        artist: "Lil Uzi Vert"
    }
];
let songName = $("#songName").val();
let songArtist = $("#songArtist").val();
$("#playlist").append("<p>" + playlist + "</p>");