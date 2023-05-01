import styles from '@/styles/Home.module.css'
import Image from 'next/image';

const Banner = () => {
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    <p>We’ve been trusted across numerous sectors over our 45 years in the parking industry</p>
                </div>
            </div>
        </div>
    );
}
 
export default Banner;