import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';


// https://api.github.com/orgs/rocktseat/repos

interface Repository {
    name: string;
    description: string;
    html_url: string;
}


 // fetch('https://api.github.com/orgs/rocketseat/repos')


export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/marcoscode404/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[]);
    // executa uma função quando a variavel mudar


    return (
        <>
            <section className="repository-list">
                <h1>Lista de Repositorio</h1>

                <ul>
                    {repositories.map(repository => (
                        <RepositoryItem key={repository.name} repository={repository} />
                        
                    ))}   
                </ul>


                <footer>
                    <a href="https://github.com/marcoscode404" target="_blank">
                        🌃🌌☄️ ViniCode - ColabDevs🚀👩‍🚀🧑‍🚀
                    </a>
                    
                </footer>
            
            </section>

           
        </>
    )
}