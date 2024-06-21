import CardColor from './CardColor';
import { Row } from 'react-bootstrap';

export default function GridColor({ colors, deleteColor }) {
    return (
        <Row className='my-3'>
            {colors.map((color, index) => (
                <CardColor key={index} color={color} deleteColor={deleteColor} />
            ))}
        </Row>
    );
}
