'use client';
import styles from './hero.module.css';
import CustomButton from "@/components/customButton/CustomButton";
import Image from "next/image";

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className={styles.hero}>
      <div className="flex-1 pt-36 padding-x">
        <h1 className={styles.title}>Swap Smart, Save More: Your Gateway to Greener Trading!</h1>
          <p className={styles.subtitle}>Barter-Buddy: Where Treasures Trade Hands, Not Cash</p>

        <CustomButton
            title="Explore"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
        />
      </div>
        <div className={styles.imageContainer}>
            <div className={styles.image}>
                <Image src="/hero.png" alt="hero" fill className="object-contain" />
            </div>
            <div className={styles.imageOverlay}></div>
        </div>
    </div>
  );
}

export default Hero;
