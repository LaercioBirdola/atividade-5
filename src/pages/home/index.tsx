import { Link } from "react-router-dom" //npm run dev

export default function Home() {
    return (
        <>
            <div>
                <p>Olá Mundo!</p>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolorem animi aut provident corrupti quas libero exercitationem quis esse molestias autem sit dicta illum, ducimus quidem, possimus nihil eum excepturi.</p>
                <hr />
            </div>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/tarefas">Tarefas</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
        </>
    )
}