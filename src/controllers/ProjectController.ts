import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ProjectsNaversRepository } from "../repositories/ProjectsNaversRepository";
import { ProjectsRepository } from "../repositories/ProjectsRepository";

class ProjectController {

    async store (request:Request, response:Response){
        const { name } = request.body;

        const projectsRepository = getCustomRepository(ProjectsRepository);

        const projectAlreadyExists = await projectsRepository.findOne({
            /*como eu nao tenho nenhuma chave primaria nesse request, 
            optei por usar o nome tomando como premissa que nao havera 
            dois nomes iguais para navers diferentes.*/
            name,
        });

        if (projectAlreadyExists) {
            return response.status(400).json({
                message: "Já existe um project com esse nome"
            })
        }

        const project = projectsRepository.create({
            name

        });

        await projectsRepository.save(project);

        return response.status(201).json(project);
    }

    async index (request:Request, response:Response){
        const projectsRepository = getCustomRepository(ProjectsRepository);

        const allProjects = await projectsRepository.find();

        if (!allProjects){
            return response.status(400).json({
                message: "Não foi encontrada nenhum Projeto"
            })
        }

        return response.status(201).json(allProjects);
    }

    async showespecific(request:Request, response:Response){
        //http://localhost:3333/showespecificproject/<nomedoprojeto>
        
        const projectsRepository = getCustomRepository(ProjectsRepository);
        const projectsNaversRepository = getCustomRepository(ProjectsNaversRepository);
        
        const { name } = request.params;

        const project = await projectsRepository.findOne({name: String(name)});

        if(!project){
            return response.status(400).json({
                message: "Não existe nenhum Project com esse nome"
            });
        }

        const projectNaverAlreadyExists = await projectsNaversRepository.find({
            where: {project_id: (await project).id},
            relations: ["project", "naver"],
            
            
        });

        if(projectNaverAlreadyExists.length === 0){
            return response.status(201).json({
                message: "Esse naver participa desse project",
                project
            })
        }

        if (projectNaverAlreadyExists){
            return response.status(201).json({projectNaverAlreadyExists});
        }
    }
}

export { ProjectController }