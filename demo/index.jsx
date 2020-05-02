import { createElement, render, useState } from 'rax';
import DriverUniversal from 'driver-universal';
import View from 'rax-view';
import Text from 'rax-text';
import PullToRefreshIndicator, {
  PullToRefreshState,
} from 'rax-pull-to-refresh-indicator';

import styles from './styles';

const App = () => {
  const [ptrState, setPtrState] = useState(PullToRefreshState.STATIC);

  return (
    <View>
      <View style={styles.btnList}>
        {[
          PullToRefreshState.STATIC,
          PullToRefreshState.PULLING,
          PullToRefreshState.READY,
          PullToRefreshState.REFRESHING,
          PullToRefreshState.RETRACTING,
        ].map((e) => (
          <Text style={styles.btn} onClick={() => setPtrState(e)}>
            {PullToRefreshState[e]}
          </Text>
        ))}
      </View>

      <PullToRefreshIndicator state={ptrState} />
    </View>
  );
};

render(<App />, document.body, { driver: DriverUniversal });
