const fs = require("fs");
const testFolder = "../../../Music";

const Audic = require("audic");
var ask = require("prompt-autocomplete");
let audio;



let song = ['pause'];
fs.readdir(testFolder, (err, files) => {
   files.forEach((file) => {
      // console.log(file);
      song.push(file);
      // console.log(song);
      
   });
   

   recursive();


});


// Play Audio


// Pause Audio
// audio.pause();

function player(name) {
   if (audio != undefined) {
      audio.pause();
   }
   if (audio != undefined && name == "pause") {
     audio.pause();
   } 
   
   audio = new Audic(
      "../../../Music/" + name
   );

   // Play Audio
   audio.play();
}

function recursive() {
   
    
   ask("Select a song  🎵:", song, function (err, answer) {
     player(answer);

     recursive();
   });
    
 }





