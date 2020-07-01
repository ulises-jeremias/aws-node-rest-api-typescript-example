export class CreateProjectDTO {
  name: string;
  description?: string;
}

export class UpdateProjectDTO {
  id: string;
  name: string;
  description?: string;
}