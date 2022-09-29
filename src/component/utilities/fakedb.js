const addToDb = (value) => {

    let breakTime = {};
    
    const storedTime = localStorage.getItem('break-time')
    if(storedTime){
       breakTime = JSON.parse(storedTime);
    }
    const time = breakTime[value];
    if(time){
        const newTime = time + 1;
        breakTime[value] = newTime;
        
    }
    else{
            breakTime[value] = 1;
        
    }
    localStorage.setItem('break-time',JSON.stringify(breakTime))
}

const getStoredTime = () => {

    let breakTime = {};
    
    const storedTime = localStorage.getItem('break-time')
    if(storedTime){
       breakTime = JSON.parse(storedTime);
    }
    return breakTime;
}
export {addToDb,getStoredTime}