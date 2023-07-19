function ColorNode({ color }) {
    return (
        <div>
            <svg width="60" height="57" viewBox="0 0 60 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="30" cy="28.375" rx="30" ry="28.125" fill={color} />
            </svg>
        </div>
    );
}

export default ColorNode;
