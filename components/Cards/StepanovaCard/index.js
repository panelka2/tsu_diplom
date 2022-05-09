import Link from 'next/link'
import styles from './style.module.scss'
import Image from 'next/image'

export default function StepanovaCard() {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.block_name}>
                <Link href='/projects/stepanova'>
                    <a className={styles.name_project}><span className={styles.first_word_name_project}>Разработка</span> ПО оценки знаний студентов</a>
                </Link>
                </div>
                <div className={styles.block_content}>
                    <div className={styles.image_style}>
                        <Image
                            alt="img_project" 
                            src="/stepanova_images/preview.jpg"
                            width="2148"
                            height="1108"
                        />
                    </div>   
                    <div className={styles.description_block}>
                        <span> 
                            Студент <span className={styles.name_student}>Степанова М.В.</span>
                        </span>
                        <p>
                            <span className={styles.first_word}>Разработанная</span> система оценки знаний может стать основой для дальнейшей модернизации, <br/>а также для внедрения в различные учебные заведения и предприятия, <br/>где есть необходимость в проверке <span className={styles.last_word}>знаний.</span>
                        </p>
                        <div className={styles.block_link_style}>
                            <div>
                                <Link href='/projects/stepanova'>
                                    <a className={styles.link_decor}>Подробнее </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}