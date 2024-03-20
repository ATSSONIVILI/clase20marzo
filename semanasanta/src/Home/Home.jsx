import { semanaSantabd } from "../utils/semanaSantaBD"

export function Home(){

   // zona de validación de datos
    let filtro=semanaSantabd.filter(function(dia){

        return(dia.costodelEvento<=15000)
    })
    
    let filtro2=semanaSantabd.filter(function(diaSanto){
        return(diaSanto.cantidadFeligreses<3500 && diaSanto.costodelEvento<35000 && diaSanto.necesitaConfesion)

    })

    return(
        <>
        <section className="container">
           <div className="row">
                 <div className="col-12 col-md-8">
                     <h3>Programacion semana Mayor</h3>
                     <hr/>
                     {
                         semanaSantabd.map(function(dia){
                             return(
                                 <h1>{dia.eventoPrincipal}:costo{dia.costodelEvento}</h1>
                             )
                         }
                         )
                     }
                 </div>
           </div>
        </section>
     </>
    )
}

