import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Project } from "./Project";
import { Naver } from "./Naver";

@Entity("projects_navers")
class ProjectNaver{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    naver_id: string;

    @ManyToOne(()=> Naver)
    @JoinColumn({name: "naver_id"})
    naver: Naver


    @Column()
    project_id: string;

    @ManyToOne(()=> Project)
    @JoinColumn({name: "project_id"})
    project: Project
    


    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { ProjectNaver };