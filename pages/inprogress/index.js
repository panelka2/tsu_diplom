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
                        src="/stepanova_images/preview.jpg"
                        width="2148"
                        height="1108"
                    />
                </div>
                <div className={styles.block_text}>
                    <h2>Разработка программного обеспечения оценки знаний студентов (на примере ИП Кириченко И.В.)</h2>
                    <p><span><b>Студент - </b></span>Степанова</p>
                    <p><span><b>Направление обучения - </b></span>ПМИ</p>
                    <p><span><b>Год защиты проекта - </b></span>2022</p>
                    <p><span><b>Поставленные задачи - </b></span>
                        <ul>
                            <li>Чебурашка</li>
                            <li>Крокодил Гена</li>
                            <li>Шапокляк</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className={styles.block_project}>
                <div className={styles.block_img}>
                    <Image
                        alt="img_project" 
                        src="/stepanova_images/preview.jpg"
                        width="2148"
                        height="1108"
                    />
                </div>
                <div className={styles.block_text}>
                    <h2>Разработка программного обеспечения оценки знаний студентов (на примере ИП Кириченко И.В.)</h2>
                    <p><span><b>Студент - </b></span>Степанова</p>
                    <p><span><b>Направление обучения - </b></span>ПМИ</p>
                    <p><span><b>Год защиты проекта - </b></span>2022</p>
                    <p><span><b>Поставленные задачи - </b></span>
                        <ul>
                            <li>Чебурашка</li>
                            <li>Крокодил Гена</li>
                            <li>Шапокляк</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className={styles.block_project}>
                <div className={styles.block_img}>
                    <Image
                        alt="img_project" 
                        src="/stepanova_images/preview.jpg"
                        width="2148"
                        height="1108"
                    />
                </div>
                <div className={styles.block_text}>
                    <h2>Разработка программного обеспечения оценки знаний студентов (на примере ИП Кириченко И.В.)</h2>
                    <p><span><b>Студент - </b></span>Степанова</p>
                    <p><span><b>Направление обучения - </b></span>ПМИ</p>
                    <p><span><b>Год защиты проекта - </b></span>2022</p>
                    <p><span><b>Поставленные задачи - </b></span>
                        <ul>
                            <li>Чебурашка</li>
                            <li>Крокодил Гена</li>
                            <li>Шапокляк</li>
                        </ul>
                    </p>
                </div>
            </div>
        </MainLayout>
    )
}