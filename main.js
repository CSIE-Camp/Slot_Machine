const icon_width = 104;
const icon_height = 104;
const num_icons = 5;
const time_per_icon = 100;
const roll = (reel = 0) => {
  const delta = 2 * num_icons + Math.floor(Math.random() * num_icons);
  const style = getComputedStyle(reel),
  backgroundPositionY = parseFloat(style["background-position-y"]);
  return new Promise((resolve, reject) =>{
    reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms`;
    reel.style.backgroundPositionY =`${ 5 + 104 * 2 * Math.floor(Math.random() * 10) }px`;

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