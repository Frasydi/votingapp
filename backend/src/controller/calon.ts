import { Context } from "hono";
import {calonService} from "../service/calonService";

export const getAllCalon = async (c: Context) => {
  try {
    const calon = await calonService.getAllCalon();
    return c.json(calon);
  } catch (error) {
    return c.json({ message: error }, 500);
  }
};

export const getCalonById = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    const calon = await calonService.getCalonById(id);
    if (!calon) {
      return c.json({ message: "Calon not found" }, 404);
    }
    return c.json(calon);
  } catch (error) {
    return c.json({ message: error }, 500);
  }
};

export const createCalon = async (c: Context) => {
  try {
    const calonData = await c.req.json();
    const calon = await calonService.createCalon(calonData);
    return c.json(calon, 201);
  } catch (error) {
    return c.json({ message: error }, 500);
  }
};

export const updateCalon = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    const calonData = await c.req.json();
    const calon = await calonService.updateCalon(id, calonData);
    return c.json(calon);
  } catch (error) {
    return c.json({ message: error }, 500);
  }
};

export const deleteCalon = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    await calonService.deleteCalon(id);
    return c.json({ message: "Calon deleted successfully" });
  } catch (error) {
    return c.json({ message: error }, 500);
  }
};