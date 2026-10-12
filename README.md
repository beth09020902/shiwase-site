# 株式会社志和勢神戸

Static website for [shiwase.co.jp](https://shiwase.co.jp). Japanese only. Plain HTML, CSS, and a small menu script so it can be hosted on Netlify with no build step.

## Pages

- `/` トップ
- `/business/` 事業内容（店舗案内は `#shop`）
- `/company/` 会社概要
- `/contact/` お問い合わせ（Netlify Forms。送信後は `/contact/thanks/`）
- `/information/` お知らせ
- `/information/homepage-open/`
- `/privacy/` 個人情報保護方針
- `/sitemap/` サイトマップ（HTML）。検索エンジン向けは `/sitemap.xml`

The online shop is [https://shop.shiwase.co.jp](https://shop.shiwase.co.jp). It is linked from the header, the home hero, the 食料品の販売 section, and the footer, and it opens in the same tab.

Do not link the staff ordering app (`order.shiwase.co.jp`) or the admin app (`admin.shiwase.co.jp`) from this site.

## Photos

Originals from the GitHub upload live in `images/raw/`. The site uses a curated set, exported to `images/products/` as JPEG and WebP at 640px, 1280px, and up to 1920px wide. Pages reference them with `srcset`. The hero image is loaded immediately. Gallery images use `loading="lazy"`.

There is still no photograph of the processing plant, the shops, or the workplace, so those sections keep a 「写真準備中」 placeholder. Duplicate angles and the お歳暮 graphic stay in `images/raw/` and are not on the page.

`images/og.jpg` is a crop of the ham and bacon photograph.

## English later

Pages are Japanese (`lang="ja"`) with canonical URLs on `https://shiwase.co.jp`. Layout and colour live in `css/style.css`, and the menu behaviour lives in `js/nav.js`. An English version can be added as `/en/` pages that reuse those files. It is not included now.
