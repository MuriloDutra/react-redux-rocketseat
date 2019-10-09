import React from 'react';
import { connect } from 'react-redux'; //Para compartilhar o State do Redux com algum componente
import * as CourseActions from '../../store/actions/course' //Importando todas as actions de Course
import { bindActionCreators } from 'redux' //Mapeia todas as actions e as tranforma em propriedades para o componente

//Criando componente usando 'const'
const Sidebar = ({ modules, toggleLesson }) => (
    <aside>
        { modules.map(module => (
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>
                            {lesson.title}
                            <button onClick={() => toggleLesson(module, lesson)}>
                                Selecionar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
);

const mapStateToProps = state => ({ 
    modules: state.course.modules 
})

const mapDispatchToProps = dispatch =>   ({
    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

//const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)
/* Connect recebe como primeiro parâmetro uma função, que recebe o State de Redux e deve retornar quais propriedades de State eu desejo usar em um componente, 
   no exemplo acima, o componente é Sidebar.
   
   Todo componente que utiliza o 'connect', recebe como parâmetro a função dispatch, perceba que o componente Sidebar recebe como parâmetro dispatch.
   A função dispatch é utilizada para lançar ACTIONS para o Redux.   
*/