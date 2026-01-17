# Markup Master | 學習作品集

![Status](https://img.shields.io/badge/Status-Active-2F7D7A)
![Netlify](https://img.shields.io/badge/Netlify-Forms-00C7B7?logo=netlify&logoColor=white)
![RWD](https://img.shields.io/badge/RWD-Ready-C2A169)
![Security](https://img.shields.io/badge/Security-CSP-4F7770)

## 專案介紹 (Introduction)
Markup Master 的學習作品集，記錄前端練習、版面設計與互動細節的成長軌跡。
這裡記錄我的前端學習軌跡：從版面架構、視覺節奏到互動細節，把每次練習整理成可閱讀、可分享的成果。

## 設計理念 (Design Concept)
- 把每一次練習，變成可以展示的作品
- 這裡記錄我的前端學習軌跡：從版面架構、視覺節奏到互動細節，把每次練習整理成可閱讀、可分享的成果。
- 以溫潤不刺眼的色調降低閱讀負擔，強調內容層次與資訊節奏。
- 結構清楚?用語意化標籤整理版面，讓內容層級清晰、可讀性提升。
- RWD 優化?手機、平板、桌機都能保持視覺一致，讓作品自然適配。
- 互動細節?滑動、hover、漸進動畫，讓作品看起來有節奏、有呼吸感。

## 功能一覽 (Features)
- 單頁導覽 (Sections): 首頁 / 亮點 / 作品 / 路線 / 關於 / 版本
- 輪播展示 (Swiper)
- 滾動進場動畫 + 卡片互動 (Scroll Reveal + Hover)
- 訂閱表單 (Netlify Forms)
- 成功頁導向 (`thanks.html`)
- 即時時鐘顯示 (Live Clock)
- 圖片延遲載入 (Lazy Loading)
- 安全標頭 (Netlify `_headers`)

## 使用技術 (Tech Stack)
- HTML5 / CSS3
- JavaScript
- Bootstrap 5
- Swiper.js
- Netlify Forms

## 目錄結構 (Structure)
```
.
??? index.html
??? thanks.html
??? README.md
??? REVISION_NOTES.md
??? _headers
??? css/
??? js/
??? img/
??? images/
```

## 訂閱表單說明 (Subscription Form)
- Netlify Forms 部署後即可收到提交資料。
- 成功送出會導向 `thanks.html`。

## 部署方式 (Deploy)
1. 將專案推送到 GitHub。
2. 在 Netlify 建立站點，連結專案。
3. Publish directory 設為專案根目錄（空白或 .）。
4. 部署完成後，表單提交可在 Netlify Forms 查看。

## 安全性 (Security)
- 已設定 CSP 安全標頭（`_headers`）。
- 可後續加上 SRI 或自託管第三方檔案，提高網站安全性。

## 作者 (Author)
Markup Master (浚潁)
