import { FormatTypes, LangTypes } from "../index.types";

/**
 * Global configuration object that stores default values for `lang` and `format`.
 * These values are used across the application unless overridden explicitly.
 *
 * @type {object}
 * @property {LangTypes} lang - The default language. Defaults to 'en'.
 * @property {FormatTypes} format - The default format. Defaults to 'in'.
 */
const globalConfig = {
  lang: 'en' as LangTypes,
  format: 'in' as FormatTypes,
};

/**
 * Updates the global configuration with the provided values.
 * Only the specified properties (`lang` or `format`) will be updated.
 *
 * @param {object} config - The configuration object to update.
 * @param {LangTypes} [config.lang] - The language to set. Optional.
 * @param {FormatTypes} [config.format] - The format to set. Optional.
 *
 * @example
 * setGlobalConfig({ lang: 'fr', format: 'intl' }); // Updates both lang and format
 * setGlobalConfig({ lang: 'es' }); // Updates only lang
 */
export const setGlobalConfig = (config: { lang?: LangTypes; format?: FormatTypes }) => {
  if (config.lang) globalConfig.lang = config.lang;
  if (config.format) globalConfig.format = config.format;
};

/**
 * Retrieves the current global configuration.
 *
 * @returns {object} The global configuration object.
 * @property {LangTypes} lang - The current default language.
 * @property {FormatTypes} format - The current default format.
 *
 * @example
 * const config = getGlobalConfig();
 * console.log(config.lang); // Output: 'en' (or the current value)
 * console.log(config.format); // Output: 'in' (or the current value)
 */
export const getGlobalConfig = () => globalConfig;
