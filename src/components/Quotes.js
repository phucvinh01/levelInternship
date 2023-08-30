import React from 'react';
import Card from 'react-bootstrap/Card';
import './Css/Typewriter.css'
const CardItem = (props) => {

    return (
        <Card>
            <Card.Body>
                <blockquote className="blockquote typewriter">
                    <p>{ props.content }</p>
                </blockquote>
                <Card.Text className='fs-4 text-end'>
                    { props.author }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardItem;