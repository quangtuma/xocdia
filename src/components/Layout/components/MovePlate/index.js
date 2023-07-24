import { useState } from 'react';

function MovePlate() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setOffset({
            x: event.clientX - position.x,
            y: event.clientY - position.y,
        });
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            setPosition({
                x: event.clientX - offset.x,
                y: event.clientY - offset.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            style={{ position: 'relative' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <svg
                style={{
                    position: 'absolute',
                    left: position.x,
                    top: position.y,
                }}
                width="500"
                height="375"
                viewBox="0 0 500 375"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <ellipse cx="250" cy="187.5" rx="250" ry="187.5" fill="#BEB9B9" />
                <ellipse cx="250.375" cy="187.852" rx="208.333" ry="156.191" fill="#A7A3A3" />
            </svg>
        </div>
    );
}
export default MovePlate;
