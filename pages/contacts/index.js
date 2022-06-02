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
                    <span>Email - <b>safr@mail.ru</b></span><br/>
                    <span>Телеграм - <b>@safronov</b></span>
                </div>
                <div>
                    <h2>Разработчик приложения</h2>
                    <span>Email - <b>shchekin@mail.ru</b></span><br/>
                    <span>Телеграм - <b>@shchekin</b></span>
                </div>
            </div>
            </section>
        </MainLayout>
    )
}