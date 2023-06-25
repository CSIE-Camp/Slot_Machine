const icon_width = 104;
const icon_height = 104;
const num_icons = 5;
const time_per_icon = 100;
const roll = (reel = 0) => {
  const delta = 2 * Math.floor(Math.random() * 10);
  const style = getComputedStyle(reel),
  backgroundPositionY = parseFloat(style["background-position-y"]);
  return new Promise((resolve, reject) =>{
    
    reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms`;
    reel.style.backgroundPositionY =`${ 104 * delta }px`;

    setTimeout(() => {
      resolve(delta)
    }, (8 + delta) * time_per_icon)
  })
};

function rollAll() {
  const reelList = document.querySelectorAll('.slot > .reel');
  let Mycase = Math.floor(Math.random() * 10); // 0 - 9
  console.log(Mycase);
  
  // console.log(Math.floor(Math.random() * 10)); // 0 - 9

  Promise
  .all(  [...reelList].map((reel) => roll(reel)))
  .then((delta) => {
    
    switch (Mycase){
      case 0:
        console.log("佔領券");
        document.querySelector(".say").innerHTML = "佔領券";
        // const winCls = "win1";
        // document.querySelector(".slot").classList.add(winCls);
        // setTimeout(() => document.querySelector(".slots").classList.remove(winCls), 2000)
        break;
      case 1:
        document.querySelector(".say").innerHTML = "無效券";
        break;
      case 2:
        document.querySelector(".say").innerHTML = "搶奪券";
        break;
      case 3:
        document.querySelector(".say").innerHTML = "300元";
        break;
      case 4:
      case 5:
        document.querySelector(".say").innerHTML = "100元";
        break;
      case 6:
      case 7:
      case 8:
      case 9:
        document.querySelector(".say").innerHTML = "50元";
        break;
      default:
        break;  
    }
  })
}

rollAll();