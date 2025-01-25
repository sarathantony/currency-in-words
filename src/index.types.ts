/**
 * in: Indian system
 * intl: International system
 */
export type FormatTypes = 'in' | 'intl'

/**
 * Supported languages
 *
 * de: German
 * en: English
 * es: Spanish
 * fr: French
 * hi: Hindi
 * it: Italian
 * nl: Dutch
 * pt: Portuguese
 */
export type LangTypes = 'de' | 'en' | 'es' | 'fr' | 'hi' | 'it' | 'nl' | 'pt'

export interface IConvert {
  format?: FormatTypes
  lang?: LangTypes
}

export interface ConvertProps {
  value: string
  options?: IConvert
}