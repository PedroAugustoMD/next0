
export default function Movies({data}){

    return (

        <div>

            <div>

            {data.Search.map( (m) => <div><p>{m.Title} --- {m.Year}<br /> <img src={m.Poster}></img></p> </div>  )}               

            </div>

        </div>

    )

}

function transformar(elemento){

    return (<div>{elemento.Title} --- {elemento.Year} --- <img src={m.Poster}></img></div>)
 
 }

 export async function getServerSideProps(context){

    //const res = await fetch(`http://www.omdbapi.com/?apikey=304d3647&s=2010`)
    const res = await fetch(`http://www.omdbapi.com/?apikey=304d3647&s=batman`)
 
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
  }