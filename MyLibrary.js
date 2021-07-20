function hasCollided(movingRect,fixedRect){
    var movingRectRightEdge = movingRect.x + movingRect.width;
    var fixedRectLeftEdge = fixedRect.x;
    
    if (movingRectRightEdge>= fixedRectLeftEdge) {
      
      return true;
    }
    else {
      return false;
    } 
  }
