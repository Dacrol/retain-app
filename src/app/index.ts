/**
 * Created by Dacrol on 2016-08-24.
 */
import * as services from './services';
export { App } from './app';
export { routes } from './routes';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
    ...mapValuesToArray(services)
]