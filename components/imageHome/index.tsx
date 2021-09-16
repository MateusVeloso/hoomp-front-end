import Image from 'next/image'
import style from './imageHome.module.css'

function ImageHome() {
    return (
        <div className={style.container__image}>
            <Image src="/worker.png" alt="me" width="350" height="500" className={style.img} />
        </div>
    )
}

export default ImageHome;