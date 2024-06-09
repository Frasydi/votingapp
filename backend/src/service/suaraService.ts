import { ISuaraInput } from '../../type/suara';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class SuaraService {
    async addSuara(data : ISuaraInput) {
        try {
           
            const newData : Prisma.tb_suaraCreateManyInput[] = data.id_calon.map(el => ({
                device_id : data.device_id,
                id_calon : el
                
            }))
            await prisma.tb_suara.createMany({
                data : newData
            })
            return {
                message : "Suara Berhasil Ditambahkan",
                status : 200
            }
        }catch(err) {
            console.log(err)
            return {
                message : "Anda Sudah Memvoting",
                status : 500
            }
        }
         
    }
}

export const suaraService = new SuaraService();

