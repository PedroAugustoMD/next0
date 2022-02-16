

export default function TheAnime({data}){
    
    if(data === undefined) return <div>Carregando...</div>


    

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
            <td>Episodes</td>
            <td>Rating</td>
            </tr>
            
            <td>{data.data.title}</td>
            <td>{data.data.episodes}</td>
            <td>{data.data.rating}</td>
            <tr><img src={data.data.images.jpg.image_url} width="300" height="400"/></tr>                        
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

            {params: {id: "1735"}},

            {params: {id: "40748"}},

            {params: {id: "38000"}},

        ],

        fallback: true 

    }

}



export async function getStaticProps({ params }) {

    console.log(params)

    const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`)

    const data = await res.json();

    return {

      props: {

        data

      }

    }

}
