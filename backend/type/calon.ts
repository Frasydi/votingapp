import { z } from "zod";

export const ZCalon = z.object({
    id_calon : z.number().int(),
    nama_calon : z.string(),
    nomor_urut : z.number().int(),
    foto_calon : z.string()
})


export type ICalon = z.infer<typeof ZCalon>