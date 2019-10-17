const Price = (props) => {

    const { price, percent_change_1h, percent_change_7d, percent_change_24h } = props.price;
    
    return (
        <div className="card text-white bg-primary mb-3">
            <div className="card-header">Precio del Bitcoin</div>
            <div className="card-body">
                <h4 className="card-title">Precio Actual: $ {price.toFixed(2)} </h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weight-bold">Ultima hora: </span> {percent_change_1h}%
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Ultimas 24 horas </span> {percent_change_24h}%
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Ultimas 7 días </span> {percent_change_7d}%
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default Price;