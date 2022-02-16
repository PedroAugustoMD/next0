

export default function TheMovie({data}){

    if(data === undefined) return <div>Carregando...</div>
    if(data.Response === 'False') return <div>O id solicitado não está no sistema.</div>
    console.log(`Pré-renderizando ${data.Title}`)

    return (
        
        <div>
                 <style jsx>{`
                    body {
                        height: 100%;
                        margin: 0;
                        background: linear-gradient(45deg, #49a09d, #5f2c82);
                        font-family: sans-serif;
                        font-weight: 100;
                        color: white;
                    }
                    table {
                        width: 800px;
                        border-collapse: collapse;
                        overflow: hidden;
                        box-shadow: 0 0 20px rgba(0,0,0,0.1);
                    }
                    
                    th,
                    td {
                        padding: 15px;
                        background-color: rgba(255,255,255,0.2);
                        color: #fff;
                    }
                    
                    th {
                        text-align: left;
                    }
                    
                    thead {
                        th {
                            background-color: #55608f;
                        }
                    }
                    
                    tbody {
                        tr {
                            &:hover {
                                background-color: rgba(255,255,255,0.3);
                            }
                        }
                        td {
                            position: relative;
                            &:hover {
                                &:before {
                                    content: "";
                                    position: absolute;
                                    left: 0;
                                    right: 0;
                                    top: -9999px;
                                    bottom: -9999px;
                                    background-color: rgba(255,255,255,0.2);
                                    z-index: -1;
                                }
                            }
                        }
                    }
                `}</style>
            
            <body>
            <div>
            <table border="1">
            <thead>
            <tr>    
            <td>Title</td>
            <td>Year</td>
            <td>Plot</td>
            </tr>
            
            <td>{data.Title}</td>
            <td>{data.Year}</td>
            <td>{data.Plot}</td>
            <tr><img src={data.Poster} width="300" height="400"/></tr>                        
            </thead>
            </table>
            </div>
            

            
            </body>
        </div>     

    )

}



export async function getStaticPaths(){

    return {

        paths:[

            {params: {id: "tt0095801"}},

            {params: {id: "tt0033152"}},

            {params: {id: "tt0015400"}},

            {params: {id: "tt0041149"}},

            {params: {id: "tt0044388"}},

            {params: {id: "tt0098746"}},

            {params: {id: "tt0046322"}},

            {params: {id: "tt0046497"}},

            {params: {id: "tt0044389"}}

        ],

        fallback: true 

    }

}



export async function getStaticProps({ params }) {

    const res = await fetch(`https://www.omdbapi.com/?apikey=304d3647&i=${params.id}`)

    const data = await res.json();

    return {

      props: {

        data

      }

    }

}