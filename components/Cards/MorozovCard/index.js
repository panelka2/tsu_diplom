import Link from 'next/link'
import styles from './style.module.scss'
import Image from 'next/image'

export default function MorozovCard() {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.block_name}>
                <Link href='/projects/morozov'>
                    <a className={styles.name_project}><span className={styles.first_word_name_project}>Моделирование</span> высокоэнергетических процессов с использованием сетевых вычислений</a>
                </Link>
                </div>
                <div className={styles.block_content}>
                    <div className={styles.image_style}>
                        <Image
                            alt="img_project" 
                            src="/morozov_images/preview.jpg"
                            width="374"
                            height="346"
                        />
                    </div>   
                    <div className={styles.description_block}>
                        <span> 
                            Студент <span className={styles.name_student}>Морозов</span>
                        </span>
                        <p>
                            <span className={styles.first_word}>Создание </span>эффективного метода физико-математического моделирования процессов в высокоэнергетических установках с использованием механизма распределенных  
                            <span className={styles.last_word}> технологий.</span>
                        </p>
                        <div className={styles.block_link_style}>
                            <div>
                                <Link href={'/projects/morozov'}>
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