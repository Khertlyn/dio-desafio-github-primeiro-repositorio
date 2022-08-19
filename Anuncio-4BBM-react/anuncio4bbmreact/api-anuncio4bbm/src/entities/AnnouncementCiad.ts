import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("AnnouncementCiad")
class AnnouncementCiad {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    tipo_anuncio_nome: string;

    @Column()
    tempo_nome: string;

    @Column()
    efetivo: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { AnnouncementCiad }
