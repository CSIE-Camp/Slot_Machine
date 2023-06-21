const icon_width = 79;
const icon_height = 79;
const num_icons = 9;
const time_per_icon = 100;
const roll = (reel, offset = 0) => {
  const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);
  const style = getComputedStyle(reel),
  backgroundPositionY = parseFloat(style["background-position-y"]);
  return new Promise((resolve, reject) =>{
    reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms`;
    reel.style.backgroundPositionY =`${backgroundPositionY + delta * icon_height}px`;

    setTimeout(() => {
      resolve(delta)
    }, (8 + delta) * time_per_icon)
  })
};

function rollAll() {
  const reelList = document.querySelectorAll('.slot > .reel');
  Promise
  .all(  [...reelList].map((reel, i) => roll(reel, i)))
  .then((delta) => {
    console.log(delta)
  })
}

rollAll();