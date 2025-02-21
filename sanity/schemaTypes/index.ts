import { type SchemaTypeDefinition } from "sanity";
import eventType from "./documents/eventType";
import pagesType from "./documents/pagesType";
import ministryType from "./documents/ministryType";
import textType from "./objects/textType";
import richTextType from "./objects/richTextType";
import imageType from "./objects/imageType";
import linkType from "./objects/linkType";
import siteMeta from "./objects/siteMeta";
import hero from "./objects/heroType";
import button from "./objects/buttonType";
import textHeader from "./objects/TextHeaderType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [],
};

export const schemaTypes = [ministryType, eventType, pagesType, textType, richTextType, imageType, linkType, siteMeta, hero, button, textHeader];
