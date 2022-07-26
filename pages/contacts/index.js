import { MainLayout } from "../../components/MainLayout";
import styles from './style.module.scss'
export default function Posts() {
    return (
        <MainLayout>
            <h1 className={styles.head}>Контакты</h1>
            <section className={styles.first_section}>
            <div className={styles.about_blocks}>
                <div>
                    <h2>Профессор Сафронов</h2>
                    <span>Email -- <b><a href="mailto:safronov@mail.ru" className={styles.link}>safronov@mail.ru</a></b></span><br/>
                    <span>Телеграм - <b><a href="https://t.me/safronovtest" className={styles.link}>@safronov</a></b></span>
                </div>
                <div>
                    <h2>Разработчик приложения</h2>
                    <span>Email - <b><a href="mailto:shchekin@mail.ru" className={styles.link}>shchekin@mail.ru</a></b></span><br/>
                    <span>Телеграм - <b><a href="https://t.me/shchekintest" className={styles.link}>@shchekin</a></b></span>
                </div>
            </div>
            </section>
        </MainLayout>
    )
}