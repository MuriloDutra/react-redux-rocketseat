import React from 'react';
import { connect } from 'react-redux'

const Video = ({activeLesson, activeModule}) => (
    <div>
        <strong>Módulo: { activeModule.title }</strong><br/>
        <span>Aula: { activeLesson.title }</span>
    </div>
)

const mapStateToProps = state => ({ //Recuperando alguns dados do State
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule,
})

export default connect(mapStateToProps)(Video)// Fazendo a 'ligação' entre os dados de mapStateToProps e o componente