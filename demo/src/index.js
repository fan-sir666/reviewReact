import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { ConfigProvider } from 'antd';
moment.locale('zh-cn');
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConfigProvider locale={zhCN}>
                <App />
            </ConfigProvider>
        </PersistGate>
    </Provider>);
