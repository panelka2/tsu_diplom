import Link from 'next/link'
import styles from './style.module.scss'
import Image from 'next/image'

export default function SteninCard() {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.block_name}>
                <Link href='/projects/stenin'>
                    <a className={styles.name_project}><span className={styles.first_word_name_project}>Разработка</span> архитектуры информационных систем на основе виртуализации</a>
                </Link>
                </div>
                <div className={styles.block_content}>
                    <div className={styles.image_style}>
                        <Image
                            alt="img_project" 
                            src="/stenin_images/preview.jpg"
                            width="2884"
                            height="2304"
                        />
                    </div>   
                    <div className={styles.description_block}>
                        <span> 
                            Студент <span className={styles.name_student}>Стенин М.В.</span>
                        </span>
                        <p>
                            <span className={styles.first_word}>Предполагается,</span> что архитектура приложения,<br/> построенная с помощью технологий виртуализации,<br/> может уменьшить расходы на поддержку и увеличить его качественную 
 <span className={styles.last_word}> составляющую.</span>
                        </p>
                        <div className={styles.block_link_style}>
                            <div>
                                <Link href={'/projects/stepanova'}>
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