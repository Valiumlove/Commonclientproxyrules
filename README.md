# MagicRule 瑙勫垯闀滃儚

姣忓ぉ鑷姩鎶?[MagicRule](https://magicrule.pages.dev/#/c/Surge) 涓婄殑瑙勫垯鎶撳彇鍒版湰浠撳簱锛屼緵 Surge / Mihomo / Quantumult X / Loon / Shadowrocket / Stash / Sing-box 鐩存帴璁㈤槄銆?
- 涓婃父锛歚https://magicrule.pages.dev`锛堣鍒欑敱瀹冭仛鍚堢敓鎴愶級
- 鏇存柊锛欸itHub Actions 姣忓ぉ **03:23 UTC**锛堝寳浜椂闂?11:23锛夎嚜鍔ㄨ繍琛岋紝鍛ㄦ棩鑷姩鍋氫竴娆″叏閲忔牳瀵癸紱涔熷彲鎵嬪姩瑙﹀彂
- 鍘熷垯锛氳鍒欐鏂囦笉鍙樺氨涓嶉噸鍐欒鍒欐枃浠讹紱鍙湁涓婃父纭疄鏀逛簡瑙勫垯鎵嶆彁浜ゃ€傚伓灏斾細浜х敓鍙惈 `index/`銆乣state.json` 鐨勫厓鏁版嵁鎻愪氦锛堟鏂囨病鍙橈級

## 鏀寔鐨勫鎴风

| 瀹㈡埛绔?| 鏍煎紡 | 鐩綍 | 涓婃父浜х墿 |
| --- | --- | --- | --- |
| Surge | `.list` | `rules/Surge/` | `rules` |
| Mihomo锛圕lash Meta锛?| `.yaml` | `rules/Mihomo/` | `classical` |
| Quantumult X | `.list` | `rules/QuantumultX/` | `rules` |
| Loon | `.list` | `rules/Loon/` | `rules` |
| Shadowrocket | `.list` | `rules/Shadowrocket/` | `rules` |
| Stash | `.yaml` | `rules/Stash/` | `classical` |
| Sing-box | `.json` | `rules/SingBox/` | `source` |

> 姣忎釜瑙勫垯闆嗕竴涓枃浠讹紝鏂囦欢鍚嶅氨鏄笂娓歌鍒欏悕锛堝 `Advertising.list`銆乣Direct.yaml`锛夈€?> 闇€瑕?AdGuard / Egern / Surfboard锛熷湪 `config.json` 鐨?`clients` 閲屽姞涓婂嵆鍙紙瑙佷笅鏂囷級銆?
## 鐩綍缁撴瀯

```
rules/<瀹㈡埛绔?/<瑙勫垯鍚?.<鎵╁睍鍚?   # 瑙勫垯鏂囦欢鏈綋
index/<瀹㈡埛绔?.json               # 璇ュ鎴风鐨勮鍒欑洰褰曪紙鍚嶇О/绫诲瀷/琛屾暟/鏇存柊鏃堕棿/鏂囦欢璺緞锛?index/summary.json                # 鍏ㄩ儴瀹㈡埛绔眹鎬?state.json                        # 鍚屾鐘舵€侊紙SHA256銆佹洿鏂版椂闂达級锛岀敤浜庡閲忓悓姝?config.json                       # 鍚屾閰嶇疆
scripts/sync.mjs                  # 鍚屾鑴氭湰锛堥浂渚濊禆锛?.github/workflows/sync.yml        # 姣忔棩鑷姩鍚屾宸ヤ綔娴?```

## 浣跨敤鏂规硶

Raw 鍦板潃妯℃澘锛?
```
https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/<瀹㈡埛绔?/<瑙勫垯鍚?.<鎵╁睍鍚?
```

鍥藉唴璁块棶 `raw.githubusercontent.com` 涓嶇ǔ瀹氭椂锛屽彲鐢?jsDelivr 闀滃儚锛?
```
https://cdn.jsdelivr.net/gh/Valiumlove/magicrule-mirror@main/rules/<瀹㈡埛绔?/<瑙勫垯鍚?.<鎵╁睍鍚?
```

### Surge

```ini
[Rule]
RULE-SET,https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Surge/Advertising.list,REJECT
RULE-SET,https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Surge/Direct.list,DIRECT
```

### Mihomo / Stash

```yaml
rule-providers:
  advertising:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Advertising.yaml"
    path: ./ruleset/advertising.yaml
    interval: 86400

rules:
  - RULE-SET,advertising,REJECT
```

### Quantumult X

```ini
[filter_remote]
https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/QuantumultX/Advertising.list, tag=Advertising, force-policy=reject, update-interval=86400
```

### Sing-box

```json
{
  "type": "remote",
  "tag": "advertising",
  "format": "source",
  "url": "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/SingBox/Advertising.json",
  "download_detour": "direct"
}
```

> 鍚勫鎴风璇硶鐗堟湰宸紓杈冨ぇ锛屼笂闈㈠彧鏄渶灏忕ず渚嬶紝鍏蜂綋璇蜂互瀵瑰簲瀹㈡埛绔枃妗ｄ负鍑嗐€?
## 棣栨閮ㄧ讲

1. 鍦?GitHub 鏂板缓涓€涓?*鍏紑**浠撳簱锛堜緥濡?`magicrule-mirror`锛夛紝**涓嶈**鍕鹃€?"Add a README file / .gitignore / license"锛堜繚鎸佺┖浠撳簱锛岄伩鍏嶅拰鏈湴鎻愪氦鍐茬獊锛夈€?2. 鍦ㄦ湰鐩綍锛坄magicrule-mirror/`锛夋帹閫佷唬鐮侊紙浠撳簱閲屽彧鏈夎剼鏈拰閰嶇疆锛岃鍒欐枃浠剁敱 Action 鐢熸垚锛屼笉鐢ㄦ湰鍦颁笂浼犲ぇ鏂囦欢锛夛細

   ```bash
   cd magicrule-mirror
   git remote add origin https://github.com/Valiumlove/magicrule-mirror.git
   git branch -M main
   git push -u origin main
   ```

   鐢?SSH 鐨勮瘽鎶婂湴鍧€鎹㈡垚 `git@github.com:Valiumlove/magicrule-mirror.git`銆?3. 浠撳簱 **Settings 鈫?Actions 鈫?General 鈫?Workflow permissions** 閫夋嫨 **Read and write permissions**銆?4. 鎵撳紑 **Actions 鈫?鍚屾 MagicRule 瑙勫垯 鈫?Run workflow**锛屾墜鍔ㄨ窇涓€娆°€?   棣栨浼氫笅杞藉叏閮ㄨ鍒欙紙7 涓鎴风绾?190 MB锛岄€氬父 10锝?0 鍒嗛挓锛夛紝涔嬪悗姣忓ぉ鍙悓姝ュ彉鍖栥€?5. 绛夐娆¤繍琛屽畬鎴愶紝`rules/` 涓嬪氨浼氬嚭鐜拌鍒欐枃浠讹紝涓婇潰妯℃澘閲岀殑 raw 鍦板潃鍗冲彲浣跨敤锛涗互鍚庢瘡澶╃湅 Actions 鐨勮繍琛屾憳瑕佸嵆鍙煡閬撴洿鏂颁簡澶氬皯鏉°€?
## 鏈湴杩愯

闇€瑕?Node.js 20+锛堥浂绗笁鏂逛緷璧栵級锛?
```bash
node scripts/sync.mjs                      # 鎸?config.json 鍚屾
node scripts/sync.mjs --client Surge       # 鍙悓姝ヤ竴涓鎴风
node scripts/sync.mjs --limit 10 --out .tmp/sample   # 灏忔牱鏈祴璇曪紝涓嶆薄鏌撲粨搴?node scripts/sync.mjs --full               # 蹇界暐缂撳瓨锛屽叏閲忛噸鏂版牳瀵?node scripts/sync.mjs --prune              # 鍒犻櫎 config.json 閲屽凡绉婚櫎鐨勫鎴风鐩綍
node scripts/sync.mjs --allow-shrink       # 鍏佽涓婃父瑙勫垯鏁板ぇ骞呬笅闄嶏紙纭涓婃父鐪熺殑鍒犱簡瑙勫垯鏃剁敤锛?node scripts/sync.mjs --dry-run            # 鍙湅璁″垝涓嶅啓鏂囦欢
```

## 閰嶇疆璇存槑锛坈onfig.json锛?
| 瀛楁 | 璇存槑 |
| --- | --- |
| `upstream` | 涓婃父绔欑偣鍦板潃锛岄粯璁?`https://magicrule.pages.dev` |
| `clients` | 瑕侀暅鍍忕殑瀹㈡埛绔垪琛ㄣ€傚彧瑕?Surge 灏卞啓 `["Surge"]`锛涘叏閮ㄤ富娴佷唬鐞嗗鎴风瑙侀粯璁ゅ€?|
| `artifactKeys` | 鍚勫鎴风鍙栧摢涓骇鐗╋細`rules` / `classical` / `source`锛堜竴鑸笉鐢ㄦ敼锛?|
| `concurrency` | 骞跺彂璇锋眰鏁帮紝榛樿 8 |
| `maxFileBytes` | 鍗曟枃浠跺ぇ灏忎笂闄愶紝榛樿 64 MB锛岃秴杩囪涓哄紓甯?|
| `maxShrinkRatio` | 瑙勫垯鏁颁笅闄嶈秴杩囪姣斾緥瑙嗕负涓婃父寮傚父骞朵腑姝紝榛樿 `0.25`锛?5%锛?|
| `maxFailureRatio` | 澶辫触瑙勫垯姣斾緥闃堝€硷紙涓旇嚦灏?3 鏉★級瓒呰繃鍒欐湰娆′笉鎻愪氦 |

澧炲垹瀹㈡埛绔悗鎵嬪姩杩愯涓€娆?`--prune`锛堟垨鍦?Actions 閲屽嬀閫?prune锛夛紝鍗冲彲娓呯悊涓嶅啀闇€瑕佺殑鐩綍銆?
## 鍚屾鏈哄埗涓庡畨鍏ㄨ璁?
- **澧為噺**锛氱储寮曢噷鐨?`rule_updated_at` 娌″彉銆佹湰鍦版枃浠?SHA256 鏍￠獙閫氳繃鏃讹紝涓嶈姹?manifest銆佷笉涓嬭浇鏂囦欢銆?- **鍘绘姈**锛氫笂娓告枃浠跺ご閲岀殑 `# UPDATED` 鏃堕棿鎴冲彉鍖栦絾姝ｆ枃娌″彉鏃讹紝淇濈暀鏃ф枃浠讹紝閬垮厤鏃犳剰涔夋彁浜ゃ€傚彧鍦?manifest 鑷甫鐨?`bytes_sha256` 涓庝笅杞藉唴瀹逛竴鑷存椂鎵嶇敤瀹冨垽鏂紙manifest 涓庝骇鐗╀笉鍚屾鏃朵互瀹為檯浜х墿涓哄噯锛岄伩鍏嶈婊炲悗淇℃伅楠楄繃鑰岄敊杩囩湡瀹炴洿鏂帮級銆?- **瀹屾暣鎬?*锛氭嫆缁濈┖鏂囦欢銆丠TML 鍏滃簳椤点€佹棤娉曡В鏋愮殑 JSON锛屽崟鏂囦欢瓒呰繃 64 MB 瑙嗕负寮傚父锛沵anifest 鑷甫鐨?`bytes_sha256` 瀹炴祴绾?3%锝?0% 涓?CDN 瀹為檯鍓湰涓嶅悓姝ワ紙鍙栧喅浜庝笂娓搁噸寤烘椂鏈猴級锛屽洜姝ゅ彧浣滀负鍛婅锛堟鏁颁細鍐欒繘 Actions 鐨勮繍琛屾憳瑕侊級锛屼笉闃绘柇鍚屾銆?- **闃茶鍒?*锛氭煇瀹㈡埛绔鍒欐暟姣斾笂娆￠闄嶈秴杩?25% 鏃剁洿鎺ヤ腑姝紝涓嶆彁浜わ紙纭涓婃父鐪熷垹浜嗗啀鍔?`--allow-shrink`锛屾垨鍦?Actions 閲屽嬀閫?allow_shrink锛夈€?- **澶辫触涓嶆彁浜わ紙浜嬪姟寮忥級**锛氬崟瀹㈡埛绔け璐ヨ鍒欒秴杩?`max(3, 2%)`銆佹暣涓鎴风鍏ㄩ儴澶辫触銆佺储寮曟媺鍙栧け璐ャ€佹垨涓婃父鍑虹幇閲嶅悕瑙勫垯鏃讹紝鑴氭湰閫€鍑虹爜涓?1锛?*涓嶅啓 `state.json` / `index/`锛屼篃涓嶅垹闄や换浣曡鍒欐枃浠?*锛屼粨搴撲繚鐣欎笂涓€娆＄殑瀹屾暣鏁版嵁銆?- **绱㈠紩鏍囨敞**锛氫笅杞藉け璐ョ殑瑙勫垯濡傛灉淇濈暀浜嗘棫鏂囦欢锛屼細鍦?`index/<瀹㈡埛绔?.json` 閲屾爣 `"stale": true`锛屼究浜庤瘑鍒€岀储寮曟椂闂翠笌鏂囦欢鍐呭鍙兘涓嶄竴鑷淬€嶇殑鏉＄洰銆?
## 娉ㄦ剰浜嬮」

- 寤鸿鐢?*鍏紑浠撳簱**锛欰ctions 鍏嶈垂棰濆害瓒冲锛宺aw 鍦板潃涔熸柟渚跨洿鎺ヨ闃呫€?- 浠撳簱棣栨鍚屾鍚庣害 190 MB锛涘鏋滃彧闇€瑕佷竴涓や釜瀹㈡埛绔紝鎶?`config.json` 鐨?`clients` 鏀瑰皬锛堟瘮濡?`["Surge"]` 绾?25 MB锛夈€?- GitHub 鐨勫畾鏃朵换鍔″湪浠撳簱闀挎湡鏃犳椿鍔ㄦ椂鍙兘琚殏鍋滐紱鏈粨搴撴瘡澶╂湁鏈哄櫒浜烘彁浜ら€氬父涓嶄細瑙﹀彂锛屼竾涓€琚殏鍋滐紝鎵嬪姩 Run workflow 涓€娆″嵆鍙仮澶嶃€?- 涓婃父鎺ュ彛鑻ユ敼鐗堬紙`/data/index/*.json` 缁撴瀯鍙樺寲绛夛級锛屽悓姝ヤ細澶辫触涓斿綋澶╀笉鎻愪氦銆佹棫鏁版嵁涓嶅彈褰卞搷锛涙鏃舵洿鏂?`scripts/sync.mjs` 鍗冲彲銆?- 瑙勫垯鍐呭鐗堟潈褰?MagicRule 鍙婂叾涓婃父瑙勫垯浣滆€呮墍鏈夛紝鏈粨搴撲粎鍋氭牸寮忛暅鍍忥紝涓嶄慨鏀硅鍒欏唴瀹癸紱浣跨敤鍓嶈鑷璇勪及椋庨櫓锛堝幓骞垮憡瑙勫垯鍙兘瀛樺湪璇嫤鎴級銆?
## 鑷磋阿

瑙勫垯鏁版嵁鏉ヨ嚜 [MagicRule](https://magicrule.pages.dev)锛屼互鍙婂畠鑱氬悎鐨?[ACL4SSR](https://github.com/ACL4SSR/ACL4SSR)銆乕v2fly/domain-list-community](https://github.com/v2fly/domain-list-community)銆乕LM-Firefly/Rules](https://github.com/LM-Firefly/Rules)銆乕SukkaW/Surge](https://github.com/SukkaW/Surge) 绛変笂娓搁」鐩€?
