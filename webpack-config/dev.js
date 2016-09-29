import BaseConfig from './base.js';
import deepMerge from 'deepmerge';

const DevConfig = {
	devtool:'source-map'
};
module.exports = deepMerge(BaseConfig,DevConfig);