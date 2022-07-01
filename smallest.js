
const findSndSmallest = (x,y,z) => {
    
    if((x>y&& y>z)||(z>y&&x<y)){
      return y;
    }
    else if((x>y&&x<z)||(z<x&&x<y)){
      return x;
    }
    else{
      return z;
    }
};
    

