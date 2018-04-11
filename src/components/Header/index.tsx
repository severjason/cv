import * as React from 'react';
import './index.css';

const Header: React.StatelessComponent = () => {
    return (
        <div className="ui grid cv-header">
            <div className="eight wide column cv-title">
                <h1 className="ui header">Сергей Северинов</h1>
                <h3 className="ui header cv-main-color">Front-End разработчик</h3>
            </div>
            <div className="eight wide column ">
                <p className="cv-info-title">Контактная информация</p>
                <div className="ui divider cv-divider"/>
                <div>
                    <i className="birthday cake icon"/>: <span>28.07.1987</span>
                </div>
                {/*<div>
                    <i className="address outline card icon"/>: <span>Школьная 20/19</span>
                </div>*/}
                <div>
                    <i className="phone icon"/>:&nbsp;<a href="tel:+38 (050) 543-60-17">+38 (050) 543-60-17</a>
                </div>
                <div>
                    <i className="envelope outline icon"/>:&nbsp;
                    <a href="mailto:ssever2010@gmail.com">
                        ssever2010@gmail.com
                    </a>
                </div>
                <div>
                    <i className="github icon"/>: <a href="https://github.com/severjason">severjason</a>
                </div>
                <div>
                    <i className="globe icon"/>: <a href="http://jswebdev.net">jswebdev.net</a>
                </div>
            </div>
        </div>
    );
};

export default Header;