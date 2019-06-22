import * as React from 'react';

import userImage10 from 'images/users/user-image10.jpg';
import userImage11 from 'images/users/user-image11.jpg';
import userImage20 from 'images/users/user-image20.jpg';
import userImage21 from 'images/users/user-image21.jpg';
import userImage30 from 'images/users/user-image30.jpg';
import userImage31 from 'images/users/user-image31.jpg';
import userImage32 from 'images/users/user-image32.jpg';

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
    name: "アザラシ",
    age: 23,
    place: "オホーツク海",
    mainImage: userImage10,
    prevIndex: 0,
    appeal: <span><strong>海のアイドル</strong>の仕事をしています</span>,
    introduction: <span>動物園に会いにきてください！待ってます。<br/>よろしくおねがいします！</span>,
    thumbnails: [
      { image: userImage10, isActive: true },
      { image: userImage11, isActive: false },
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
      { title: '出身地', text: 'オホーツク海'},
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
    mainImage: userImage20,
    prevIndex: 0,
    appeal: <span><strong>動物園</strong>の仕事をしています</span>,
    introduction: <span>動物園に会いにきてください！待ってます。<br/>よろしくおねがいします！</span>,
    thumbnails: [
      { image: userImage20, isActive: true },
      { image: userImage21, isActive: false },
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
      { title: '身長', text: '157cm'},
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
    name: "ねこすけ",
    age: 21,
    place: "東京都",
    mainImage: userImage30,
    prevIndex: 0,
    appeal: <span><strong>ねこ</strong>の仕事をしています</span>,
    introduction: <span>ペットショップで待ってるよ〜😸<br/>好きな食べ物はチャオチュール！<br /><br />マタタビの差し入れ待ってるにゃ</span>,
    thumbnails: [
      { image: userImage30, isActive: true },
      { image: userImage31, isActive: false },
      { image: userImage32, isActive: false }
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
      { title: '身長', text: '60cm'},
      { title: '一緒に住んでいる人', text: '実家暮らし'},
      { title: '出会うまでの希望', text: '気が合えば会いたい'},
    ]
  },
];
