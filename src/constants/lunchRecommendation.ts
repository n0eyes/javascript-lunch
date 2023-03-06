import { Values } from '../types/common';

export const CATEGORY = Object.freeze({
  ALL: '전체',
  KOREAN: '한식',
  CHINESE: '중식',
  JAPANESE: '일식',
  WESTERN: '양식',
  ASIAN: '아시안',
  ETC: '기타',
});

export const SORT_OPTIONS = Object.freeze({
  DISTANCE: '거리순',
  NAME: '이름순',
});

export const MAX_NAME_LENGTH = 20;
export const MAX_DESCRIPTION_LENGTH = 50;

export const ERROR_MESSAGE = Object.freeze({
  BLANK: '공백 없이 입력해주세요.',
  EMPTY: '아무것도 입력하지 않았습니다.',
  NAME_FORMAT: '영어, 한글, 숫자 외에는 입력할 수 없습니다.',
  NAME_LENGTH: `음식점 이름은 ${MAX_NAME_LENGTH}자 이하로 해주세요.`,
  DESCRIPTION_LENGTH: `음식점 설명은 ${MAX_DESCRIPTION_LENGTH}자 이하로 해주세요.`,
  LINK_FORMAT: '올바른 링크 형식이 아닙니다.',
});

export const REGEX = Object.freeze({
  BLANK: /\s/,
  NAME: /^[a-zA-Z가-힣0-9]*$/,
  URL: /(((http(s)?:\/\/)\S+(\.[^(\n|\t|\s,)]+)+)|((http(s)?:\/\/)?(([a-zA-z\-_]+[0-9]*)|([0-9]*[a-zA-z\-_]+)){2,}(\.[^(\n|\t|\s,)]+)+))+/gi,
});

export type Category = Values<typeof CATEGORY>;
export type SortOption = Values<typeof SORT_OPTIONS>;
