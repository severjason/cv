import * as React from 'react';
import './index.css';
import { Header, Objective, Education, Skills, Other, Experience } from '../../components';
import 'semantic-ui-css/semantic.min.css';

const App: React.StatelessComponent = () => {
    return (
        <div className="ui container cv-wrapper">
            <Header/>
            <Objective/>
            <div className="ui grid">
                <Education/>
                <Skills/>
                <Experience/>
                <Other/>
            </div>
        </div>
    );
};

export default App;
