import { FastifyInstance } from "fastify";
import { CriarProjetoControlador } from "./controlador/CriarProjetoControlador";
import { LisarProjetosControlador } from "./controlador/ListarTodosProjetosController";
import { BuscarPorProjetoControlador } from "./controlador/BuscarProjetoControlador";
import { DeletarProjetoControlador } from "./controlador/DeletarProjetoControlador";
import { LisarProjetosDeUmParticipanteControlador } from "./controlador/ListarTodosProjetosDeUmParticipantes";

export async function RotasProjeto(app: FastifyInstance) {
    app.post('/criarProjeto', CriarProjetoControlador)
    app.get('/listarProjetos/:id', LisarProjetosControlador)
    app.get('/buscarProjetoPorId/:id', BuscarPorProjetoControlador)
    app.patch('/deletarProjeto', DeletarProjetoControlador)
    app.get('/listarProjetosPorParticipante/:id', LisarProjetosDeUmParticipanteControlador)


}