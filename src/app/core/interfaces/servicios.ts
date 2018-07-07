export interface ITipoServicio {
  codigo: number;
  nombre: string;
}

export interface IServicio {
  codigo?: number;
  nombre: string;
  descripcion: string;
  tipo_servicio: number;
}
