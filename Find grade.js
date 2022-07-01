
const findGrades = (a) => {
  
    if (a<=10) {
      return "E";
    }
    else if((11>=a) && (a<=20)) {
      return "D";
    }
    else if((21>=a)  && (a<=30)){
      return "C";
    }
    else if((31>=a) && (a<=40)){
      return "B";
    }
  else if((41>=a) && (a<=50)){
      return "A";
    }
    else{
      return "H";
    }
  };
  
  
  
  
  