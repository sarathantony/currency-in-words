import {
  InternationalPlaceValuesMap,
  IndianPlaceValuesMap,
  InternationalLangMap,
  IndianLangMap,
  IndianLangTypes
} from "./placeholders.types";

import { CommonLangType, LangTypes } from "../index.types";
import { getGlobalConfig } from "../lib/globalConfig";

const { lang } = getGlobalConfig();

/**
 * Placeholder values for international numbering systems.
 */
const internationalMap: InternationalLangMap = {
  de: {
    hundred: 'hundert',
    thousand: 'tausend',
    million: 'million',
    billion: 'milliarde',
    trillion: 'billion',
    and: 'und',
  },
  en: {
    hundred: 'hundred',
    thousand: 'thousand',
    million: 'million',
    billion: 'billion',
    trillion: 'trillion',
    and: 'and',
  },
  es: {
    hundred: 'centenar',
    thousand: 'mil',
    million: 'millón',
    billion: 'mil millones',
    trillion: 'billón',
    and: 'y',
  },
  fr: {
    hundred: 'cent',
    thousand: 'mille',
    million: 'million',
    billion: 'milliard',
    trillion: 'billion',
    and: 'et',
  },
  it: {
    hundred: 'centinaio',
    thousand: 'mille',
    million: 'milioni',
    billion: 'miliardi',
    trillion: 'trilioni',
    and: 'e',
  },
  nl: {
    hundred: 'honderd',
    thousand: 'duizend',
    million: 'miljoen',
    billion: 'miljard',
    trillion: 'biljoen',
    and: 'en',
  },
  pt: {
    hundred: 'centenas',
    thousand: 'mil',
    million: 'milhão',
    billion: 'bilhão',
    trillion: 'trilhão',
    and: 'e',
  },
};

/**
 * Placeholder values for the Indian numbering system.
 */
const indianMap: IndianLangMap = {
  hi: {
    hundred: 'सौ',
    thousand: 'हज़ार',
    lakh: 'लाख',
    crore: 'करोड़',
    and: 'और',
  },
  en: {
    hundred: 'hundred',
    thousand: 'thousand',
    lakh: 'lakh',
    crore: 'crore',
    and: 'and'
  }
};

/**
 * Retrieves the international place values for the current language.
 * Throws an error if the language is not supported for international place values.
 *
 * @returns The international place values for the current language.
 * @throws Error if the language is not supported.
 */
export const getInternationalPlaceValues = (): InternationalPlaceValuesMap => {
  // Define the valid international languages (all LangTypes except 'hi')
  type InternationalLangTypes = Exclude<LangTypes, Omit<IndianLangTypes, CommonLangType>>;

  // Check if the current language is not a valid international language
  if (!(lang in internationalMap)) {
    throw new Error(`Unsupported language for international place values: ${lang}`);
  }

  // Cast `lang` to `InternationalLangTypes` to ensure type safety
  const internationalLang = lang as InternationalLangTypes;

  // Return the international place values
  return {
    hundred: internationalMap[internationalLang]['hundred'],
    thousand: internationalMap[internationalLang]['thousand'],
    million: internationalMap[internationalLang]['million'],
    billion: internationalMap[internationalLang]['billion'],
    trillion: internationalMap[internationalLang]['trillion'],
    and: internationalMap[internationalLang]['and'],
  };
};

/**
 * Retrieves the Indian place values for the specified language.
 * Throws an error if the language is not supported for Indian place values.
 *
 * @returns The Indian place values for the specified language.
 * @throws Error if the language is not supported.
 */
export const getIndianPlaceValues = (): IndianPlaceValuesMap => {
  if (!(lang in indianMap)) {
    throw new Error(`Unsupported language for Indian place values: ${lang}`);
  }

  const indianLang = lang as IndianLangTypes;

  return {
    hundred: indianMap[indianLang]['hundred'],
    thousand: indianMap[indianLang]['thousand'],
    lakh: indianMap[indianLang]['lakh'],
    crore: indianMap[indianLang]['crore'],
    and: indianMap[indianLang]['and']
  }
};

