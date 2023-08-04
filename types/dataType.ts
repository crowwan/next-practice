import { WithId } from "mongodb";

export interface Board extends WithId<Document> {
  title: string;
  content: string;
}
