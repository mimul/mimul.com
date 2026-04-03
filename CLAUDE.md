# mimul.com 블로그 프로젝트

## 프로젝트 개요

개발, 기술, 비즈니스, 논문 관련 테크 블로그를 관리하는 Gatsby 기반 저장소입니다.

## 디렉토리 구조

```
content/blog/
└── {slug}/           # 블로그 글 URL 슬러그 (디렉토리명)
    ├── index.mdx     # 블로그 글 본문 (메인 파일)
    └── *.png/jpg     # 글에서 참조하는 이미지
```

### index.mdx 프론트매터 형식

```yaml
---
title: 글 제목
description: 글 설명 (SEO)
author: Mimul
date: "YYYY-MM-DDTHH:mm:ss.000Z"
lastModificationTime: "YYYY-MM-DDTHH:mm:ss.000Z"
image: "./thumbnail.png"
tags:
  - tag1
  - tag2
---
```

## 엄격한 제약 사항

**content/blog/ 디렉토리 하위 파일만 수정할 수 있습니다.**

절대 수정 금지:
- `src/` - 소스 코드
- `gatsby-*.js`, `gatsby-*.mjs` - Gatsby 설정
- `package.json`, `package-lock.json`, `yarn.lock` - 패키지 설정
- `public/` - 빌드 결과물
- `static/` - 정적 파일
- `netlify.toml`, `commitlint.config.js` - 설정 파일
- 루트의 모든 파일

## 사용 가능한 커맨드

- `/blog-review {slug}` — 블로그 글 품질 리뷰 및 개선 (브랜치 생성 → 진단 → 재작성 → PR)
