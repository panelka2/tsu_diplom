import { MainLayout } from "../../../components/MainLayout"
import styles from './style.module.scss'
import Image from "next/image"
export default function About() {
    
    return (
        <MainLayout title={'Project|Tokarev'}>
            <main className={styles.main_page}>

                <section className={styles.name_vkr}>
                    <h1>
                        <span className={styles.first_word_name_project}>Моделирование </span>высокоэнергетических процессов с использованием сетевых вычислений
                    </h1>
                </section>

                <section className={styles.first_section}>
                    <header>Разработчик</header>
                    <div className={styles.about_blocks}>
                        <div>
                            <h2>Студент</h2>
                            <span>Тольяттинского Государственного Университета </span>
                            <span>Морозов</span>
                        </div>
                        <div>
                            <h2>По направлению</h2>
                            <span>Институт математики, физики и информационных технологий</span><br/>
                            <span>Прикладная математика и информатика</span><br/>
                            <span>Прикладная инморматика в образовании и образовательных технологиях</span>
                        </div>
                        <div>
                            <h2>Под руководством</h2>
                            <span>Доктора физико-математических наук, <br/>профессора Александра Ивановича Сафронова</span>
                        </div>
                    </div>
                </section>

                <section className={styles.second_section}>
                    <header>О проекте</header>
                    <h2>
                        Создание эффективного метода физико-математического моделирования процессов в высокоэнергетических установках с использованием механизма распределенных технологий.
                    </h2>
                </section>

                <section className={styles.third_section}>
                    <header>Поставленные задачи</header>
                    <h1>
                        <span>- рассмотрение баллистической системы с присоединенными ускоряемыми зарядами в качестве объекта исследования.</span> <br/><br/>
                        <span>- математическое моделирование  рассматриваемой системы с использованием подхода механики гетерогенных сред.</span> <br/><br/>
                        <span>- выбор численного метода решения замкнутой системы уравнений в частных производных</span><br/> <br/>
                        <span>- отладка и параметрическое исследование предложенной системы</span><br/> <br/>
                        <span>- моделирование многопараметрической системы с использованием распараллеленного алгоритма, подходов сетевых вычислений или суперкомпьютеров</span><br/> <br/>
                        <span>- выявление параметров системы, позволяющих значительно повысить энергетику установки в ручном режиме или автоматическом</span><br/> <br/>
                        <span>- апробация полученной компьютерной модели для рассматриваемой баллистической системы</span><br/> <br/>
                    </h1>    
                </section>

                <section className={styles.fourth_section}>
                    <header>Моделирование схемы метания </header>
                    <h2>
                        Для обоснования предложенной схемы выстрела и определения параметров газодинамического воспламенительного устройства необходимо решать ПЗВБ систем ВЭС с учётом начального периода воспламенения дополнительного заряда контейнера, представляющего собой сборку поршень ↔дополнительный заряд ↔ метаемый элемент.
                    </h2>

                    <div className={styles.block_photos_fourth_section}>
                        <div className={styles.solo_block}>
                            <h3>Схема сравнения</h3>
                            <ul className={styles.points_in_block}>
                                <li>Для данной установки с выбранными условиями заряжания давление на дно сборки в районе его максимума меняется достаточно плавно </li>
                            </ul>
                            <div className={styles.image_block}>
                                <Image 
                                    alt="diagram" 
                                    src="/morozov_images/preview_1.jpg"
                                    width="584"
                                    height="341"
                                />
                            </div>
                        </div>

                        <div className={styles.solo_block}>
                            <h3>Динамика изменения характерных параметров при ВЭС.</h3>
                            <ul className={styles.points_in_block}>
                                <li>1 - давление на дно канала ствола, 2 - давление на поршень слева, 3 - давление на дно снаряда, 4 - давление на поршень справа, 5 - скорость снаряда, 6 - скорость поршня.</li>
                            </ul>
                            <div className={styles.image_block}>
                                <Image 
                                    alt="diagram" 
                                    src="/morozov_images/preview_2.jpg"
                                    width="654"
                                    height="461"
                                />
                            </div>
                        </div>

                        <div className={styles.solo_block}>
                            <h3>Зависимость конечной скорости от параметра.</h3>
                            <ul className={styles.points_in_block}>
                                <li>Зависимость дульной скорости от координаты воспламенения дополнительного заряда. В начале при увеличении ХignVд растет, что обусловлено тем, что метаемый элемент в составе сборки получает большую скорость, а затем происходит доускорение метаемого элемента за счет горения дополнительного заряда.</li>
                            </ul>
                            <div className={styles.image_block}>
                                <Image 
                                    alt="diagram" 
                                    src="/morozov_images/preview_3.jpg"
                                    width="616"
                                    height="293"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.fifth_section}>
                    <header>Разработка алгоритмов системы</header>
                    <h2>
                    Основной алгоритм работы приложения выглядит следующим образом: <br/>
                        <span>1) Запуск программы </span> <br/>
                        <span>2) Выбор действия </span> <br/>
                        <span>а. заполнить входные данные </span> <br/>
                        <span>б. загрузить входные данные </span> <br/>
                        <span>в. загрузить выходные данные </span> <br/>
                        <span>3) Выбор действия исходя из выбора предыдущего пункта </span> <br/>
                        <span>а. проводим расчеты на основе введенных или загруженных входных данных </span> <br/>
                        <span>б. проводим автоматический подбор на основе введенных входных данных и приращений для параметров, если их ввел пользователь </span> <br/>
                        <span>4) Построить графики </span> <br/>
                        <span>5) Сохранить данные файл по усмотрению пользователя </span> <br/>
                        <span>6) Если пользователь провел несколько вычислений, можно выбрать любой из них в терминале и посмотреть выходную информацию или построить графики </span> <br/>
                    </h2>
                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Функциональная схема приложения</h3>
                            <div>
                                <Image 
                                    alt="scheme_of_project" 
                                    src="/morozov_images/model_1.jpg"
                                    width="416"
                                    height="815"
                                />
                            </div>
                            <p>
                                Функциональная схема программного продукта
                            </p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Контекстная диаграмма информационной модели заложенной в приложение.</h3>
                            <div>
                                <Image 
                                    alt="diagram_of_classes" 
                                    src="/morozov_images/model_2.jpg"
                                    width="652"
                                    height="720"
                                />
                            </div>
                            <p>
                                Контекстная диаграмма программного продукта
                            </p>
                        </div>
                    </div>

                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Построение сеточной области</h3>
                            <div>
                                <Image 
                                    alt="form_auth" 
                                    src="/morozov_images/model_3.jpg"
                                    width="495"
                                    height="253"
                                />
                            </div>
                            <p>
                                Решая полученную систему конечно-разностных алгебраических уравнений, получим значения искомой функции в узлах сетки Аs , т.е. приближенное численное решение краевой задачи. 
                            </p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Блок-схема алгоритма расчета параметров на временном слое</h3>
                            <div>
                                <Image 
                                    alt="form_registr" 
                                    src="/morozov_images/model_4.jpg"
                                    width="198"
                                    height="553"
                                />
                            </div>
                            <p>
                                 Циклическое повторение счета шага по времени в соответствии с вышеописанной последовательностью действий дает информацию о нестационарном развитии процесса во времени. 
                            </p>
                        </div>
                    </div>
                    
                    </section>

                    <section className={styles.fourth_section}>
                    <header>Интерфейс программы</header>
                    <h2>
                        Интерфейс состоит из главного меню, элемента TabControl в котором находятся 5 вкладок, и кнопок управления.
                    </h2>
                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Экранная форма - вкладка Терминал.</h3>
                            <div>
                                <Image 
                                    alt="text_editor" 
                                    src="/morozov_images/model_5.jpg"
                                    width="905"
                                    height="545"
                                />
                            </div>
                            <p>
                                1 вкладка – Терминал. Предназначена для вывода списка проделанных вычислений текущего сеанса.
                            </p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Экранная форма - вкладка Входные данные.</h3>
                            <div>
                                <Image 
                                    alt="admin_it" 
                                    src="/morozov_images/model_6.jpg"
                                    width="832"
                                    height="545"
                                />
                            </div>
                            <p>2 вкладка – Входные данные. Предназначена для ввода входных параметров системы. Также имеет меню настройки и запуска автоматического подбора.</p>
                        </div>
                    </div>

                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Экранная форма - вкладка Выходные данные.</h3>
                            <div>
                                <Image 
                                    alt="text_editor" 
                                    src="/morozov_images/model_7.jpg"
                                    width="832"
                                    height="545"
                                />
                            </div>
                            <p>3 вкладка – Выходные данные (таблица). Выводит выходные данные текущего экземпляра класса вычислений в виде таблицы.</p>
                        </div>
                        <div className={styles.second_photo_on_string}>
                            <h3>Экранная форма - вкладка Графики (Время по оси X).</h3>
                            <div>
                                <Image 
                                    alt="admin_it" 
                                    src="/morozov_images/model_8.jpg"
                                    width="1366"
                                    height="728"
                                />
                            </div>
                            <p>4 вкладка  - Выходные данные (текст). Выводит выходные данные текущего экземпляра класса вычислений в виде текста.</p>
                        </div>
                    </div>
                    <div className={styles.block_photos_fifth_section}>
                        <div className={styles.first_photo_on_string}>
                            <h3>Экранная форма - вкладка Графики (Путь снаряда по оси X).</h3>
                            <div>
                                <Image 
                                    alt="text_editor" 
                                    src="/morozov_images/model_9.jpg"
                                    width="1366"
                                    height="728"
                                />
                            </div>
                            <p>5 вкладка  - Графики. Выводит графики исходя из выходных данных текущего экземпляра класса вычислений.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.third_section}>
                    <header>Заключение</header>
                    <div className={styles.sixth_text}>
                        <p>С научной точки зрения, тема исследовательской работы, показывает, как создание новых моделей высокоэнергетических процессов или модернизация старых приводит к улучшению энергетических характеристик системы путем отладки и выявление наилучших параметров системы.</p><br/>
                        <p>Если взять образовательный аспект исследовательской работы, то полученная программа, поможет студентам лучше понять работу многопараметрических систем и освоить навыки их моделирования, что в какой-то степени может заменить реальные эксперименты.</p><br/>
                    </div>
                </section>
                <section className={styles.third_section}>
                    <header>Контакты</header>
                    <div className={styles.sixth_text}>
                        
                            <div>
                                <h1>
                                Почта
                                </h1> 
                                <p><a href="mailto:morozov@mail.ru" className={styles.link}>morozov@mail.ru</a></p><br/>
                            </div>
                            <div>
                                <h1>
                                    Телеграм
                                </h1>
                                <p><a href="https://t.me/morozov" className={styles.link}>@morozov</a></p><br/>
                            </div>
                          
                            <div>
                                <h1>
                                    Вконтакте
                                </h1>
                                <p><a href="https://vk.com/morozov" className={styles.link}>vk.com/morozov</a></p><br/>
                            </div>
                        </div>
                </section>
            </main>
        </MainLayout>
    )
}