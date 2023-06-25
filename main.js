const icon_width = 104;
const icon_height = 104;
const num_icons = 5;
const time_per_icon = 100;
let Mycase = Math.floor(Math.random() * 10); // 0 - 9
const randomNum = Math.floor(Math.random() * 10);
const roll = (reel, offset = 0) => {
  const delta = 2 * Math.floor(Math.random() * 10);
  const style = getComputedStyle(reel),
  backgroundPositionY = parseFloat(style["background-position-y"]);
  return new Promise((resolve, reject) =>{
    // console.log("123:" + offset);
    reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms`;
    
    switch (Mycase){
      case 0:
        reel.style.backgroundPositionY =`${ 104 * 0 + (1014 * randomNum) }px`;
        break;
      case 1:
        reel.style.backgroundPositionY =`${ 104 * 2 + (1014 * randomNum)}px`;
        break;
      case 2:
        reel.style.backgroundPositionY =`${ 104 * 8 + (1014 * randomNum)}px`;
        break;
      case 3:
        reel.style.backgroundPositionY =`${ 104 * 6 + (1014 * randomNum)}px`;
        break;
      case 4:
      case 5:
        if(offset == 0 || offset == 1){
          reel.style.backgroundPositionY =`${ 104 * 6 + (1014 * randomNum)}px`;
        }
        else {
          reel.style.backgroundPositionY =`${ 104 * 4 + (1014 * randomNum)}px`;
        }
        break;
      case 6:
      case 7:
      case 8:
      case 9:
        if(offset == 0){
          reel.style.backgroundPositionY =`${ 104 * 6 + (1014 * randomNum)}px`;
        }
        else {
          reel.style.backgroundPositionY =`${ 104 * 4 + (1014 * randomNum)}px`;
        }
        break;
      default:
        break;  
    }
    setTimeout(() => {
      resolve(delta)
    }, (8 + delta) * time_per_icon)
  })
};

function rollAll() {
  const reelList = document.querySelectorAll('.slot > .reel');
  
  console.log(Mycase);
  
  // console.log(Math.floor(Math.random() * 10)); // 0 - 9

  Promise
  .all(  [...reelList].map((reel, i) => roll(reel, i)))
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