import {Tiempo} from '../models/tiemposAtletasModel.js'



export const tiempo = async (req, res) => {
    const {competencia, nombre, tiempo} = req.body;
      
   try{
  
      const newTiempo = new Tiempo({
         competencia,
         nombre,
         tiempo
         })
      
      const tiempoSaved = await newTiempo.save();
  
        
      res.json({
         competencia: tiempoSaved.competencia,
         nombre: tiempoSaved.nombre,
         tiempo: tiempoSaved.tiempo
        });
  
     
  
   }catch(error){
      console.log(error);
   }
  
   
  };