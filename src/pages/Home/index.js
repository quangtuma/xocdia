import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ColorNode from '~/components/Layout/components/Node';

const clNames = classNames.bind(styles);
function Home() {
    return (
        <div className={clNames('content')}>
            <div>
                <img src={images.diaDuoi} className={clNames('diaDuoi')}>
                    {/* <ColorNode color="red" className={clNames('nut')}></ColorNode> */}
                </img>
            </div>
        </div>
    );
}

export default Home;
