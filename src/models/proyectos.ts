import { Schema, model } from 'mongoose';
import { IProyecto } from '../interfaces/proyecto';

const proyectoSchema = new Schema({
  id: Object,
  date: Date,
  title: String,
  description: String,
  proyectTime: String,
  link: String,
  images: [String],
  technologies: [{ area: String, technologies: [String] }],
  createdAt: Date,
  updatedAt: Date,
});

export default model<IProyecto>('proyectos', proyectoSchema);
