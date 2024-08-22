function Titulo() {
    //react.create elemt
    const nombre = "Jose Luis";
    if (nombre) {
        return <h1> Ola {nombre}</h1>
    }
    return <h1> Ola Mundo</h1>
}
export default Titulo;