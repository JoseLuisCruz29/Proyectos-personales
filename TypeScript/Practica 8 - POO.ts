class Persona {
    private dni: string;
    private nombre: string;
    private edad: number;
    private sexo: 'H' | 'M';
    private peso: number;
    private altura: number;

    constructor(nombre: string, edad: number, sexo: 'H' | 'M', peso: number = 0, altura: number = 0) {
        this.dni = this.generarDNI();
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = this.comprobarSexo(sexo);
        this.peso = peso;
        this.altura = altura;
    }

    private generarDNI(): string {
        const numero = Math.floor(Math.random() * 100000000);
        const letra = this.calcularLetraDNI(numero);
        return `${numero}${letra}`;
    }

    private calcularLetraDNI(numero: number): string {
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        return letras.charAt(numero % 23);
    }

    calcularIMC(): number {
        if (this.altura === 0) return -1; 

        const imc = this.peso / Math.pow(this.altura, 2);
        if (imc < 20) {
            return -1;
        } else if (imc >= 20 && imc <= 25) {
            return 0;
        } else {
            return 1;
        }
    }

    esMayorEdad(): boolean {
        return this.edad >= 18;
    }

    comprobarSexo(sexo: string): 'H' | 'M' {
        const sexoUpper = sexo.toUpperCase();
        if (sexoUpper === 'H' || sexoUpper === 'M') {
            return sexoUpper as 'H' | 'M';
        } else {
            return 'H'; 
        }
    }

    obtenerInformacion(): string {
        return `
            Nombre: ${this.nombre}
            DNI: ${this.dni}
            Edad: ${this.edad} años
            Sexo: ${this.sexo === 'H' ? 'Hombre' : 'Mujer'}
            Peso: ${this.peso} kg
            Altura: ${this.altura} m`;
    }
}

for (let i = 1; i <= 3; i++) {
    const nombre = prompt(`Introduce el nombre de la persona ${i}:`) || 'Nombre';
    const edad = parseInt(prompt(`Introduce la edad de ${nombre}:`) || '0', 10);
    const sexo = prompt(`Introduce el sexo de ${nombre} (H/M):`) || 'H';
    const peso = parseFloat(prompt(`Introduce el peso de ${nombre} (en kg):`) || '0');
    const altura = parseFloat(prompt(`Introduce la altura de ${nombre} (en metros):`) || '0');

    const persona = new Persona(nombre, edad, sexo, peso, altura);
    
    
    let mensajeIMC = '';
    const imc = persona.calcularIMC();
    if (imc === -1) {
        mensajeIMC = 'Está por debajo del peso ideal.';
    } else if (imc === 0) {
        mensajeIMC = 'Está en su peso ideal.';
    } else {
        mensajeIMC = 'Tiene sobrepeso.';
    }
    

    const esMayor = persona.esMayorEdad() ? 'Es mayor de edad.' : 'Es menor de edad.';

    
    console.log(`Información de la persona ${i}:`);
    console.log(persona.obtenerInformacion());
    console.log(mensajeIMC);
    console.log(esMayor);
    console.log('--------------------------------------');
}
