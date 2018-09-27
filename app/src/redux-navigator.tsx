import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect} from 'react-redux';

import AppNavigator from './app-navigator';
import { IStore } from './store';

const App = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = (state: IStore) => ({
  state: state.nav,
});

// @ts-ignore
export default connect(mapStateToProps)(App);