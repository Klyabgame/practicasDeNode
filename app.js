const {guardarDB,leerDB} = require('./helpers/guardadArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
/* const Tarea = require('./models/tarea'); */
const Tareas = require('./models/tareas');
/* const {mostrarMenu}= require('./helpers/mensajes') */

require('colors');
/* const {mostrarMenu, pausa}=require('./helpers/mensajes') */
console.clear();
const main=async()=>{
    let opt='';
    const tareas=new Tareas();
    const tareasDb= leerDB();

    if (tareasDb) {
        
    }
    await pausa();
    do {
        opt=await inquirerMenu();
        switch (opt) {
            case '1':
                const desc= await leerInput('decripcion: ');
                tareas.crearTarea(desc);
                console.log(desc);
                break;
        
            case '2':
                console.log(tareas.listadoArr);
                
                break;
        }
        /* guardarDB(tareas.listadoArr); */


        await pausa();
        /* if(opt!=='0') await pausa(); */
    } while (opt!=='0');
     
}


main();