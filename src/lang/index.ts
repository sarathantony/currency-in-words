import * as de from './de';
import * as en from './en';
import * as es from './es';
import * as fr from './fr';
import * as hi from './hi';
import * as it from './it';
import * as nl from './nl';
import * as pt from './pt';

/**
 * A map that associates language codes with their respective language data modules.
 * Each key in the map is a language code (e.g., 'en', 'es'), and the value is the
 * corresponding module containing language-specific data (e.g., `singleDigit`, `twoDigit`, `caseOne`).
 *
 * @type {Object.<string, Object>}
 * @property {Object} de - Language data for German.
 * @property {Object} en - Language data for English.
 * @property {Object} es - Language data for Spanish.
 * @property {Object} fr - Language data for French.
 * @property {Object} hi - Language data for Hindi.
 * @property {Object} it - Language data for Italian.
 * @property {Object} nl - Language data for Dutch.
 * @property {Object} pt - Language data for Portuguese.
 *
 * @example
 * // Accessing language data for English
 * const { singleDigit, twoDigit, caseOne } = langMap['en'];
 *
 * // Accessing language data for Spanish
 * const spanishData = langMap['es'];
 */
const langMap = {
  de,
  en,
  es,
  fr,
  hi,
  it,
  nl,
  pt,
};

export default langMap;
