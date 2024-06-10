import { ISuaraInput } from '../../type/suara';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class SuaraService {
    async addSuara(data : ISuaraInput) {
        try {
           
            const newData : Prisma.tb_suaraCreateManyInput[] = data.id_calon.map(el => ({
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

    async rekapSuara() {
        try {
            const data= await prisma.tb_calon.findMany({
                select : {
                    _count : {
                        select : {
                            tb_suara : true
                        }
                    },
                    id_calon : true,
                    nama_calon : true,
                    nomor_urut : true
                }
            })

            const processData = data.map(el => ({jumlah : el._count.tb_suara,  id : el.id_calon, nama : el.nama_calon, nomor : el.nomor_urut}))
            return {
                message :"Berhasil",
                status : 200,
                data : processData
            }

        }catch(err) {
            console.log(err)
            return {
                message :"Ada Masalah",
                status : 500
            }
        }
    }
    async rekapSuara2() {
        try {
            const data= await prisma.tb_calon.findMany({
                select : {
                    _count : {
                        select : {
                            tb_suara : true
                        }
                    },
                    id_calon : true,
                    nama_calon : true,
                    nomor_urut : true
                },
                orderBy : {
                    tb_suara : {
                        _count : "asc"
                    }
                }
            })

            const processData = data.map(el => ({jumlah : el._count.tb_suara,  id : el.id_calon, nama : el.nama_calon, nomor : el.nomor_urut}))
            return {
                message :"Berhasil",
                status : 200,
                data : processData
            }

        }catch(err) {
            console.log(err)
            return {
                message :"Ada Masalah",
                status : 500
            }
        }
    }

}

export const suaraService = new SuaraService();

