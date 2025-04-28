import { useState } from 'react';
import styles from 'D:/project_testpaje/animals/src/Slider/Slider_style.css';

const slides = [
    { id: 1, image: 'slide1.png', alt: 'Изображение 1' },
    { id: 2, image: 'slide1.png', alt: 'Изображение 2' },
    { id: 3, image: 'slide1.png', alt: 'Изображение 3' },
];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className={styles.slider}>
            <button onClick={prevSlide} className={styles.arrow}>‹</button>
            <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                className={styles.slide}
            />
            <button onClick={nextSlide} className={styles.arrow}>›</button>
            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}