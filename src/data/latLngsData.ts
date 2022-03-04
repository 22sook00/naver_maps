export interface ILatLngs {
  id: number;
  place: string;
  lat: number;
  lng: number;
}

export const latLngs: Array<ILatLngs> = [
  {
    id: 0,
    place: "엔코위더스",
    lat: 37.41294935143856,
    lng: 127.09955770039731,
  },
  { id: 1, place: "네이버", lat: 37.3595704, lng: 127.105399 },
  { id: 2, place: "카카오", lat: 37.40228899804626, lng: 127.10865025578934 },

  {
    id: 3,
    place: "그리운 김포집",
    lat: 37.632422792752344,
    lng: 126.7016348539443,
  },
  {
    id: 4,
    place: "서울대학교",
    lat: 37.45674794740355,
    lng: 126.95018870181823,
  },
  { id: 5, place: "팔각정", lat: 37.55186586139319, lng: 126.98648263718961 },
  {
    id: 6,
    place: "숙대입구역",
    lat: 37.545241592110145,
    lng: 126.97201918466735,
  },
  { id: 7, place: "수목금토", lat: 37.51461046162435, lng: 127.02542816928462 },
];
