import Link from 'next/link'
import styles from '../card.module.scss'
import Image from 'next/image'

export default function IvanovCard() {
    return (
        <>
            <div className={styles.allcards}>
                <div className={styles.card}>
                    <div className={styles.incard}>
                        <div className={styles.left_block}>
                            <div className={styles.block_text}>
                                <h1>Проект по разработке балистики</h1>
                                <a>Разработан Ивановым Иваном Ивановичем</a> 
                            </div>
                            <div className={styles.image}>
                                <Image
                                    alt="img_project" 
                                    src="/ivanov_images/cardImage.jpg"
                                    width={600}
                                    height={400}
                                />
                            </div>
                        </div>
                        <div className={styles.description}>
                            <a className={styles.description_text}>
                                Значимость этих проблем настолько очевидна, что рамки и место обучения кадров требуют определения и уточнения направлений прогрессивного развития. Таким образом сложившаяся структура организации позволяет выполнять важные задания по разработке модели развития. Товарищи! укрепление и развитие структуры представляет собой интересный эксперимент проверки позиций
                            </a>
                            <div className={styles.button_pos}>
                                <Link href={'/projects/ivanov'}> 
                                    <a className={styles.buttposition}><button className={styles.button}>Подробнее</button></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}