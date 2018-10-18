import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron
  .configure({
    name: 'React Native Demo',
    host: '192.168.1.35',
    port: 9090,
  })
  .useReactNative()
  .use(reactotronRedux({
    isActionImportant: true,
  }))
  .connect();

reactotron.clear();

console.log = Reactotron.log;

export default reactotron;
