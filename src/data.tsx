import * as React from 'react';

import userImage01 from 'images/users/user-image05.jpg';
import userImage02 from 'images/users/user-image04.jpg';
import userImage03 from 'images/users/user-image02.jpg';

import animalImage from 'images/category/animal.jpg';
import bookImage from 'images/category/book.jpg';
import cookingImage from 'images/category/cooking.jpg';
import karaokeImage from 'images/category/karaoke.jpg';
import liveImage from 'images/category/live.jpg';
import musicImage from 'images/category/music.jpg';
import outdoorImage from 'images/category/outdoor.jpg';
import sweetsImage from 'images/category/sweets.jpg';
import sportsImage from 'images/category/sports.jpg';
import travelImage from 'images/category/travel.jpg';

export default [
  {
    isNew: true,
    isConfirmed: true,
    isDetail: false,
    isLike: false,
    isUnLike: false,
    isMatching: false,
    name: "あざらし",
    age: 23,
    place: "神奈川",
    mainImage: userImage01,
    prevIndex: 0,
    appeal: <span><strong>美容関係</strong>の仕事をしています</span>,
    introduction: <span>動物園に会いにきてください！待ってます。<br/>よろしくおねがいします！</span>,
    thumbnails: [
      { image: userImage01, isActive: true },
      { image: userImage02, isActive: false },
      { image: userImage03, isActive: false },
    ],
    category: [
      { image: animalImage, text: '動物好き'},
      { image: bookImage, text: '読書好き'},
      { image: cookingImage, text: '料理好き'},
      { image: karaokeImage, text: '歌うのが好き'},
      { image: liveImage, text: 'ライブ・フェス好き'},
      { image: musicImage, text: '音楽好き'},
      { image: outdoorImage, text: 'アウトドア好き'},
      { image: sweetsImage, text: 'スイーツ好き'},
      { image: sportsImage, text: 'スポーツ観戦好き'},
      { image: travelImage, text: '旅行好き'},
    ],
    profile: [
      { title: '出身地', text: '広島'},
      { title: '血液型', text: 'A'},
      { title: '体型', text: '普通'},
      { title: '学歴', text: '大学卒'},
      { title: '仕事', text: 'オフィス'},
      { title: '休日', text: '土日'},
      { title: '煙草', text: '吸わない'},
      { title: 'お酒', text: 'よく飲む'},
      { title: '身長', text: '155cm'},
      { title: '一緒に住んでいる人', text: '一人暮らし'},
    ]
  },
  {
    isNew: false,
    isConfirmed: true,
    isDetail: false,
    isLike: false,
    isUnLike: false,
    isMatching: false,
    name: "ゴリラ",
    age: 25,
    place: "東京都",
    mainImage: userImage02,
    prevIndex: 0,
    appeal: <span><strong>動物園</strong>の仕事をしています</span>,
    introduction: <span>動物園に会いにきてください！待ってます。<br/>よろしくおねがいします！</span>,
    thumbnails: [
      { image: userImage02, isActive: true },
      { image: userImage01, isActive: false },
      { image: userImage03, isActive: false }
    ],
    category: [
      { image: animalImage, text: '動物好き'},
      { image: bookImage, text: '読書好き'},
      { image: cookingImage, text: '料理好き'},
      { image: sportsImage, text: 'スポーツ観戦好き'},
      { image: travelImage, text: '旅行好き'},
    ],
    profile: [
      { title: '出身地', text: '東京'},
      { title: '血液型', text: 'AB'},
      { title: '体型', text: '普通'},
      { title: '学歴', text: '短大/専門学校卒'},
      { title: '仕事', text: 'オフィス'},
      { title: '休日', text: '土日'},
      { title: '煙草', text: '吸わない'},
      { title: 'お酒', text: '全く飲まない'},
      { title: '身長', text: '147cm'},
      { title: '一緒に住んでいる人', text: '一人暮らし'},
      { title: '出会うまでの希望', text: '気が合えば会いたい'},
    ]
  },
  {
    isNew: true,
    isConfirmed: true,
    isDetail: false,
    isLike: false,
    isUnLike: false,
    isMatching: false,
    name: "可愛い子",
    age: 21,
    place: "東京都",
    mainImage: userImage03,
    prevIndex: 0,
    appeal: <span><strong>美容関係</strong>の仕事をしています</span>,
    introduction: <span>動物園に会いにきてください！待ってます。<br/>よろしくおねがいします！</span>,
    thumbnails: [
      { image: userImage03, isActive: true },
      { image: userImage02, isActive: false },
      { image: userImage01, isActive: false }
    ],
    category: [
      { image: animalImage, text: '動物好き'},
      { image: cookingImage, text: '料理好き'},
      { image: karaokeImage, text: '歌うのが好き'},
      { image: liveImage, text: 'ライブ・フェス好き'},
      { image: musicImage, text: '音楽好き'},
      { image: sweetsImage, text: 'スイーツ好き'},
      { image: travelImage, text: '旅行好き'},
    ],
    profile: [
      { title: '出身地', text: '福岡'},
      { title: '血液型', text: 'A'},
      { title: '体型', text: '普通'},
      { title: '仕事', text: '学生'},
      { title: '休日', text: '土日'},
      { title: '煙草', text: '吸わない'},
      { title: 'お酒', text: 'よく飲む'},
      { title: '身長', text: '160cm'},
      { title: '一緒に住んでいる人', text: '実家暮らし'},
      { title: '出会うまでの希望', text: '気が合えば会いたい'},
    ]
  },
];
