export interface User {
  id: string;
  name: string;
  introduction?: string;
  profileUrl?: string;
  githubUrl?: string;
}

export interface Post {
  user: User;
  title: string;
  url: string;
  createdAt: string;
  summary: string;
  tags?: string[];
  like?: number;

  // comment?: Comment
}
