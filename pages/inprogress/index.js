import React from 'react'
import { MainLayout } from "../../components/MainLayout"
import Image from "next/dist/client/image"
import styles from "./style.module.scss"
import Modal from '../../components/Modal';

export default function About() {
    const [isOpen, setOpen] = React.useState(false);

    console.log(isOpen);

    const onBlockClick = () => {
        setOpen((value) => !value);
    }

    return (
        <MainLayout title={'Задачи в разработке'}>
        <Modal opened={isOpen} onOutsidedClick={onBlockClick}>
            <div>content</div>


            <div style={{height: '50px', width: '50px', backgroundColor: 'yellow'}} onClick={onBlockClick}>
                cross
            </div>
        </Modal>
            <h1>Задачи в разработке</h1>
            <span>Проекты находящиеся в разработке</span>   
            <div>
                <div className={styles.block_img}  >
                    <p>Проект Степанова</p>
                    <p>Посмотреть список задач</p>
                    <Image onClick={onBlockClick}
                        alt="img_project" 
                        src="/stepanova_images/preview.jpg"
                        width="2148"
                        height="1108"
                    />
                </div>
                <div className={styles.block_img}>
                    <p>Проект Иванова</p>
                    <Image 
                        alt="diagram" 
                        src="/stepanova_images/diagram.jpg"
                        width="1009"
                        height="530"
                    />
                </div>
            </div>
            <div>
                <div className={styles.block_img}>
                    <p>Проект Степанова</p>
                    <Image
                        alt="img_project" 
                        src="/stepanova_images/preview.jpg"
                        width="2148"
                        height="1108"
                    />
                </div>
                <div className={styles.block_img}>
                    <p>Проект Иванова</p>
                    <Image 
                        alt="diagram" 
                        src="/stepanova_images/diagram.jpg"
                        width="1009"
                        height="530"
                    />
                </div>
            </div>
            <div>
                <div className={styles.block_img}>
                    <p>Проект Степанова</p>
                    <Image
                        alt="img_project" 
                        src="/stepanova_images/preview.jpg"
                        width="2148"
                        height="1108"
                    />
                </div>
                <div className={styles.block_img}>
                    <p>Проект Иванова</p>
                    <Image 
                        alt="diagram" 
                        src="/stepanova_images/diagram.jpg"
                        width="1009"
                        height="530"
                    />
                </div>
            </div>
        </MainLayout>
    )
}