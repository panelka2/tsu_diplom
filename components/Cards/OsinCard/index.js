import Link from 'next/link'
import styles from './style.module.scss'
import Image from 'next/image'

export default function OsinCard() {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.block_name}>
                <Link href='/projects/osin'>
                    <a className={styles.name_project}><span className={styles.first_word_name_project}>Моделирование</span> систем малого калибра эстафетной схемы метания</a>
                </Link>
                </div>
                <div className={styles.block_content}>
                    <div className={styles.image_style}>
                        <Image
                            alt="img_project" 
                            src="/osin_images/preview.jpg"
                            width="513"
                            height="548"
                        />
                    </div>   
                    <div className={styles.description_block}>
                        <span> 
                            Студент <span className={styles.name_student}>Осин А.Е.</span>
                        </span>
                        <p>
                            <span className={styles.first_word}>Новая</span> схема метания,<br/> приведённая в качестве математической модели,<br/> способна показать существенный прирост в скорости, сопоставимый с реальными  
                            <span className={styles.last_word}> испытаниями.</span>
                        </p>
                        <div className={styles.block_link_style}>
                            <div>
                                <Link href={'/projects/osin'}>
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