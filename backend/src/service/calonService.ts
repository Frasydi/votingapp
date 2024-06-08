import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CalonService {
    async getAllCalon() {
        try {
            return await prisma.tb_calon.findMany();
        } catch (error) {
            throw new Error(`Error fetching calon: ${error}`);
        }
    }

    async getCalonById(id: number) {
        try {
            return await prisma.tb_calon.findUnique({ where: {id_calon:Number(id)} });
        } catch (error) {
            throw new Error(`Error fetching calon with ID ${id}: ${error}`);
        }

    }

    async createCalon(calonData: any) {
        try {
            return await prisma.tb_calon.create({ data: calonData });
        } catch (error) {
            throw new Error(`Error creating calon: ${error}`);
        }
    }

    async updateCalon(id: number, calonData: any) {
        try {
            return await prisma.tb_calon.update({ where: { id_calon:id }, data: calonData });
        } catch (error) {
            throw new Error(`Error updating calon with ID ${id}: ${error}`);
        }
    }

    async deleteCalon(id: number) {
        try {
            return await prisma.tb_calon.delete({ where: { id_calon:id } });
        } catch (error) {
            throw new Error(`Error deleting calon with ID ${id}: ${error}`);
        }
    }
}

export const calonService = new CalonService();

