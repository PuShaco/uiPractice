import { atom, createStore } from "jotai";

export const cityNameAtom = atom<string>("seoul");

export const serverStateAtom = atom<string>("idle"); // loader함수 실행 시 서버 상태를 다루기 위한 상태값.

export const mainStore = createStore();
