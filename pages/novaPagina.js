export default function Principal(){

    return (
 
       <div>
 
          <h1>Nova Página</h1>
 
          <MariaPrea conteudo = 'Morreu Maria Preá...'/>
 
       </div>
 
    )
 
 }

 export function MariaPrea({conteudo}){

    return (
 
       <h2>{conteudo}</h2>
 
    )
 
 }