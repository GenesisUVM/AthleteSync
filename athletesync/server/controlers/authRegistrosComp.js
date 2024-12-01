import {RegisCompetencia} from '../models/registroCompetenciasModel.js'



export const registroCompetencias = async (req, res) => {
  const {nombre, edad, metodo_pago} = req.body;
    
 try{
   

    const newRegistro = new RegisCompetencia({
        nombre,
        edad,
        metodo_pago
        })
    
      const registroSaved = await newRegistro.save();

    
      res.json({
         nombre: registroSaved.nombre,
         edad: registroSaved.edad,
         metodo_pago: registroSaved.metodo_pago
      });

   

 }catch(error){
    console.log(error);
 }

 
};