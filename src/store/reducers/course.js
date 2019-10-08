const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "Iniciando com React",
            lessons: [
                { id: 1, title: "Primeira aula" },
                { id: 2, title: "Segunda aula" }
            ],
        },
        {
            id: 2,
            title: "Aprendendo Redux",
            lessons: [
                { id: 3, title: "Terceira aula" },
                { id: 4, title: "Quarta aula" }
            ],
        },
    ]
};

//Esta função é destinada a retornar o State inicial da aplicação e alterar o State da aplicação quando uma action acontecer
export default function course(state = INITIAL_STATE, action){
    if(action.type == 'TOGGLE_LESSON'){
        return {
            ...state, //copiando o restante das informações de state que não desejo mudar
            activeLesson: action.lesson, //Mudando activeLesson de State
            activeModule: action.module, //Mudando activeModule de State
        }
    }
    
    return state
}

/**
 * O reducer 'Course' recebe dois parâmetros quando uma action acontece. O primeiro parâmetro é o State da aplicação ANTES da action acontecer.
 * O segundo parâmetro é a action em si.
 */