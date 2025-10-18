export interface PostNavigationLink {
  slug: string;
  title: string;
}

export interface PostNavigation {
  previous: PostNavigationLink | null;
  next: PostNavigationLink | null;
}
