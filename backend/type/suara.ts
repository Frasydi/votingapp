import { z } from "zod";

export const ZSuaraInput = z.object({
    id_calon : z.array(z.number())
})

export type ISuaraInput = z.infer<typeof ZSuaraInput>