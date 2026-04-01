import { useEffect, useState } from "react";
import api from "../../services/api";


function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(params) {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "7883136f0ca1dedfe18a2d3c9e3290cb",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response.data.results);
        }

        loadFilmes();
    })

    return(
        <div>
            <h1>HOME TESTE</h1>
        </div>
    )
}

export default Home;