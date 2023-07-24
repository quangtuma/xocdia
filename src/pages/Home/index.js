import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ColorNode from '~/components/Layout/components/Node';
import { EvenLabel, OddLabel } from '~/components/Layout/components/Parity';
import XocAction from '~/components/Layout/components/XocAction';
import MovePlate from '~/components/Layout/components/MovePlate';
import Button from '~/components/Button';
import { useState, useEffect } from 'react';
import { element } from 'prop-types';

const clNames = classNames.bind(styles);

let statusArray = ['red', 'black'];

function Home() {
    const [nodeStatus, setNodeStatus] = useState([statusArray[0], statusArray[0], statusArray[0], statusArray[0]]);

    // to run :))))
    const [statusParity, setstatusParity] = useState(false);

    useEffect(() => {}, [nodeStatus]);

    useEffect(() => {}, [statusParity]);

    const handleClick = () => {
        var count = 0;

        const nodeMap = nodeStatus.map((element, id) => {
            element = statusArray[Math.floor(Math.random() * statusArray.length)];
            if (element === statusArray[0]) count++;
            return element;
        });

        console.log(count);

        setNodeStatus(nodeMap);

        console.log(nodeStatus);

        // to run :))))

        const statusChange = count % 2 === 1;

        setstatusParity(statusChange);

        //console.log(statusChange);
    };

    return (
        <div className={clNames('content')}>
            <div className={clNames('line1')}>
                <div className={clNames('parity')}>
                    <EvenLabel status={statusParity}></EvenLabel>
                </div>
                <img src={images.diaDuoi} className={clNames('diaDuoi')} />
                <div className={clNames('parity')}>
                    <OddLabel status={statusParity}></OddLabel>
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
                <div className={clNames('movePlate')}>
                    <MovePlate></MovePlate>
                </div>
            </div>
            <div className={clNames('xoc')}>
                <Button defaultButton size={'5rem'} onClick={handleClick}>
                    XÓC !!
                </Button>
            </div>
        </div>
    );
}

export default Home;
