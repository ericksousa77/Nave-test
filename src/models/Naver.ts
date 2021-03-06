import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("navers")
class Naver{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    birthdate: Date;

    @CreateDateColumn()
    admission_date: string;

    @Column()
    job_role: string;

    @CreateDateColumn()
    created_at: Date;
    

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { Naver };