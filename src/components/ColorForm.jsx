import { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons"; // Asegúrate de tener esto instalado
import GridColor from './GridColor'; // Importa el componente GridColor correctamente

export default function ColorForm() {
    const colorLS = JSON.parse(localStorage.getItem('colorkey')) || [];
    const [colors, setColors] = useState(colorLS);
    const [color, setColor] = useState('#000000');

    useEffect(() => {
        localStorage.setItem('colorkey', JSON.stringify(colors));
    }, [colors]);

    const deleteColor = (_color) => {
        const newColors = colors.filter((tone) => tone !== _color);
        setColors(newColors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setColors([...colors, color]);
    };

    return (
        <>
            <Card>
                <Card.Header className="fw-bold">Paleta de colores</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 d-flex align-items-center">
                            <Form.Label className="me-2">Selecciona un color: </Form.Label>
                            <Form.Control
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="me-2"
                            />
                            <Button variant="primary" type="submit">
                                <PlusCircle className="me-1" />
                                Agregar
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <GridColor colors={colors} deleteColor={deleteColor}></GridColor>
        </>
    );
}
