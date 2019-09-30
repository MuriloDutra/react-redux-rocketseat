import React from 'react';
import { connect } from 'react-redux'; //Para compartilhar o State do Redux com algum componente

const  Sidebar = ({ modules }) => (
    <aside>
        { modules.map(module => (
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>{lesson.title}</li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
);

export default connect(state => ({ modules: state.modules }))(Sidebar);
//Connect recebe como primeiro parâmetro uma função, que recebe o State de Redux e deve retornar quais propriedades de State eu desejo usar nesse componente.