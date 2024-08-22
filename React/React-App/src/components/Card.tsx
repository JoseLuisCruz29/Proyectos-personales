interface Props {
    body: string
}


function Card(props: Props) {
    const { body } = props;
    return (
        <div className="card" style={{
            width: '350px',
        }}>
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
                {body}
            </div>
        </div>
    );
}
export function CardBody() {
    return (
        <>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </>
    );
}
export default Card