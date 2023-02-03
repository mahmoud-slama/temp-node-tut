const os =require('os')
//info about current useer
const user=os.userInfo()
console.log(user)
//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);



const currentos={
    name:os.type(),
    release:os.release(),
    totalMen:os.totalmem(),
    freeMen:os.freemem(),
}
console.log(currentos)