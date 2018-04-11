import * as React from 'react';

const Other: React.StatelessComponent = () => {
    return (
        <div className="eight wide column">
            <p className="cv-info-title">Дополнительная информация</p>
            <div className="ui divider cv-divider"/>
            <ul className="ui list">
                <li>
                    <span>
                        <strong>English level:&nbsp;</strong>upper-intermediate
                    </span>
                </li>
                <li>
                    <span>
                        <strong>Среда разработки:&nbsp;</strong>WebStorm.
                    </span>

                </li>
                <li>
                    <span>
                        <strong>ОС:&nbsp;</strong>Windows, Linux (Ubuntu).
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Other;