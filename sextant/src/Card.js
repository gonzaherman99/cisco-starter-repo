function CardDisplay(props) {
        return (
            <div className="Card">
                <h2 className="Data-to-show">{props.name}</h2>
                <h3 classname="Card-description">{props.description}</h3>
            </div>
        );
}

export default CardDisplay;