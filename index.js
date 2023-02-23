function createEmployeeRecord(array) {
   return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents:[],
    timeOutEvents:[]
    }
    
}

function createEmployeeRecords(arrays) {
    return arrays.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(employee, dateStamp) {
    let dateTime = dateStamp.split(" ")
    // console.log(dateTime[0])
     employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateTime[1]),
        date: dateTime[0]
        
    }) 
    return employee
}

function createTimeOutEvent(employee, dateStamp) {
    let dateTime = dateStamp.split(" ")
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateTime[1]),
        date: dateTime[0]
    })
    return employee
}

function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(event => event.date === date)
    let timeOut = employee.timeOutEvents.find(event => event.date === date)
    
    // Take timeOut and subtract from TimeIn to find out how many hours worked
    
    console.log(timeIn)
    console.log(timeOut)
    console.log((timeOut.hour - timeIn.hour) / 100)
    return (timeOut.hour - timeIn.hour) / 100
}

function hoursWorkedOnDate(employee, date) {
    
    return

}