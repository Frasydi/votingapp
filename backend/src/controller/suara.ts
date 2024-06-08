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