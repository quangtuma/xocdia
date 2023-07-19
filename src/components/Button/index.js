import classnames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const clName = classnames.bind(styles);

function Button({ to, href, primary, transaction, children, onClick }) {
    const classes = clName('wrapper', { primary }, { transaction });
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
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
