import { Context } from "hono";
import {suaraService} from "../service/suaraService";

export const getRekap = async (c: Context) => {
  try {
    const rekap = await suaraService.getRekap();
    return c.json(rekap);
  } catch (error) {
    return c.json({ message: error }, 500);
  }
};

export const addSuara = async (c: Context) => {
  try {
    const id_calon = parseInt(c.req.param("id"));
    const suara = await suaraService.addSuara(id_calon);
    return c.json(suara, 201);
  } catch (error) {
    return c.json({ message: error }, 500);
  }
};

export const deleteSuara = async (c: Context) => {
  try {
    const id_calon = parseInt(c.req.param("id"));
    await suaraService.deleteSuara(id_calon);
    return c.json({ message: "Suara deleted successfully" });
  } catch (error) {
    return c.json({ message: error }, 500);
  }
};

export const addMultipleSuaraController = async (c: Context) => {
    try {
      const { id_calon_list } = await c.req.json();
      const suara = await suaraService.addMultipleSuara(id_calon_list);
      return c.json(suara, 201);
    } catch (error) {
      return c.json({ message: error }, 500);
    }
  };
