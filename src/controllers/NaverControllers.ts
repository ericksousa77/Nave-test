import { Request, Response } from "express";
import { getCustomRepository, Not } from "typeorm";
import { NaversRepository } from "../repositories/NaversRepository";
import { ProjectsNaversRepository } from "../repositories/ProjectsNaversRepository";


class NaverController {

    async store (request:Request, response:Response){
        const { name, birthdate, admission_date, job_role, projects} = request.body;

        const naversRepository = getCustomRepository(NaversRepository);

        const naverAlreadyExists = await naversRepository.findOne({
            /*como eu nao tenho nenhuma chave primaria nesse request, 
            optei por usar o nome tomando como premissa que nao havera 
            dois nomes iguais para navers diferentes.*/
            name,
        });

        if (naverAlreadyExists) {
            return response.status(400).json({
                message: "Já existe um naver com esse nome"
            })
        }

        const naver = naversRepository.create({
            name, birthdate, admission_date, job_role,

        });

        await naversRepository.save(naver);

        return response.status(201).json(naver);
    }

    async index (request:Request, response:Response){
        const naversRepository = getCustomRepository(NaversRepository);

        const allNavers = await naversRepository.find();

        if (!allNavers){
            return response.status(400).json({
                message: "Não foi encontrada nenhuma Naver"
            })
        }

        return response.status(201).json(allNavers);
    }

    async showespecific (request: Request, response:Response){

        const naversRepository = getCustomRepository(NaversRepository);
        const projectsNaversRepository = getCustomRepository(ProjectsNaversRepository);
        
        const { id } = request.params;

        //console.log(id);

        const naver = await naversRepository.find({id});

        if(!naver){
            return response.status(400).json({
                message: "Não existe nenhum Naver com esse id"
            });
        }

        const projectNaverAlreadyExists = await projectsNaversRepository.find({
            where: {naver_id: id},
            relations: ["naver", "project"],
            select: (["id","naver","project"])
            
            
            
        });

        //caso em que o naver existe mas nao tem nenhum project
        if(projectNaverAlreadyExists.length === 0){
            return response.status(201).json({
                message: "Esse naver não possui nenhum project",
                naver
            })
        }

        if (projectNaverAlreadyExists){
            return response.status(201).json({projectNaverAlreadyExists});
        }
    }
}

export { NaverController }