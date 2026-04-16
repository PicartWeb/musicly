const pages = document.querySelectorAll(".page");
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((btn) => {
  btn.onclick = () => {
    menuItems.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    let target = btn.dataset.page;

    pages.forEach((p) => {
      p.classList.remove("active");
    });

    document.getElementById(target + "Page").classList.add("active");
  };
});

/* PLAYER LOGIC (same improved) */
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const playBtn = document.getElementById("play");

const songs = [
  {
    title: "Song 1",
    artist: "You",
    src: "songs/song1.mp3",
    cover: "songs/cover1.jpg",
  },
  {
    title: "Song 2",
    artist: "You",
    src: "songs/song2.mp3",
    cover: "songs/cover2.jpg",
  },
];

let index = 0;
let isPlaying = false;

function loadSong(i) {
  let s = songs[i];
  title.textContent = s.title;
  artist.textContent = s.artist;
  audio.src = s.src;
  cover.src = s.cover;
}

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.innerHTML = '<i class="ri-pause-fill"></i>';
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.innerHTML = '<i class="ri-play-fill"></i>';
}

playBtn.onclick = () => (isPlaying ? pauseSong() : playSong());

/* GRID RENDER */
const grid = document.getElementById("grid");

songs.forEach((s, i) => {
  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-img">
      <img src="${s.cover}">
      <button class="hover-play"><i class="ri-play-fill"></i></button>
    </div>
    <h4>${s.title}</h4>
    <small>${s.artist}</small>
  `;

  card.onclick = () => {
    index = i;
    loadSong(i);
    playSong();
  };

  grid.appendChild(card);
});

loadSong(index);
