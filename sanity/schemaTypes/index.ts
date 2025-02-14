import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./eventType";
import pagesType from "./pagesType";
import textType from "./textType";
import richTextType from "./richTextType";
import imageType from "./imageType";
import linkType from "./linkType";
import siteMeta from "./siteMeta";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [],
};

export const schemaTypes = [eventType, pagesType, textType, richTextType, imageType, linkType, siteMeta];
