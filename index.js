// code your solution here

function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}



function mondayWork(activity1 = 'go to the office') {
    return `This Monday, I will ${activity1}.`;
}


function wrapAdjective(string = '*') {
    return function (something = 'special') {
        return `You are ${string}${something}${string}!`
    }
 
}
wrapAdjective();