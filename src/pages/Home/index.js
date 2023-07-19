import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ColorNode from '~/components/Layout/components/Node';

const clNames = classNames.bind(styles);

let nodeStatus = ['red', 'black', 'red', 'black'];

function Home() {
    return (
        <div className={clNames('content')}>
            <img src={images.diaDuoi} className={clNames('diaDuoi')} />
            <div className={clNames('nuts')}>
                <div className={clNames('nut')}>
                    <ColorNode color={nodeStatus[0]}></ColorNode>
                </div>
                <div className={clNames('nut')}>
                    <ColorNode color={nodeStatus[1]}></ColorNode>
                </div>
                <div className={clNames('nut')}>
                    <ColorNode color={nodeStatus[2]}></ColorNode>
                </div>
                <div className={clNames('nut')}>
                    <ColorNode color={nodeStatus[3]}></ColorNode>
                </div>
            </div>
        </div>
    );
}

export default Home;
