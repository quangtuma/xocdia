import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ColorNode from '~/components/Layout/components/Node';
import { EvenLabel, OddLabel } from '~/components/Layout/components/Parity';
import XocAction from '~/components/Layout/components/XocAction';
import MovePlate from '~/components/Layout/components/MovePlate';

const clNames = classNames.bind(styles);

let nodeStatus = ['red', 'black', 'red', 'black'];

function Home() {
    return (
        <div className={clNames('content')}>
            <img src={images.diaDuoi} className={clNames('diaDuoi')} />
            <div className={clNames('chan')}>
                <EvenLabel status={true}></EvenLabel>
            </div>
            <div className={clNames('le')}>
                <OddLabel status={false}></OddLabel>
            </div>
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
            <div>
                <XocAction></XocAction>
            </div>
            <div>
                <MovePlate></MovePlate>
            </div>
        </div>
    );
}

export default Home;
