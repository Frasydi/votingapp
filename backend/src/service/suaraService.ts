import { tb_suara } from './../../node_modules/.prisma/client/index.d';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class SuaraService {
    async addSuara(id : number, device_id : string) {
        try {
            const getConstraintDeviceId = await prisma.tb_suara.findFirst({
                where : {
                    device_id : device_id
                },
                select : {
                id_suara : true
                }
            })
            if(getConstraintDeviceId) {
                return {
                    message : "Device ID sudah terdaftar",
                    status : 400,
    
                }
            }
            const datas = await prisma.tb_suara.findFirst({
                where : {
                    id_calon : id
                },
            })
            if(datas == null) {
                return {
                    message :"Tidak Menemukan Id Calon",
                    status : 404
                }
            }
            await prisma.tb_suara.create({
                data : {
                    device_id : device_id,
                    calon : {
                        connect : {
                            id_calon : id
                        }
                    },
                    waktu_pemungutan : new Date()
                }
            })
            return {
                message : "Suara Berhasil Ditambahkan",
                status : 200
            }
        }catch(err) {
            console.log(err)
            return {
                message : "Internal Server Error",
                status : 500
            }
        }
         
    }
}

export const suaraService = new SuaraService();

