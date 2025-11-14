import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App.tsx';

if (module.hot) {
  module.hot.accept();
}

AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
