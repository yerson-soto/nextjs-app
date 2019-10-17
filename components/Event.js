const Event = (props) => {

    const { name, url, description } = props.event;
    
    let desc = description.text;
    if (desc.length > 240) {
        desc = desc.substr(0, 240);
    } 

    return (  
        <a href={url} target="_blank" link="noopener noreferrer" className="list-group-item active text-light mb-1">
            <h3 className="mb-3">{name.text}</h3>
            <p className="mb-1">{desc + '...'}</p>
        </a>
    );
}
 
export default Event;