/* eslint max-statements: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import focusSource from '@starbucks/pattern-library/lib/helpers/focus-source';
import { createBrowserHistory } from 'history';
import ensurePolyfills from '../utils/ensure-polyfills';
import mergeCachedAndBootstrapData from '../utils/merge-cached-and-bootstrap-data';
import { getAllCached } from '../../utils/cache-helper';
import { getBootstrapData } from '../../utils/bootstrap-data';
import { cacheOptionsSelector } from '../state/selectors/config';
import { getDebugLogger, IS_DEBUG } from '../utils/debug';
import { addDOMEventTracking } from '../../utils/ga-tracking-dom';
import {
  setOneTimeCanonicalVariables,
  setInitialUserVariables
} from '../../utils/uo-tracking';

import '@starbucks/pattern-library/lib/styles/fonts.css';
import '@starbucks/pattern-library/lib/styles/index.css';

// Hot mode doesn't work with ExtractTextPlugin, so we can't
// generate the fontLoader.css bundle to call loadCSS with.
// As a workaround, we synchronously include the pattern
// library font CSS in hot mode only.
if (process.env.NODE_ENV === 'development' && module.hot) {
  require('@starbucks/pattern-library/lib/styles/fonts.css');
}

export default (Root, getStore, apps) => {
  const locale = document.documentElement.lang;

  const run = () => {
    const bootstrapData = getBootstrapData();
    const cacheOptions = cacheOptionsSelector(bootstrapData);
    const hasOptions = Boolean(
      cacheOptions && Object.keys(cacheOptions).length
    );

    if (IS_DEBUG && hasOptions) {
      console.time('getAllCached'); // eslint-disable-line no-console
    }

    // If we don't have cache options, we don't want to run `getAllCached`
    // because it'll blow away any anonymous keys in other subapps
    const getData = hasOptions
      ? getAllCached(cacheOptions)
      : Promise.resolve({});

    getData.then(data => {
      if (IS_DEBUG && hasOptions) {
        console.timeEnd('getAllCached'); // eslint-disable-line no-console
      }
      const intlMessages = window.__INTL_MESSAGES;
      const intlFormats = window.__INTL_FORMATS;

      const startingData = mergeCachedAndBootstrapData(
        data,
        bootstrapData,
        apps
      );

      // provide visility into starting data
      const log = getDebugLogger('orange');
      const hasCacheData = Boolean(data && Object.keys(data).length);
      if (hasCacheData) {
        log('cache data:', data);
      }
      log('bootstrap data:', bootstrapData);
      if (hasCacheData) {
        log(`combined start data:`, startingData);
      }

      const store = (window.store = getStore({
        data: startingData,
        env: {
          createHistory() {
            const historyOptions = {};
            if (window.location.pathname.startsWith('/app/')) {
              // `basename` only is used for local development within the `/app/*` paths.
              // React Router will use it to transparently add the `/app` to the front of all Link paths.
              historyOptions.basename = '/app';
            }
            return createBrowserHistory(historyOptions);
          }
        }
      }));

      focusSource();
      addDOMEventTracking();
      setOneTimeCanonicalVariables();
      setInitialUserVariables(startingData);

      ReactDOM.render(
        <Root
          store={store}
          history={store.history}
          routes={store.routes}
          locale={locale}
          formats={intlFormats}
          messages={intlMessages}
        />,
        document.getElementById('js-content')
      );
    });
  };

  ensurePolyfills(locale, run);
};
