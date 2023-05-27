function pillars(numPill, dist, width) {
    if(numPill>=2){
        const totalUsableWidth = width(numPill-2)
        const totalUsableDist  = dist(numPill-1)*100

        return (totalUsableDist + totalUsableWidth);
    }else{
        return 0;
    }
    
  }