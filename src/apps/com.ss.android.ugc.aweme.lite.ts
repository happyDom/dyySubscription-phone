import { defineGkdApp } from '@gkd-kit/define';

// 抖音极速版
export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版[未安装]',
  groups: [
    {
      key: 0,
      name: '功能类-自动展开视频标题',
      desc: '点 展开',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 0,
          name: '点 展开',
          actionDelay: 330,
          matches: '[text="展开"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-动态提醒弹窗',
      desc: '暂不开启',
      actionMaximum: 1,
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 100,
          name: '暂不开启[100]',
          matches:
            '[vid="ky_"][text="及时获得动态提醒"] +n [vid="i2e"][text="暂不开启"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-评论氛围',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 200,
          name: '点 x[200]',
          matches: '[text*="评论氛围是否满意"] + [text="关闭,按钮"]',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-好物推荐',
      desc: '点 不感兴趣',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 300,
          name: '不感兴趣[300]',
          actionDelay: 330,
          matches: '@FlattenUIText[text="不感兴趣"] + [text="查看更多好物"]',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-推荐关注按钮',
      desc: '点 不感兴趣',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 400,
          name: '不感兴趣[400]',
          matches: '[text="不感兴趣"][visibleToUser=true][clickable=true]',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-评论提醒',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 500,
          name: '点 x[500]',
          matches: '@[desc="关闭"] - [text="及时获得评论回复提醒"]',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-预约领金币',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 600,
          name: '点 x[600]',
          matches: 'FlattenUIImage + UIView[clickable=true]',
        },
      ],
    },
  ],
});
