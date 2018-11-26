// tslint:disable-next-line:class-name
export interface movie {
  name: string;
  rating: rating;
  genres: [];
  title: string;
  casts: start[];
  collect_count: number;
  original_title: string;
  subtype: string;
  directors: [];
  year: string;
  images: [];
  alt: string;
  id: string;
}

// tslint:disable-next-line:class-name
export interface rating {
  max: number;
  average: string;
  stars: number;
  min: number;
}

// tslint:disable-next-line:class-name
export interface start {
  alt: string;
  avatars: [];
  name: string;
  id: string;
}

export interface State {
  movieList?: movie[];
}
