const getSleepHours = (day)=>{
  if(day==='monday'){
      return 8;
  }else if(day==='tuesday'){
    return 8;
  }else if(day==='wednesday'){
    return 8;
  } else if(day==='thursday'){
    return 8;
  }else if(day==='friday'){
    return 8;
  } else if(day==='saturday'){
    return 8;
  }else if(day==='sunday'){
    return 5;
  }else{
    return 'not a valid day';
  }
};

function getActualSleepHours(){
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}


function getIdealSleepHours(){
  var idealHours = 5;
  return idealHours*7;
}

function calculateSleepDebt(){
  var actualSleepHours=getActualSleepHours();
  var idealSleepHours=getIdealSleepHours();
  if(actualSleepHours===idealSleepHours){
    console.log('Perfect sleep amount');
  }else if (actualSleepHours>idealSleepHours){
    console.log('More than enough sleep. You got '+ (actualSleepHours-idealSleepHours) + ' extra hours');
  }else if (actualSleepHours<idealSleepHours){
    console.log('You sleepy. You need '+(idealSleepHours-actualSleepHours) +' more hours of sleep');
  }else{
    console.log('Error');
  }
}

calculateSleepDebt();