# Mihomo 规则目录

> 上游：[MagicRule](https://magicrule.pages.dev) · 本目录每天自动同步 · 本页由 [scripts/sync.mjs](../../scripts/sync.mjs) 生成，请勿手动编辑。

- 原始地址前缀：`https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/`
- 国内镜像（jsDelivr）：`https://cdn.jsdelivr.net/gh/Valiumlove/magicrule-mirror@main/rules/Mihomo/`
- 规则数：**1185** · 总行数：**816256**

## 常用规则（可直接复制）

> 下面的示例可直接粘贴到客户端配置里；策略名 `REJECT` / `DIRECT` / `PROXY` 按需替换成你自己的策略组。

```yaml
rule-providers:
  advertising:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Advertising.yaml"
    path: ./ruleset/advertising.yaml
    interval: 86400
  advertisinglite:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AdvertisingLite.yaml"
    path: ./ruleset/advertisinglite.yaml
    interval: 86400
  privacy:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Privacy.yaml"
    path: ./ruleset/privacy.yaml
    interval: 86400
  direct:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Direct.yaml"
    path: ./ruleset/direct.yaml
    interval: 86400
  china:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/China.yaml"
    path: ./ruleset/china.yaml
    interval: 86400
  global:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Global.yaml"
    path: ./ruleset/global.yaml
    interval: 86400
  lan:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Lan.yaml"
    path: ./ruleset/lan.yaml
    interval: 86400
  youtube:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YouTube.yaml"
    path: ./ruleset/youtube.yaml
    interval: 86400
  netflix:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Netflix.yaml"
    path: ./ruleset/netflix.yaml
    interval: 86400
  telegram:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Telegram.yaml"
    path: ./ruleset/telegram.yaml
    interval: 86400
  openai:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OpenAI.yaml"
    path: ./ruleset/openai.yaml
    interval: 86400
  spotify:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Spotify.yaml"
    path: ./ruleset/spotify.yaml
    interval: 86400
  steam:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Steam.yaml"
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

## 全部规则（1185）

<details>
<summary>展开全部 1185 条</summary>

| 规则 | 说明 | 条数 | 更新时间 | 原始链接 |
| --- | --- | ---: | --- | --- |
| 115 | 115网盘 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/115.yaml) |
| 12306 | 铁路12306 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/12306.yaml) |
| 17173 | 17173 | 57 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/17173.yaml) |
| 178 | 178游戏网 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/178.yaml) |
| 17zuoye | 一起作业 | 33 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/17zuoye.yaml) |
| 1Password | 1Password密码管理 | 15 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/1Password.yaml) |
| 2KGames | 2K Games游戏 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/2KGames.yaml) |
| 360 | 奇虎360 | 287 | 2026-09-04 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/360.yaml) |
| 360Cloud | 360云计算 | 30 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/360Cloud.yaml) |
| 36kr | 36氪 | 6 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/36kr.yaml) |
| 4399 | 4399小游戏 | 63 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/4399.yaml) |
| 51Job | 前程无忧 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/51Job.yaml) |
| 56 | 56网 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/56.yaml) |
| 58TongCheng | 58同城 | 70 | 2026-08-17 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/58TongCheng.yaml) |
| 6JianFang | 六间房 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/6JianFang.yaml) |
| 800Best | 800best电商 | 29 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/800Best.yaml) |
| 8btc | 8btc | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/8btc.yaml) |
| 9News | 9News | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/9News.yaml) |
| 9to5 | 9to5Mac | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/9to5.yaml) |
| AAMGame | AAMGame游戏平台 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AAMGame.yaml) |
| ABC | 农业银行 | 11 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ABC.yaml) |
| ACG | 动漫游戏 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ACG.yaml) |
| AFP | 法新社 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AFP.yaml) |
| AMD | AMD | 6 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AMD.yaml) |
| AMP | Google AMP | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AMP.yaml) |
| AOL | AOL | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AOL.yaml) |
| AP | 美联社 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AP.yaml) |
| ASUS | 华硕 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ASUS.yaml) |
| ATT | AT&T | 135 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ATT.yaml) |
| ATTWatchTV | AT&T WatchTV | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ATTWatchTV.yaml) |
| AWS | Amazon Web Services | 77 | 2026-08-24 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AWS.yaml) |
| AbemaTV | AbemaTV | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AbemaTV.yaml) |
| AcFun | AcFun弹幕视频网 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AcFun.yaml) |
| AccuWeather | AccuWeather天气 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AccuWeather.yaml) |
| Acer | 宏碁 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Acer.yaml) |
| Actalis | Actalis证书 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Actalis.yaml) |
| AdGuard | AdGuard 广告拦截与隐私保护 | 19 | 2026-08-27 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AdGuard.yaml) |
| AdGuardSDNSFilter | AdGuard DNS Filter | 185 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AdGuardSDNSFilter.yaml) |
| AdGuardSDNSFilterDirect | AdGuardS DNS Filter Direct | 184682 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AdGuardSDNSFilterDirect.yaml) |
| Adidas | 阿迪达斯 | 90 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Adidas.yaml) |
| Adobe | Adobe | 277 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Adobe.yaml) |
| AdobeActivation | Adobe激活验证 | 134 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AdobeActivation.yaml) |
| Advertising | 去广告 | 260864 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Advertising.yaml) |
| AdvertisingLite | 去广告精简版 | 186193 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AdvertisingLite.yaml) |
| AdvertisingMiTV | 小米电视广告 | 1775 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AdvertisingMiTV.yaml) |
| Aerogard | Aerogard驱蚊 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Aerogard.yaml) |
| Agora | 声网 | 5 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Agora.yaml) |
| AiQiCha | 爱企查 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AiQiCha.yaml) |
| AiXcoder | AiXcoder AI 编程助手 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AiXcoder.yaml) |
| AirChina | 中国国际航空 | 40 | 2026-08-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AirChina.yaml) |
| AirWick | Air Wick空气清新剂 | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AirWick.yaml) |
| Airbnb | Airbnb | 83 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Airbnb.yaml) |
| Akamai | Akamai | 81 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Akamai.yaml) |
| AkamaiCloud | Akamai云计算 | 357 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AkamaiCloud.yaml) |
| Akiko | Akiko服装 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Akiko.yaml) |
| AlJazeera | 半岛电视台 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AlJazeera.yaml) |
| AliGames | 阿里游戏 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AliGames.yaml) |
| AliPay | 支付宝 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AliPay.yaml) |
| Alibaba | 阿里巴巴 | 1625 | 2026-08-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Alibaba.yaml) |
| Aliyun | 阿里云 | 100 | 2026-08-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Aliyun.yaml) |
| AliyunDrive | 阿里云盘 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AliyunDrive.yaml) |
| All4 | All 4 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/All4.yaml) |
| Alphabet | Alphabet 集团 | 1133 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Alphabet.yaml) |
| Amazon | Amazon | 294 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Amazon.yaml) |
| AmazonCloud | Amazon云计算 | 5157 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AmazonCloud.yaml) |
| AmazonPrimeVideo | Amazon Prime Video | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AmazonPrimeVideo.yaml) |
| AnTianKeJi | 安天科技 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AnTianKeJi.yaml) |
| Anaconda | Anaconda Python 数据科学平台 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Anaconda.yaml) |
| AnandTech | AnandTech科技 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AnandTech.yaml) |
| Android | Android | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Android.yaml) |
| AndroidDownload | Android 应用下载 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AndroidDownload.yaml) |
| Anexia | Anexia云 | 33 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Anexia.yaml) |
| Anime | 动漫媒体 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Anime.yaml) |
| Anjuke | 安居客 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Anjuke.yaml) |
| Anker | Anker | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Anker.yaml) |
| AnnasArchive | Anna's Archive电子书检索 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AnnasArchive.yaml) |
| Anthropic | Anthropic | 52 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Anthropic.yaml) |
| Antivirus | 杀毒与安全软件 | 166 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Antivirus.yaml) |
| ApiFox | Apifox | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ApiFox.yaml) |
| ApiPost | ApiPost | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ApiPost.yaml) |
| Apkpure | APKPure | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Apkpure.yaml) |
| AppStore | App Store | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppStore.yaml) |
| Apple | Apple | 2091 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Apple.yaml) |
| AppleCDN | Apple CDN | 35 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleCDN.yaml) |
| AppleDev | Apple开发者 | 55 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleDev.yaml) |
| AppleDirect | Apple 直连 | 37 | 2026-08-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleDirect.yaml) |
| AppleFirmware | Apple固件 | 178 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleFirmware.yaml) |
| AppleHardware | Apple硬件 | 226 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleHardware.yaml) |
| AppleIntelligence | Apple 智能服务 | 6 | 2026-08-03 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleIntelligence.yaml) |
| AppleMedia | Apple媒体服务 | 52 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleMedia.yaml) |
| AppleMusic | Apple Music | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleMusic.yaml) |
| AppleNews | Apple News | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleNews.yaml) |
| ApplePKI | Apple证书 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ApplePKI.yaml) |
| ApplePodcasts | Apple 播客 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ApplePodcasts.yaml) |
| AppleProxy | Apple代理 | 69 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleProxy.yaml) |
| AppleTV | Apple TV | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleTV.yaml) |
| AppleUpdate | Apple 更新服务 | 97 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AppleUpdate.yaml) |
| ArchLinux | Arch Linux | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ArchLinux.yaml) |
| ArchiveOfOurOwn | AO3同人作品存档 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ArchiveOfOurOwn.yaml) |
| ArchiveToday | Archive.today网页快照 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ArchiveToday.yaml) |
| Arphic | 文鼎科技 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Arphic.yaml) |
| ArtStation | ArtStation | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ArtStation.yaml) |
| Asahi | 朝日新闻 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Asahi.yaml) |
| AsianMedia | 亚洲媒体 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/AsianMedia.yaml) |
| Asobo | Asobo游戏工作室 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Asobo.yaml) |
| Assassin'sCreed-Odyssey | 刺客教条 奥德赛 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Assassin'sCreed-Odyssey.yaml) |
| Assassin'sCreed-Origins | 刺客教条 起源 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Assassin'sCreed-Origins.yaml) |
| Atlassian | Atlassian | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Atlassian.yaml) |
| Autodesk | Autodesk 欧特克 | 558 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Autodesk.yaml) |
| Aviasales | Aviasales机票 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Aviasales.yaml) |
| Azure | Microsoft Azure | 154 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Azure.yaml) |
| BBC | BBC | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BBC.yaml) |
| BJYouth | 北京青年报 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BJYouth.yaml) |
| BMW | 宝马 | 730 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BMW.yaml) |
| BOC | 中国银行 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BOC.yaml) |
| BOCOM | 交通银行 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BOCOM.yaml) |
| Bahamut | 巴哈姆特 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bahamut.yaml) |
| BaiFenDian | 百分点 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BaiFenDian.yaml) |
| BaiShanYunKeJi | 白山耘科技 | 59 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BaiShanYunKeJi.yaml) |
| Baidu | 百度 | 337 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Baidu.yaml) |
| BaiduCloud | 百度云计算 | 141 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BaiduCloud.yaml) |
| Bandcamp | Bandcamp音乐 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bandcamp.yaml) |
| Bangumi | Bangumi番组 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bangumi.yaml) |
| BaoFengYingYin | 暴风影音 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BaoFengYingYin.yaml) |
| Barrons | 巴伦周刊 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Barrons.yaml) |
| BeStore | 良品铺子 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BeStore.yaml) |
| Beats | Beats | 717 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Beats.yaml) |
| Beget | Beget托管 | 13 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Beget.yaml) |
| Beisen | 北森 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Beisen.yaml) |
| BestTV | 百视通 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BestTV.yaml) |
| Bestbuy | 百思买 | 82 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bestbuy.yaml) |
| Bethesda | Bethesda游戏 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bethesda.yaml) |
| BetterExplained | BetterExplained数学编程 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BetterExplained.yaml) |
| BianFeng | 边锋网络 | 100 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BianFeng.yaml) |
| BiliBili | 哔哩哔哩 | 127 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BiliBili.yaml) |
| BiliBiliGame | B站游戏平台 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BiliBiliGame.yaml) |
| Binance | 币安交易所 | 48 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Binance.yaml) |
| Bing | 必应 | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bing.yaml) |
| BitAuto | 易车 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BitAuto.yaml) |
| BitSquare | Bisq交易所 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BitSquare.yaml) |
| Bitwarden | Bitwarden 密码管理 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bitwarden.yaml) |
| Blender | Blender三维 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Blender.yaml) |
| Blizzard | 暴雪娱乐 | 50 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Blizzard.yaml) |
| Blogspot | Blogger / Blogspot | 76 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Blogspot.yaml) |
| Bloomberg | 彭博 | 61 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bloomberg.yaml) |
| BlueArchive | 蔚蓝档案 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BlueArchive.yaml) |
| Blued | Blued | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Blued.yaml) |
| BluepochGames | 深蓝互动游戏 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BluepochGames.yaml) |
| Blurams | Blurams 智能安防 | 2 | 2026-07-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Blurams.yaml) |
| BoXun | 博讯 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BoXun.yaml) |
| Bohemia | Bohemia游戏 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bohemia.yaml) |
| Booking | Booking预订 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Booking.yaml) |
| Books | 博客来 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Books.yaml) |
| Bootcss | BootCDN | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bootcss.yaml) |
| Brave | Brave 浏览器 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Brave.yaml) |
| Bridgestone | 普利司通轮胎 | 98 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bridgestone.yaml) |
| BrightCove | BrightCove | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BrightCove.yaml) |
| Brilliant | Brilliant 在线学习 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Brilliant.yaml) |
| BuBeiDanCi | 不背单词 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BuBeiDanCi.yaml) |
| Bushiroad | Bushiroad娱乐 | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bushiroad.yaml) |
| BuyMeACoffee | Buy Me a Coffee | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/BuyMeACoffee.yaml) |
| Buypass | Buypass | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Buypass.yaml) |
| Bybit | Bybit交易所 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Bybit.yaml) |
| ByteDance | 字节跳动 | 1064 | 2026-10-20 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ByteDance.yaml) |
| ByteDanceAI | 字节跳动国际 AI | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ByteDanceAI.yaml) |
| CAS | CA证书机构 | 257 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CAS.yaml) |
| CBS | CBS | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CBS.yaml) |
| CCB | 建设银行 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CCB.yaml) |
| CCTV | 央视 | 44 | 2026-07-31 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CCTV.yaml) |
| CDEK | CDEK快递 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CDEK.yaml) |
| CDN77 | CDN77 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CDN77.yaml) |
| CEB | 光大银行 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CEB.yaml) |
| CGB | 广发银行 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CGB.yaml) |
| CHT | 中华电信 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CHT.yaml) |
| CIBN | CIBN互联网电视 | 71 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CIBN.yaml) |
| CITIC | 中信银行 | 30 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CITIC.yaml) |
| CKJR | 创客匠人 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CKJR.yaml) |
| CMB | 招商银行 | 39 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CMB.yaml) |
| CNB | CNB代码托管 | 2 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CNB.yaml) |
| CNET | CNET科技 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CNET.yaml) |
| CNKI | 中国知网 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CNKI.yaml) |
| CNN | CNN | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CNN.yaml) |
| CNNIC | 中国互联网络信息中心 | 50 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CNNIC.yaml) |
| CSDN | CSDN | 23 | 2026-08-17 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CSDN.yaml) |
| CSPAN | C-SPAN国会 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CSPAN.yaml) |
| CTYun | 天翼云 | 67 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CTYun.yaml) |
| CUHK | 香港中文大学 | 8 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CUHK.yaml) |
| CWSeed | CW Seed | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CWSeed.yaml) |
| CableTV | Cable TV | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CableTV.yaml) |
| CaiNiao | 菜鸟裹裹 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CaiNiao.yaml) |
| CaiXinChuanMei | 财新传媒 | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CaiXinChuanMei.yaml) |
| CalgonCarbon | Calgon Carbon | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CalgonCarbon.yaml) |
| Camera360 | Camera360 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Camera360.yaml) |
| Canon | 佳能 | 71 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Canon.yaml) |
| Canva | Canva 在线设计 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Canva.yaml) |
| CapitalOnline | 资本在线 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CapitalOnline.yaml) |
| CasImages | Casimages图片托管 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CasImages.yaml) |
| Certinomis | Certinomis证书 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Certinomis.yaml) |
| Certum | Certum证书 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Certum.yaml) |
| ChangYou | 畅游 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChangYou.yaml) |
| Chegg | Chegg学习平台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Chegg.yaml) |
| ChengTongWangPan | 城通网盘 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChengTongWangPan.yaml) |
| China | 中国 | 10236 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/China.yaml) |
| ChinaASN | 中国ASN | 5076 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaASN.yaml) |
| ChinaBroadnet | 中国广电 | 8 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaBroadnet.yaml) |
| ChinaGame | 中国游戏 | 281 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaGame.yaml) |
| ChinaIPTV | IPTV中国大陆地区 | 2297 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaIPTV.yaml) |
| ChinaIPs | 中国IP | 23524 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaIPs.yaml) |
| ChinaMedia | 中国媒体 | 345 | 2026-07-31 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaMedia.yaml) |
| ChinaMobile | 中国移动 | 52 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaMobile.yaml) |
| ChinaNews | 中国新闻网 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaNews.yaml) |
| ChinaPost | 中国邮政 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaPost.yaml) |
| ChinaSo | 中国搜索 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaSo.yaml) |
| ChinaTelecom | 中国电信 | 91 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaTelecom.yaml) |
| ChinaUnicom | 中国联通 | 48 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChinaUnicom.yaml) |
| Chinaz | 站长之家 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Chinaz.yaml) |
| ChineseAcademyOfSciences | 中国科学院文献情报中心 | 44 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChineseAcademyOfSciences.yaml) |
| ChuangKeTie | 创客贴 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChuangKeTie.yaml) |
| ChunYou | 纯游 | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ChunYou.yaml) |
| Cisco | 思科 | 123 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Cisco.yaml) |
| CityUHK | 香港城市大学 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CityUHK.yaml) |
| Clarivate | 科睿唯安 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Clarivate.yaml) |
| Clearasil | Clearasil护肤 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Clearasil.yaml) |
| CloudCone | CloudCone VPS | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CloudCone.yaml) |
| CloudConvert | 格式转换 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CloudConvert.yaml) |
| CloudNS | ClouDNS | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CloudNS.yaml) |
| Cloudflare | Cloudflare | 99 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Cloudflare.yaml) |
| CloudflareIPFS | Cloudflare IPFS | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CloudflareIPFS.yaml) |
| Cloudinary | Cloudinary图片管理 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Cloudinary.yaml) |
| Clubhouse | Clubhouse | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Clubhouse.yaml) |
| ClubhouseIP | Clubhouse IP | 104 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ClubhouseIP.yaml) |
| CnBlogs | 博客园 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CnBlogs.yaml) |
| Code | Code.org编程教育 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Code.yaml) |
| Codeberg | Codeberg 代码托管 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Codeberg.yaml) |
| Codecademy | Codecademy编程学习 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Codecademy.yaml) |
| Codeforces | Codeforces 编程竞赛 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Codeforces.yaml) |
| Coding | Coding.net代码托管 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Coding.yaml) |
| Coinone | Coinone交易所 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Coinone.yaml) |
| Collabora | Collabora办公 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Collabora.yaml) |
| ColorfulClouds | 彩云天气 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ColorfulClouds.yaml) |
| Communication | 通信服务 | 160 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Communication.yaml) |
| Comodo | Comodo | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Comodo.yaml) |
| ComssOne | Comss资讯 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ComssOne.yaml) |
| ConnectivityCheck | 网络连通检测 | 28 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ConnectivityCheck.yaml) |
| Container | 容器与云原生 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Container.yaml) |
| Contentful | Contentful CMS | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Contentful.yaml) |
| CoolAPK | 酷安 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CoolAPK.yaml) |
| Copilot | Microsoft Copilot | 411 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Copilot.yaml) |
| CopyManga | 拷贝漫画 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CopyManga.yaml) |
| Corel | Corel软件 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Corel.yaml) |
| Costco | 好市多/开市客 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Costco.yaml) |
| Coupang | Coupang电商 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Coupang.yaml) |
| Coursera | Coursera 在线课程 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Coursera.yaml) |
| CowLevel | CowLevel游戏社区 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CowLevel.yaml) |
| CowTransfer | 奶牛快传 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CowTransfer.yaml) |
| Cryptocurrency | 加密货币 | 240 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Cryptocurrency.yaml) |
| CurseForge | CurseForge游戏模组 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CurseForge.yaml) |
| Cursor | Cursor AI 编程工具 | 5 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Cursor.yaml) |
| CyberTrust | CyberTrust证书认证 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/CyberTrust.yaml) |
| Cygames | Cygames游戏 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Cygames.yaml) |
| DAZN | DAZN | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DAZN.yaml) |
| DDNS | 动态域名解析 | 111 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DDNS.yaml) |
| DJI | 大疆 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DJI.yaml) |
| DMIT | DMIT云服务器 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DMIT.yaml) |
| DMM | DMM | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DMM.yaml) |
| DNS | DNS | 121 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DNS.yaml) |
| DNSPod | DNSPod | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DNSPod.yaml) |
| DaMai | 红马传媒(大麦网) | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DaMai.yaml) |
| Dailymail | 每日邮报 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dailymail.yaml) |
| Dailymotion | Dailymotion | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dailymotion.yaml) |
| DanDanZan | 蛋蛋赞 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DanDanZan.yaml) |
| Dandanplay | 弹弹Play | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dandanplay.yaml) |
| DangDang | 当当 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DangDang.yaml) |
| Dart | Dart编程语言 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dart.yaml) |
| Debian | Debian | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Debian.yaml) |
| Dedao | 得到 | 10 | 2026-08-19 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dedao.yaml) |
| DeepSeek | DeepSeek AI | 2 | 2026-09-04 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DeepSeek.yaml) |
| Deepin | 深度科技 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Deepin.yaml) |
| Deezer | Deezer | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Deezer.yaml) |
| Dell | 戴尔 | 314 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dell.yaml) |
| Deppon | 德邦快递 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Deppon.yaml) |
| Deribit | Deribit期权 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Deribit.yaml) |
| Dettol | 滴露 | 35 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dettol.yaml) |
| Developer | 开发者 | 721 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Developer.yaml) |
| DeviantArt | DeviantArt | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DeviantArt.yaml) |
| Dewu | 得物 | 45 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dewu.yaml) |
| DiDi | 滴滴出行 | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DiDi.yaml) |
| DiLianWangLuo | 帝联网络 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DiLianWangLuo.yaml) |
| DiSiFanShi | 第四范式 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DiSiFanShi.yaml) |
| DianCeWangKe | 点测网科 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DianCeWangKe.yaml) |
| DigiCert | DigiCert | 74 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DigiCert.yaml) |
| DigitalOcean | DigitalOcean | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DigitalOcean.yaml) |
| DingDaTech | 丁丁地图 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DingDaTech.yaml) |
| DingDong | 叮咚买菜 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DingDong.yaml) |
| DingTalk | 钉钉 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DingTalk.yaml) |
| DingXiangYuan | 丁香园 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DingXiangYuan.yaml) |
| Direct | 直连 | 298 | 2026-08-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Direct.yaml) |
| Discord | Discord | 31 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Discord.yaml) |
| Discourse | Discourse论坛平台 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Discourse.yaml) |
| DiscoveryPlus | Discovery+ | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DiscoveryPlus.yaml) |
| Discuz | Discuz论坛 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Discuz.yaml) |
| Disney | Disney | 250 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Disney.yaml) |
| Disqus | Disqus | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Disqus.yaml) |
| DoH | 加密 DNS | 127 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DoH.yaml) |
| Docker | Docker | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Docker.yaml) |
| Domob | 多盟 | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Domob.yaml) |
| DongCheDi | 懂车帝 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DongCheDi.yaml) |
| Dood | Dood | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dood.yaml) |
| DouBan | 豆瓣 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DouBan.yaml) |
| DouYin | 抖音 | 90 | 2026-10-16 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DouYin.yaml) |
| Douyu | 斗鱼 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Douyu.yaml) |
| DowJones | 道琼斯 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DowJones.yaml) |
| Download | 下载 | 30 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Download.yaml) |
| Dribbble | Dribbble设计 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dribbble.yaml) |
| Dropbox | Dropbox | 27 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dropbox.yaml) |
| DtDNS | DtDNS | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DtDNS.yaml) |
| Dubox | 百度网盘国际版 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dubox.yaml) |
| Duckduckgo | DuckDuckGo | 44 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Duckduckgo.yaml) |
| DuiTang | 堆糖图片 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DuiTang.yaml) |
| DuoWan | 多玩 | 27 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DuoWan.yaml) |
| Duolingo | 多邻国 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Duolingo.yaml) |
| Durex | 杜蕾斯 | 62 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Durex.yaml) |
| DuyaoSS | 虎牙斗鱼CDN | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DuyaoSS.yaml) |
| Dwion | Dwion CDN | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dwion.yaml) |
| DynDNS | DynDNS | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/DynDNS.yaml) |
| Dynu | Dynu | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Dynu.yaml) |
| EA | EA | 173 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/EA.yaml) |
| ECommerce | 电子商务 | 1330 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ECommerce.yaml) |
| ESET | ESET杀毒 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ESET.yaml) |
| EastMoney | 东方财富 | 33 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/EastMoney.yaml) |
| Ebuyer | Ebuyer电子 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Ebuyer.yaml) |
| Economist | 经济学人 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Economist.yaml) |
| EduHK | 香港教育大学 | 3 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/EduHK.yaml) |
| Egghead | Egghead编程教程 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Egghead.yaml) |
| Electron | Electron跨平台框架 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Electron.yaml) |
| Eleme | 饿了么 | 18 | 2026-08-01 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Eleme.yaml) |
| Elsevier | Elsevier学术 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Elsevier.yaml) |
| Embark | Embark游戏工作室 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Embark.yaml) |
| Embl | EMBL | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Embl.yaml) |
| Emby | Emby | 83 | 2026-08-31 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Emby.yaml) |
| Emojipedia | Emojipedia | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Emojipedia.yaml) |
| EncoreTVB | Encore TVB | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/EncoreTVB.yaml) |
| Eneba | Eneba游戏交易 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Eneba.yaml) |
| Enfa | 美赞臣 | 31 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Enfa.yaml) |
| Entrust | Entrust证书认证 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Entrust.yaml) |
| Envato | Envato创意 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Envato.yaml) |
| Epic | Epic Games | 33 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Epic.yaml) |
| EpicBrowser | Epic隐私浏览器 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/EpicBrowser.yaml) |
| EscapeFromTarkov | 逃离塔科夫 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/EscapeFromTarkov.yaml) |
| Espn | ESPN | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Espn.yaml) |
| Everbright | 光大集团 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Everbright.yaml) |
| Evernote | 印象笔记 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Evernote.yaml) |
| FACEIT | FACEIT电竞平台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FACEIT.yaml) |
| FCBox | 菜鸟丰巢 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FCBox.yaml) |
| FIBank | FIBank银行 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FIBank.yaml) |
| FOXNOW | FOX NOW | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FOXNOW.yaml) |
| FT | 金融时报 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FT.yaml) |
| FZDM | 泛宅 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FZDM.yaml) |
| Facebook | Facebook | 592 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Facebook.yaml) |
| FamilyMart | 全家便利店 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FamilyMart.yaml) |
| FanFou | 饭否科技 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FanFou.yaml) |
| Fandom | Fandom百科 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Fandom.yaml) |
| FangZhengDianZi | 方正电子 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FangZhengDianZi.yaml) |
| Farfetch | Farfetch奢侈品 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Farfetch.yaml) |
| Faronics | Faronics | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Faronics.yaml) |
| FastStone | FastStone看图 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FastStone.yaml) |
| Fastlane | Fastlane自动化发布 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Fastlane.yaml) |
| Fastly | Fastly CDN | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Fastly.yaml) |
| Fedora | Fedora Linux | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Fedora.yaml) |
| Feedly | Feedly阅读器 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Feedly.yaml) |
| FeiZhu | 飞猪 | 20 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FeiZhu.yaml) |
| Feishu | 飞书 字节跳动企业协作办公平台 | 43 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Feishu.yaml) |
| FengXiaWangLuo | 凤侠网络 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FengXiaWangLuo.yaml) |
| FengXing | 风行视频 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FengXing.yaml) |
| Figma | Figma 设计协作 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Figma.yaml) |
| Fiio | 飞傲 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Fiio.yaml) |
| Finish | Finish亮碟 | 41 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Finish.yaml) |
| Flickr | Flickr相册 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Flickr.yaml) |
| FlipBoard | Flipboard | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FlipBoard.yaml) |
| FlowUs | FlowUs协作 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FlowUs.yaml) |
| Flowwow | Flowwow鲜花 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Flowwow.yaml) |
| Flutter | Flutter跨平台框架 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Flutter.yaml) |
| FontAwesome | FontAwesome图标 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FontAwesome.yaml) |
| FontExplorer | FontExplorer字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FontExplorer.yaml) |
| FontShop | FontShop字体 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FontShop.yaml) |
| Fonts | Fonts.com字体 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Fonts.yaml) |
| FontsInUse | FontsInUse | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FontsInUse.yaml) |
| Forbes | 福布斯 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Forbes.yaml) |
| Forza | Forza赛车游戏 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Forza.yaml) |
| Fox | Fox | 261 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Fox.yaml) |
| Framer | Framer设计 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Framer.yaml) |
| FreeCodeCamp | FreeCodeCamp编程学习 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FreeCodeCamp.yaml) |
| Freenode | Freenode IRC网络 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Freenode.yaml) |
| FuboTV | FuboTV | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FuboTV.yaml) |
| FunPay | FunPay游戏交易 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/FunPay.yaml) |
| Funshion | 风行网 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Funshion.yaml) |
| GGSel | GGsel游戏账号 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GGSel.yaml) |
| GMOInternet | GMO互联网 | 157 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GMOInternet.yaml) |
| Gaijin | Gaijin游戏 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gaijin.yaml) |
| Game | 游戏 | 1269 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Game.yaml) |
| GameDownload | 游戏下载 | 498 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GameDownload.yaml) |
| GamerSky | 游民星空 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GamerSky.yaml) |
| Gamesplanet | Gamesplanet游戏销售 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gamesplanet.yaml) |
| Gandi | Gandi域名 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gandi.yaml) |
| Gannett | Gannett传媒 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gannett.yaml) |
| GaoDe | 高德 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GaoDe.yaml) |
| Garena | Garena | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Garena.yaml) |
| GateIO | Gate.io交易所 | 8 | 2026-09-02 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GateIO.yaml) |
| GeeTest | 极验验证 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GeeTest.yaml) |
| Geely | 吉利 | 50 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Geely.yaml) |
| Gemini | Gemini | 54 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gemini.yaml) |
| Gettyimages | Getty Images | 25 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gettyimages.yaml) |
| Getui | 个推 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Getui.yaml) |
| Gigabyte | 技嘉 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gigabyte.yaml) |
| Gismeteo | Gismeteo天气 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gismeteo.yaml) |
| GitBook | GitBook | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GitBook.yaml) |
| GitHub | GitHub | 73 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GitHub.yaml) |
| GitLab | GitLab | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GitLab.yaml) |
| Gitee | Gitee 码云 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gitee.yaml) |
| Global | 全球 | 24480 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Global.yaml) |
| GlobalAI | 全球AI | 472 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GlobalAI.yaml) |
| GlobalCDN | 全球CDN服务 | 195 | 2026-08-08 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GlobalCDN.yaml) |
| GlobalCloud | 全球云计算 | 8568 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GlobalCloud.yaml) |
| GlobalGame | 全球游戏 | 875 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GlobalGame.yaml) |
| GlobalIPTV | IPTV全球 | 2814 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GlobalIPTV.yaml) |
| GlobalMedia | 全球媒体 | 1710 | 2026-08-08 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GlobalMedia.yaml) |
| GlobalNetDisk | 全球网盘服务 | 59 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GlobalNetDisk.yaml) |
| GlobalScholar | 全球学术 | 302 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GlobalScholar.yaml) |
| GlobalSign | Globalsign | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GlobalSign.yaml) |
| Globo | Globo传媒 | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Globo.yaml) |
| Glyphs | Glyphs字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Glyphs.yaml) |
| GoDaddy | GoDaddy域名 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GoDaddy.yaml) |
| Gog | GOG | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gog.yaml) |
| Golang | Go编程语言 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Golang.yaml) |
| Goodreads | Goodreads | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Goodreads.yaml) |
| Google | Google | 1188 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Google.yaml) |
| GoogleDeepMind | Google DeepMind | 49 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GoogleDeepMind.yaml) |
| GoogleEarth | Google Earth | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GoogleEarth.yaml) |
| GoogleFCM | 谷歌推送 | 50 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GoogleFCM.yaml) |
| GooglePlay | Google Play 商店 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GooglePlay.yaml) |
| GoogleRegistry | Google 域名注册服务 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GoogleRegistry.yaml) |
| GoogleVoice | Google Voice | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GoogleVoice.yaml) |
| GovCN | GovernmentCN | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GovCN.yaml) |
| Gracg | Gracg插画 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gracg.yaml) |
| GrapheneOS | GrapheneOS | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GrapheneOS.yaml) |
| Grok | Grok AI | 4 | 2026-07-28 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Grok.yaml) |
| Groq | Groq AI | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Groq.yaml) |
| Gucci | 古驰 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Gucci.yaml) |
| GuiGuDongLi | 硅谷动力 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/GuiGuDongLi.yaml) |
| Guokr | 果壳 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Guokr.yaml) |
| HBO | HBO | 93 | 2026-08-28 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HBO.yaml) |
| HBOHK | HBO(香港) | 28 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HBOHK.yaml) |
| HBOUSA | HBO(美国) | 43 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HBOUSA.yaml) |
| HCaptcha | hCaptcha验证 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HCaptcha.yaml) |
| HKBN | 香港宽频 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HKBN.yaml) |
| HKBU | 香港浸会大学 | 3 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HKBU.yaml) |
| HKETGroup | 香港经济日报 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HKETGroup.yaml) |
| HKOpenTV | 香港开电视 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HKOpenTV.yaml) |
| HKU | 香港大学 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HKU.yaml) |
| HKUST | 香港科技大学 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HKUST.yaml) |
| HKedcity | 香港教育城 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HKedcity.yaml) |
| HM | H&M | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HM.yaml) |
| HP | 惠普 | 159 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HP.yaml) |
| HSBC | 汇丰银行 | 48 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HSBC.yaml) |
| HWTV | HWTV | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HWTV.yaml) |
| Haier | 海尔 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Haier.yaml) |
| HainanAirlines | 海南航空 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HainanAirlines.yaml) |
| HamiVideo | Hami Video | 25 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HamiVideo.yaml) |
| HanYi | 汉仪 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HanYi.yaml) |
| HashiCorp | HashiCorp | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HashiCorp.yaml) |
| Haskell | Haskell编程语言 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Haskell.yaml) |
| HeMa | 盒马 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HeMa.yaml) |
| HeroGame | 英雄互娱 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HeroGame.yaml) |
| Heroku | Heroku | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Heroku.yaml) |
| Hetzner | Hetzner云 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Hetzner.yaml) |
| HiNet | HiNet | 597 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HiNet.yaml) |
| HibyMusic | 海贝音乐 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HibyMusic.yaml) |
| Hijacking | 反劫持 | 221 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Hijacking.yaml) |
| Hikvision | 海康威视 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Hikvision.yaml) |
| HoYoverse | 米哈游HoYoverse | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HoYoverse.yaml) |
| HomeDepot | Home Depot | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HomeDepot.yaml) |
| Homebrew | Homebrew包管理器 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Homebrew.yaml) |
| HongKongPost | 香港邮政证书 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HongKongPost.yaml) |
| Hpplay | 乐播投屏 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Hpplay.yaml) |
| HuJiang | 沪江教育 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HuJiang.yaml) |
| HuPun | 湖畔直播 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HuPun.yaml) |
| HuYa | 虎牙 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HuYa.yaml) |
| HuaShuTV | 华数TV | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HuaShuTV.yaml) |
| Huawei | 华为 | 402 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Huawei.yaml) |
| HuaweiCloud | 华为云计算 | 393 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HuaweiCloud.yaml) |
| Huffpost | 赫芬顿邮报 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Huffpost.yaml) |
| HuggingFace | Hugging Face | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HuggingFace.yaml) |
| Hulu | Hulu | 59 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Hulu.yaml) |
| HuluJP | Hulu(日本) | 58 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HuluJP.yaml) |
| HuluUSA | Hulu(美国) | 58 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HuluUSA.yaml) |
| HumbleBundle | Humble Bundle | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HumbleBundle.yaml) |
| HunanTV | 湖南TV | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HunanTV.yaml) |
| Hupu | 虎扑 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Hupu.yaml) |
| HurricaneElectric | Hurricane Electric | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/HurricaneElectric.yaml) |
| IBKR | 盈透证券 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IBKR.yaml) |
| IBM | IBM | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IBM.yaml) |
| ICBC | 中国工商银行 | 58 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ICBC.yaml) |
| ICable | 香港有线电视 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ICable.yaml) |
| IDG | IDG集团 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IDG.yaml) |
| IEEE | IEEE | 54 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IEEE.yaml) |
| IFast | iFAST金融 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IFast.yaml) |
| IHuman | 洪恩教育 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IHuman.yaml) |
| IINA | IINA播放器 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IINA.yaml) |
| IKEA | 宜家 | 95 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IKEA.yaml) |
| IMDB | IMDb | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IMDB.yaml) |
| IPFS | IPFS 分布式存储 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IPFS.yaml) |
| IShuMei | 数美安全 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IShuMei.yaml) |
| ITV | ITV | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ITV.yaml) |
| IXsystems | TrueNAS存储 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IXsystems.yaml) |
| Identrust | Identrust | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Identrust.yaml) |
| ImageBam | ImageBam图片 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ImageBam.yaml) |
| ImageCurl | ImageCurl图片 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ImageCurl.yaml) |
| ImageShack | ImageShack图片 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ImageShack.yaml) |
| ImageTwist | ImageTwist图片 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ImageTwist.yaml) |
| ImgBB | ImgBB图片 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ImgBB.yaml) |
| Imgix | Imgix图片CDN | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Imgix.yaml) |
| Imgur | Imgur | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Imgur.yaml) |
| ImperialCollege | 帝国理工 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ImperialCollege.yaml) |
| InShot | InShot编辑 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/InShot.yaml) |
| InoReader | Inoreader阅读器 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/InoReader.yaml) |
| Insider | Insider商业 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Insider.yaml) |
| Instagram | Instagram | 76 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Instagram.yaml) |
| IntSig | 合合信息 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/IntSig.yaml) |
| Intel | 英特尔 | 296 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Intel.yaml) |
| Intercom | Intercom | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Intercom.yaml) |
| Intuit | Intuit财务 | 35 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Intuit.yaml) |
| ItchIo | itch.io独立游戏 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ItchIo.yaml) |
| JLC | 嘉立创 | 43 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JLC.yaml) |
| JOOX | JOOX | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JOOX.yaml) |
| JTExpress | 极兔速递 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JTExpress.yaml) |
| Japonx | Japonx | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Japonx.yaml) |
| JetBrainsAI | JetBrains AI | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JetBrainsAI.yaml) |
| Jetbrains | JetBrains | 26 | 2026-08-03 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Jetbrains.yaml) |
| Jfrog | JFrog | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Jfrog.yaml) |
| JiBenCaoZuo | 基本操作 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JiBenCaoZuo.yaml) |
| JiGuang | 极光推送 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JiGuang.yaml) |
| JianGuoYun | 坚果云 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JianGuoYun.yaml) |
| JianShu | 简书 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JianShu.yaml) |
| JieMian | 界面新闻 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JieMian.yaml) |
| JinJiangWenXue | 晋江文学 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JinJiangWenXue.yaml) |
| JingDong | 京东 | 277 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JingDong.yaml) |
| JingDongCloud | 京东云计算 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JingDongCloud.yaml) |
| JiyuKobo | 积蓄工房 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JiyuKobo.yaml) |
| Johren | Johren游戏平台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Johren.yaml) |
| Jquery | jQuery | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Jquery.yaml) |
| Jsdelivr | jsDelivr | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Jsdelivr.yaml) |
| JuShuiTan | 聚水潭ERP | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JuShuiTan.yaml) |
| JueJin | 掘金 | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/JueJin.yaml) |
| Jwplayer | JW Player | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Jwplayer.yaml) |
| KKBOX | KKBOX | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KKBOX.yaml) |
| KKTV | KKTV | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KKTV.yaml) |
| Kaggle | Kaggle 数据科学 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Kaggle.yaml) |
| KakaoTalk | KakaoTalk | 65 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KakaoTalk.yaml) |
| Kantv | Kan TV | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Kantv.yaml) |
| KeChuang | 科创 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KeChuang.yaml) |
| Keep | Keep | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Keep.yaml) |
| Keybase | Keybase加密 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Keybase.yaml) |
| KhanAcademy | 可汗学院 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KhanAcademy.yaml) |
| Kick | Kick直播 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Kick.yaml) |
| Kindle | Amazon Kindle | 20 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Kindle.yaml) |
| KingSmith | 金史密斯 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KingSmith.yaml) |
| Kingsoft | 金山软件 | 264 | 2026-09-18 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Kingsoft.yaml) |
| KingsoftCloud | 金山云计算 | 53 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KingsoftCloud.yaml) |
| Konami | Konami科乐美 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Konami.yaml) |
| KooLearn | 新东方在线 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KooLearn.yaml) |
| KouDaiShiShang | 口袋时尚 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KouDaiShiShang.yaml) |
| Kraken | Kraken交易所 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Kraken.yaml) |
| Ku6 | 酷6 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Ku6.yaml) |
| KuCoin | KuCoin交易所 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KuCoin.yaml) |
| KuKeMusic | 库客音乐 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KuKeMusic.yaml) |
| KuaiDi100 | 快递100 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KuaiDi100.yaml) |
| KuaiShou | 快手 | 694 | 2026-08-18 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KuaiShou.yaml) |
| KuangShi | 旷视 | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KuangShi.yaml) |
| Kubernetes | Kubernetes | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Kubernetes.yaml) |
| KugouKuwo | 酷狗/酷我 | 122 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KugouKuwo.yaml) |
| KuroGames | 库洛游戏 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KuroGames.yaml) |
| KyodoNews | 共同通讯社 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/KyodoNews.yaml) |
| LG | LG | 98 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LG.yaml) |
| Lan | 本地局域网地址 | 174 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Lan.yaml) |
| LanZou | 蓝奏云 | 28 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LanZou.yaml) |
| Laracasts | Laracasts教程 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Laracasts.yaml) |
| LastFM | Last.fm | 34 | 2026-09-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LastFM.yaml) |
| LastPass | LastPass | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LastPass.yaml) |
| Launchpad | Launchpad代码托管 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Launchpad.yaml) |
| LeJu | 乐居 | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LeJu.yaml) |
| LeTV | 乐视 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LeTV.yaml) |
| Lenovo | 联想 | 60 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Lenovo.yaml) |
| LetsEncrypt | Let's Encrypt SSL证书 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LetsEncrypt.yaml) |
| LiTV | LiTV | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LiTV.yaml) |
| LiZhi | 荔枝FM | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LiZhi.yaml) |
| Lianjia | 链家 | 5 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Lianjia.yaml) |
| LibGen | Library Genesis | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LibGen.yaml) |
| Liberapay | Liberapay赞助 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Liberapay.yaml) |
| LiePin | 猎聘 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LiePin.yaml) |
| Lighter | Lighter DeFi | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Lighter.yaml) |
| Likee | Likee短视频 | 35 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Likee.yaml) |
| Limelight | Limelight | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Limelight.yaml) |
| LinakeSi | 乐言科技 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LinakeSi.yaml) |
| Line | Line | 41 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Line.yaml) |
| LineTV | Line TV | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LineTV.yaml) |
| Linguee | Linguee翻译 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Linguee.yaml) |
| LinkedIn | 领英 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LinkedIn.yaml) |
| Linotype | Linotype字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Linotype.yaml) |
| Linux | Linux操作系统 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Linux.yaml) |
| LinuxDo | Linux技术社区 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LinuxDo.yaml) |
| LivePerson | LivePerson | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LivePerson.yaml) |
| LocalBitcoins | LocalBitcoins | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LocalBitcoins.yaml) |
| Logitech | 罗技 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Logitech.yaml) |
| LondonReal | London Real | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LondonReal.yaml) |
| LongBridge | 长桥证券 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LongBridge.yaml) |
| LouisVuitton | 路易威登 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LouisVuitton.yaml) |
| Lowiro | Lowiro Arcaea | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Lowiro.yaml) |
| LuDaShi | 鲁大师 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LuDaShi.yaml) |
| LuckinCoffee | 瑞幸咖啡 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LuckinCoffee.yaml) |
| Lumion | Lumion渲染 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Lumion.yaml) |
| LvMiLianChuang | 绿米联创 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/LvMiLianChuang.yaml) |
| Lysol | 来苏尔 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Lysol.yaml) |
| MDN | MDN Web文档 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MDN.yaml) |
| MEGA | MEGA | 23 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MEGA.yaml) |
| MIT | 麻省理工 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MIT.yaml) |
| MOMOShop | MOMO購物網 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MOMOShop.yaml) |
| MOOV | MOOV | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MOOV.yaml) |
| MUJI | 无印良品 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MUJI.yaml) |
| MVideo | M.Video电子 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MVideo.yaml) |
| MXRoute | MXRoute邮件 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MXRoute.yaml) |
| MZed | MZed影视教育 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MZed.yaml) |
| MaFengWo | 马蜂窝 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MaFengWo.yaml) |
| Madshi | Madshi渲染 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Madshi.yaml) |
| Magnit | Magnit零售 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Magnit.yaml) |
| MailCom | mail.com邮件 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MailCom.yaml) |
| Mailru | Mail.ru | 300 | 2026-07-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Mailru.yaml) |
| Mainichi | 每日新闻 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Mainichi.yaml) |
| Manorama | Manorama | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Manorama.yaml) |
| MaoCloud | 猫云 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MaoCloud.yaml) |
| Mapbox | Mapbox地图 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Mapbox.yaml) |
| Marketing | 思杰马克丁软件 | 56 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Marketing.yaml) |
| Marvel | 漫威 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Marvel.yaml) |
| MasterClass | MasterClass | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MasterClass.yaml) |
| Mastercard | 万事达卡 | 184 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Mastercard.yaml) |
| Matrix | Matrix 即时通信 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Matrix.yaml) |
| McDonalds | 麦当劳 | 45 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/McDonalds.yaml) |
| MeWatch | MeWatch | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MeWatch.yaml) |
| MeadJohnson | 美赞臣营养 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MeadJohnson.yaml) |
| Medium | Medium写作平台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Medium.yaml) |
| MeiTu | 美图 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MeiTu.yaml) |
| MeiTuan | 美团 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MeiTuan.yaml) |
| MeiZu | 魅族 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MeiZu.yaml) |
| MetaBrainz | MetaBrainz数据 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MetaBrainz.yaml) |
| Metacritic | Metacritic | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Metacritic.yaml) |
| MiWu | 米物 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MiWu.yaml) |
| Microsoft | Microsoft | 909 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Microsoft.yaml) |
| MicrosoftDev | Microsoft 开发服务 | 76 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MicrosoftDev.yaml) |
| MicrosoftEdge | Microsoft Edge | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MicrosoftEdge.yaml) |
| MicrosoftPKI | 微软证书 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MicrosoftPKI.yaml) |
| MicrosoftProxy | Microsoft 代理 | 84 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MicrosoftProxy.yaml) |
| Midea | 美的 | 10 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Midea.yaml) |
| Migu | 咪咕 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Migu.yaml) |
| MikroTik | MikroTik路由 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MikroTik.yaml) |
| MingLueZhaoHui | 明略昭辉 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MingLueZhaoHui.yaml) |
| Mini | MINI汽车 | 215 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Mini.yaml) |
| Miniso | 名创优品 | 36 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Miniso.yaml) |
| Misskey | Misskey社交 | 34 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Misskey.yaml) |
| Mocha | Mocha.js测试框架 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Mocha.yaml) |
| Modrinth | Modrinth模组 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Modrinth.yaml) |
| Mogujie | 蘑菇街 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Mogujie.yaml) |
| Mojang | Mojang游戏 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Mojang.yaml) |
| Moji | 墨迹天气 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Moji.yaml) |
| MongoDB | MongoDB | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MongoDB.yaml) |
| Monotype | Monotype字体 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Monotype.yaml) |
| Moonvy | Moonvy视频 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Moonvy.yaml) |
| Morisawa | 森泽字体 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Morisawa.yaml) |
| Mortein | Mortein杀虫 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Mortein.yaml) |
| Motorola | 摩托罗拉 | 25 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Motorola.yaml) |
| MoveFree | MoveFree维骨力 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MoveFree.yaml) |
| Mozilla | Mozilla | 88 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Mozilla.yaml) |
| Mucinex | Mucinex感冒药 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Mucinex.yaml) |
| Musixmatch | Musixmatch歌词 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Musixmatch.yaml) |
| My5 | My5 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/My5.yaml) |
| MyFonts | MyFonts字体 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MyFonts.yaml) |
| MyRadio | MyRadio电台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/MyRadio.yaml) |
| N26 | N26银行 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/N26.yaml) |
| NBC | NBC | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NBC.yaml) |
| NBCUniversal | NBC环球 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NBCUniversal.yaml) |
| NGA | NGA | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NGA.yaml) |
| NGAA | 新流云 | 29 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NGAA.yaml) |
| NHK | 日本放送协会 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NHK.yaml) |
| NICru | RU域名注册 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NICru.yaml) |
| NPM | NPM 包管理 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NPM.yaml) |
| NTPService | NTP服务 | 201 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NTPService.yaml) |
| NYPost | 纽约邮报 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NYPost.yaml) |
| NYTimes | 纽约时报 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NYTimes.yaml) |
| Narwal | 云鲸扫地机 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Narwal.yaml) |
| Naver | Naver | 249 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Naver.yaml) |
| NaverTV | Naver TV | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NaverTV.yaml) |
| Neowin | Neowin科技 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Neowin.yaml) |
| NetCup | NetCup托管 | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NetCup.yaml) |
| NetEase | 网易 | 189 | 2026-08-01 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NetEase.yaml) |
| NetEaseMusic | 网易云音乐 | 50 | 2026-08-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NetEaseMusic.yaml) |
| NeteaseCloud | 网易云计算 | 106 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NeteaseCloud.yaml) |
| Netflix | Netflix | 1620 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Netflix.yaml) |
| Netlify | Netlify网站托管 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Netlify.yaml) |
| Newegg | 新蛋 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Newegg.yaml) |
| NewsCorp | 新闻集团 | 152 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NewsCorp.yaml) |
| Nexo | Nexo借贷 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Nexo.yaml) |
| Nexon | Nexon网游 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Nexon.yaml) |
| Nginx | Nginx | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Nginx.yaml) |
| Niconico | Niconico | 12 | 2026-08-24 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Niconico.yaml) |
| Nike | 耐克 | 196 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Nike.yaml) |
| Nikkei | 日经 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Nikkei.yaml) |
| Nintendo | 任天堂 | 127 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Nintendo.yaml) |
| NoIP | No-IP 动态 DNS | 83 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NoIP.yaml) |
| NodeSeek | NodeSeek VPS社区 | 7 | 2026-09-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NodeSeek.yaml) |
| Nordstrom | Nordstrom | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Nordstrom.yaml) |
| Notion | Notion | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Notion.yaml) |
| Novel | 网络小说 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Novel.yaml) |
| NowCoder | 牛客网 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NowCoder.yaml) |
| NowTV | Now TV | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/NowTV.yaml) |
| Nurofen | Nurofen布洛芬 | 28 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Nurofen.yaml) |
| Nvidia | 英伟达 | 68 | 2026-09-10 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Nvidia.yaml) |
| OKAApps | OKA Apps | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OKAApps.yaml) |
| OKX | OKX交易所 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OKX.yaml) |
| OP | OnePiece | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OP.yaml) |
| OPPO | OPPO | 72 | 2026-08-14 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OPPO.yaml) |
| OSChina | 开源中国 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OSChina.yaml) |
| OTPBank | OTP银行 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OTPBank.yaml) |
| OUP | 牛津大学出版 | 29 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OUP.yaml) |
| Oculus | Oculus VR | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Oculus.yaml) |
| OkJike | 即刻 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OkJike.yaml) |
| OneDrive | OneDrive | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OneDrive.yaml) |
| OneKey | OneKey钱包 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OneKey.yaml) |
| OnePlus | 一加 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OnePlus.yaml) |
| OpenAI | OpenAI | 60 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OpenAI.yaml) |
| OpenCollective | Open Collective | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OpenCollective.yaml) |
| OpenJSFoundation | OpenJS基金会 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OpenJSFoundation.yaml) |
| OpenSourceInsights | 开源分析 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OpenSourceInsights.yaml) |
| OpenSpeedTest | OpenSpeedTest | 4 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OpenSpeedTest.yaml) |
| OpenStreetMap | OpenStreetMap | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OpenStreetMap.yaml) |
| OpenWeather | OpenWeather | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OpenWeather.yaml) |
| OpenWrt | OpenWrt | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OpenWrt.yaml) |
| Opera | Opera浏览器 | 34 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Opera.yaml) |
| Oreilly | O'Reilly | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Oreilly.yaml) |
| OrganicMaps | Organic Maps | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OrganicMaps.yaml) |
| Origin | Origin | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Origin.yaml) |
| Osu | osu!音游 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Osu.yaml) |
| OuPeng | 欧朋浏览器 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/OuPeng.yaml) |
| Ozon | Ozon电商 | 63 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Ozon.yaml) |
| PBS | PBS | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PBS.yaml) |
| PCCW | 电讯盈科 | 31 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PCCW.yaml) |
| PChomeTW | PChome Online 網路家庭 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PChomeTW.yaml) |
| PPTV | PPTV | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PPTV.yaml) |
| PSBC | 中国邮政储蓄银行 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PSBC.yaml) |
| PStorage | PStorage云存储 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PStorage.yaml) |
| PUBG | PUBG绝地求生 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PUBG.yaml) |
| PageCDN | PageCDN | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PageCDN.yaml) |
| Pandora | Pandora | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Pandora.yaml) |
| PandoraTV | Pandora TV | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PandoraTV.yaml) |
| PasswordManager | 密码管理 | 32 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PasswordManager.yaml) |
| Pastebin | Pastebin文本分享 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Pastebin.yaml) |
| Patreon | Patreon创作者赞助 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Patreon.yaml) |
| Pawchive | Pawchive图片 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Pawchive.yaml) |
| PayPal | PayPal | 247 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PayPal.yaml) |
| Pearson | 培生教育 | 93 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Pearson.yaml) |
| Peppy | peppy音游 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Peppy.yaml) |
| Perl | Perl编程语言 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Perl.yaml) |
| Perplexity | Perplexity AI | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Perplexity.yaml) |
| Pgyer | 蒲公英内测 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Pgyer.yaml) |
| Phoenix | 凤凰网 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Phoenix.yaml) |
| Picsee | PicSee | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Picsee.yaml) |
| PikPak | PikPak | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PikPak.yaml) |
| Pinduoduo | 拼多多 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Pinduoduo.yaml) |
| PingAn | 平安 | 27 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PingAn.yaml) |
| Pinterest | Pinterest | 52 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Pinterest.yaml) |
| PixHost | PixHost图片 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PixHost.yaml) |
| Pixiv | Pixiv | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Pixiv.yaml) |
| Pixnet | 痞客邦 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Pixnet.yaml) |
| PlayCover | PlayCover游戏运行 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PlayCover.yaml) |
| PlayStation | PlayStation | 8 | 2026-10-20 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PlayStation.yaml) |
| Plex | Plex媒体服务器 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Plex.yaml) |
| PlutoTV | Pluto TV | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PlutoTV.yaml) |
| PocketCasts | Pocket Casts | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PocketCasts.yaml) |
| Poe | Poe AI | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Poe.yaml) |
| PoloCloud | PoloCloud | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PoloCloud.yaml) |
| PolyU | 香港理工 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PolyU.yaml) |
| Polymer | Google Polymer | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Polymer.yaml) |
| Polyv | Polyv视频云 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Polyv.yaml) |
| PostImages | PostImages图片 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PostImages.yaml) |
| PotatoChat | Potato Chat | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PotatoChat.yaml) |
| PrimeVideo | Prime Video | 24 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PrimeVideo.yaml) |
| Privacy | 隐私保护 | 39894 | 2026-09-03 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Privacy.yaml) |
| PrivateTracker | PT下载 | 122 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/PrivateTracker.yaml) |
| ProQuest | ProQuest学术 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ProQuest.yaml) |
| Progress | Progress软件 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Progress.yaml) |
| ProjectSekai | 世界计划音游 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ProjectSekai.yaml) |
| Protonmail | ProtonMail | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Protonmail.yaml) |
| Pugpig | Pugpig出版 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Pugpig.yaml) |
| Purikonejp | 公主连结 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Purikonejp.yaml) |
| Python | Python | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Python.yaml) |
| QCC | 企查查 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/QCC.yaml) |
| QNAP | 威联通QNAP | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/QNAP.yaml) |
| QWeather | 和风天气 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/QWeather.yaml) |
| QiAnXin | 奇安信 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/QiAnXin.yaml) |
| QiMao | 七猫小说 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/QiMao.yaml) |
| QiNiuYun | 七牛云 | 54 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/QiNiuYun.yaml) |
| QiXin | 企查宝 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/QiXin.yaml) |
| QingCloud | 青云QingCloud | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/QingCloud.yaml) |
| QingTingFM | 蜻蜓 FM | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/QingTingFM.yaml) |
| Qobuz | Qobuz | 33 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Qobuz.yaml) |
| Qt | Qt跨平台框架 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Qt.yaml) |
| Qualcomm | 高通 | 50 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Qualcomm.yaml) |
| Quantil | Quantil CDN | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Quantil.yaml) |
| QuickConnect | QuickConnect | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/QuickConnect.yaml) |
| Quora | Quora | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Quora.yaml) |
| Qwant | Qwant搜索 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Qwant.yaml) |
| RB | 利洁时 | 457 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/RB.yaml) |
| REAGroup | REA房产 | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/REAGroup.yaml) |
| REGru | REG.RU域名 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/REGru.yaml) |
| RSSHub | RSSHub聚合工具 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/RSSHub.yaml) |
| RTHK | 香港电台 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/RTHK.yaml) |
| Radiko | Radiko日本电台 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Radiko.yaml) |
| RaiffeisenBank | Raiffeisen银行 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/RaiffeisenBank.yaml) |
| Rakuten | 乐天 | 37 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Rakuten.yaml) |
| Rarbg | RARBG | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Rarbg.yaml) |
| Razer | 雷蛇 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Razer.yaml) |
| ReadTheDocs | Read the Docs 文档服务 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ReadTheDocs.yaml) |
| RealType | RealType字体 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/RealType.yaml) |
| Reddit | Reddit | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Reddit.yaml) |
| Redis | Redis | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Redis.yaml) |
| RedotPay | RedotPay支付 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/RedotPay.yaml) |
| RemoteControl | 远程控制 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/RemoteControl.yaml) |
| RemoteDesktop | 远程桌面 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/RemoteDesktop.yaml) |
| Renren | 人人网 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Renren.yaml) |
| Reuters | 路透社 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Reuters.yaml) |
| Riot | Riot Games | 55 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Riot.yaml) |
| Roblox | Roblox | 51 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Roblox.yaml) |
| Rockstar | Rockstar Games | 18 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Rockstar.yaml) |
| Roku | Roku流媒体 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Roku.yaml) |
| RuanMei | 软媒 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/RuanMei.yaml) |
| Ruby | Ruby编程语言 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Ruby.yaml) |
| RubyChina | Ruby China社区 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/RubyChina.yaml) |
| Rumble | Rumble视频 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Rumble.yaml) |
| Rust | Rust 语言生态 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Rust.yaml) |
| Ruten | 露天拍卖 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Ruten.yaml) |
| SB | SB DNS服务 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SB.yaml) |
| SCI | Web of Science | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SCI.yaml) |
| SCMP | 南华早报 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SCMP.yaml) |
| SFExpress | 顺丰速运 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SFExpress.yaml) |
| SMTiaoJiaoShi | 教师平台 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SMTiaoJiaoShi.yaml) |
| SMZDM | 什么值得买 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SMZDM.yaml) |
| SNK | SNK游戏 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SNK.yaml) |
| SNodeHome | SNode智能家居 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SNodeHome.yaml) |
| SSLCom | SSL.com证书 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SSLCom.yaml) |
| STOExpress | 申通快递 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/STOExpress.yaml) |
| STUN | STUN / WebRTC 服务 | 359 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/STUN.yaml) |
| SVP | SVP视频增强 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SVP.yaml) |
| SafePal | SafePal钱包 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SafePal.yaml) |
| Salesforce | Salesforce | 49 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Salesforce.yaml) |
| Samsung | 三星 | 28 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Samsung.yaml) |
| Sankei | 产经新闻 | 30 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Sankei.yaml) |
| Scala | Scala编程语言 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Scala.yaml) |
| Scaleflex | Scaleflex | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Scaleflex.yaml) |
| Scholar | 学术 | 302 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Scholar.yaml) |
| Schoopia | 同学派 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Schoopia.yaml) |
| Schwab | 嘉信理财 | 9 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Schwab.yaml) |
| SciHub | Sci-Hub学术 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SciHub.yaml) |
| ScienceDirect | ScienceDirect 科学文献 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ScienceDirect.yaml) |
| Seasun | 西山居 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Seasun.yaml) |
| Sectigo | Sectigo | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Sectigo.yaml) |
| SegmentFault | 思否开发者社区 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SegmentFault.yaml) |
| Selectel | Selectel云 | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Selectel.yaml) |
| Sentry | Sentry 错误监控 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Sentry.yaml) |
| ServicePipe | ServicePipe | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ServicePipe.yaml) |
| Shanbay | 扇贝 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Shanbay.yaml) |
| ShangHaiJuXiao | 上海聚效 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ShangHaiJuXiao.yaml) |
| Shanling | 山灵音响 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Shanling.yaml) |
| ShareThis | ShareThis分享 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ShareThis.yaml) |
| ShenMa | 神马 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ShenMa.yaml) |
| ShiJiChaoXing | 世纪超星 | 36 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ShiJiChaoXing.yaml) |
| ShiNongZhiKe | 识农智能科技 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ShiNongZhiKe.yaml) |
| Shopee | Shopee | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Shopee.yaml) |
| Shopify | Shopify | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Shopify.yaml) |
| Showtime | Showtime流媒体 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Showtime.yaml) |
| Signal | Signal | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Signal.yaml) |
| Sina | 新浪 | 142 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Sina.yaml) |
| SingTaoNews | 星岛日报 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SingTaoNews.yaml) |
| Siri | Siri | 2 | 2026-08-03 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Siri.yaml) |
| SitePoint | SitePoint | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SitePoint.yaml) |
| Skillshare | Skillshare | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Skillshare.yaml) |
| Sky | Sky | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Sky.yaml) |
| SkyGO | Sky GO | 17 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SkyGO.yaml) |
| Slack | Slack | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Slack.yaml) |
| Sling | Sling TV | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Sling.yaml) |
| SmarTone | 数码通 | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SmarTone.yaml) |
| Snap | Snapchat | 9 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Snap.yaml) |
| SocialMediaGlobal | 全球社交媒体 | 627 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SocialMediaGlobal.yaml) |
| SoftBank | 软银 | 20 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SoftBank.yaml) |
| Sogou | 搜狗 | 40 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Sogou.yaml) |
| Sohu | 搜狐 | 81 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Sohu.yaml) |
| Sony | 索尼 | 128 | 2026-10-16 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Sony.yaml) |
| SouFang | 搜房 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SouFang.yaml) |
| SoundCloud | SoundCloud | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SoundCloud.yaml) |
| SourceForge | SourceForge | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SourceForge.yaml) |
| SourceHut | SourceHut代码托管 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SourceHut.yaml) |
| SpaceMail | SpaceMail邮件 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SpaceMail.yaml) |
| SpaceX | SpaceX | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SpaceX.yaml) |
| Spaceship | Spaceship域名 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Spaceship.yaml) |
| Spark | Spark | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Spark.yaml) |
| Speedtest | Speedtest | 3476 | 2026-10-30 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Speedtest.yaml) |
| Spiceworks | Spiceworks社区 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Spiceworks.yaml) |
| Spotify | Spotify | 39 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Spotify.yaml) |
| Springer | Springer学术 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Springer.yaml) |
| SquareUp | Square支付 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SquareUp.yaml) |
| StackPath | StackPath CDN | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/StackPath.yaml) |
| Stackexchange | Stack Exchange | 25 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Stackexchange.yaml) |
| Stage1st | Stage1st论坛 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Stage1st.yaml) |
| StandardChartered | 渣打银行 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/StandardChartered.yaml) |
| StarPlus | Star+流媒体 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/StarPlus.yaml) |
| StarWorld | StarWorld游戏平台 | 25 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/StarWorld.yaml) |
| Starbucks | 星巴克 | 67 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Starbucks.yaml) |
| StarfieldTech | Starfield SSL | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/StarfieldTech.yaml) |
| Startpage | Startpage搜索 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Startpage.yaml) |
| StaticFile | Staticfile前端CDN | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/StaticFile.yaml) |
| Steam | Steam | 97 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Steam.yaml) |
| SteamCN | Steam中国 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SteamCN.yaml) |
| SteamUnlocked | SteamUnlocked游戏资源 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SteamUnlocked.yaml) |
| Steemit | Steemit | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Steemit.yaml) |
| StraitsX | StraitsX支付 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/StraitsX.yaml) |
| Streamable | Streamable视频 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Streamable.yaml) |
| Strepsils | Strepsils润喉 | 33 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Strepsils.yaml) |
| Stripe | Stripe 支付服务 | 8 | 2026-09-18 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Stripe.yaml) |
| SuNing | 苏宁 | 31 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SuNing.yaml) |
| SublimeText | Sublime Text | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SublimeText.yaml) |
| SuiShiChuanMei | 随视传媒 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SuiShiChuanMei.yaml) |
| SumKoo | 数木科技 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SumKoo.yaml) |
| Supercell | Supercell | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Supercell.yaml) |
| SurugaYa | 駿河屋 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SurugaYa.yaml) |
| Swift | Swift | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Swift.yaml) |
| SwissSign | SwissSign证书 | 31 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SwissSign.yaml) |
| SymantecPKI | 赛门铁克证书 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/SymantecPKI.yaml) |
| Synology | 群晖 | 27 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Synology.yaml) |
| TCL | TCL | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TCL.yaml) |
| TGBus | 电玩巴士 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TGBus.yaml) |
| TIDAL | TIDAL | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TIDAL.yaml) |
| TMDB | TMDB 影视数据库 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TMDB.yaml) |
| TMTPost | 钛媒体 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TMTPost.yaml) |
| TVB | TVB | 20 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TVB.yaml) |
| TVDB | TVDB 影视数据库 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TVDB.yaml) |
| TVer | TVer | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TVer.yaml) |
| TWCA | TWCA证书 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TWCA.yaml) |
| TaiKang | 泰康 | 59 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TaiKang.yaml) |
| TaiWanGood | 台湾好 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TaiWanGood.yaml) |
| TaiheMusic | 太合音乐 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TaiheMusic.yaml) |
| Tailscale | Tailscale 组网 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Tailscale.yaml) |
| TakeTwo | Take-Two Interactive | 17 | 2026-08-17 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TakeTwo.yaml) |
| Taomee | 淘米 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Taomee.yaml) |
| TapTap | TapTap | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TapTap.yaml) |
| Target | Target零售 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Target.yaml) |
| TaylorFrancis | Taylor&Francis | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TaylorFrancis.yaml) |
| TeX | TeX排版 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TeX.yaml) |
| TeamSpeak | TeamSpeak语音通讯 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TeamSpeak.yaml) |
| TeamViewer | TeamViewer | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TeamViewer.yaml) |
| Teambition | Teambition | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Teambition.yaml) |
| TechTimes | TechTimes | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TechTimes.yaml) |
| Technogym | Technogym健身 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Technogym.yaml) |
| Telegram | Telegram | 69 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Telegram.yaml) |
| TempMail | 临时邮箱 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TempMail.yaml) |
| Tencent | 腾讯 | 2770 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Tencent.yaml) |
| TencentCloud | 腾讯云计算 | 2715 | 2026-09-04 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TencentCloud.yaml) |
| TencentDev | 腾讯开发服务 | 16 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TencentDev.yaml) |
| TencentLoLMobile | 腾讯英雄联盟手游 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TencentLoLMobile.yaml) |
| TencentTME | 腾讯音乐娱乐 | 45 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TencentTME.yaml) |
| TencentVideo | 腾讯视频 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TencentVideo.yaml) |
| TendCloud | 腾云数据 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TendCloud.yaml) |
| TeraBox | TeraBox | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TeraBox.yaml) |
| Termux | Termux终端 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Termux.yaml) |
| Tesla | 特斯拉 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Tesla.yaml) |
| TestFlight | TestFlight | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TestFlight.yaml) |
| TheGuardian | 卫报 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TheGuardian.yaml) |
| TheLinuxFoundation | Linux基金会 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TheLinuxFoundation.yaml) |
| TheSun | 太阳报 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TheSun.yaml) |
| TheTimes | 泰晤士报 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TheTimes.yaml) |
| TheType | TheType字体 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TheType.yaml) |
| ThomsonReuters | 汤森路透 | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ThomsonReuters.yaml) |
| Threads | Threads社交 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Threads.yaml) |
| TianCity | 天畅网络 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TianCity.yaml) |
| TianTianKanKan | 天天看看 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TianTianKanKan.yaml) |
| TianWeiChengXin | 天威诚信 | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TianWeiChengXin.yaml) |
| TianYaForum | 天涯社区 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TianYaForum.yaml) |
| Tidelift | Tidelift赞助 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Tidelift.yaml) |
| TigerFintech | 老虎证券 | 20 | 2026-08-18 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TigerFintech.yaml) |
| TikTok | TikTok | 63 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TikTok.yaml) |
| Timeweb | Timeweb托管 | 5 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Timeweb.yaml) |
| TokyoSports | 东京体育 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TokyoSports.yaml) |
| Tonec | IDM下载器 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Tonec.yaml) |
| TongCheng | 同程 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TongCheng.yaml) |
| TrackerNetwork | Tracker游戏统计 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TrackerNetwork.yaml) |
| Trae | Trae AI 编程 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Trae.yaml) |
| TranslateWiki | Translatewiki | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TranslateWiki.yaml) |
| Trello | Trello 项目管理 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Trello.yaml) |
| TrustAsia | 天威诚信证书 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TrustAsia.yaml) |
| Trustwave | Trustwave安全 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Trustwave.yaml) |
| Tubi | Tubi流媒体 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Tubi.yaml) |
| Tumblr | Tumblr | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Tumblr.yaml) |
| Tutanota | Tuta 加密邮件 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Tutanota.yaml) |
| Twilio | Twilio通信 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Twilio.yaml) |
| Twitch | Twitch | 59 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Twitch.yaml) |
| Twitter | Twitter | 36 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Twitter.yaml) |
| TypeNetwork | TypeNetwork字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/TypeNetwork.yaml) |
| Typekit | Adobe Fonts | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Typekit.yaml) |
| Typography | Typography字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Typography.yaml) |
| U17 | 有妖气 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/U17.yaml) |
| UBI | 育碧 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/UBI.yaml) |
| UC | UC浏览器 | 42 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/UC.yaml) |
| UCloud | 优刻得 | 59 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/UCloud.yaml) |
| UOLiv | 利物浦大学 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/UOLiv.yaml) |
| UPYun | 又拍云 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/UPYun.yaml) |
| URLShortener | URL 短链接 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/URLShortener.yaml) |
| UUChat | UU游戏语音 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/UUChat.yaml) |
| Uber | Uber | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Uber.yaml) |
| Ubisoft | 育碧游戏 | 31 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Ubisoft.yaml) |
| Ubuntu | Ubuntu | 54 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Ubuntu.yaml) |
| UbuntuKylin | 优麒麟 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/UbuntuKylin.yaml) |
| Udacity | Udacity教育 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Udacity.yaml) |
| Udemy | Udemy 在线课程 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Udemy.yaml) |
| Umeng | 友盟+ | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Umeng.yaml) |
| UnionPay | 中国银联 | 53 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/UnionPay.yaml) |
| Unity | Unity | 24 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Unity.yaml) |
| UsersDrive | UsersDrive文件托管 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/UsersDrive.yaml) |
| V8 | V8 JavaScript引擎 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/V8.yaml) |
| VGTime | VGTime游戏资讯 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/VGTime.yaml) |
| VISA | VISA | 160 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/VISA.yaml) |
| VK | VK | 52 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/VK.yaml) |
| VMware | VMware虚拟化 | 104 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/VMware.yaml) |
| VRCDN | VRCDN直播 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/VRCDN.yaml) |
| VRChat | VRChat社交 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/VRChat.yaml) |
| Vancl | 凡客 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Vancl.yaml) |
| Vanish | Vanish衣物护理 | 47 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Vanish.yaml) |
| Vaptcha | Vaptcha验证 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Vaptcha.yaml) |
| Veet | Veet脱毛 | 45 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Veet.yaml) |
| Vercel | Vercel | 30 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Vercel.yaml) |
| Verisign | Verisign | 83 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Verisign.yaml) |
| Verizon | Verizon | 183 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Verizon.yaml) |
| VidolTV | Vidol TV | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/VidolTV.yaml) |
| VikACG | VikACG | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/VikACG.yaml) |
| Viki | Viki | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Viki.yaml) |
| Vimeo | Vimeo | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Vimeo.yaml) |
| VipShop | 唯品会 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/VipShop.yaml) |
| VisualArts | Visual Arts游戏 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/VisualArts.yaml) |
| Viu | Viu视频 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Viu.yaml) |
| ViuTV | ViuTV | 15 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ViuTV.yaml) |
| Vivo | vivo | 17 | 2026-08-13 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Vivo.yaml) |
| VoIP | VoIP 通信 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/VoIP.yaml) |
| Volcengine | 火山引擎 | 279 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Volcengine.yaml) |
| Voxmedia | Vox Media | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Voxmedia.yaml) |
| Vultr | Vultr云服务器 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Vultr.yaml) |
| WBGames | WB Games | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WBGames.yaml) |
| WISeKey | WISeKey安全 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WISeKey.yaml) |
| WIX | WIX | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WIX.yaml) |
| WPS | WPS Office | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WPS.yaml) |
| WSJ | 华尔街日报 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WSJ.yaml) |
| Wallhaven | Wallhaven壁纸 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Wallhaven.yaml) |
| Walmart | Walmart | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Walmart.yaml) |
| WanFang | 万方数据 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WanFang.yaml) |
| WanKaHuanJu | 玩咖欢聚 | 29 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WanKaHuanJu.yaml) |
| WanMeiShiJie | 完美世界 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WanMeiShiJie.yaml) |
| WangSuKeJi | 网宿科技 | 193 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WangSuKeJi.yaml) |
| WangXinKeJi | 网心科技 | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WangXinKeJi.yaml) |
| WarGaming | Wargaming游戏 | 12 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WarGaming.yaml) |
| Wasu | 华数传媒 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Wasu.yaml) |
| WeChat | 微信 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WeChat.yaml) |
| WeTV | WeTV | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WeTV.yaml) |
| WeatherCN | 华风天气 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WeatherCN.yaml) |
| WebArchive | 网络存档 | 18 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WebArchive.yaml) |
| WebEx | WebEx会议 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WebEx.yaml) |
| WebType | WebType字体 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WebType.yaml) |
| WeiPhone | 威锋网 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WeiPhone.yaml) |
| WeiZhiYunDong | 微至云动 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WeiZhiYunDong.yaml) |
| Weibo | 微博 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Weibo.yaml) |
| WenJuanXing | 问卷星 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WenJuanXing.yaml) |
| WenShuShu | 文叔叔传输 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WenShuShu.yaml) |
| Westerndigital | 西部数据 | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Westerndigital.yaml) |
| Whatsapp | WhatsApp | 30 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Whatsapp.yaml) |
| WholeFoods | Whole Foods | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WholeFoods.yaml) |
| Whoosh | Whoosh出行 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Whoosh.yaml) |
| WiFiMaster | WiFi万能钥匙 | 62 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WiFiMaster.yaml) |
| WikiCN | 中文百科 | 15 | 2026-10-29 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WikiCN.yaml) |
| WikiDot | Wikidot | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WikiDot.yaml) |
| WikiHow | WikiHow百科 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WikiHow.yaml) |
| Wikimedia | 维基媒体 | 20 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Wikimedia.yaml) |
| Wikipedia | 维基 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Wikipedia.yaml) |
| WildRift | 英雄联盟手游 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WildRift.yaml) |
| Wildberries | Wildberries | 114 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Wildberries.yaml) |
| Windsurf | Windsurf AI 编程 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Windsurf.yaml) |
| Windy | Windy 天气预报与可视化平台 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Windy.yaml) |
| Wise | Wise汇款 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Wise.yaml) |
| Wish | Wish电商 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Wish.yaml) |
| Wistia | Wistia视频 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Wistia.yaml) |
| WoLai | 我来 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/WoLai.yaml) |
| Woolite | Woolite洗涤 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Woolite.yaml) |
| Wordpress | WordPress | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Wordpress.yaml) |
| X5 | X5零售 | 35 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/X5.yaml) |
| XD | XD设计社区 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XD.yaml) |
| XDA | XDA开发者社区 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XDA.yaml) |
| XEdge | XEdge加速 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XEdge.yaml) |
| XTom | xTom服务器 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XTom.yaml) |
| Xbox | Xbox | 45 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Xbox.yaml) |
| XiMaLaYa | 喜马拉雅 | 19 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XiMaLaYa.yaml) |
| XiamiMusic | 虾米音乐 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XiamiMusic.yaml) |
| XianYu | 闲鱼 | 16 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XianYu.yaml) |
| XiaoGouKeJi | 小狗科技 | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XiaoGouKeJi.yaml) |
| XiaoHeihe | 小黑盒 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XiaoHeihe.yaml) |
| XiaoHongShu | 小红书 | 12 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XiaoHongShu.yaml) |
| XiaoMi | 小米 | 198 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XiaoMi.yaml) |
| XiaoYuZhou | 小宇宙播客 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XiaoYuZhou.yaml) |
| XiaoYuanKeJi | 小源科技 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XiaoYuanKeJi.yaml) |
| XiaomiAI | 小米 AI | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XiaomiAI.yaml) |
| XieCheng | 携程 | 44 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XieCheng.yaml) |
| XueErSi | 学而思 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XueErSi.yaml) |
| XueQiu | 雪球 | 11 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/XueQiu.yaml) |
| Xunlei | 迅雷 | 37 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Xunlei.yaml) |
| YCombinator | Y Combinator | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YCombinator.yaml) |
| YNet | Ynet传媒 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YNet.yaml) |
| YTOExpress | 圆通速递 | 43 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YTOExpress.yaml) |
| YY | YY 直播 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YY.yaml) |
| YYeTs | 人人影视 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YYeTs.yaml) |
| Yahoo | Yahoo | 178 | 2026-08-27 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Yahoo.yaml) |
| Yandex | Yandex | 215 | 2026-10-20 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Yandex.yaml) |
| YiXiaKeJi | 一下科技 | 14 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YiXiaKeJi.yaml) |
| YiZhiBo | 易直播 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YiZhiBo.yaml) |
| YnoProject | Yno同人游戏 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YnoProject.yaml) |
| YoStar | Yostar游戏 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YoStar.yaml) |
| Yokaverse | 姚记乐元素 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Yokaverse.yaml) |
| Yomiuri | 读卖新闻 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Yomiuri.yaml) |
| YouMengChuangXiang | 游梦创想 | 21 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YouMengChuangXiang.yaml) |
| YouMind | YouMind | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YouMind.yaml) |
| YouTube | YouTube | 191 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YouTube.yaml) |
| YouTubeMusic | YouTube Music | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YouTubeMusic.yaml) |
| YouZan | 有赞 | 7 | 2026-08-01 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YouZan.yaml) |
| Youku | 优酷 | 60 | 2026-08-01 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Youku.yaml) |
| YuKeTang | 雨课堂 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YuKeTang.yaml) |
| YuanBei | 圆贝信息 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YuanBei.yaml) |
| YuanFuDao | 猿辅导 | 92 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YuanFuDao.yaml) |
| YunFanJiaSu | 云帆加速 | 32 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YunFanJiaSu.yaml) |
| YundaExpress | 韵达快递 | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/YundaExpress.yaml) |
| ZB | 直播吧 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZB.yaml) |
| ZDNS | 国家工程研究中心 | 12 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZDNS.yaml) |
| ZTE | 中兴通讯 | 7 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZTE.yaml) |
| ZTOExpress | 中通快递 | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZTOExpress.yaml) |
| Zaobao | 联合早报 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Zaobao.yaml) |
| Zee | Zee | 23 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Zee.yaml) |
| ZeeTV | Zee TV | 9 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZeeTV.yaml) |
| Zendesk | Zendesk | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Zendesk.yaml) |
| Zeplin | Zeplin设计交付 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Zeplin.yaml) |
| ZhangYue | 掌阅 | 26 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZhangYue.yaml) |
| ZhiYinManKe | 知音漫客 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZhiYinManKe.yaml) |
| ZhiYunZhong | 智云众 | 8 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZhiYunZhong.yaml) |
| Zhihu | 知乎 | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Zhihu.yaml) |
| ZhongGuoShiHua | 中国石化 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZhongGuoShiHua.yaml) |
| ZhongWeiShiJi | 中维世纪 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZhongWeiShiJi.yaml) |
| ZhongYuanYiShang | 中元易尚 | 10 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZhongYuanYiShang.yaml) |
| ZhuBaJie | 猪八戒 | 5 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZhuBaJie.yaml) |
| ZhuanZhuan | 转转 | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZhuanZhuan.yaml) |
| Ziroom | 自如 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Ziroom.yaml) |
| Zoho | Zoho | 13 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Zoho.yaml) |
| Zoom | Zoom 视频会议 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Zoom.yaml) |
| Zotero | Zotero 文献管理 | 1 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Zotero.yaml) |
| Zscaler | Zscaler安全 | 17 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Zscaler.yaml) |
| ZuoYeBang | 作业帮 | 5 | 2026-10-09 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ZuoYeBang.yaml) |
| Zynga | Zynga社交游戏 | 3 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Zynga.yaml) |
| eBay | eBay | 370 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/eBay.yaml) |
| edX | edX 在线课程 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/edX.yaml) |
| friDay | friDay影音 | 2 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/friDay.yaml) |
| iCloud | iCloud | 56 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/iCloud.yaml) |
| iCloudPrivateRelay | iCloud Private Relay | 10 | 2026-08-07 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/iCloudPrivateRelay.yaml) |
| iFlytek | 科大讯飞 | 152 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/iFlytek.yaml) |
| iQIYI | 爱奇艺 | 76 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/iQIYI.yaml) |
| iQIYIIntl | 爱奇艺国际版 | 22 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/iQIYIIntl.yaml) |
| iTalkBB | iTalkBB | 4 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/iTalkBB.yaml) |
| iTunes | Apple iTunes | 98 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/iTunes.yaml) |
| ifanr | 爱范儿 | 36 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/ifanr.yaml) |
| myTVSUPER | myTV SUPER | 6 | 2026-07-26 | [raw](https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/myTVSUPER.yaml) |

</details>
