import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron
  .configure({
    name: 'React Native Demo',
    host: 'localhost',
    port: 9090,
  })
  .useReactNative()
  .use(reactotronRedux({
    isActionImportant: true,
  }))
  .connect();

console.log = Reactotron.log;

export default reactotron;
