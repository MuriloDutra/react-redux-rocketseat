import React from 'react';
import { Provider } from 'react-redux'; //Tudo que estiver dentro de Provider, terá acesso a Store
import store from './store'; //Precisa ser passado como parâmetro para o Provider

import Sidebar from './components/Sidebar';
import Video from './components/Video';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Video/>
        <Sidebar/>
      </Provider>
    </div>
  );
}

export default App;
