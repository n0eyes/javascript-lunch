import { RestaurantInfo } from '../domain/model/LunchRecommendation';
import { addData } from '../utils/common/localStorage';

const mockData: RestaurantInfo[] = [
  {
    id: 0,
    name: '피양콩할머니',
    category: '한식',
    distance: 10,
    description: '2005년 장모님에게 전수받은 설렁탕 조리법을 개선하여 시작했다는 외고...',
    link: 'www.www',
  },
  {
    id: 1,
    name: '중국집할머니',
    category: '중식',
    distance: 10,
    description: 'desc',
    link: 'www.www',
  },
  {
    id: 2,
    name: '일본집할머니',
    category: '일식',
    distance: 10,
    description: 'desc',
    link: 'www.www',
  },
  {
    id: 3,
    name: '서양집할머니',
    category: '양식',
    distance: 10,
    description: 'desc',
    link: 'www.www',
  },
  {
    id: 4,
    name: '동남아할머니',
    category: '아시안',
    distance: 10,
    description: 'desc',
    link: 'www.www',
  },
  {
    id: 5,
    name: '피양콩할아버지',
    category: '한식',
    distance: 20,
    description: '2005년 장모님에게 전수받은 설렁탕 조리법을 개선하여 시작했다는 외고...',
    link: 'www.www',
  },
  {
    id: 6,
    name: '중국집할아버지',
    category: '중식',
    distance: 20,
    description: 'desc',
    link: 'www.www',
  },
  {
    id: 6,
    name: '일본집할아버지',
    category: '일식',
    distance: 20,
    description: 'desc',
    link: 'www.www',
  },
  {
    id: 7,
    name: '서양집할아버지',
    category: '양식',
    distance: 30,
    description: 'desc',
    link: 'www.www',
  },
  {
    id: 8,
    name: '동남아할아버지',
    category: '아시안',
    distance: 10,
    description: 'desc',
    link: 'www.www',
  },
];

export const initMockData = () => addData(mockData);