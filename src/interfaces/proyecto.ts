export interface IProyecto {
  id?: string;
  date: Date;
  title: string;
  description: string;
  link: string;
  proyectTime: string;
  images: string[];
  technologies: IproyectTechnologies[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IproyectTechnologies {
  area: string; //Backend FrontEnd DB ...
  technologies: string[];
}
