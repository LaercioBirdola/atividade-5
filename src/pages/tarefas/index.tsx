import { Link } from "react-router-dom" // npm i react-router-dom
import { Button } from "@chakra-ui/react";
import Layout from "../../components/layout";
import InputFatec from "../../components/inputFatec";
import './tarefas.css';

export default function Tarefas() {
    return (
        <Layout>
            <h1>Lista de Tarefas</h1>
            <div id="separador"/>
            <i id="tm">Inserir Nova Tarefa</i>
            <div id="cabecalho">
                <InputFatec
                    placeHolder="Digite o Titulo da Task"
                    defaultValue="" type="text"/><br/>
                <i id="ch"><input type="checkbox"/></i><i id="tx">Realizada?</i>
                   <Button colorScheme="blue" fontSize={15} my={5} ml={2} h={9}>Inserir</Button>
                
            </div>
            <div id="separador"/>
            <div id="espaco">
                <p id="Boxtarefa1"><i id="tf">Tarefa1</i>
                    <Button colorScheme="red" fontSize={15} ml={40} h={9}>Pendente</Button>
                    <Button colorScheme="red" fontSize={15} ml={3} mr={2} h={9}>Excluir</Button></p>
                <p id="Boxtarefa2"><i id="tf">Tarefa2</i>
                    <Button colorScheme="red" fontSize={15} ml={40} h={9}>Pendente</Button>
                    <Button colorScheme="red" fontSize={15} ml={3} h={9}>Excluir</Button></p>
                <p id="Boxtarefa3"><i id="tf">Tarefa3</i>
                    <Button colorScheme="red" fontSize={15} ml={40} h={9}>Pendente</Button>
                    <Button colorScheme="red" fontSize={15} ml={3} h={9}>Excluir</Button></p>
                <p id="Boxtarefa4"><i id="tf">Tarefa4</i>
                    <Button colorScheme="red" fontSize={15} ml={40} h={9}>Pendente</Button>
                    <Button colorScheme="red" fontSize={15} ml={3} h={9}>Excluir</Button></p>
            </div>
            <Link to="/">Voltar para Home</Link>
        </Layout>
    )
}