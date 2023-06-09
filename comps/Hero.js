import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: .5 }}
            >
                <div className={styles.heroText}>
                    <p className={styles.heroTitle}>Parking solutions — done right.</p>
                    <p className={styles.heroParagraph}>SPDPRK is designed and built to make the parking process fast, straight-forward, and secure. Both hardware and software ensure that your customers have a seamless experience, and that you are in control of what’s happening in your garage.</p>
                    <Link className={styles.heroLink} href="/contact">Request a Demo</Link>
                </div>
            </motion.div>
            <div dangerouslySetInnerHTML={{ __html: `
                <video
                loop
                muted
                autoplay
                playsinline
                src="/hero_mp4.mp4"
                class="${styles.heroVideo}"
                />,
            ` }}></div>
        </div>
    );
}
 
export default Hero;