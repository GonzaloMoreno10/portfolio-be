/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProyecto } from '../interfaces/proyecto';
import projectModel from '../models/proyectos';

class ProjectRepository {
  async getAllProjects() {
    const result = await projectModel.find();
    console.log(result);
    return result;
  }

  async createProject(project: IProyecto | Partial<IProyecto>) {
    try {
      const result = await projectModel.create(project);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async deleteProject(projectId: string) {
    try {
      const result = await projectModel.findByIdAndDelete(projectId);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async updateProject(projectId: string, project: IProyecto) {
    try {
      const result = await projectModel.findByIdAndUpdate(projectId, project);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async getById(projectId: string) {
    try {
      const result = await projectModel.findById(projectId);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export const projectRepository = new ProjectRepository();
