import { useEffect, useState } from 'react';
import api from '../../services/api';

// URL DA API: /movie/now_playing?api_key=e3c7ccb5f2c94e9b77e93e6ba3c1f318&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "e3c7ccb5f2c94e9b77e93e6ba3c1f318",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response)
        }

        loadFilmes();

    }, []);

    return (
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home;