export interface Library {
  collection: Collection;
}

export interface Collection {
  version:  string;
  href:     string;
  items:    Item[];
  metadata: Metadata;
  links:    CollectionLink[];
}

export interface Item {
  href:  string;
  data:  Datum[];
  links: ItemLink[];
}

export interface Datum {
  description:        string;
  title:              string;
  keywords:           string[];
  nasa_id:            string;
  date_created:       Date;
  media_type:         MediaType;
  center:             Center;
  description_508?:   string;
  secondary_creator?: string;
  album?:             string[];
  photographer?:      string;
  location?:          string;
}

export enum Center {
  Grc = "GRC",
  Gsfc = "GSFC",
  Hq = "HQ",
  Jpl = "JPL",
  Ssc = "SSC",
}

export enum MediaType {
  Image = "image",
  Video = "video",
}

export interface ItemLink {
  href:    string;
  rel:     Rel;
  render?: MediaType;
}

export enum Rel {
  Captions = "captions",
  Preview = "preview",
}

export interface CollectionLink {
  rel:    string;
  prompt: string;
  href:   string;
}

export interface Metadata {
  total_hits: number;
}
