import { atom } from 'recoil'
import { FilterQeuryType } from '../types';

export const isfilterCategoryBtnAtom = atom<boolean>({
	key: 'isfilterCategoryBtnAtom',
	default: false,
});

export const fieldStateAtom = atom<string>({
	key: 'fieldAtom',
	default: '',
});

export const filterObjectAtom = atom<FilterQeuryType[]>({
	key: 'filterObjectAtom',
	default: [],
});

export const SearchValueAtom = atom<string>({
	key: 'SearchValueAtom',
	default: "",
});