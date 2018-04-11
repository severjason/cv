import * as React from 'react';

const Experience: React.StatelessComponent = () => {
    return (
        <div className="eight wide column">
            <p className="cv-info-title">Опыт работы</p>
            <div className="ui divider cv-divider"/>
            <ul className="ui list">
                <li>
                    <span>
                        <strong>
                            2012 -&nbsp;
                            <a href="http://chp.zp.ua" target="_blank">chp.zp.ua&nbsp;</a>
                        </strong>
                        - создан на CMS Joomla с использованием VirtueMart.
                        В настоящее время не поддерживается.
                    </span>
                </li>
                <li>
                    <span>
                        <strong>2013 - ilooked.net&nbsp;</strong>
                        - создан на CMS Joomla с использованием незначительно отредактированного
                        шаблона от компании YOOtheme.
                        Довел количество посетителей до 600 в день. В настоящее время закрыт.
                    </span>
                </li>
                <li>
                    <span>
                        <strong>2014 - oDesk</strong> - работал PHP/JavaScript разработчиком: <br/>
                        1. Написание скриптов для PHP библиотеки ISO стандартов в открытом проекте;<br/>
                        2. Верстка и дизайн страниц для закрытого проекта с использованием Bootstrap и Less.js;<br/>
                        3. Настройка и перенос на новый домен сайта на WordPress.
                    </span>
                </li>
                <li>
                    <span>
                        <strong>
                            2017 - &nbsp;
                            <a href="http://arcomage.jswebdev.net" target="_blank">arcomage.jswebdev.net&nbsp;
                            </a>
                        </strong>
                        - итоговый проект с курсов Brain Academy. Карточная игра по типу игры из серии Might and Magic.
                        Использованы следующие технологии: Typescript, Fabric.js, jQuery, Webpack.
                    </span>
                </li>
                <li>
                    <span>
                        <strong>
                            2009-2018 - АО "Мотор Сич"
                        </strong>
                        - ведущий инженер внешнеторгового департамента.
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Experience;