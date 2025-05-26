const Module = require('@beyond-js/bundlers-sdk/module');
const Bundler = require('@beyond-js/bundlers-sdk/bundler');
const ProcessorsResolver = require('@beyond-js/bundlers-sdk/bundler/processors/resolver');

module.exports = class extends Module {
	_conditionals() {
		/**
		 * Process the platforms
		 */
		let { platforms } = this.specs.source.values;
		platforms = typeof platforms === 'string' ? [platforms] : platforms;
		platforms = platforms || ['default'];
		platforms = platforms?.filter(platform => platform && typeof platform === 'string');
		platforms = platforms instanceof Array ? platforms : ['default'];

		const conditions = platforms.map(platform => ({ platform }));
		return conditions;
	}

	_conditional({ platform }) {
		return new Bundler(this, { platform }, { Processors: ProcessorsResolver });
	}

	/**
	 * All the properties that are not reserved for the module specification are considered
	 * the specs of the processors
	 *
	 * @returns {Map<string, {specifier: string}>}
	 */
	_processors() {
		const specs = this.specs.source.values;
		const reserved = ['platforms'];

		const processors = new Map();
		for (const [key, value] of Object.entries(specs)) {
			if (reserved.includes(key)) continue;
			processors.set(key, { specifier: value });
		}

		return { processors };
	}
};
