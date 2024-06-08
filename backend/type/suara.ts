import { z } from "zod";

export const ZSuaraInput = z.object({
    device_id : z.string(),
    id_calon : z.number().int()
})

export type ISuaraInput = z.infer<typeof ZSuaraInput>