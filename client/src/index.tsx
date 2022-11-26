import 'the-new-css-reset/css/reset.css';
import './styles/index.scss';
import 'airbnb-browser-shims';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';
import { store } from './redux/store';

const root = createRoot(document.querySelector('.app') as HTMLDivElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
