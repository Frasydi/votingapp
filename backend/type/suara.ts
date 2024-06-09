import { z } from "zod";

export const ZSuaraInput = z.object({
    device_id : z.string(),
    id_calon : z.array(z.number())
})

export type ISuaraInput = z.infer<typeof ZSuaraInput>