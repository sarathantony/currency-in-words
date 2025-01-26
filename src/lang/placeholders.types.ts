import { CommonLangType, LangTypes } from "../index.types";

type CommonPlaceValues = 'hundred' | 'thousand' | 'and';

export type IndianLangTypes = CommonLangType | 'hi';

export type InternationalPlaceValues = CommonPlaceValues | 'million' | 'billion' | 'trillion';
export type IndianPlaceValues = CommonPlaceValues | 'lakh' | 'crore';

export type InternationalPlaceValuesMap = Record<InternationalPlaceValues, string>;
export type IndianPlaceValuesMap = Record<IndianPlaceValues, string>;

export type InternationalLangMap = Record<Exclude<LangTypes, Omit<IndianLangTypes, CommonLangType>>, InternationalPlaceValuesMap>;
export type IndianLangMap = Record<Extract<LangTypes, IndianLangTypes>, IndianPlaceValuesMap>;
