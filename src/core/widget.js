// 위젯 초기화 및 라이프사이클 관리

import { IndexPage } from '../pages/index.js';
import { InvestmentPage } from '../pages/investment.js';
import { LoginPage } from '../pages/login.js';
import { Router } from './router.js';
import { getState } from './state.js';
import { login as apiLogin } from './api.js';

export class Widget {
  constructor(containerId, config = {}) {
    this.container = containerId || '#widget-root';
    this.config = config;
    this.currentView = null;

    // State 인스턴스
    this.state = getState();

    // Router 설정
    this.router = new Router();
    this.setupRoutes();

    // 자동 초기화
    this.init();
  }

  /**
   * 라우트 설정 (Path Parameters 방식)
   */
  setupRoutes() {
    this.router.addRoutes({
      '/': () => this.checkAuthAndShow(() => this.showInvestmentList()),
      '/investment/:id': (params) => this.checkAuthAndShow(() => this.showInvestmentDetail(params)),
      '/login': () => this.showLogin(),
      '*': () => this.checkAuthAndShow(() => this.showInvestmentList()) // 404 처리
    });
  }

  /**
   * 인증 확인 및 페이지 표시
   */
  checkAuthAndShow(callback) {
    if (this.state.isAuthenticated()) {
      callback();
    } else {
      this.router.navigate('/login');
    }
  }

  /**
   * 위젯 초기화
   */
  init() {
    console.log('Widget initialized with config:', this.config);

    const containerElement = this.getContainer();
    if (!containerElement) {
      console.error('Container not found:', this.container);
      return;
    }

    // LocalStorage에서 상태 복원 (선택적)
    if (this.config.persistState) {
      this.state.loadFromStorage();
    }

    // 장바구니 변경 시 자동 저장
    if (this.config.persistState) {
      this.state.subscribe('cart', () => {
        this.state.saveToStorage();
      });
    }

    // 페이지 프리로딩 훅 설정
    this.router.setBeforeNavigate(async (path, params) => {
      await this.preloadPage(path, params);
    });

    // 초기 로드 시 인증 확인
    const currentHash = window.location.hash.slice(1) || '/';
    if (!this.state.isAuthenticated() && currentHash !== '/login') {
      // 인증되지 않았고 로그인 페이지가 아니면 로그인으로 리다이렉트
      window.location.hash = '#/login';
    }

    // 라우터 초기화 (현재 URL에 맞는 뷰 렌더링)
    this.router.init();
  }

  /**
   * 페이지 프리로딩
   */
  async preloadPage(path, params) {
    // 페이지 타입에 따라 데이터 프리로드
    if (path === '/') {
      const indexPage = new IndexPage({ state: this.state });
      await indexPage.loadInvestments();
    } else if (path.startsWith('/investment/')) {
      const investmentId = parseInt(params.id);
      if (investmentId) {
        const investmentPage = new InvestmentPage({ investmentId, state: this.state });
        await investmentPage.loadInvestment();
      }
    }
    // 다른 페이지는 즉시 로드
  }

  /**
   * 컨테이너 엘리먼트 가져오기
   */
  getContainer() {
    if (typeof this.container === 'string') {
      return document.querySelector(this.container);
    }
    return this.container;
  }

  /**
   * 투자 상품 목록 보기
   */
  showInvestmentList() {
    const containerElement = this.getContainer();
    if (!containerElement) return;

    // 상태 업데이트
    this.state.setCurrentView('list');

    const investmentList = new IndexPage({
      state: this.state,
      onInvestmentClick: (investment) => {
        // Router를 통한 네비게이션 (Path Parameters 사용)
        this.router.navigate(`/investment/${investment.id}`);
      },
      onLogout: () => {
        // 로그아웃 처리
        this.handleLogout();
      }
    });

    const listElement = investmentList.render();
    this.transitionToPage(containerElement, listElement);
  }

  /**
   * 로그아웃 처리
   */
  handleLogout() {
    // 상태 초기화
    this.state.logout();

    // 로그인 페이지로 이동
    this.router.navigate('/login');
  }

  /**
   * 투자 상품 상세 보기
   * @param {object} params - Path 파라미터 { id: "1" }
   */
  showInvestmentDetail(params) {
    const containerElement = this.getContainer();
    if (!containerElement) return;

    const investmentId = parseInt(params.id);
    if (!investmentId) {
      console.error('Investment ID is required');
      this.router.navigate('/');
      return;
    }

    // 상태 업데이트
    this.state.setCurrentView('detail');

    const investmentDetail = new InvestmentPage({
      investmentId: investmentId,
      state: this.state,
      onBack: () => {
        this.router.back();
      },
      onLogout: () => {
        this.handleLogout();
      }
    });

    const detailElement = investmentDetail.render();
    this.transitionToPage(containerElement, detailElement);
  }


  /**
   * 로그인 페이지 보기
   */
  showLogin() {
    const containerElement = this.getContainer();
    if (!containerElement) return;

    this.state.setCurrentView('login');

    const loginPage = new LoginPage({
      state: this.state,
      onLogin: async (username, password) => {
        try {
          const user = await apiLogin(username, password);

          if (user) {
            // 로그인 성공
            this.state.setUser(user);
            this.state.saveToStorage();

            // 메인 페이지로 이동
            this.router.navigate('/');
            return true;
          } else {
            // 로그인 실패
            return false;
          }
        } catch (error) {
          console.error('Login error:', error);
          return false;
        }
      }
    });

    const loginElement = loginPage.render();
    this.transitionToPage(containerElement, loginElement);
  }

  /**
   * 페이지 전환 애니메이션
   */
  transitionToPage(container, newPageElement) {
    const oldPage = container.firstElementChild;

    // 새 페이지 준비 (숨김 상태)
    newPageElement.style.opacity = '0';
    newPageElement.style.transition = 'opacity 0.05s ease-in-out';

    if (oldPage) {
      // 이전 페이지 fade out
      oldPage.style.transition = 'opacity 0.05s ease-in-out';
      oldPage.style.opacity = '0';

      // fade out 완료 후 교체
      setTimeout(() => {
        container.innerHTML = '';
        container.appendChild(newPageElement);

        // 새 페이지 fade in
        setTimeout(() => {
          newPageElement.style.opacity = '1';
        }, 10);
      }, 50);
    } else {
      // 첫 페이지는 바로 표시
      container.appendChild(newPageElement);
      setTimeout(() => {
        newPageElement.style.opacity = '1';
      }, 10);
    }
  }

  /**
   * 현재 라우트 정보
   */
  getCurrentRoute() {
    return this.router.getCurrentRoute();
  }

  /**
   * 네비게이션 헬퍼
   * @param {string} path - 경로 (예: "/product/1")
   * @param {object} state - 히스토리 상태
   */
  navigate(path, state = {}) {
    this.router.navigate(path, state);
  }

  /**
   * 상태 가져오기
   */
  getState(key) {
    return this.state.getState(key);
  }

  /**
   * 위젯 제거
   */
  destroy() {
    // Router 정리
    this.router.destroy();

    // State 초기화 (선택적)
    if (this.config.resetOnDestroy) {
      this.state.reset();
    }

    const containerElement = this.getContainer();
    if (containerElement) {
      containerElement.innerHTML = '';
    }
    this.currentView = null;
  }
}
