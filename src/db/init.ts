// import Employee from './models/task';
import Student from './models/task1';

async function init(){
    const isDev = true;

  
    // await Employee.sync({alter:isDev})
    await Student.sync({alter:isDev})
}
const dbInit =() => {
    init();
}

export default dbInit;