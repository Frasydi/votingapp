import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class SuaraService {
    async getRekap() {
        try {
            const candidates = await prisma.tb_calon.findMany({
                include: {
                    tb_suara: true,
                },
            });

            const voteSummary: { [key: string]: number } = {};

            candidates.forEach(candidate => {
                const namaCalon = candidate.nama_calon ?? "Belum Ditentukan";
                const totalVotes = candidate.tb_suara.length;
                voteSummary[namaCalon] = totalVotes;
            });

            return voteSummary;
        } catch (error) {
            throw new Error(`Error fetching calon: ${error}`);
        }
    }

    async addSuara(id_calon: number) {
        try {
            const suara = await prisma.tb_suara.create({
                data: {
                    id_calon,
                },
            });
            return suara;
        } catch (error) {
            throw new Error(`Error adding suara: ${error}`);
        }
    }

    async deleteSuara(id_calon: number) {
        try {
            const suara = await prisma.tb_suara.deleteMany({
                where: {
                    id_calon,
                },
            });
            return suara;
        } catch (error) {
            throw new Error(`Error deleting suara: ${error}`);
        }
    }
}

export const suaraService = new SuaraService();
