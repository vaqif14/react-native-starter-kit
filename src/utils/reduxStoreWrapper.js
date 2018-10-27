import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from 'store';
import { PersistGate } from 'redux-persist/lib/integration/react';

function storeReduxWrapper(Component) {
  return class StoreWrapper extends PureComponent {
    render() {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component />
          </PersistGate>
        </Provider>
      );
    }
  };
}

export default storeReduxWrapper;
