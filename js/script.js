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
$("#add").click(function(){
    let songName = $("#songName").val();
    let songArtist = $("#songArtist").val();
    $("#playlist").append(`<ul> ${songName} ${songArtist} </ul>`)
});
for(let song of playlist){
    $("#playlist").append(`<ul> ${song["name"]} ${song["artist"]} </ul>`);
}