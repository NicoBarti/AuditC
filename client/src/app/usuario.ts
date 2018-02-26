export class Usuario {
  constructor(
    public email: string,
    public name: string,
    public password: string,
    public passwordConfirmation: string,
    public sexo: string,
    public fecha_nac: string
) {}
}
