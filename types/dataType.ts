export interface Board {
  _id: string;
  title: string;
  content: string;
}

export interface IComment {
  _id: string;
  content: string;
  parentId: string;
  author: string;
}
