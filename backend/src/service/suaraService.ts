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
                const id_calon = candidate.id_calon ?? "Belum Ditentukan";
                const totalVotes = candidate.tb_suara.length;
                voteSummary[id_calon] = totalVotes;
              });
          
              return voteSummary;
        } catch (error) {
            throw new Error(`Error fetching calon : ${error}`);
        }

    }
}

export const suaraService = new SuaraService();