import {Competencia} from '../models/competenciasModel.js'




export const competencia = async (req, res) => {
    const {categoria, sexo, relevo} = req.body;
      
   try{
  
      const newCompetencia = new Competencia({
          categoria,
          sexo,
          relevo
          })
      
        const competenciaSaved = await newCompetencia.save();
  
        
        res.json({
            categoria: competenciaSaved.categoria,
           sexo: competenciaSaved.sexo,
           relevo: competenciaSaved.relevo
        });
  
     
  
   }catch(error){
      console.log(error);
   }
  
   
  };
