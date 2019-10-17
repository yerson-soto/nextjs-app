import Event from './Event';

const Events = (props) => {
    const eventsId = Object.keys(props.events);

    return (  
        <div className="list-group">
            {eventsId.map(key => (
                <Event
                    key={key}
                    event={props.events[key]}
                />
            ))}
        </div>
    );
}
 
export default Events;