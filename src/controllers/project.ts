/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { IProyecto } from '../interfaces/proyecto';
import { projectRepository } from '../repositories/projects';
class ProjectController {
  async findAllProjects(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        const result = await projectRepository.getAllProjects();
        res.status(result.length ? 200 : 400).json({
          data: result.length ? result : { message: 'No existen proyectos cargados aun' },
        });
      } else {
        const result = await projectRepository.getById(id);
        res
          .status(result ? 200 : 400)
          .json({ data: result ? result : { message: 'El proyecto no existe' } });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async deleteProject(req: Request, res: Response) {
    try {
      const { id } = req.params;
      console.log(id);
      if (id) {
        const exists = await projectRepository.getById(id);
        if (exists) {
          const result = await projectRepository.deleteProject(id);
          console.log(result);
          res.status(202).json({ message: 'Proyecto eliminado' });
        } else {
          res.status(404).json({ message: 'Proyecto inexistente' });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async updateProject(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { date, title, description, proyectTime, images, technologies, link } = req.body;
      const exists = await projectRepository.getById(id);
      if (exists) {
        if (title && description && proyectTime) {
          const project: IProyecto = {
            date,
            title,
            description,
            proyectTime,
            images,
            technologies,
            link,
            updatedAt: new Date(),
          };
          await projectRepository.updateProject(id, project);
          const result = await projectRepository.getById(id);
          res.status(201).json({ message: 'Producto actualizado', data: result });
        } else {
          res.status(400).json({ message: 'Invalid body' });
        }
      } else {
        res.status(404).json('Proyecto no existente');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async createProject(req: Request, res: Response) {
    try {
      const { date, title, description, proyectTime, images, technologies, link } = req.body;
      if (title && description && images) {
        const project: Partial<IProyecto> = {
          date,
          title,
          description,
          proyectTime,
          images,
          link,
          technologies,
          createdAt: new Date(),
        };
        const result = await projectRepository.createProject(project);
        console.log(result);
        res
          .status(result ? 201 : 400)
          .json({ message: result ? 'Proyecto creado' : 'Error', data: result ? result : {} });
      } else {
        res.status(400).json({ message: 'Invalid Body' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  }
}

export const projectController = new ProjectController();
