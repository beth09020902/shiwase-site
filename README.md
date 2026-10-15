# 株式会社志和勢神戸

Static website for [shiwase.co.jp](https://shiwase.co.jp). Japanese only. Plain HTML, CSS, and a small menu script so it can be hosted on Netlify with no build step.

## Pages

- `/` トップ
- `/business/` 事業内容（`#shop` は店舗案内への案内）
- `/stores/` 店舗案内。関連会社 MAD SAMURAI は `#related`
- `/shokudo/` 精肉店の食堂 志和勢
- `/company/` 会社概要
- `/contact/` お問い合わせ（Netlify Forms、フォーム名 `inquiry`。送信後は `/contact/thanks/`）
- `/information/` お知らせ
- `/information/shokudo-open/`
- `/information/homepage-open/`
- `/privacy/` 個人情報保護方針
- `/sitemap/` サイトマップ（HTML）。検索エンジン向けは `/sitemap.xml`

The online shop is [https://shop.shiwase.co.jp](https://shop.shiwase.co.jp). It is a separate app. This site links the shop from the header, the home page product section, and the footer. The shop has no per-product URLs, so product cards go to `https://shop.shiwase.co.jp/#catalog`.

Do not link the staff ordering app (`order.shiwase.co.jp`) or the admin app (`admin.shiwase.co.jp`) from this site.

## Photos

Product photos live in `images/products/` (JPEG and WebP). The processing-plant and dining-room photographs from the previous site are in `images/places/`. Originals of the product set remain in `images/raw/`. There is no confirmed photograph of the cafeteria interior, each storefront, or the workplace, so those sections use the plant photo, the previous site's dining photo, or a product photo.

`images/og.jpg` is a crop of the ham and bacon photograph.

## Netlify and shiwase.co.jp

1. Create a Netlify site from this repository. Build command: none. Publish directory: `.` (`netlify.toml` already says this).
2. In Netlify → Forms, confirm the form `inquiry` was detected. Submissions should notify `info@shiwase.jp` (set the notification in the Netlify UI; the address is not stored in the repo).
3. Add the custom domain `shiwase.co.jp` and, if wanted, `www.shiwase.co.jp`. Netlify will show the records to create.
4. DNS is at お名前.com (`dnsv.jp`). Leave the existing MX records (`shiwase-co-jp.mail.protection.outlook.com`) in place so Microsoft 365 mail keeps working. Do not replace the whole zone with Netlify DNS unless mail is moved on purpose.
5. At the apex, お名前.com often cannot set ALIAS/ANAME. Use the four Netlify load-balancer A records Netlify shows for the apex, or the A record Netlify documents for apex domains. Point `www` at the Netlify site with a CNAME (`<site>.netlify.app`).
6. After the certificate is issued, set the primary domain to `https://shiwase.co.jp` and redirect `www` to the apex. Canonical tags already use `https://shiwase.co.jp`.

`shop.shiwase.co.jp`, `admin.shiwase.co.jp`, and `order.shiwase.co.jp` already point at other Netlify sites. Do not change those records when attaching this site to the apex.

## English later

Pages are Japanese (`lang="ja"`). Layout lives in `css/style.css`, menu behaviour in `js/nav.js`. An English version can be added as `/en/` pages that reuse those files. It is not included now.
