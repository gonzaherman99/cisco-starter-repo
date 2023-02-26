import CardDisplay from './Card.js';

function Exhibition() {
    return (
        <div className='Exhibition-deck'>
                <CardDisplay name="Title #1" description="Description #1" />
                <CardDisplay name="Title #2" description="Description #2" />
                <CardDisplay name="Title #3" description="Description #3" />
        </div>
    );
}

export default Exhibition;



