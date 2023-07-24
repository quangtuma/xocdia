import classnames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const clName = classnames.bind(styles);

function Button({ to, href, primary, transaction, defaultButton, children, onClick, size }) {
    const classes = clName('wrapper', { primary }, { transaction }, { defaultButton });
    let Comp = 'button';

    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            <span style={{ fontSize: size }}>{children}</span>
        </Comp>
    );
}

export default Button;
