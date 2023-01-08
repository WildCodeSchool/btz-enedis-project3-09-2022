import { RequestHandler } from "express";
import { Image } from "@prisma/client";
import ResponseError from "../ResponseError";

type TImageBody = Omit<Image, "id" | "createdAt" | "updatedAt">;

export interface ImageHandlers {
  getAll: RequestHandler<null, Image[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Image | ResponseError, null>;
  create: RequestHandler<{ id: string }, Image | ResponseError, TImageBody>;
  update: RequestHandler<{ id: string }, Image | ResponseError, TImageBody>;
  delete: RequestHandler;
}
