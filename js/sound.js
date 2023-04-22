// Define the songs data
const songsData = [
    { name: "Song 1", url: "./audio/all-you-need-is-joy-138573.mp3" },
    { name: "Song 2", url: "../audio/be-funny-145694.mp3" },
    { name: "Song 3", url: "../audio/be-happy-138622.mp3" },
    { name: "Song 4", url: "../audio/bright-fun-140310.mp3" },
    { name: "Song 5", url: "../audio/childish-prank-21177.mp3" },
    { name: "Song 5", url: "../audio/comedian-117016.mp3" },
    { name: "Song 5", url: "../audio/first-steps-141242.mp3" },
    { name: "Song 5", url: "../audio/fun-146730.mp3" },
    { name: "Song 5", url: "../audio/fun-and-happy-ukulele-children-folk-acoustic-142099.mp3" },
    { name: "Song 5", url: "../audio/fun-comedy-126302.mp3" },
    { name: "Song 5", url: "../audio/fun-guitar-146752.mp3" },
    { name: "Song 5", url: "../audio/fun-kids-playful-comic-carefree-game-happy-positive-music-57026.mp3" },
    { name: "Song 5", url: "../audio/fun-whistle-cartoons-uplifting-playful-game-music-57034.mp3" },
    { name: "Song 5", url: "../audio/funny-story-112305.mp3" },
    { name: "Song 5", url: "../audio/good-morning-142550.mp3" },
    { name: "Song 5", url: "../audio/happiness-129206.mp3" },
    { name: "Song 5", url: "../audio/happy-114950.mp3" },
    { name: "Song 5", url: "../audio/happy-acoustic-guitar-background-music-122614.mp3" },
    { name: "Song 5", url: "../audio/happy-holiday-120132.mp3" },
    { name: "Song 5", url: "../audio/happy-in-everything-136037.mp3" },
    { name: "Song 5", url: "../audio/happy-summer-long-10627.mp3" },
    { name: "Song 5", url: "../audio/happy-upbeat-ukulele-142304.mp3" },
    { name: "Song 5", url: "../audio/happy-uplifting-acoustic-guitar-background-music-143199.mp3" },
    { name: "Song 5", url: "../audio/happy-uplifting-bright-cooking-background-music-143171.mp3" },
    { name: "Song 5", url: "../audio/have-fun-146751.mp3" },
    { name: "Song 5", url: "../audio/jazz-happy-110855.mp3" },
    { name: "Song 5", url: "../audio/kids-117853.mp3" },
    { name: "Song 5", url: "../audio/lets-play-together-children-141946.mp3" },
    { name: "Song 5", url: "../audio/life-of-a-wandering-wizard-15549.mp3" },
    { name: "Song 5", url: "../audio/My Kid-Friendly Website.mp3" },
    { name: "Song 5", url: "../audio/playful-140946.mp3" },
    { name: "Song 5", url: "../audio/playing-in-color-120336.mp3" },
    { name: "Song 5", url: "../audio/positive-cartoon-loop-109009.mp3" },
    { name: "Song 5", url: "../audio/retro-and-modern-quirky-129655.mp3" },
    { name: "Song 5", url: "../audio/spring-upbeat-133219.mp3" },
    { name: "Song 5", url: "../audio/sunny-days-indie-140928.mp3" },
    { name: "Song 5", url: "../audio/ukulele-fun-background-113443.mp3" },
    { name: "Song 5", url: "../audio/upbeat-acoustic-113986.mp3" },
    { name: "Song 5", url: "../audio/upbeat-and-happy-music-146093.mp3" },
    { name: "Song 5", url: "../audio/upbeat-happy-logo-2-versions-146604.mp3" }
];

// Define a function to get a random song from the songs data
function getRandomSong() {
    // Shuffle the songs data
    const shuffledSongs = songsData.sort(() => 0.5 - Math.random());
    // Get a random song
    const randomSong = shuffledSongs[0];
    // Return the random song
    return randomSong;
}


function playRandomSong() {
    // Get a random song
    const randomSong = getRandomSong();
    // Get the audio player element
    const audioPlayer = document.getElementById('audio-player');
    // Set the source of the audio player to the selected song
    audioPlayer.src = randomSong.url;
    // Play the selected song
    audioPlayer.play();
}
// 
// 
// 


// // Sounds Affects
// function playSound() {
//     // var sound = document.getElementById("button-sound");
//     var sound = document.getElementById("button-sound");
//     sound.play();
// }

// // Stop Sound Effects
function stopSound() {
    var sound = document.getElementById("audio-player");
    sound.pause();
    sound.currentTime = 0;
}
