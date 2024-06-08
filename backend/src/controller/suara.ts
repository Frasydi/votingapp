import { Context } from "hono";
import { suaraService } from "../service/suaraService";
import { StatusCode } from "hono/utils/http-status";
import { ISuaraInput, ZSuaraInput } from "../../type/suara";

export const createCalon = async (c: Context) => {
    try {
      const data : ISuaraInput = await c.req.json();
      const validation= ZSuaraInput.safeParse(data) 
      if(validation.success == false) {
        return c.json({
          message : validation.error.message,
          status : 400
        }, 400)
      }
      
      const calon = await suaraService.addSuara(data.id_calon, data.device_id);
      return c.json(calon, calon.status as StatusCode);
    } catch (error) {
      return c.json({ message: error }, 500);
    }
  };