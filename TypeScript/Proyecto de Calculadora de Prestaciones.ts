class Empleado {
    private nombre: string;
    private salarioMensual: number;
    private anosLaborando: number;  
    private mesesLaborando: number; 
    private diasLaborando: number;  
    private preavisado: boolean;
    private incluirCesantia: boolean;
    private vacacionesUltimoAno: boolean;
    private incluirSalarioNavidad: boolean;

    constructor(
        nombre: string,
        salarioMensual: number,
        anosLaborando: number,
        mesesLaborando: number,
        diasLaborando: number,
        preavisado: boolean,
        incluirCesantia: boolean,
        vacacionesUltimoAno: boolean,
        incluirSalarioNavidad: boolean
    ) {
        this.nombre = nombre;
        this.salarioMensual = salarioMensual;
        this.anosLaborando = anosLaborando;
        this.mesesLaborando = mesesLaborando;
        this.diasLaborando = diasLaborando;
        this.preavisado = preavisado;
        this.incluirCesantia = incluirCesantia;
        this.vacacionesUltimoAno = vacacionesUltimoAno;
        this.incluirSalarioNavidad = incluirSalarioNavidad;
    }

    calcularPrestaciones(): void {
        const preaviso = this.calcularPreaviso();
        const cesantia = this.calcularCesantia();
        const vacaciones = this.calcularVacaciones();
        const salarioNavidad = this.calcularSalarioNavidad();

        const montoTotal = preaviso + cesantia + vacaciones + salarioNavidad;

        console.log(`\n--- Prestaciones para ${this.nombre} ---`);
        console.log(`Monto del Preaviso: RD$ ${preaviso.toFixed(2)}`);
        console.log(`Monto de la Cesantía: RD$ ${cesantia.toFixed(2)}`);
        console.log(`Monto de las Vacaciones: RD$ ${vacaciones.toFixed(2)}`);
        console.log(`Monto del Salario de Navidad: RD$ ${salarioNavidad.toFixed(2)}`);
        console.log(`Monto Total a Recibir: RD$ ${montoTotal.toFixed(2)}`);
    }

    private calcularPreaviso(): number {
        const sueldoDiario = this.salarioMensual / 30; 
        const anosCompletos = this.anosLaborando;
        const mesesCompletos = this.mesesLaborando;
        const diasCompletos = this.diasLaborando;

        return sueldoDiario * (anosCompletos * 365 + mesesCompletos * 30 + diasCompletos) * (this.preavisado ? 1 : 0);
    }
    private calcularCesantia (): number {
        const anosCompletos = this.anosLaborando;
        
        return this.incluirCesantia ? this.salarioMensual * anosCompletos:0;
    }
    private calcularVacaciones(): number {
        return this.vacacionesUltimoAno ? this.salarioMensual : 0;
    }
    private calcularSalarioNavidad(): number {
        return this.incluirSalarioNavidad ? this.salarioMensual : 0;
    }
}
const nombre = "Jose Luis";
const salarioMensual = 45000;
const anosLaborando = 2;  
const mesesLaborando = 16; 
const diasLaborando = 15;  
const preavisado = true;
const incluirCesantia = true;
const vacacionesUltimoAno = true;
const incluirSalarioNavidad = true;

const empleado = new Empleado(
    nombre,
    salarioMensual,
    anosLaborando,
    mesesLaborando,
    diasLaborando,
    preavisado,
    incluirCesantia,
    vacacionesUltimoAno,
    incluirSalarioNavidad
);
empleado.calcularPrestaciones();