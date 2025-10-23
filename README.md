# ABC Bond 투자 포트폴리오 위젯

ABC Bond 투자자를 위한 아파트 투자 포트폴리오 관리 위젯입니다.

투자한 아파트 정보 조회, 수익률 확인, 이자 지급 내역 등을 웹사이트에 임베드하여 사용할 수 있습니다.

## 🚀 빠른 시작

### 1. Clone & Install

```bash
git clone https://github.com/hopegiver/abcbond-widget.git
cd abcbond-widget
npm install
```

### 2. 개발 서버 실행

```bash
# Python HTTP 서버
python -m http.server 8000

# 또는 Live Server 사용
```

브라우저에서 `http://localhost:8000` 접속

### 3. 로그인

**데모 계정:**
- 아이디: `user1`
- 비밀번호: `password1`

또는
- 아이디: `user2`
- 비밀번호: `password2`

## ✨ 주요 기능

### 🔐 로그인 & 인증
- 사용자 인증 시스템
- 세션 관리 (localStorage)
- 비로그인 시 자동 리다이렉트

### 📊 투자 포트폴리오 대시보드
- 투자한 아파트 목록 조회
- 투자금액 및 예상 수익률 표시
- 사용자 정보 및 로그아웃 기능

### 🏢 투자 상세 정보
- **기본 정보**: 아파트명, 주소, 위치
- **투자 정보**: 투자금액, 예상 수익률, 월 예상 이자
- **재무 정보**: 공시지가(KB시세), 선순위 대출금, LTV
- **시각화**: LTV 막대 그래프로 대출 구조 표시
- **문서**: 등기부등본 다운로드
- **이자 내역**: 월별 이자 지급 내역 및 누적 수령액

### 🎨 UI/UX
- 반응형 디자인
- 부드러운 페이지 전환 애니메이션
- 직관적인 네비게이션

## 🏗️ 프로젝트 구조

```
abcbond-widget/
├── src/
│   ├── core/
│   │   ├── api.js          # API 호출 (투자 정보, 로그인)
│   │   ├── router.js       # 라우팅 시스템
│   │   ├── state.js        # 상태 관리 (인증, 사용자 정보)
│   │   └── widget.js       # 위젯 초기화 및 라이프사이클
│   ├── pages/
│   │   ├── index.js        # 투자 목록 페이지
│   │   ├── investment.js   # 투자 상세 페이지
│   │   └── login.js        # 로그인 페이지
│   ├── styles/
│   │   └── main.css.js     # CSS-in-JS 스타일
│   └── utils/
│       ├── dom.js          # DOM 헬퍼
│       └── helpers.js      # 유틸리티 함수
├── mock-api/
│   ├── investments.json         # 투자 목록 데이터
│   ├── investment-detail.json   # 투자 상세 데이터
│   └── users.json              # 사용자 데이터
└── index.html                  # 데모 페이지
```

## 💡 사용법

### 개발 모드 (ES6 Modules)

```html
<div id="widget-root"></div>

<script type="module">
  import { Widget } from './src/index.js';

  const widget = new Widget('#widget-root', {
    apiKey: 'demo-key',
    theme: 'light',
    persistState: true
  });
</script>
```

### 배포 모드 (고객용)

```html
<div id="my-investment"></div>
<script src="https://cdn.abcbond.com/widget.min.js"></script>
<script>
  const widget = new Widget('#my-investment', {
    apiKey: 'your-api-key'
  });
</script>
```

## 🔧 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## 📊 데이터 구조

### 투자 정보 (investments.json)

```json
{
  "id": 1,
  "name": "래미안 강남 더 센트럴",
  "investedAmount": 50000000,
  "expectedReturnRate": 8.5,
  "location": "서울 강남구",
  "image": "https://..."
}
```

### 투자 상세 (investment-detail.json)

```json
{
  "id": 1,
  "name": "래미안 강남 더 센트럴",
  "address": "서울특별시 강남구 역삼동 123-45",
  "investedAmount": 50000000,
  "expectedReturnRate": 8.5,
  "monthlyInterest": 354166,
  "kbValue": 1180000000,
  "seniorLoan": 600000000,
  "ltv": 50,
  "loanStructure": [...],
  "monthlyPayments": [...]
}
```

## 🛠️ 기술 스택

- **Frontend**: Vanilla JavaScript (ES6 Modules)
- **Build**: esbuild
- **Styling**: CSS-in-JS
- **Routing**: Hash-based SPA Router (Path Parameters)
- **State**: Custom State Management
- **Mock API**: Static JSON files
- **Deploy**: Cloudflare Pages / GitHub Pages

## 🎯 주요 기능 상세

### 라우팅

- `/` - 투자 목록 페이지
- `/investment/:id` - 투자 상세 페이지
- `/login` - 로그인 페이지

### 인증 흐름

1. 사용자가 페이지 접속
2. 인증 확인 (`state.isAuthenticated()`)
3. 미인증 시 `/login`으로 리다이렉트
4. 로그인 성공 시 세션 저장 및 메인 페이지 이동

### 상태 관리

```javascript
// 로그인
state.setUser(user);
state.saveToStorage();

// 로그인 확인
if (state.isAuthenticated()) {
  // 인증된 사용자
}

// 로그아웃
state.logout();
```

## 📝 개발 가이드

자세한 개발 가이드는 [CONTRIBUTING.md](./CONTRIBUTING.md)를 참고하세요.

## 🤖 AI 에이전트 사용 시

AI 에이전트를 사용하는 경우, 작업 전에 CONTRIBUTING.md를 읽도록 지시하세요:

```
먼저 CONTRIBUTING.md 파일을 읽고 프로젝트 구조와 규칙을 이해한 후 작업해줘.
```

## 📄 라이센스

MIT License

## 🙏 Credits

Built with [Claude Code](https://claude.com/claude-code)
