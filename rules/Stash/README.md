# Stash 规则目录

> 上游：[MagicRule](https://magicrule.pages.dev) · 本目录每天自动同步 · 本页由 [scripts/sync.mjs](../../scripts/sync.mjs) 生成，请勿手动编辑。

- 原始地址前缀：`https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/`
- 国内镜像（jsDelivr）：`https://cdn.jsdelivr.net/gh/Valiumlove/magicrule-mirror@main/rules/Stash/`
- 规则数：**1186** · 总行数：**816350**

## 常用规则（可直接复制）

> 下面的示例可直接粘贴到客户端配置里；策略名 `REJECT` / `DIRECT` / `PROXY` 按需替换成你自己的策略组。

```yaml
rule-providers:
  advertising:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Advertising.yaml"
    path: ./ruleset/advertising.yaml
    interval: 86400
  advertisinglite:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AdvertisingLite.yaml"
    path: ./ruleset/advertisinglite.yaml
    interval: 86400
  privacy:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Privacy.yaml"
    path: ./ruleset/privacy.yaml
    interval: 86400
  direct:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Direct.yaml"
    path: ./ruleset/direct.yaml
    interval: 86400
  china:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/China.yaml"
    path: ./ruleset/china.yaml
    interval: 86400
  global:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Global.yaml"
    path: ./ruleset/global.yaml
    interval: 86400
  lan:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Lan.yaml"
    path: ./ruleset/lan.yaml
    interval: 86400
  youtube:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YouTube.yaml"
    path: ./ruleset/youtube.yaml
    interval: 86400
  netflix:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Netflix.yaml"
    path: ./ruleset/netflix.yaml
    interval: 86400
  telegram:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Telegram.yaml"
    path: ./ruleset/telegram.yaml
    interval: 86400
  openai:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OpenAI.yaml"
    path: ./ruleset/openai.yaml
    interval: 86400
  spotify:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Spotify.yaml"
    path: ./ruleset/spotify.yaml
    interval: 86400
  steam:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Steam.yaml"
    path: ./ruleset/steam.yaml
    interval: 86400

rules:
  - RULE-SET,advertising,REJECT
  - RULE-SET,advertisinglite,REJECT
  - RULE-SET,privacy,REJECT
  - RULE-SET,direct,DIRECT
  - RULE-SET,china,DIRECT
  - RULE-SET,global,DIRECT
  - RULE-SET,lan,DIRECT
  - RULE-SET,youtube,PROXY
  - RULE-SET,netflix,PROXY
  - RULE-SET,telegram,PROXY
  - RULE-SET,openai,PROXY
  - RULE-SET,spotify,PROXY
  - RULE-SET,steam,PROXY
```

## 全部规则（1186）

<details>
<summary>展开全部 1186 条</summary>

| 规则 | 说明 | 条数 | 更新时间 | 原始链接 |
| --- | --- | ---: | --- | --- |
| 115 | 115网盘 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/115.yaml) |
| 12306 | 铁路12306 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/12306.yaml) |
| 17173 | 17173 | 57 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/17173.yaml) |
| 178 | 178游戏网 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/178.yaml) |
| 17zuoye | 一起作业 | 33 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/17zuoye.yaml) |
| 1Password | 1Password密码管理 | 15 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/1Password.yaml) |
| 2KGames | 2K Games游戏 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/2KGames.yaml) |
| 360 | 奇虎360 | 287 | 2026-09-04 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/360.yaml) |
| 360Cloud | 360云计算 | 30 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/360Cloud.yaml) |
| 36kr | 36氪 | 6 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/36kr.yaml) |
| 4399 | 4399小游戏 | 63 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/4399.yaml) |
| 51Job | 前程无忧 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/51Job.yaml) |
| 56 | 56网 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/56.yaml) |
| 58TongCheng | 58同城 | 70 | 2026-08-17 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/58TongCheng.yaml) |
| 6JianFang | 六间房 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/6JianFang.yaml) |
| 800Best | 800best电商 | 29 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/800Best.yaml) |
| 8btc | 8btc | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/8btc.yaml) |
| 9News | 9News | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/9News.yaml) |
| 9to5 | 9to5Mac | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/9to5.yaml) |
| AAMGame | AAMGame游戏平台 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AAMGame.yaml) |
| ABC | 农业银行 | 11 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ABC.yaml) |
| ACG | 动漫游戏 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ACG.yaml) |
| AFP | 法新社 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AFP.yaml) |
| AMD | AMD | 6 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AMD.yaml) |
| AMP | Google AMP | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AMP.yaml) |
| AOL | AOL | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AOL.yaml) |
| AP | 美联社 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AP.yaml) |
| ASUS | 华硕 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ASUS.yaml) |
| ATT | AT&T | 135 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ATT.yaml) |
| ATTWatchTV | AT&T WatchTV | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ATTWatchTV.yaml) |
| AWS | Amazon Web Services | 80 | 2026-08-24 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AWS.yaml) |
| AbemaTV | AbemaTV | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AbemaTV.yaml) |
| AcFun | AcFun弹幕视频网 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AcFun.yaml) |
| AccuWeather | AccuWeather天气 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AccuWeather.yaml) |
| Acer | 宏碁 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Acer.yaml) |
| Actalis | Actalis证书 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Actalis.yaml) |
| AdGuard | AdGuard 广告拦截与隐私保护 | 19 | 2026-08-27 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AdGuard.yaml) |
| AdGuardSDNSFilter | AdGuard DNS Filter | 185 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AdGuardSDNSFilter.yaml) |
| AdGuardSDNSFilterDirect | AdGuardS DNS Filter Direct | 184682 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AdGuardSDNSFilterDirect.yaml) |
| Adidas | 阿迪达斯 | 90 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Adidas.yaml) |
| Adobe | Adobe | 277 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Adobe.yaml) |
| AdobeActivation | Adobe激活验证 | 134 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AdobeActivation.yaml) |
| Advertising | 去广告 | 260880 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Advertising.yaml) |
| AdvertisingLite | 去广告精简版 | 186198 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AdvertisingLite.yaml) |
| AdvertisingMiTV | 小米电视广告 | 1775 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AdvertisingMiTV.yaml) |
| Aerogard | Aerogard驱蚊 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Aerogard.yaml) |
| Agora | 声网 | 5 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Agora.yaml) |
| AiQiCha | 爱企查 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AiQiCha.yaml) |
| AiXcoder | AiXcoder AI 编程助手 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AiXcoder.yaml) |
| AirChina | 中国国际航空 | 40 | 2026-08-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AirChina.yaml) |
| AirWick | Air Wick空气清新剂 | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AirWick.yaml) |
| Airbnb | Airbnb | 83 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Airbnb.yaml) |
| Akamai | Akamai | 81 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Akamai.yaml) |
| AkamaiCloud | Akamai云计算 | 357 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AkamaiCloud.yaml) |
| Akiko | Akiko服装 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Akiko.yaml) |
| AlJazeera | 半岛电视台 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AlJazeera.yaml) |
| AliGames | 阿里游戏 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AliGames.yaml) |
| AliPay | 支付宝 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AliPay.yaml) |
| Alibaba | 阿里巴巴 | 1621 | 2026-08-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Alibaba.yaml) |
| Aliyun | 阿里云 | 100 | 2026-08-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Aliyun.yaml) |
| AliyunDrive | 阿里云盘 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AliyunDrive.yaml) |
| All4 | All 4 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/All4.yaml) |
| Alphabet | Alphabet 集团 | 1135 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Alphabet.yaml) |
| Amazon | Amazon | 300 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Amazon.yaml) |
| AmazonCloud | Amazon云计算 | 5157 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AmazonCloud.yaml) |
| AmazonPrimeVideo | Amazon Prime Video | 28 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AmazonPrimeVideo.yaml) |
| AnTianKeJi | 安天科技 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AnTianKeJi.yaml) |
| Anaconda | Anaconda Python 数据科学平台 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Anaconda.yaml) |
| AnandTech | AnandTech科技 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AnandTech.yaml) |
| Android | Android | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Android.yaml) |
| AndroidDownload | Android 应用下载 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AndroidDownload.yaml) |
| Anexia | Anexia云 | 33 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Anexia.yaml) |
| Anime | 动漫媒体 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Anime.yaml) |
| Anjuke | 安居客 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Anjuke.yaml) |
| Anker | Anker | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Anker.yaml) |
| AnnasArchive | Anna's Archive电子书检索 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AnnasArchive.yaml) |
| Anthropic | Anthropic | 52 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Anthropic.yaml) |
| Antivirus | 杀毒与安全软件 | 166 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Antivirus.yaml) |
| ApiFox | Apifox | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ApiFox.yaml) |
| ApiPost | ApiPost | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ApiPost.yaml) |
| Apkpure | APKPure | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Apkpure.yaml) |
| AppStore | App Store | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppStore.yaml) |
| Apple | Apple | 2096 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Apple.yaml) |
| AppleCDN | Apple CDN | 36 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleCDN.yaml) |
| AppleDev | Apple开发者 | 55 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleDev.yaml) |
| AppleDirect | Apple 直连 | 37 | 2026-08-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleDirect.yaml) |
| AppleFirmware | Apple固件 | 178 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleFirmware.yaml) |
| AppleHardware | Apple硬件 | 226 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleHardware.yaml) |
| AppleIntelligence | Apple 智能服务 | 6 | 2026-08-03 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleIntelligence.yaml) |
| AppleMedia | Apple媒体服务 | 52 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleMedia.yaml) |
| AppleMusic | Apple Music | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleMusic.yaml) |
| AppleNews | Apple News | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleNews.yaml) |
| ApplePKI | Apple证书 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ApplePKI.yaml) |
| ApplePodcasts | Apple 播客 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ApplePodcasts.yaml) |
| AppleProxy | Apple代理 | 74 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleProxy.yaml) |
| AppleTV | Apple TV | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleTV.yaml) |
| AppleUpdate | Apple 更新服务 | 97 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AppleUpdate.yaml) |
| ArchLinux | Arch Linux | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ArchLinux.yaml) |
| ArchiveOfOurOwn | AO3同人作品存档 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ArchiveOfOurOwn.yaml) |
| ArchiveToday | Archive.today网页快照 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ArchiveToday.yaml) |
| Arphic | 文鼎科技 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Arphic.yaml) |
| ArtStation | ArtStation | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ArtStation.yaml) |
| Asahi | 朝日新闻 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Asahi.yaml) |
| AsianMedia | 亚洲媒体 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/AsianMedia.yaml) |
| Asobo | Asobo游戏工作室 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Asobo.yaml) |
| Assassin'sCreed-Odyssey | 刺客教条 奥德赛 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Assassin'sCreed-Odyssey.yaml) |
| Assassin'sCreed-Origins | 刺客教条 起源 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Assassin'sCreed-Origins.yaml) |
| Atlassian | Atlassian | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Atlassian.yaml) |
| Autodesk | Autodesk 欧特克 | 558 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Autodesk.yaml) |
| Aviasales | Aviasales机票 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Aviasales.yaml) |
| Azure | Microsoft Azure | 154 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Azure.yaml) |
| BBC | BBC | 41 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BBC.yaml) |
| BJYouth | 北京青年报 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BJYouth.yaml) |
| BMW | 宝马 | 730 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BMW.yaml) |
| BOC | 中国银行 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BOC.yaml) |
| BOCOM | 交通银行 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BOCOM.yaml) |
| Bahamut | 巴哈姆特 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bahamut.yaml) |
| BaiFenDian | 百分点 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BaiFenDian.yaml) |
| BaiShanYunKeJi | 白山耘科技 | 59 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BaiShanYunKeJi.yaml) |
| Baidu | 百度 | 323 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Baidu.yaml) |
| BaiduCloud | 百度云计算 | 141 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BaiduCloud.yaml) |
| Bandcamp | Bandcamp音乐 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bandcamp.yaml) |
| Bangumi | Bangumi番组 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bangumi.yaml) |
| BaoFengYingYin | 暴风影音 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BaoFengYingYin.yaml) |
| Barrons | 巴伦周刊 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Barrons.yaml) |
| BeStore | 良品铺子 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BeStore.yaml) |
| Beats | Beats | 717 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Beats.yaml) |
| Beget | Beget托管 | 13 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Beget.yaml) |
| Beisen | 北森 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Beisen.yaml) |
| BestTV | 百视通 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BestTV.yaml) |
| Bestbuy | 百思买 | 82 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bestbuy.yaml) |
| Bethesda | Bethesda游戏 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bethesda.yaml) |
| BetterExplained | BetterExplained数学编程 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BetterExplained.yaml) |
| BianFeng | 边锋网络 | 100 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BianFeng.yaml) |
| BiliBili | 哔哩哔哩 | 127 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BiliBili.yaml) |
| BiliBiliGame | B站游戏平台 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BiliBiliGame.yaml) |
| Binance | 币安交易所 | 48 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Binance.yaml) |
| Bing | 必应 | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bing.yaml) |
| BitAuto | 易车 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BitAuto.yaml) |
| BitSquare | Bisq交易所 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BitSquare.yaml) |
| Bitwarden | Bitwarden 密码管理 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bitwarden.yaml) |
| Blender | Blender三维 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Blender.yaml) |
| Blizzard | 暴雪娱乐 | 50 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Blizzard.yaml) |
| Blogspot | Blogger / Blogspot | 76 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Blogspot.yaml) |
| Bloomberg | 彭博 | 61 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bloomberg.yaml) |
| BlueArchive | 蔚蓝档案 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BlueArchive.yaml) |
| Blued | Blued | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Blued.yaml) |
| BluepochGames | 深蓝互动游戏 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BluepochGames.yaml) |
| Blurams | Blurams 智能安防 | 2 | 2026-07-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Blurams.yaml) |
| BoXun | 博讯 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BoXun.yaml) |
| Bohemia | Bohemia游戏 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bohemia.yaml) |
| Booking | Booking预订 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Booking.yaml) |
| Books | 博客来 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Books.yaml) |
| Bootcss | BootCDN | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bootcss.yaml) |
| Brave | Brave 浏览器 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Brave.yaml) |
| Bridgestone | 普利司通轮胎 | 98 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bridgestone.yaml) |
| BrightCove | BrightCove | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BrightCove.yaml) |
| Brilliant | Brilliant 在线学习 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Brilliant.yaml) |
| BuBeiDanCi | 不背单词 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BuBeiDanCi.yaml) |
| Bushiroad | Bushiroad娱乐 | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bushiroad.yaml) |
| BuyMeACoffee | Buy Me a Coffee | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/BuyMeACoffee.yaml) |
| Buypass | Buypass | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Buypass.yaml) |
| Bybit | Bybit交易所 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Bybit.yaml) |
| ByteDance | 字节跳动 | 1063 | 2026-10-20 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ByteDance.yaml) |
| ByteDanceAI | 字节跳动国际 AI | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ByteDanceAI.yaml) |
| CAS | CA证书机构 | 257 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CAS.yaml) |
| CBS | CBS | 41 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CBS.yaml) |
| CCB | 建设银行 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CCB.yaml) |
| CCTV | 央视 | 44 | 2026-07-31 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CCTV.yaml) |
| CDEK | CDEK快递 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CDEK.yaml) |
| CDN77 | CDN77 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CDN77.yaml) |
| CEB | 光大银行 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CEB.yaml) |
| CGB | 广发银行 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CGB.yaml) |
| CHT | 中华电信 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CHT.yaml) |
| CIBN | CIBN互联网电视 | 71 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CIBN.yaml) |
| CITIC | 中信银行 | 29 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CITIC.yaml) |
| CKJR | 创客匠人 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CKJR.yaml) |
| CMB | 招商银行 | 39 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CMB.yaml) |
| CNB | CNB代码托管 | 2 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CNB.yaml) |
| CNET | CNET科技 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CNET.yaml) |
| CNKI | 中国知网 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CNKI.yaml) |
| CNN | CNN | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CNN.yaml) |
| CNNIC | 中国互联网络信息中心 | 33 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CNNIC.yaml) |
| CSDN | CSDN | 23 | 2026-08-17 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CSDN.yaml) |
| CSPAN | C-SPAN国会 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CSPAN.yaml) |
| CTYun | 天翼云 | 67 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CTYun.yaml) |
| CUHK | 香港中文大学 | 8 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CUHK.yaml) |
| CWSeed | CW Seed | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CWSeed.yaml) |
| CableTV | Cable TV | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CableTV.yaml) |
| CaiNiao | 菜鸟裹裹 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CaiNiao.yaml) |
| CaiXinChuanMei | 财新传媒 | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CaiXinChuanMei.yaml) |
| CalgonCarbon | Calgon Carbon | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CalgonCarbon.yaml) |
| Camera360 | Camera360 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Camera360.yaml) |
| Canon | 佳能 | 71 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Canon.yaml) |
| Canva | Canva 在线设计 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Canva.yaml) |
| CapitalOnline | 资本在线 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CapitalOnline.yaml) |
| CasImages | Casimages图片托管 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CasImages.yaml) |
| Certinomis | Certinomis证书 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Certinomis.yaml) |
| Certum | Certum证书 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Certum.yaml) |
| ChangYou | 畅游 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChangYou.yaml) |
| Chegg | Chegg学习平台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Chegg.yaml) |
| ChengTongWangPan | 城通网盘 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChengTongWangPan.yaml) |
| China | 中国 | 10270 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/China.yaml) |
| ChinaASN | 中国ASN | 5076 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaASN.yaml) |
| ChinaBroadnet | 中国广电 | 8 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaBroadnet.yaml) |
| ChinaGame | 中国游戏 | 282 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaGame.yaml) |
| ChinaIPTV | IPTV中国大陆地区 | 2297 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaIPTV.yaml) |
| ChinaIPs | 中国IP | 23524 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaIPs.yaml) |
| ChinaMedia | 中国媒体 | 358 | 2026-07-31 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaMedia.yaml) |
| ChinaMobile | 中国移动 | 52 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaMobile.yaml) |
| ChinaNews | 中国新闻网 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaNews.yaml) |
| ChinaPost | 中国邮政 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaPost.yaml) |
| ChinaSo | 中国搜索 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaSo.yaml) |
| ChinaTelecom | 中国电信 | 91 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaTelecom.yaml) |
| ChinaUnicom | 中国联通 | 48 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChinaUnicom.yaml) |
| Chinaz | 站长之家 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Chinaz.yaml) |
| ChineseAcademyOfSciences | 中国科学院文献情报中心 | 44 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChineseAcademyOfSciences.yaml) |
| ChuangKeTie | 创客贴 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChuangKeTie.yaml) |
| ChunYou | 纯游 | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ChunYou.yaml) |
| Cisco | 思科 | 123 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Cisco.yaml) |
| CityUHK | 香港城市大学 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CityUHK.yaml) |
| Clarivate | 科睿唯安 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Clarivate.yaml) |
| Clearasil | Clearasil护肤 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Clearasil.yaml) |
| CloudCone | CloudCone VPS | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CloudCone.yaml) |
| CloudConvert | 格式转换 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CloudConvert.yaml) |
| CloudNS | ClouDNS | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CloudNS.yaml) |
| Cloudflare | Cloudflare | 99 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Cloudflare.yaml) |
| CloudflareIPFS | Cloudflare IPFS | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CloudflareIPFS.yaml) |
| Cloudinary | Cloudinary图片管理 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Cloudinary.yaml) |
| Clubhouse | Clubhouse | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Clubhouse.yaml) |
| ClubhouseIP | Clubhouse IP | 104 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ClubhouseIP.yaml) |
| CnBlogs | 博客园 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CnBlogs.yaml) |
| Code | Code.org编程教育 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Code.yaml) |
| Codeberg | Codeberg 代码托管 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Codeberg.yaml) |
| Codecademy | Codecademy编程学习 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Codecademy.yaml) |
| Codeforces | Codeforces 编程竞赛 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Codeforces.yaml) |
| Coding | Coding.net代码托管 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Coding.yaml) |
| Coinone | Coinone交易所 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Coinone.yaml) |
| Collabora | Collabora办公 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Collabora.yaml) |
| ColorfulClouds | 彩云天气 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ColorfulClouds.yaml) |
| Communication | 通信服务 | 160 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Communication.yaml) |
| Comodo | Comodo | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Comodo.yaml) |
| ComssOne | Comss资讯 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ComssOne.yaml) |
| ConnectivityCheck | 网络连通检测 | 28 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ConnectivityCheck.yaml) |
| Container | 容器与云原生 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Container.yaml) |
| Contentful | Contentful CMS | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Contentful.yaml) |
| CoolAPK | 酷安 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CoolAPK.yaml) |
| Copilot | Microsoft Copilot | 411 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Copilot.yaml) |
| CopyManga | 拷贝漫画 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CopyManga.yaml) |
| Corel | Corel软件 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Corel.yaml) |
| Costco | 好市多/开市客 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Costco.yaml) |
| Coupang | Coupang电商 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Coupang.yaml) |
| Coursera | Coursera 在线课程 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Coursera.yaml) |
| CowLevel | CowLevel游戏社区 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CowLevel.yaml) |
| CowTransfer | 奶牛快传 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CowTransfer.yaml) |
| Cryptocurrency | 加密货币 | 240 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Cryptocurrency.yaml) |
| CurseForge | CurseForge游戏模组 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CurseForge.yaml) |
| Cursor | Cursor AI 编程工具 | 5 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Cursor.yaml) |
| CyberTrust | CyberTrust证书认证 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/CyberTrust.yaml) |
| Cygames | Cygames游戏 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Cygames.yaml) |
| DAZN | DAZN | 27 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DAZN.yaml) |
| DDNS | 动态域名解析 | 111 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DDNS.yaml) |
| DJI | 大疆 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DJI.yaml) |
| DMIT | DMIT云服务器 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DMIT.yaml) |
| DMM | DMM | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DMM.yaml) |
| DNS | DNS | 121 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DNS.yaml) |
| DNSPod | DNSPod | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DNSPod.yaml) |
| DaMai | 红马传媒(大麦网) | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DaMai.yaml) |
| Dailymail | 每日邮报 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dailymail.yaml) |
| Dailymotion | Dailymotion | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dailymotion.yaml) |
| DanDanZan | 蛋蛋赞 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DanDanZan.yaml) |
| Dandanplay | 弹弹Play | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dandanplay.yaml) |
| DangDang | 当当 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DangDang.yaml) |
| Dart | Dart编程语言 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dart.yaml) |
| Debian | Debian | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Debian.yaml) |
| Dedao | 得到 | 10 | 2026-08-19 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dedao.yaml) |
| DeepSeek | DeepSeek AI | 2 | 2026-09-04 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DeepSeek.yaml) |
| Deepin | 深度科技 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Deepin.yaml) |
| Deezer | Deezer | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Deezer.yaml) |
| Dell | 戴尔 | 314 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dell.yaml) |
| Deppon | 德邦快递 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Deppon.yaml) |
| Deribit | Deribit期权 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Deribit.yaml) |
| Dettol | 滴露 | 35 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dettol.yaml) |
| Developer | 开发者 | 722 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Developer.yaml) |
| DeviantArt | DeviantArt | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DeviantArt.yaml) |
| Dewu | 得物 | 45 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dewu.yaml) |
| DiDi | 滴滴出行 | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DiDi.yaml) |
| DiLianWangLuo | 帝联网络 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DiLianWangLuo.yaml) |
| DiSiFanShi | 第四范式 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DiSiFanShi.yaml) |
| DianCeWangKe | 点测网科 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DianCeWangKe.yaml) |
| DigiCert | DigiCert | 74 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DigiCert.yaml) |
| DigitalOcean | DigitalOcean | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DigitalOcean.yaml) |
| DingDaTech | 丁丁地图 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DingDaTech.yaml) |
| DingDong | 叮咚买菜 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DingDong.yaml) |
| DingTalk | 钉钉 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DingTalk.yaml) |
| DingXiangYuan | 丁香园 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DingXiangYuan.yaml) |
| Direct | 直连 | 303 | 2026-08-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Direct.yaml) |
| Discord | Discord | 31 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Discord.yaml) |
| Discourse | Discourse论坛平台 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Discourse.yaml) |
| DiscoveryPlus | Discovery+ | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DiscoveryPlus.yaml) |
| Discuz | Discuz论坛 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Discuz.yaml) |
| Disney | Disney | 251 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Disney.yaml) |
| Disqus | Disqus | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Disqus.yaml) |
| DoH | 加密 DNS | 127 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DoH.yaml) |
| Docker | Docker | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Docker.yaml) |
| Domob | 多盟 | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Domob.yaml) |
| DongCheDi | 懂车帝 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DongCheDi.yaml) |
| Dood | Dood | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dood.yaml) |
| DouBan | 豆瓣 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DouBan.yaml) |
| DouYin | 抖音 | 90 | 2026-10-16 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DouYin.yaml) |
| Douyu | 斗鱼 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Douyu.yaml) |
| DowJones | 道琼斯 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DowJones.yaml) |
| Download | 下载 | 38 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Download.yaml) |
| Dribbble | Dribbble设计 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dribbble.yaml) |
| Dropbox | Dropbox | 27 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dropbox.yaml) |
| DtDNS | DtDNS | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DtDNS.yaml) |
| Dubox | 百度网盘国际版 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dubox.yaml) |
| Duckduckgo | DuckDuckGo | 44 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Duckduckgo.yaml) |
| DuiTang | 堆糖图片 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DuiTang.yaml) |
| DuoWan | 多玩 | 27 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DuoWan.yaml) |
| Duolingo | 多邻国 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Duolingo.yaml) |
| Durex | 杜蕾斯 | 62 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Durex.yaml) |
| DuyaoSS | 虎牙斗鱼CDN | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DuyaoSS.yaml) |
| Dwion | Dwion CDN | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dwion.yaml) |
| DynDNS | DynDNS | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/DynDNS.yaml) |
| Dynu | Dynu | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Dynu.yaml) |
| EA | EA | 173 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/EA.yaml) |
| ECommerce | 电子商务 | 1330 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ECommerce.yaml) |
| ESET | ESET杀毒 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ESET.yaml) |
| EastMoney | 东方财富 | 33 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/EastMoney.yaml) |
| Ebuyer | Ebuyer电子 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Ebuyer.yaml) |
| Economist | 经济学人 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Economist.yaml) |
| EduHK | 香港教育大学 | 3 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/EduHK.yaml) |
| Egghead | Egghead编程教程 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Egghead.yaml) |
| Electron | Electron跨平台框架 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Electron.yaml) |
| Eleme | 饿了么 | 18 | 2026-08-01 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Eleme.yaml) |
| Elsevier | Elsevier学术 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Elsevier.yaml) |
| Embark | Embark游戏工作室 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Embark.yaml) |
| Embl | EMBL | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Embl.yaml) |
| Emby | Emby | 83 | 2026-08-31 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Emby.yaml) |
| Emojipedia | Emojipedia | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Emojipedia.yaml) |
| EncoreTVB | Encore TVB | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/EncoreTVB.yaml) |
| Eneba | Eneba游戏交易 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Eneba.yaml) |
| Enfa | 美赞臣 | 31 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Enfa.yaml) |
| Entrust | Entrust证书认证 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Entrust.yaml) |
| Envato | Envato创意 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Envato.yaml) |
| Epic | Epic Games | 36 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Epic.yaml) |
| EpicBrowser | Epic隐私浏览器 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/EpicBrowser.yaml) |
| EscapeFromTarkov | 逃离塔科夫 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/EscapeFromTarkov.yaml) |
| Espn | ESPN | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Espn.yaml) |
| Everbright | 光大集团 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Everbright.yaml) |
| Evernote | 印象笔记 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Evernote.yaml) |
| FACEIT | FACEIT电竞平台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FACEIT.yaml) |
| FCBox | 菜鸟丰巢 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FCBox.yaml) |
| FIBank | FIBank银行 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FIBank.yaml) |
| FOXNOW | FOX NOW | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FOXNOW.yaml) |
| FT | 金融时报 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FT.yaml) |
| FZDM | 泛宅 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FZDM.yaml) |
| Facebook | Facebook | 592 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Facebook.yaml) |
| FamilyMart | 全家便利店 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FamilyMart.yaml) |
| FanFou | 饭否科技 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FanFou.yaml) |
| Fandom | Fandom百科 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Fandom.yaml) |
| FangZhengDianZi | 方正电子 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FangZhengDianZi.yaml) |
| Farfetch | Farfetch奢侈品 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Farfetch.yaml) |
| Faronics | Faronics | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Faronics.yaml) |
| FastStone | FastStone看图 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FastStone.yaml) |
| Fastlane | Fastlane自动化发布 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Fastlane.yaml) |
| Fastly | Fastly CDN | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Fastly.yaml) |
| Fedora | Fedora Linux | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Fedora.yaml) |
| Feedly | Feedly阅读器 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Feedly.yaml) |
| FeiZhu | 飞猪 | 20 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FeiZhu.yaml) |
| Feishu | 飞书 字节跳动企业协作办公平台 | 43 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Feishu.yaml) |
| FengXiaWangLuo | 凤侠网络 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FengXiaWangLuo.yaml) |
| FengXing | 风行视频 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FengXing.yaml) |
| Figma | Figma 设计协作 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Figma.yaml) |
| Fiio | 飞傲 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Fiio.yaml) |
| Finish | Finish亮碟 | 41 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Finish.yaml) |
| Flickr | Flickr相册 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Flickr.yaml) |
| FlipBoard | Flipboard | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FlipBoard.yaml) |
| FlowUs | FlowUs协作 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FlowUs.yaml) |
| Flowwow | Flowwow鲜花 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Flowwow.yaml) |
| Flutter | Flutter跨平台框架 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Flutter.yaml) |
| FontAwesome | FontAwesome图标 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FontAwesome.yaml) |
| FontExplorer | FontExplorer字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FontExplorer.yaml) |
| FontShop | FontShop字体 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FontShop.yaml) |
| Fonts | Fonts.com字体 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Fonts.yaml) |
| FontsInUse | FontsInUse | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FontsInUse.yaml) |
| Forbes | 福布斯 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Forbes.yaml) |
| Forza | Forza赛车游戏 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Forza.yaml) |
| Fox | Fox | 262 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Fox.yaml) |
| Framer | Framer设计 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Framer.yaml) |
| FreeCodeCamp | FreeCodeCamp编程学习 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FreeCodeCamp.yaml) |
| Freenode | Freenode IRC网络 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Freenode.yaml) |
| FuboTV | FuboTV | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FuboTV.yaml) |
| FunPay | FunPay游戏交易 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/FunPay.yaml) |
| Funshion | 风行网 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Funshion.yaml) |
| GGSel | GGsel游戏账号 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GGSel.yaml) |
| GMOInternet | GMO互联网 | 157 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GMOInternet.yaml) |
| Gaijin | Gaijin游戏 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gaijin.yaml) |
| Game | 游戏 | 1273 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Game.yaml) |
| GameDownload | 游戏下载 | 498 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GameDownload.yaml) |
| GamerSky | 游民星空 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GamerSky.yaml) |
| Gamesplanet | Gamesplanet游戏销售 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gamesplanet.yaml) |
| Gandi | Gandi域名 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gandi.yaml) |
| Gannett | Gannett传媒 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gannett.yaml) |
| GaoDe | 高德 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GaoDe.yaml) |
| Garena | Garena | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Garena.yaml) |
| GateIO | Gate.io交易所 | 8 | 2026-09-02 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GateIO.yaml) |
| GeeTest | 极验验证 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GeeTest.yaml) |
| Geely | 吉利 | 50 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Geely.yaml) |
| Gemini | Gemini | 54 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gemini.yaml) |
| Gettyimages | Getty Images | 25 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gettyimages.yaml) |
| Getui | 个推 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Getui.yaml) |
| Gigabyte | 技嘉 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gigabyte.yaml) |
| Gismeteo | Gismeteo天气 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gismeteo.yaml) |
| GitBook | GitBook | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GitBook.yaml) |
| GitHub | GitHub | 73 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GitHub.yaml) |
| GitLab | GitLab | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GitLab.yaml) |
| Gitee | Gitee 码云 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gitee.yaml) |
| Global | 全球 | 24489 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Global.yaml) |
| GlobalAI | 全球AI | 474 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GlobalAI.yaml) |
| GlobalCDN | 全球CDN服务 | 195 | 2026-08-08 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GlobalCDN.yaml) |
| GlobalCloud | 全球云计算 | 8568 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GlobalCloud.yaml) |
| GlobalGame | 全球游戏 | 878 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GlobalGame.yaml) |
| GlobalIPTV | IPTV全球 | 2814 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GlobalIPTV.yaml) |
| GlobalMedia | 全球媒体 | 1730 | 2026-08-08 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GlobalMedia.yaml) |
| GlobalNetDisk | 全球网盘服务 | 59 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GlobalNetDisk.yaml) |
| GlobalScholar | 全球学术 | 302 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GlobalScholar.yaml) |
| GlobalSign | Globalsign | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GlobalSign.yaml) |
| Globo | Globo传媒 | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Globo.yaml) |
| Glyphs | Glyphs字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Glyphs.yaml) |
| GoDaddy | GoDaddy域名 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GoDaddy.yaml) |
| Gog | GOG | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gog.yaml) |
| Golang | Go编程语言 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Golang.yaml) |
| Goodreads | Goodreads | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Goodreads.yaml) |
| Google | Google | 1190 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Google.yaml) |
| GoogleDeepMind | Google DeepMind | 49 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GoogleDeepMind.yaml) |
| GoogleEarth | Google Earth | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GoogleEarth.yaml) |
| GoogleFCM | 谷歌推送 | 50 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GoogleFCM.yaml) |
| GooglePlay | Google Play 商店 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GooglePlay.yaml) |
| GoogleRegistry | Google 域名注册服务 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GoogleRegistry.yaml) |
| GoogleVoice | Google Voice | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GoogleVoice.yaml) |
| GovCN | GovernmentCN | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GovCN.yaml) |
| Gracg | Gracg插画 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gracg.yaml) |
| GrapheneOS | GrapheneOS | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GrapheneOS.yaml) |
| Grok | Grok AI | 4 | 2026-07-28 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Grok.yaml) |
| Groq | Groq AI | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Groq.yaml) |
| Gucci | 古驰 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Gucci.yaml) |
| GuiGuDongLi | 硅谷动力 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/GuiGuDongLi.yaml) |
| Guokr | 果壳 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Guokr.yaml) |
| HBO | HBO | 95 | 2026-08-28 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HBO.yaml) |
| HBOHK | HBO(香港) | 30 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HBOHK.yaml) |
| HBOUSA | HBO(美国) | 45 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HBOUSA.yaml) |
| HCaptcha | hCaptcha验证 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HCaptcha.yaml) |
| HKBN | 香港宽频 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HKBN.yaml) |
| HKBU | 香港浸会大学 | 3 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HKBU.yaml) |
| HKETGroup | 香港经济日报 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HKETGroup.yaml) |
| HKOpenTV | 香港开电视 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HKOpenTV.yaml) |
| HKU | 香港大学 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HKU.yaml) |
| HKUST | 香港科技大学 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HKUST.yaml) |
| HKedcity | 香港教育城 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HKedcity.yaml) |
| HM | H&M | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HM.yaml) |
| HP | 惠普 | 159 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HP.yaml) |
| HSBC | 汇丰银行 | 48 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HSBC.yaml) |
| HWTV | HWTV | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HWTV.yaml) |
| Haier | 海尔 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Haier.yaml) |
| HainanAirlines | 海南航空 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HainanAirlines.yaml) |
| HamiVideo | Hami Video | 25 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HamiVideo.yaml) |
| HanYi | 汉仪 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HanYi.yaml) |
| HashiCorp | HashiCorp | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HashiCorp.yaml) |
| Haskell | Haskell编程语言 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Haskell.yaml) |
| HeMa | 盒马 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HeMa.yaml) |
| HeroGame | 英雄互娱 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HeroGame.yaml) |
| Heroku | Heroku | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Heroku.yaml) |
| Hetzner | Hetzner云 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Hetzner.yaml) |
| HiNet | HiNet | 597 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HiNet.yaml) |
| HibyMusic | 海贝音乐 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HibyMusic.yaml) |
| Hijacking | 反劫持 | 221 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Hijacking.yaml) |
| Hikvision | 海康威视 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Hikvision.yaml) |
| HoYoverse | 米哈游HoYoverse | 27 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HoYoverse.yaml) |
| HomeDepot | Home Depot | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HomeDepot.yaml) |
| Homebrew | Homebrew包管理器 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Homebrew.yaml) |
| HongKongPost | 香港邮政证书 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HongKongPost.yaml) |
| Hpplay | 乐播投屏 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Hpplay.yaml) |
| HuJiang | 沪江教育 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HuJiang.yaml) |
| HuPun | 湖畔直播 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HuPun.yaml) |
| HuYa | 虎牙 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HuYa.yaml) |
| HuaShuTV | 华数TV | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HuaShuTV.yaml) |
| Huawei | 华为 | 402 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Huawei.yaml) |
| HuaweiCloud | 华为云计算 | 393 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HuaweiCloud.yaml) |
| Huffpost | 赫芬顿邮报 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Huffpost.yaml) |
| HuggingFace | Hugging Face | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HuggingFace.yaml) |
| Hulu | Hulu | 59 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Hulu.yaml) |
| HuluJP | Hulu(日本) | 58 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HuluJP.yaml) |
| HuluUSA | Hulu(美国) | 58 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HuluUSA.yaml) |
| HumbleBundle | Humble Bundle | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HumbleBundle.yaml) |
| HunanTV | 湖南TV | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HunanTV.yaml) |
| Hupu | 虎扑 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Hupu.yaml) |
| HurricaneElectric | Hurricane Electric | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/HurricaneElectric.yaml) |
| IBKR | 盈透证券 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IBKR.yaml) |
| IBM | IBM | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IBM.yaml) |
| ICBC | 中国工商银行 | 58 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ICBC.yaml) |
| ICable | 香港有线电视 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ICable.yaml) |
| IDG | IDG集团 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IDG.yaml) |
| IEEE | IEEE | 54 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IEEE.yaml) |
| IFast | iFAST金融 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IFast.yaml) |
| IHuman | 洪恩教育 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IHuman.yaml) |
| IINA | IINA播放器 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IINA.yaml) |
| IKEA | 宜家 | 95 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IKEA.yaml) |
| IMDB | IMDb | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IMDB.yaml) |
| IPFS | IPFS 分布式存储 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IPFS.yaml) |
| IShuMei | 数美安全 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IShuMei.yaml) |
| ITV | ITV | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ITV.yaml) |
| IXsystems | TrueNAS存储 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IXsystems.yaml) |
| Identrust | Identrust | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Identrust.yaml) |
| ImageBam | ImageBam图片 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ImageBam.yaml) |
| ImageCurl | ImageCurl图片 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ImageCurl.yaml) |
| ImageShack | ImageShack图片 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ImageShack.yaml) |
| ImageTwist | ImageTwist图片 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ImageTwist.yaml) |
| ImgBB | ImgBB图片 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ImgBB.yaml) |
| Imgix | Imgix图片CDN | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Imgix.yaml) |
| Imgur | Imgur | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Imgur.yaml) |
| ImperialCollege | 帝国理工 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ImperialCollege.yaml) |
| InShot | InShot编辑 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/InShot.yaml) |
| InoReader | Inoreader阅读器 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/InoReader.yaml) |
| Insider | Insider商业 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Insider.yaml) |
| Instagram | Instagram | 76 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Instagram.yaml) |
| IntSig | 合合信息 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/IntSig.yaml) |
| Intel | 英特尔 | 296 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Intel.yaml) |
| Intercom | Intercom | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Intercom.yaml) |
| Intuit | Intuit财务 | 35 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Intuit.yaml) |
| ItchIo | itch.io独立游戏 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ItchIo.yaml) |
| JLC | 嘉立创 | 43 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JLC.yaml) |
| JOOX | JOOX | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JOOX.yaml) |
| JTExpress | 极兔速递 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JTExpress.yaml) |
| Japonx | Japonx | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Japonx.yaml) |
| JetBrainsAI | JetBrains AI | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JetBrainsAI.yaml) |
| Jetbrains | JetBrains | 26 | 2026-08-03 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Jetbrains.yaml) |
| Jfrog | JFrog | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Jfrog.yaml) |
| JiBenCaoZuo | 基本操作 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JiBenCaoZuo.yaml) |
| JiGuang | 极光推送 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JiGuang.yaml) |
| JianGuoYun | 坚果云 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JianGuoYun.yaml) |
| JianShu | 简书 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JianShu.yaml) |
| JieMian | 界面新闻 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JieMian.yaml) |
| JinJiangWenXue | 晋江文学 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JinJiangWenXue.yaml) |
| JingDong | 京东 | 277 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JingDong.yaml) |
| JingDongCloud | 京东云计算 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JingDongCloud.yaml) |
| JiyuKobo | 积蓄工房 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JiyuKobo.yaml) |
| Johren | Johren游戏平台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Johren.yaml) |
| Jquery | jQuery | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Jquery.yaml) |
| Jsdelivr | jsDelivr | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Jsdelivr.yaml) |
| JuShuiTan | 聚水潭ERP | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JuShuiTan.yaml) |
| JueJin | 掘金 | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/JueJin.yaml) |
| Jwplayer | JW Player | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Jwplayer.yaml) |
| KKBOX | KKBOX | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KKBOX.yaml) |
| KKTV | KKTV | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KKTV.yaml) |
| Kaggle | Kaggle 数据科学 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Kaggle.yaml) |
| KakaoTalk | KakaoTalk | 65 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KakaoTalk.yaml) |
| Kantv | Kan TV | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Kantv.yaml) |
| KeChuang | 科创 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KeChuang.yaml) |
| Keep | Keep | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Keep.yaml) |
| Keybase | Keybase加密 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Keybase.yaml) |
| KhanAcademy | 可汗学院 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KhanAcademy.yaml) |
| Kick | Kick直播 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Kick.yaml) |
| Kindle | Amazon Kindle | 20 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Kindle.yaml) |
| KingSmith | 金史密斯 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KingSmith.yaml) |
| Kingsoft | 金山软件 | 264 | 2026-09-18 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Kingsoft.yaml) |
| KingsoftCloud | 金山云计算 | 53 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KingsoftCloud.yaml) |
| Konami | Konami科乐美 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Konami.yaml) |
| KooLearn | 新东方在线 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KooLearn.yaml) |
| KouDaiShiShang | 口袋时尚 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KouDaiShiShang.yaml) |
| Kraken | Kraken交易所 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Kraken.yaml) |
| Ku6 | 酷6 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Ku6.yaml) |
| KuCoin | KuCoin交易所 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KuCoin.yaml) |
| KuKeMusic | 库客音乐 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KuKeMusic.yaml) |
| KuaiDi100 | 快递100 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KuaiDi100.yaml) |
| KuaiShou | 快手 | 694 | 2026-08-18 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KuaiShou.yaml) |
| KuangShi | 旷视 | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KuangShi.yaml) |
| Kubernetes | Kubernetes | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Kubernetes.yaml) |
| KugouKuwo | 酷狗/酷我 | 122 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KugouKuwo.yaml) |
| KuroGames | 库洛游戏 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KuroGames.yaml) |
| KyodoNews | 共同通讯社 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/KyodoNews.yaml) |
| LG | LG | 98 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LG.yaml) |
| Lan | 本地局域网地址 | 174 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Lan.yaml) |
| LanZou | 蓝奏云 | 28 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LanZou.yaml) |
| Laracasts | Laracasts教程 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Laracasts.yaml) |
| LastFM | Last.fm | 34 | 2026-09-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LastFM.yaml) |
| LastPass | LastPass | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LastPass.yaml) |
| Launchpad | Launchpad代码托管 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Launchpad.yaml) |
| LeJu | 乐居 | 20 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LeJu.yaml) |
| LeTV | 乐视 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LeTV.yaml) |
| Lenovo | 联想 | 58 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Lenovo.yaml) |
| LetsEncrypt | Let's Encrypt SSL证书 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LetsEncrypt.yaml) |
| LiTV | LiTV | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LiTV.yaml) |
| LiZhi | 荔枝FM | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LiZhi.yaml) |
| Lianjia | 链家 | 5 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Lianjia.yaml) |
| LibGen | Library Genesis | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LibGen.yaml) |
| Liberapay | Liberapay赞助 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Liberapay.yaml) |
| LiePin | 猎聘 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LiePin.yaml) |
| Lighter | Lighter DeFi | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Lighter.yaml) |
| Likee | Likee短视频 | 35 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Likee.yaml) |
| Limelight | Limelight | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Limelight.yaml) |
| LinakeSi | 乐言科技 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LinakeSi.yaml) |
| Line | Line | 41 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Line.yaml) |
| LineTV | Line TV | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LineTV.yaml) |
| Linguee | Linguee翻译 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Linguee.yaml) |
| LinkedIn | 领英 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LinkedIn.yaml) |
| Linotype | Linotype字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Linotype.yaml) |
| Linux | Linux操作系统 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Linux.yaml) |
| LinuxDo | Linux技术社区 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LinuxDo.yaml) |
| LivePerson | LivePerson | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LivePerson.yaml) |
| LocalBitcoins | LocalBitcoins | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LocalBitcoins.yaml) |
| Logitech | 罗技 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Logitech.yaml) |
| LondonReal | London Real | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LondonReal.yaml) |
| LongBridge | 长桥证券 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LongBridge.yaml) |
| LouisVuitton | 路易威登 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LouisVuitton.yaml) |
| Lowiro | Lowiro Arcaea | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Lowiro.yaml) |
| LuDaShi | 鲁大师 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LuDaShi.yaml) |
| LuckinCoffee | 瑞幸咖啡 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LuckinCoffee.yaml) |
| Lumion | Lumion渲染 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Lumion.yaml) |
| LvMiLianChuang | 绿米联创 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/LvMiLianChuang.yaml) |
| Lysol | 来苏尔 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Lysol.yaml) |
| MDN | MDN Web文档 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MDN.yaml) |
| MEGA | MEGA | 23 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MEGA.yaml) |
| MIT | 麻省理工 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MIT.yaml) |
| MOMOShop | MOMO購物網 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MOMOShop.yaml) |
| MOOMusic | MOO音乐 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MOOMusic.yaml) |
| MOOV | MOOV | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MOOV.yaml) |
| MUJI | 无印良品 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MUJI.yaml) |
| MVideo | M.Video电子 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MVideo.yaml) |
| MXRoute | MXRoute邮件 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MXRoute.yaml) |
| MZed | MZed影视教育 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MZed.yaml) |
| MaFengWo | 马蜂窝 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MaFengWo.yaml) |
| Madshi | Madshi渲染 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Madshi.yaml) |
| Magnit | Magnit零售 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Magnit.yaml) |
| MailCom | mail.com邮件 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MailCom.yaml) |
| Mailru | Mail.ru | 300 | 2026-07-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Mailru.yaml) |
| Mainichi | 每日新闻 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Mainichi.yaml) |
| Manorama | Manorama | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Manorama.yaml) |
| MaoCloud | 猫云 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MaoCloud.yaml) |
| Mapbox | Mapbox地图 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Mapbox.yaml) |
| Marketing | 思杰马克丁软件 | 56 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Marketing.yaml) |
| Marvel | 漫威 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Marvel.yaml) |
| MasterClass | MasterClass | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MasterClass.yaml) |
| Mastercard | 万事达卡 | 184 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Mastercard.yaml) |
| Matrix | Matrix 即时通信 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Matrix.yaml) |
| McDonalds | 麦当劳 | 45 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/McDonalds.yaml) |
| MeWatch | MeWatch | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MeWatch.yaml) |
| MeadJohnson | 美赞臣营养 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MeadJohnson.yaml) |
| Medium | Medium写作平台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Medium.yaml) |
| MeiTu | 美图 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MeiTu.yaml) |
| MeiTuan | 美团 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MeiTuan.yaml) |
| MeiZu | 魅族 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MeiZu.yaml) |
| MetaBrainz | MetaBrainz数据 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MetaBrainz.yaml) |
| Metacritic | Metacritic | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Metacritic.yaml) |
| MiWu | 米物 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MiWu.yaml) |
| Microsoft | Microsoft | 912 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Microsoft.yaml) |
| MicrosoftDev | Microsoft 开发服务 | 76 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MicrosoftDev.yaml) |
| MicrosoftEdge | Microsoft Edge | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MicrosoftEdge.yaml) |
| MicrosoftPKI | 微软证书 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MicrosoftPKI.yaml) |
| MicrosoftProxy | Microsoft 代理 | 84 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MicrosoftProxy.yaml) |
| Midea | 美的 | 10 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Midea.yaml) |
| Migu | 咪咕 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Migu.yaml) |
| MikroTik | MikroTik路由 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MikroTik.yaml) |
| MingLueZhaoHui | 明略昭辉 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MingLueZhaoHui.yaml) |
| Mini | MINI汽车 | 215 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Mini.yaml) |
| Miniso | 名创优品 | 36 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Miniso.yaml) |
| Misskey | Misskey社交 | 34 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Misskey.yaml) |
| Mocha | Mocha.js测试框架 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Mocha.yaml) |
| Modrinth | Modrinth模组 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Modrinth.yaml) |
| Mogujie | 蘑菇街 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Mogujie.yaml) |
| Mojang | Mojang游戏 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Mojang.yaml) |
| Moji | 墨迹天气 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Moji.yaml) |
| MongoDB | MongoDB | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MongoDB.yaml) |
| Monotype | Monotype字体 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Monotype.yaml) |
| Moonvy | Moonvy视频 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Moonvy.yaml) |
| Morisawa | 森泽字体 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Morisawa.yaml) |
| Mortein | Mortein杀虫 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Mortein.yaml) |
| Motorola | 摩托罗拉 | 25 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Motorola.yaml) |
| MoveFree | MoveFree维骨力 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MoveFree.yaml) |
| Mozilla | Mozilla | 88 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Mozilla.yaml) |
| Mucinex | Mucinex感冒药 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Mucinex.yaml) |
| Musixmatch | Musixmatch歌词 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Musixmatch.yaml) |
| My5 | My5 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/My5.yaml) |
| MyFonts | MyFonts字体 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MyFonts.yaml) |
| MyRadio | MyRadio电台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/MyRadio.yaml) |
| N26 | N26银行 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/N26.yaml) |
| NBC | NBC | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NBC.yaml) |
| NBCUniversal | NBC环球 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NBCUniversal.yaml) |
| NGA | NGA | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NGA.yaml) |
| NGAA | 新流云 | 29 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NGAA.yaml) |
| NHK | 日本放送协会 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NHK.yaml) |
| NICru | RU域名注册 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NICru.yaml) |
| NPM | NPM 包管理 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NPM.yaml) |
| NTPService | NTP服务 | 201 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NTPService.yaml) |
| NYPost | 纽约邮报 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NYPost.yaml) |
| NYTimes | 纽约时报 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NYTimes.yaml) |
| Narwal | 云鲸扫地机 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Narwal.yaml) |
| Naver | Naver | 250 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Naver.yaml) |
| NaverTV | Naver TV | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NaverTV.yaml) |
| Neowin | Neowin科技 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Neowin.yaml) |
| NetCup | NetCup托管 | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NetCup.yaml) |
| NetEase | 网易 | 177 | 2026-08-01 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NetEase.yaml) |
| NetEaseMusic | 网易云音乐 | 53 | 2026-08-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NetEaseMusic.yaml) |
| NeteaseCloud | 网易云计算 | 106 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NeteaseCloud.yaml) |
| Netflix | Netflix | 1625 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Netflix.yaml) |
| Netlify | Netlify网站托管 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Netlify.yaml) |
| Newegg | 新蛋 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Newegg.yaml) |
| NewsCorp | 新闻集团 | 152 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NewsCorp.yaml) |
| Nexo | Nexo借贷 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Nexo.yaml) |
| Nexon | Nexon网游 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Nexon.yaml) |
| Nginx | Nginx | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Nginx.yaml) |
| Niconico | Niconico | 13 | 2026-08-24 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Niconico.yaml) |
| Nike | 耐克 | 196 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Nike.yaml) |
| Nikkei | 日经 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Nikkei.yaml) |
| Nintendo | 任天堂 | 127 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Nintendo.yaml) |
| NoIP | No-IP 动态 DNS | 83 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NoIP.yaml) |
| NodeSeek | NodeSeek VPS社区 | 7 | 2026-09-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NodeSeek.yaml) |
| Nordstrom | Nordstrom | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Nordstrom.yaml) |
| Notion | Notion | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Notion.yaml) |
| Novel | 网络小说 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Novel.yaml) |
| NowCoder | 牛客网 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NowCoder.yaml) |
| NowTV | Now TV | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/NowTV.yaml) |
| Nurofen | Nurofen布洛芬 | 28 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Nurofen.yaml) |
| Nvidia | 英伟达 | 68 | 2026-09-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Nvidia.yaml) |
| OKAApps | OKA Apps | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OKAApps.yaml) |
| OKX | OKX交易所 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OKX.yaml) |
| OP | OnePiece | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OP.yaml) |
| OPPO | OPPO | 72 | 2026-08-14 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OPPO.yaml) |
| OSChina | 开源中国 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OSChina.yaml) |
| OTPBank | OTP银行 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OTPBank.yaml) |
| OUP | 牛津大学出版 | 29 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OUP.yaml) |
| Oculus | Oculus VR | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Oculus.yaml) |
| OkJike | 即刻 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OkJike.yaml) |
| OneDrive | OneDrive | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OneDrive.yaml) |
| OneKey | OneKey钱包 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OneKey.yaml) |
| OnePlus | 一加 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OnePlus.yaml) |
| OpenAI | OpenAI | 61 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OpenAI.yaml) |
| OpenCollective | Open Collective | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OpenCollective.yaml) |
| OpenJSFoundation | OpenJS基金会 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OpenJSFoundation.yaml) |
| OpenSourceInsights | 开源分析 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OpenSourceInsights.yaml) |
| OpenSpeedTest | OpenSpeedTest | 4 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OpenSpeedTest.yaml) |
| OpenStreetMap | OpenStreetMap | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OpenStreetMap.yaml) |
| OpenWeather | OpenWeather | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OpenWeather.yaml) |
| OpenWrt | OpenWrt | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OpenWrt.yaml) |
| Opera | Opera浏览器 | 34 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Opera.yaml) |
| Oreilly | O'Reilly | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Oreilly.yaml) |
| OrganicMaps | Organic Maps | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OrganicMaps.yaml) |
| Origin | Origin | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Origin.yaml) |
| Osu | osu!音游 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Osu.yaml) |
| OuPeng | 欧朋浏览器 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/OuPeng.yaml) |
| Ozon | Ozon电商 | 63 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Ozon.yaml) |
| PBS | PBS | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PBS.yaml) |
| PCCW | 电讯盈科 | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PCCW.yaml) |
| PChomeTW | PChome Online 網路家庭 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PChomeTW.yaml) |
| PPTV | PPTV | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PPTV.yaml) |
| PSBC | 中国邮政储蓄银行 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PSBC.yaml) |
| PStorage | PStorage云存储 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PStorage.yaml) |
| PUBG | PUBG绝地求生 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PUBG.yaml) |
| PageCDN | PageCDN | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PageCDN.yaml) |
| Pandora | Pandora | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Pandora.yaml) |
| PandoraTV | Pandora TV | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PandoraTV.yaml) |
| PasswordManager | 密码管理 | 32 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PasswordManager.yaml) |
| Pastebin | Pastebin文本分享 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Pastebin.yaml) |
| Patreon | Patreon创作者赞助 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Patreon.yaml) |
| Pawchive | Pawchive图片 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Pawchive.yaml) |
| PayPal | PayPal | 248 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PayPal.yaml) |
| Pearson | 培生教育 | 93 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Pearson.yaml) |
| Peppy | peppy音游 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Peppy.yaml) |
| Perl | Perl编程语言 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Perl.yaml) |
| Perplexity | Perplexity AI | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Perplexity.yaml) |
| Pgyer | 蒲公英内测 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Pgyer.yaml) |
| Phoenix | 凤凰网 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Phoenix.yaml) |
| Picsee | PicSee | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Picsee.yaml) |
| PikPak | PikPak | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PikPak.yaml) |
| Pinduoduo | 拼多多 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Pinduoduo.yaml) |
| PingAn | 平安 | 27 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PingAn.yaml) |
| Pinterest | Pinterest | 52 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Pinterest.yaml) |
| PixHost | PixHost图片 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PixHost.yaml) |
| Pixiv | Pixiv | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Pixiv.yaml) |
| Pixnet | 痞客邦 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Pixnet.yaml) |
| PlayCover | PlayCover游戏运行 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PlayCover.yaml) |
| PlayStation | PlayStation | 8 | 2026-10-20 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PlayStation.yaml) |
| Plex | Plex媒体服务器 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Plex.yaml) |
| PlutoTV | Pluto TV | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PlutoTV.yaml) |
| PocketCasts | Pocket Casts | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PocketCasts.yaml) |
| Poe | Poe AI | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Poe.yaml) |
| PoloCloud | PoloCloud | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PoloCloud.yaml) |
| PolyU | 香港理工 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PolyU.yaml) |
| Polymer | Google Polymer | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Polymer.yaml) |
| Polyv | Polyv视频云 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Polyv.yaml) |
| PostImages | PostImages图片 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PostImages.yaml) |
| PotatoChat | Potato Chat | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PotatoChat.yaml) |
| PrimeVideo | Prime Video | 24 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PrimeVideo.yaml) |
| Privacy | 隐私保护 | 39894 | 2026-09-03 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Privacy.yaml) |
| PrivateTracker | PT下载 | 122 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/PrivateTracker.yaml) |
| ProQuest | ProQuest学术 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ProQuest.yaml) |
| Progress | Progress软件 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Progress.yaml) |
| ProjectSekai | 世界计划音游 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ProjectSekai.yaml) |
| Protonmail | ProtonMail | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Protonmail.yaml) |
| Pugpig | Pugpig出版 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Pugpig.yaml) |
| Purikonejp | 公主连结 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Purikonejp.yaml) |
| Python | Python | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Python.yaml) |
| QCC | 企查查 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/QCC.yaml) |
| QNAP | 威联通QNAP | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/QNAP.yaml) |
| QWeather | 和风天气 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/QWeather.yaml) |
| QiAnXin | 奇安信 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/QiAnXin.yaml) |
| QiMao | 七猫小说 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/QiMao.yaml) |
| QiNiuYun | 七牛云 | 54 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/QiNiuYun.yaml) |
| QiXin | 企查宝 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/QiXin.yaml) |
| QingCloud | 青云QingCloud | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/QingCloud.yaml) |
| QingTingFM | 蜻蜓 FM | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/QingTingFM.yaml) |
| Qobuz | Qobuz | 33 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Qobuz.yaml) |
| Qt | Qt跨平台框架 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Qt.yaml) |
| Qualcomm | 高通 | 50 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Qualcomm.yaml) |
| Quantil | Quantil CDN | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Quantil.yaml) |
| QuickConnect | QuickConnect | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/QuickConnect.yaml) |
| Quora | Quora | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Quora.yaml) |
| Qwant | Qwant搜索 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Qwant.yaml) |
| RB | 利洁时 | 457 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/RB.yaml) |
| REAGroup | REA房产 | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/REAGroup.yaml) |
| REGru | REG.RU域名 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/REGru.yaml) |
| RSSHub | RSSHub聚合工具 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/RSSHub.yaml) |
| RTHK | 香港电台 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/RTHK.yaml) |
| Radiko | Radiko日本电台 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Radiko.yaml) |
| RaiffeisenBank | Raiffeisen银行 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/RaiffeisenBank.yaml) |
| Rakuten | 乐天 | 37 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Rakuten.yaml) |
| Rarbg | RARBG | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Rarbg.yaml) |
| Razer | 雷蛇 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Razer.yaml) |
| ReadTheDocs | Read the Docs 文档服务 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ReadTheDocs.yaml) |
| RealType | RealType字体 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/RealType.yaml) |
| Reddit | Reddit | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Reddit.yaml) |
| Redis | Redis | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Redis.yaml) |
| RedotPay | RedotPay支付 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/RedotPay.yaml) |
| RemoteControl | 远程控制 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/RemoteControl.yaml) |
| RemoteDesktop | 远程桌面 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/RemoteDesktop.yaml) |
| Renren | 人人网 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Renren.yaml) |
| Reuters | 路透社 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Reuters.yaml) |
| Riot | Riot Games | 55 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Riot.yaml) |
| Roblox | Roblox | 51 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Roblox.yaml) |
| Rockstar | Rockstar Games | 18 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Rockstar.yaml) |
| Roku | Roku流媒体 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Roku.yaml) |
| RuanMei | 软媒 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/RuanMei.yaml) |
| Ruby | Ruby编程语言 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Ruby.yaml) |
| RubyChina | Ruby China社区 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/RubyChina.yaml) |
| Rumble | Rumble视频 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Rumble.yaml) |
| Rust | Rust 语言生态 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Rust.yaml) |
| Ruten | 露天拍卖 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Ruten.yaml) |
| SB | SB DNS服务 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SB.yaml) |
| SCI | Web of Science | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SCI.yaml) |
| SCMP | 南华早报 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SCMP.yaml) |
| SFExpress | 顺丰速运 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SFExpress.yaml) |
| SMTiaoJiaoShi | 教师平台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SMTiaoJiaoShi.yaml) |
| SMZDM | 什么值得买 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SMZDM.yaml) |
| SNK | SNK游戏 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SNK.yaml) |
| SNodeHome | SNode智能家居 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SNodeHome.yaml) |
| SSLCom | SSL.com证书 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SSLCom.yaml) |
| STOExpress | 申通快递 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/STOExpress.yaml) |
| STUN | STUN / WebRTC 服务 | 359 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/STUN.yaml) |
| SVP | SVP视频增强 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SVP.yaml) |
| SafePal | SafePal钱包 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SafePal.yaml) |
| Salesforce | Salesforce | 49 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Salesforce.yaml) |
| Samsung | 三星 | 28 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Samsung.yaml) |
| Sankei | 产经新闻 | 30 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Sankei.yaml) |
| Scala | Scala编程语言 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Scala.yaml) |
| Scaleflex | Scaleflex | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Scaleflex.yaml) |
| Scholar | 学术 | 302 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Scholar.yaml) |
| Schoopia | 同学派 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Schoopia.yaml) |
| Schwab | 嘉信理财 | 9 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Schwab.yaml) |
| SciHub | Sci-Hub学术 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SciHub.yaml) |
| ScienceDirect | ScienceDirect 科学文献 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ScienceDirect.yaml) |
| Seasun | 西山居 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Seasun.yaml) |
| Sectigo | Sectigo | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Sectigo.yaml) |
| SegmentFault | 思否开发者社区 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SegmentFault.yaml) |
| Selectel | Selectel云 | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Selectel.yaml) |
| Sentry | Sentry 错误监控 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Sentry.yaml) |
| ServicePipe | ServicePipe | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ServicePipe.yaml) |
| Shanbay | 扇贝 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Shanbay.yaml) |
| ShangHaiJuXiao | 上海聚效 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ShangHaiJuXiao.yaml) |
| Shanling | 山灵音响 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Shanling.yaml) |
| ShareThis | ShareThis分享 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ShareThis.yaml) |
| ShenMa | 神马 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ShenMa.yaml) |
| ShiJiChaoXing | 世纪超星 | 36 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ShiJiChaoXing.yaml) |
| ShiNongZhiKe | 识农智能科技 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ShiNongZhiKe.yaml) |
| Shopee | Shopee | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Shopee.yaml) |
| Shopify | Shopify | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Shopify.yaml) |
| Showtime | Showtime流媒体 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Showtime.yaml) |
| Signal | Signal | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Signal.yaml) |
| Sina | 新浪 | 142 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Sina.yaml) |
| SingTaoNews | 星岛日报 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SingTaoNews.yaml) |
| Siri | Siri | 2 | 2026-08-03 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Siri.yaml) |
| SitePoint | SitePoint | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SitePoint.yaml) |
| Skillshare | Skillshare | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Skillshare.yaml) |
| Sky | Sky | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Sky.yaml) |
| SkyGO | Sky GO | 17 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SkyGO.yaml) |
| Slack | Slack | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Slack.yaml) |
| Sling | Sling TV | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Sling.yaml) |
| SmarTone | 数码通 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SmarTone.yaml) |
| Snap | Snapchat | 9 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Snap.yaml) |
| SocialMediaGlobal | 全球社交媒体 | 627 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SocialMediaGlobal.yaml) |
| SoftBank | 软银 | 20 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SoftBank.yaml) |
| Sogou | 搜狗 | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Sogou.yaml) |
| Sohu | 搜狐 | 81 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Sohu.yaml) |
| Sony | 索尼 | 128 | 2026-10-16 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Sony.yaml) |
| SouFang | 搜房 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SouFang.yaml) |
| SoundCloud | SoundCloud | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SoundCloud.yaml) |
| SourceForge | SourceForge | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SourceForge.yaml) |
| SourceHut | SourceHut代码托管 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SourceHut.yaml) |
| SpaceMail | SpaceMail邮件 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SpaceMail.yaml) |
| SpaceX | SpaceX | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SpaceX.yaml) |
| Spaceship | Spaceship域名 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Spaceship.yaml) |
| Spark | Spark | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Spark.yaml) |
| Speedtest | Speedtest | 3478 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Speedtest.yaml) |
| Spiceworks | Spiceworks社区 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Spiceworks.yaml) |
| Spotify | Spotify | 40 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Spotify.yaml) |
| Springer | Springer学术 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Springer.yaml) |
| SquareUp | Square支付 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SquareUp.yaml) |
| StackPath | StackPath CDN | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/StackPath.yaml) |
| Stackexchange | Stack Exchange | 25 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Stackexchange.yaml) |
| Stage1st | Stage1st论坛 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Stage1st.yaml) |
| StandardChartered | 渣打银行 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/StandardChartered.yaml) |
| StarPlus | Star+流媒体 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/StarPlus.yaml) |
| StarWorld | StarWorld游戏平台 | 25 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/StarWorld.yaml) |
| Starbucks | 星巴克 | 67 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Starbucks.yaml) |
| StarfieldTech | Starfield SSL | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/StarfieldTech.yaml) |
| Startpage | Startpage搜索 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Startpage.yaml) |
| StaticFile | Staticfile前端CDN | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/StaticFile.yaml) |
| Steam | Steam | 97 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Steam.yaml) |
| SteamCN | Steam中国 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SteamCN.yaml) |
| SteamUnlocked | SteamUnlocked游戏资源 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SteamUnlocked.yaml) |
| Steemit | Steemit | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Steemit.yaml) |
| StraitsX | StraitsX支付 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/StraitsX.yaml) |
| Streamable | Streamable视频 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Streamable.yaml) |
| Strepsils | Strepsils润喉 | 33 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Strepsils.yaml) |
| Stripe | Stripe 支付服务 | 8 | 2026-09-18 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Stripe.yaml) |
| SuNing | 苏宁 | 31 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SuNing.yaml) |
| SublimeText | Sublime Text | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SublimeText.yaml) |
| SuiShiChuanMei | 随视传媒 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SuiShiChuanMei.yaml) |
| SumKoo | 数木科技 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SumKoo.yaml) |
| Supercell | Supercell | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Supercell.yaml) |
| SurugaYa | 駿河屋 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SurugaYa.yaml) |
| Swift | Swift | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Swift.yaml) |
| SwissSign | SwissSign证书 | 31 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SwissSign.yaml) |
| SymantecPKI | 赛门铁克证书 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/SymantecPKI.yaml) |
| Synology | 群晖 | 27 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Synology.yaml) |
| TCL | TCL | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TCL.yaml) |
| TGBus | 电玩巴士 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TGBus.yaml) |
| TIDAL | TIDAL | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TIDAL.yaml) |
| TMDB | TMDB 影视数据库 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TMDB.yaml) |
| TMTPost | 钛媒体 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TMTPost.yaml) |
| TVB | TVB | 22 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TVB.yaml) |
| TVDB | TVDB 影视数据库 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TVDB.yaml) |
| TVer | TVer | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TVer.yaml) |
| TWCA | TWCA证书 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TWCA.yaml) |
| TaiKang | 泰康 | 38 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TaiKang.yaml) |
| TaiWanGood | 台湾好 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TaiWanGood.yaml) |
| TaiheMusic | 太合音乐 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TaiheMusic.yaml) |
| Tailscale | Tailscale 组网 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Tailscale.yaml) |
| TakeTwo | Take-Two Interactive | 17 | 2026-08-17 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TakeTwo.yaml) |
| Taomee | 淘米 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Taomee.yaml) |
| TapTap | TapTap | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TapTap.yaml) |
| Target | Target零售 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Target.yaml) |
| TaylorFrancis | Taylor&Francis | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TaylorFrancis.yaml) |
| TeX | TeX排版 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TeX.yaml) |
| TeamSpeak | TeamSpeak语音通讯 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TeamSpeak.yaml) |
| TeamViewer | TeamViewer | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TeamViewer.yaml) |
| Teambition | Teambition | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Teambition.yaml) |
| TechTimes | TechTimes | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TechTimes.yaml) |
| Technogym | Technogym健身 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Technogym.yaml) |
| Telegram | Telegram | 69 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Telegram.yaml) |
| TempMail | 临时邮箱 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TempMail.yaml) |
| Tencent | 腾讯 | 2771 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Tencent.yaml) |
| TencentCloud | 腾讯云计算 | 2715 | 2026-09-04 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TencentCloud.yaml) |
| TencentDev | 腾讯开发服务 | 16 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TencentDev.yaml) |
| TencentLoLMobile | 腾讯英雄联盟手游 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TencentLoLMobile.yaml) |
| TencentTME | 腾讯音乐娱乐 | 45 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TencentTME.yaml) |
| TencentVideo | 腾讯视频 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TencentVideo.yaml) |
| TendCloud | 腾云数据 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TendCloud.yaml) |
| TeraBox | TeraBox | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TeraBox.yaml) |
| Termux | Termux终端 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Termux.yaml) |
| Tesla | 特斯拉 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Tesla.yaml) |
| TestFlight | TestFlight | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TestFlight.yaml) |
| TheGuardian | 卫报 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TheGuardian.yaml) |
| TheLinuxFoundation | Linux基金会 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TheLinuxFoundation.yaml) |
| TheSun | 太阳报 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TheSun.yaml) |
| TheTimes | 泰晤士报 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TheTimes.yaml) |
| TheType | TheType字体 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TheType.yaml) |
| ThomsonReuters | 汤森路透 | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ThomsonReuters.yaml) |
| Threads | Threads社交 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Threads.yaml) |
| TianCity | 天畅网络 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TianCity.yaml) |
| TianTianKanKan | 天天看看 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TianTianKanKan.yaml) |
| TianWeiChengXin | 天威诚信 | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TianWeiChengXin.yaml) |
| TianYaForum | 天涯社区 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TianYaForum.yaml) |
| Tidelift | Tidelift赞助 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Tidelift.yaml) |
| TigerFintech | 老虎证券 | 20 | 2026-08-18 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TigerFintech.yaml) |
| TikTok | TikTok | 64 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TikTok.yaml) |
| Timeweb | Timeweb托管 | 5 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Timeweb.yaml) |
| TokyoSports | 东京体育 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TokyoSports.yaml) |
| Tonec | IDM下载器 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Tonec.yaml) |
| TongCheng | 同程 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TongCheng.yaml) |
| TrackerNetwork | Tracker游戏统计 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TrackerNetwork.yaml) |
| Trae | Trae AI 编程 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Trae.yaml) |
| TranslateWiki | Translatewiki | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TranslateWiki.yaml) |
| Trello | Trello 项目管理 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Trello.yaml) |
| TrustAsia | 天威诚信证书 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TrustAsia.yaml) |
| Trustwave | Trustwave安全 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Trustwave.yaml) |
| Tubi | Tubi流媒体 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Tubi.yaml) |
| Tumblr | Tumblr | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Tumblr.yaml) |
| Tutanota | Tuta 加密邮件 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Tutanota.yaml) |
| Twilio | Twilio通信 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Twilio.yaml) |
| Twitch | Twitch | 59 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Twitch.yaml) |
| Twitter | Twitter | 36 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Twitter.yaml) |
| TypeNetwork | TypeNetwork字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/TypeNetwork.yaml) |
| Typekit | Adobe Fonts | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Typekit.yaml) |
| Typography | Typography字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Typography.yaml) |
| U17 | 有妖气 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/U17.yaml) |
| UBI | 育碧 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/UBI.yaml) |
| UC | UC浏览器 | 42 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/UC.yaml) |
| UCloud | 优刻得 | 59 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/UCloud.yaml) |
| UOLiv | 利物浦大学 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/UOLiv.yaml) |
| UPYun | 又拍云 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/UPYun.yaml) |
| URLShortener | URL 短链接 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/URLShortener.yaml) |
| UUChat | UU游戏语音 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/UUChat.yaml) |
| Uber | Uber | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Uber.yaml) |
| Ubisoft | 育碧游戏 | 31 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Ubisoft.yaml) |
| Ubuntu | Ubuntu | 54 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Ubuntu.yaml) |
| UbuntuKylin | 优麒麟 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/UbuntuKylin.yaml) |
| Udacity | Udacity教育 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Udacity.yaml) |
| Udemy | Udemy 在线课程 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Udemy.yaml) |
| Umeng | 友盟+ | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Umeng.yaml) |
| UnionPay | 中国银联 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/UnionPay.yaml) |
| Unity | Unity | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Unity.yaml) |
| UsersDrive | UsersDrive文件托管 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/UsersDrive.yaml) |
| V8 | V8 JavaScript引擎 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/V8.yaml) |
| VGTime | VGTime游戏资讯 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/VGTime.yaml) |
| VISA | VISA | 160 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/VISA.yaml) |
| VK | VK | 52 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/VK.yaml) |
| VMware | VMware虚拟化 | 104 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/VMware.yaml) |
| VRCDN | VRCDN直播 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/VRCDN.yaml) |
| VRChat | VRChat社交 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/VRChat.yaml) |
| Vancl | 凡客 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Vancl.yaml) |
| Vanish | Vanish衣物护理 | 47 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Vanish.yaml) |
| Vaptcha | Vaptcha验证 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Vaptcha.yaml) |
| Veet | Veet脱毛 | 45 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Veet.yaml) |
| Vercel | Vercel | 30 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Vercel.yaml) |
| Verisign | Verisign | 83 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Verisign.yaml) |
| Verizon | Verizon | 183 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Verizon.yaml) |
| VidolTV | Vidol TV | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/VidolTV.yaml) |
| VikACG | VikACG | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/VikACG.yaml) |
| Viki | Viki | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Viki.yaml) |
| Vimeo | Vimeo | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Vimeo.yaml) |
| VipShop | 唯品会 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/VipShop.yaml) |
| VisualArts | Visual Arts游戏 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/VisualArts.yaml) |
| Viu | Viu视频 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Viu.yaml) |
| ViuTV | ViuTV | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ViuTV.yaml) |
| Vivo | vivo | 17 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Vivo.yaml) |
| VoIP | VoIP 通信 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/VoIP.yaml) |
| Volcengine | 火山引擎 | 279 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Volcengine.yaml) |
| Voxmedia | Vox Media | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Voxmedia.yaml) |
| Vultr | Vultr云服务器 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Vultr.yaml) |
| WBGames | WB Games | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WBGames.yaml) |
| WISeKey | WISeKey安全 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WISeKey.yaml) |
| WIX | WIX | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WIX.yaml) |
| WPS | WPS Office | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WPS.yaml) |
| WSJ | 华尔街日报 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WSJ.yaml) |
| Wallhaven | Wallhaven壁纸 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Wallhaven.yaml) |
| Walmart | Walmart | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Walmart.yaml) |
| WanFang | 万方数据 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WanFang.yaml) |
| WanKaHuanJu | 玩咖欢聚 | 29 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WanKaHuanJu.yaml) |
| WanMeiShiJie | 完美世界 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WanMeiShiJie.yaml) |
| WangSuKeJi | 网宿科技 | 193 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WangSuKeJi.yaml) |
| WangXinKeJi | 网心科技 | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WangXinKeJi.yaml) |
| WarGaming | Wargaming游戏 | 12 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WarGaming.yaml) |
| Wasu | 华数传媒 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Wasu.yaml) |
| WeChat | 微信 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WeChat.yaml) |
| WeTV | WeTV | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WeTV.yaml) |
| WeatherCN | 华风天气 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WeatherCN.yaml) |
| WebArchive | 网络存档 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WebArchive.yaml) |
| WebEx | WebEx会议 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WebEx.yaml) |
| WebType | WebType字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WebType.yaml) |
| WeiPhone | 威锋网 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WeiPhone.yaml) |
| WeiZhiYunDong | 微至云动 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WeiZhiYunDong.yaml) |
| Weibo | 微博 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Weibo.yaml) |
| WenJuanXing | 问卷星 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WenJuanXing.yaml) |
| WenShuShu | 文叔叔传输 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WenShuShu.yaml) |
| Westerndigital | 西部数据 | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Westerndigital.yaml) |
| Whatsapp | WhatsApp | 30 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Whatsapp.yaml) |
| WholeFoods | Whole Foods | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WholeFoods.yaml) |
| Whoosh | Whoosh出行 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Whoosh.yaml) |
| WiFiMaster | WiFi万能钥匙 | 62 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WiFiMaster.yaml) |
| WikiCN | 中文百科 | 15 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WikiCN.yaml) |
| WikiDot | Wikidot | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WikiDot.yaml) |
| WikiHow | WikiHow百科 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WikiHow.yaml) |
| Wikimedia | 维基媒体 | 20 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Wikimedia.yaml) |
| Wikipedia | 维基 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Wikipedia.yaml) |
| WildRift | 英雄联盟手游 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WildRift.yaml) |
| Wildberries | Wildberries | 114 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Wildberries.yaml) |
| Windsurf | Windsurf AI 编程 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Windsurf.yaml) |
| Windy | Windy 天气预报与可视化平台 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Windy.yaml) |
| Wise | Wise汇款 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Wise.yaml) |
| Wish | Wish电商 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Wish.yaml) |
| Wistia | Wistia视频 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Wistia.yaml) |
| WoLai | 我来 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/WoLai.yaml) |
| Woolite | Woolite洗涤 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Woolite.yaml) |
| Wordpress | WordPress | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Wordpress.yaml) |
| X5 | X5零售 | 35 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/X5.yaml) |
| XD | XD设计社区 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XD.yaml) |
| XDA | XDA开发者社区 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XDA.yaml) |
| XEdge | XEdge加速 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XEdge.yaml) |
| XTom | xTom服务器 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XTom.yaml) |
| Xbox | Xbox | 45 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Xbox.yaml) |
| XiMaLaYa | 喜马拉雅 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XiMaLaYa.yaml) |
| XiamiMusic | 虾米音乐 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XiamiMusic.yaml) |
| XianYu | 闲鱼 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XianYu.yaml) |
| XiaoGouKeJi | 小狗科技 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XiaoGouKeJi.yaml) |
| XiaoHeihe | 小黑盒 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XiaoHeihe.yaml) |
| XiaoHongShu | 小红书 | 12 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XiaoHongShu.yaml) |
| XiaoMi | 小米 | 196 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XiaoMi.yaml) |
| XiaoYuZhou | 小宇宙播客 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XiaoYuZhou.yaml) |
| XiaoYuanKeJi | 小源科技 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XiaoYuanKeJi.yaml) |
| XiaomiAI | 小米 AI | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XiaomiAI.yaml) |
| XieCheng | 携程 | 44 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XieCheng.yaml) |
| XueErSi | 学而思 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XueErSi.yaml) |
| XueQiu | 雪球 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/XueQiu.yaml) |
| Xunlei | 迅雷 | 37 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Xunlei.yaml) |
| YCombinator | Y Combinator | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YCombinator.yaml) |
| YNet | Ynet传媒 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YNet.yaml) |
| YTOExpress | 圆通速递 | 43 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YTOExpress.yaml) |
| YY | YY 直播 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YY.yaml) |
| YYeTs | 人人影视 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YYeTs.yaml) |
| Yahoo | Yahoo | 178 | 2026-08-27 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Yahoo.yaml) |
| Yandex | Yandex | 215 | 2026-10-20 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Yandex.yaml) |
| YiXiaKeJi | 一下科技 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YiXiaKeJi.yaml) |
| YiZhiBo | 易直播 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YiZhiBo.yaml) |
| YnoProject | Yno同人游戏 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YnoProject.yaml) |
| YoStar | Yostar游戏 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YoStar.yaml) |
| Yokaverse | 姚记乐元素 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Yokaverse.yaml) |
| Yomiuri | 读卖新闻 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Yomiuri.yaml) |
| YouMengChuangXiang | 游梦创想 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YouMengChuangXiang.yaml) |
| YouMind | YouMind | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YouMind.yaml) |
| YouTube | YouTube | 193 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YouTube.yaml) |
| YouTubeMusic | YouTube Music | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YouTubeMusic.yaml) |
| YouZan | 有赞 | 7 | 2026-08-01 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YouZan.yaml) |
| Youku | 优酷 | 62 | 2026-08-01 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Youku.yaml) |
| YuKeTang | 雨课堂 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YuKeTang.yaml) |
| YuanBei | 圆贝信息 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YuanBei.yaml) |
| YuanFuDao | 猿辅导 | 92 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YuanFuDao.yaml) |
| YunFanJiaSu | 云帆加速 | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YunFanJiaSu.yaml) |
| YundaExpress | 韵达快递 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/YundaExpress.yaml) |
| ZB | 直播吧 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZB.yaml) |
| ZDNS | 国家工程研究中心 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZDNS.yaml) |
| ZTE | 中兴通讯 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZTE.yaml) |
| ZTOExpress | 中通快递 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZTOExpress.yaml) |
| Zaobao | 联合早报 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Zaobao.yaml) |
| Zee | Zee | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Zee.yaml) |
| ZeeTV | Zee TV | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZeeTV.yaml) |
| Zendesk | Zendesk | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Zendesk.yaml) |
| Zeplin | Zeplin设计交付 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Zeplin.yaml) |
| ZhangYue | 掌阅 | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZhangYue.yaml) |
| ZhiYinManKe | 知音漫客 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZhiYinManKe.yaml) |
| ZhiYunZhong | 智云众 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZhiYunZhong.yaml) |
| Zhihu | 知乎 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Zhihu.yaml) |
| ZhongGuoShiHua | 中国石化 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZhongGuoShiHua.yaml) |
| ZhongWeiShiJi | 中维世纪 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZhongWeiShiJi.yaml) |
| ZhongYuanYiShang | 中元易尚 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZhongYuanYiShang.yaml) |
| ZhuBaJie | 猪八戒 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZhuBaJie.yaml) |
| ZhuanZhuan | 转转 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZhuanZhuan.yaml) |
| Ziroom | 自如 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Ziroom.yaml) |
| Zoho | Zoho | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Zoho.yaml) |
| Zoom | Zoom 视频会议 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Zoom.yaml) |
| Zotero | Zotero 文献管理 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Zotero.yaml) |
| Zscaler | Zscaler安全 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Zscaler.yaml) |
| ZuoYeBang | 作业帮 | 5 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ZuoYeBang.yaml) |
| Zynga | Zynga社交游戏 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/Zynga.yaml) |
| eBay | eBay | 370 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/eBay.yaml) |
| edX | edX 在线课程 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/edX.yaml) |
| friDay | friDay影音 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/friDay.yaml) |
| iCloud | iCloud | 56 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/iCloud.yaml) |
| iCloudPrivateRelay | iCloud Private Relay | 10 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/iCloudPrivateRelay.yaml) |
| iFlytek | 科大讯飞 | 152 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/iFlytek.yaml) |
| iQIYI | 爱奇艺 | 82 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/iQIYI.yaml) |
| iQIYIIntl | 爱奇艺国际版 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/iQIYIIntl.yaml) |
| iTalkBB | iTalkBB | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/iTalkBB.yaml) |
| iTunes | Apple iTunes | 98 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/iTunes.yaml) |
| ifanr | 爱范儿 | 35 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/ifanr.yaml) |
| myTVSUPER | myTV SUPER | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Stash/myTVSUPER.yaml) |

</details>
