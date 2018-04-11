import * as React from 'react';

const Education: React.StatelessComponent = () => {
    return (
        <div className="eight wide column">
            <p className="cv-info-title">Образование</p>
            <div className="ui divider cv-divider"/>
            <ul className="ui list">
                <li>
                    <span>
                        2004-2009<br/>
                        <span className="cv-main-color">Технология строения авиационных двигателей - специалист</span>
                        <br/>
                        <span>Запорожский национальный технический университет</span><br/>
                        <i>Диплом с отличием</i>
                    </span>
                </li>
                <li>
                    <span>
                        2005-2009<br/>
                        <span className="cv-main-color">Финансы и кредит - специалист</span><br/>
                        <span>Запорожский национальный технический университет</span>
                    </span>
                </li>
                <li>
                    <span>
                        2013<br/>
                        <span className="cv-main-color">Компьютерные курсы по PHP</span><br/>
                        <span>Академия "ШАГ"</span><br/>
                        <i>На курсах получил только общее представление о языке, в дальнейшем изучал его самостоятельно.
                        </i>
                    </span>

                </li>
                <li>
                    <span>
                        2016-2017<br/>
                        <span className="cv-main-color">Курсы по направлению Front-End</span><br/>
                        <span>Brain Academy</span><br/>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Education;