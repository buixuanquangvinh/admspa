import '@sdc-wob-type-3/group-ui/dist/group-ui/assets/themes/vwag/vwag.css'
import { applyPolyfills, defineCustomElements } from '@sdc-wob-type-3/group-ui/dist/loader';

applyPolyfills().then(() => {
    defineCustomElements();
});