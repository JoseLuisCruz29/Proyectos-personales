class Registro {
   nombre : string;
   contrasena : string | number;
   correElectronico: string;

   constructor(
      nombre: string,
      contrasena: string | number,
      correElectronico: string,
   ) {
      this.nombre = nombre;
      this.contrasena = contrasena;
      this.correElectronico = correElectronico;
   }
}
const Nombre = "Jose Luis";
const contrasena = "xxxxx";