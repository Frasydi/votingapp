import { Context } from "hono";
import { suaraService } from "../service/suaraService";
import { StatusCode } from "hono/utils/http-status";
import { ISuaraInput, ZSuaraInput } from "../../type/suara";
import { z } from "zod";

export const tambahSuara = async (c: Context) => {
    try {
     
      const data : ISuaraInput = await c.req.json();
      const validation= ZSuaraInput.safeParse(data) 
      if(validation.success == false) {
        return c.json({
          message : validation.error.message,
          status : 400
        }, 400)
      }
      
      const calon = await suaraService.addSuara(data);
      return c.json(calon, calon.status as StatusCode);
    } catch (error) {
      return c.json({ message: error }, 500);
    }
  };