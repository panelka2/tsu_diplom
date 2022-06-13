import React from 'react'
import { MainLayout } from "../../components/MainLayout"
import Image from "next/dist/client/image"
import styles from "./style.module.scss"

export default function About() {

    return (
        <MainLayout>
            <h1 className={styles.head}>Задачи в разработке</h1>
            <div className={styles.block_project}>
                <div className={styles.block_img}>
                    <Image
                        alt="img_project" 
                        src="/inprogress_images/kozlov.jpg"
                        width="674"
                        height="382"
                    />
                </div>
                <div className={styles.block_text}>
                    <h2>Разработка ПО для определения внешнебаллистических параметров артиллерийских систем</h2>
                    <p><span><b>Студент - </b></span>Козлов Е.</p>
                    <p><span><b>Направление обучения - </b></span>ПМИ</p>
                    <p><span><b>Год защиты проекта - </b></span>2022</p>
                    <p><span><b>Поставленные задачи - </b></span>
                    <ul>
                        <li>проанализировать литературу по заданной теме</li>
                        <li>изучить предметную область</li>
                        <li>обосновать необходимость разработки информационной системы</li>
                        <li>описать техническое, программное и технологическое обеспечение</li>
                        <li>провести тестирование разработанного приложения</li>
                    </ul>
                    </p>
                </div>
            </div>

            <div className={styles.block_project}>
                <div className={styles.block_img}>
                    <Image
                        alt="img_project" 
                        src="/inprogress_images/kozlov.jpg"
                        width="2148"
                        height="1108"
                    />
                </div>
                <div className={styles.block_text}>
                    <h2>Разработка мобильного приложения для обучения студентов основам информатики</h2>
                    <p><span><b>Студент - </b></span>Мавлоназаров А.</p>
                    <p><span><b>Направление обучения - </b></span>ПМИ</p>
                    <p><span><b>Год защиты проекта - </b></span>2022</p>
                    <p><span><b>Поставленные задачи - </b></span>
                    <ul>
                        <li>изучить предметную область по созданю мобильного приложения</li>
                        <li>выбрать методы разработки мобильного приложения</li>
                        <li>разработать логическую модель мобильного приложения</li>
                        <li>реализовать мобильное приложение</li>
                        <li>провести тестирование мобильного приложения</li>
                    </ul>
                    </p>
                </div>
            </div>

            <div className={styles.block_project}>
                <div className={styles.block_img}>
                    <Image
                        alt="img_project" 
                        src="/inprogress_images/sotnikov.jpg"
                        width="392"
                        height="424"
                    />
                </div>
                <div className={styles.block_text}>
                    <h2>Разработка дизайна для веб-приложения по кафедральной научной работе с применением технологии Figma</h2>
                    <p><span><b>Студент - </b></span>Сотников В.</p>
                    <p><span><b>Направление обучения - </b></span>ПМИ</p>
                    <p><span><b>Год защиты проекта - </b></span>2022</p>
                    <p><span><b>Поставленные задачи - </b></span>
                        <ul>
                            <li>проанализировать материал, связанный с направлением деятельности платформы. Систематизировать собранную информацию.</li>
                            <li>изучить аналоги сайтов схожей тематики (электронные издания и ресурсы, работающие в сфере предоставления населению образовательных услуг), выявить преимущества и недостатки конкурентов</li>
                            <li>определить структуру сайта и выполнить процесс разработки.</li>
                            <li>разработать дизайн-макет сайта, который может пополняться и развиваться.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </MainLayout>
    )
}