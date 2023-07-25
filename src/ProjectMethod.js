export function imageSlecetFun(imgSrc,type){
    let size = "375";
    const http = 'https://s.sfddj.com/';
    if (type === 'small') {
        size = "375"
    } else if (type === "big") {
        size = "500"
    }
    if(imgSrc){
      if (imgSrc.includes("/Public/")) {
          let imgArr = imgSrc.split(/\.(jpg|png)/)
          if (imgArr[1]) {
              imgSrc = http + imgArr[0] + '____' + size + 'x' + size + '.' + imgArr[1]
          }
      } else if (imgSrc.includes("img.sfddj.com")) {
          imgSrc = imgSrc + '?x-oss-process=image/resize,m_fixed,h_' + size + ',w_' + size
      }
    }
    return imgSrc
  }