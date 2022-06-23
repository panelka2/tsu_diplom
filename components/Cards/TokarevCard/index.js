import Link from 'next/link'
import styles from './style.module.scss'
import Image from 'next/image'

export default function TokarevCard() {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.block_name}>
                <Link href='/projects/tokarev'>
                    <a className={styles.name_project}><span className={styles.first_word_name_project}>Математическое</span> моделирование высокоэнергетических систем</a>
                </Link>
                </div>
                <div className={styles.block_content}>
                    <div className={styles.image_style}>
                        <Image
                            alt="img_project" 
                            src="/tokarev_images/preview.jpg"
                            width="681"
                            height="287"
                        />
                    </div>   
                    <div className={styles.description_block}>
                        <span> 
                            Студент <span className={styles.name_student}>Токарев Д.Н.</span>
                        </span>
                        <p>
                            <span className={styles.first_word}>Для</span> обеспечения математических моделей наряду с надежной опытной информацией об элементарных стадиях процесса необходимы эксперименты в условиях, комплексно воспроизводящих наиболее существенные черты исследуемых 
                            <span className={styles.last_word}> систем.</span>
                        </p>
                        <div className={styles.block_link_style}>
                            <div>
                                <Link href={'/projects/tokarev'}>
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