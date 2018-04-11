import * as React from 'react';

const Skills: React.StatelessComponent = () => {
    return (
        <div className="eight wide column">
            <p className="cv-info-title">Навыки</p>
            <div className="ui divider cv-divider"/>
            <ul className="ui list">
                <li>
                    <span>
                        <strong>HTML5, CSS3, SCSS</strong>
                    </span>
                </li>
                <li>
                    <span>
                        <strong>JavaScript / Typescript</strong>  -
                    имею хорошую теоретическую базу и практический опыт программирования. Имею опыт создания графических
                    элементов &lt;canvas&gt; c использованием Fabric.js.
                    </span>

                </li>
                <li>
                    <span>
                        <strong>ReactJS + Redux</strong>  -
                        в настоящее время активно изучаю и интересуюсь указанными технологиями.
                    </span>
                </li>
                <li>
                    <span>
                        <strong>AngularJS</strong>  -
                        обладаю базовым представлением о фреймворке, имею опыт написания некоторых тестовых заданий.
                    </span>
                </li>
                <li>
                    <span>
                        <strong>Bootstrap, Semantic-ui, Semantic-ui-react</strong>
                    </span>
                </li>
                <li>
                    <span>
                        <strong>Webpack, Gulp</strong>
                    </span>
                </li>
                <li>
                    <span>
                        <strong>Karma, Jasmine</strong>
                    </span>
                </li>
                <li>
                    <span>
                        <strong>git, yarn, npm</strong>
                    </span>
                </li>
                <li>
                    <span>
                        <strong>Fabric.js</strong>
                    </span>
                </li>
                <li>
                    <span>
                        <i>
                           Большинство технологий изучал самостоятельно, из последних прочитанных книг хочу отметить:
                            <br/>
                            Fullstack React - The Complete Guide to ReactJS and Friends<br/>
                            ng-book - The Complete Guide to Angular<br/>
                        </i>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Skills;