import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { NaversRepository } from "../repositories/NaversRepository";
import { ProjectsNaversRepository } from "../repositories/ProjectsNaversRepository";
import { ProjectsRepository } from "../repositories/ProjectsRepository";

class ProjectNaverController{

    async execute (request:Request, response:Response){

        const {project_name, naver_id} = request.body;


        const naversRepository = getCustomRepository(NaversRepository);
        const projectsRepository = getCustomRepository(ProjectsRepository);
        const projectsNaversRepository = getCustomRepository(ProjectsNaversRepository);

        const naver = await naversRepository.findOne({
            id: naver_id,
        });

        if(!naver){
            return response.status(400).json({
                message: "Não existe nenhum Naver com esse id"
            });
        }


        const project = projectsRepository.findOne({name: project_name});


        if(!project){
            return response.status(400).json({
                message: "Não existe nenhum Project com esse nome"
            });
        }

        const projectNaverAlreadyExists = await projectsNaversRepository.findOne({
            where: {naver_id: naver.id, project_id: (await project).id},
            relations: ["project", "naver"],
            
        });



        if (projectNaverAlreadyExists){
            return response.json({
                message: "Esse Naver ja esta vinculado a esse Project, segue abaixo: ",
                projectNaverAlreadyExists});
        }

        

        const projectNaver = projectsNaversRepository.create({
            naver_id: naver.id, 
            project_id: (await project).id

            

        }); 



        await projectsNaversRepository.save(projectNaver);

        return response.status(201).json({projectNaver});
    }

    

}

export { ProjectNaverController }