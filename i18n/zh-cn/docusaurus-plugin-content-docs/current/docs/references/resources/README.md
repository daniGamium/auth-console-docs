import APIResourceSchema from './fragments/\_api_resource_schema.mdx';

# ð API èµæº

## ç®ä»

### ä»ä¹æ¯ API èµæº?

API èµæºï¼å³ [Resource Indicators](https://www.rfc-editor.org/rfc/rfc8707.html)ï¼è¢«ç¨æ¥å£°æç¨æ·æè¯·æ±çç®æ æå¡æ¥å£æèèµæºãéå¸¸æ¯ä¸ä¸ªæåå°æ¥å£æèµæºå°åç URI åéã

### ä¸ºä»ä¹éè¦ API èµæº

Logto ä½ä¸ºä¸ä¸ªæææå¡å¨ï¼æ¨å¨ä¸ºå¤§éä¸åçèµæºåæ¥å£æä¾æéæå¡ãæä»¬å°ä¼æ ¹æ®ç¨æ·æå£°æç API èµæºæ è¯æ¥çæåé¢åå¸¦æç¹å®åå®¹ãç±»åï¼ååä¼ç®æ çå å¯ä»¤çã

å°ææä»¤çåå¯¹åºçæéæ ¡éªåºç¨å°ä½ çè¯·æ±å½ä¸­ï¼å¯ä»¥æ´å¥½çä¿æ¤ä½ çç§æèµæºä¸è¢«å¿åèº«ä»½èè®¿é®æèæ»å»ã

## å®ä¹

### Resource Indicator

- ä¸ä¸ªææçèµæºæ è¯ï¼ç¨æ¥è¡¨ç¤ºè¢«è¯·æ±æ¹çç®æ æ¥å£æèèµæºã
- å®çå¼ **å¿é¡»** æ¯ä¸ä¸ªå®æ´ç URI æ ¼å¼ã
- è¯¥ URI **ä¸è½** åå«ä»»ä½ fragment çæ®µã
- è¯¥ URI **ä¸åº** åå«ä»»ä½ query çæ®µã
- è¯¥ URI **åº** å°½å¯è½çå·ä½ãç¨äºè¡¨ç¤ºä¸ä¸ªæä¸ç»å®æ´çæ¥å£æèµæºã

å¨å®éåºç¨ä¸­ï¼å®¢æ·ç«¯å¯è½ä»ç¥éä¸å¶äº¤äºçåºç¨ç¨åºæèè¢«è¯·æ±èµæºçæ ¹å°åãè¿æ¶å°±å¯ä»¥ç¨å®æ¥ä½ä¸º Resource Indicatorï¼ ç¨æ¥ä»£è¡¨ææè¯¥å°åä¸çæ¥å£åèµæº

ä¾å¦ï¼Logto æä¾çç®¡çæ¥å£ URI å°å

```
https://api.logto.io
```

é»è®¤åå§ç¶æä¸ï¼è¯¥ URI å°±ä¼è¢«ä½ä¸ºä¸ä¸ª API èµæºæ³¨åå¨ Logto ä¾§ã ææè¯¥å°åä¸çç®¡çæ¥å£é½ä¼åå° Logto æå¡å¨çä¿æ¤ã

### Logto API èµæºçæ°æ®æ ¼å¼

<APIResourceSchema />

## API èµæºæ¯å¦ä½è¿ä½ç

### 1. ææè¯·æ±

å½å¨å¯¹ææç«¯ç¹çåèµ·çè¯·æ±ä¸­ä½¿ç¨ resource åæ°æ¶ï¼å®å£°æäºææå½åæè¯·æ±ææè®¿é®çåä¿æ¤èµæºã

```bash
GET https://logto.dev/oidc/auth?response_type=code
    &client_id=s6BhdRkqt3
    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI
    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fapplications
    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fusers
```

Logto ä¼æ ¡éªè¿äº resource indicators çåæ³æ§å¹¶é¢åå¸¦æç¸åºæéç `authorization_code`.

### 2. Access Token è¯·æ±

å½ resource åæ°è¢«ç¨äºåä»¤çç«¯ç¹ååºç `access_token` ä»¤çè¯·æ±æ¶ï¼å®ææäºå½åå®¢æ·ç«¯æç®ä½¿ç¨è¯¥è¢«è¯·æ±ä»¤ççç®æ æå¡æ¥å£æèµæº

```bash
POST https://logto.dev/oidc/token HTTP/1.1

    grant_type=authorization_code
    redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
    code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ
    resource=https%3A%2F%2Flogto.test.dev%2Fusers
```

è¯·æ±æååï¼Logto å°é¢åä¸ä¸ª `access_token` è®¿é®ä»¤çï¼å¶åä¼ç®æ ä»éäºè¯¥è¢«è¯·æ±çæ¥å£æèµæºã

### 3. API è¯·æ±

æ¯ä¸ä¸ªç±å®¢æ·ç«¯åèµ·é¢åä¸ä¸ª API èµæºè®¿é®çè¯·æ±å¤´ä¸­å°æºå¸¦ä¸ä¸ªç± Logto é¢åï¼å¸¦æåä¼ï¼ææï¼æ¶æç­ä¿¡æ¯ç `access_token` å å¯ä»¤çã

```bash
GET https://logto.dev/api/users

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek

```

:::tip
è¯·åç§æä»¬ç [**API èµæºä¿æ¤**](../../recipes/protect-your-api/README.mdx) æåï¼æ·»å ä»¤çéªè¯å°ä½ çæå¡å¨æ¥å£ç«¯ï¼æ¯ä½ çç§æèµæºå¾å°æ´å¥½çä¿æ¤ã
:::

Logto éµå¾ªæ åç OAuth 2.0 ä»¤çææåè®®æ¥ä¿æ¤ä½ çæ°æ®èµæºã ä½ å¯ä»¥è®¿é® OAuth 2.0 ç[å®æ¹ææ¡£](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1)ï¼ä»¥è·åè·å¤ç»èã
