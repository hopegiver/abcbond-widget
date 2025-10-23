// 로그인 페이지

import { createElement } from '../utils/dom.js';

export class LoginPage {
  constructor(props = {}) {
    this.props = props;
    this.onLogin = props.onLogin || (() => {});
    this.state = props.state;
  }

  render() {
    const container = createElement('div', { className: 'login-container' });

    container.innerHTML = `
      <div class="login-box">
        <div class="login-header">
          <h1>🏢 ABC Bond</h1>
          <p>나의 아파트 투자 포트폴리오</p>
        </div>

        <form class="login-form" id="login-form">
          <div class="form-group">
            <label for="username">아이디</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="아이디를 입력하세요"
              required
              autocomplete="username"
            >
          </div>

          <div class="form-group">
            <label for="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              required
              autocomplete="current-password"
            >
          </div>

          <div class="login-error" id="login-error" style="display: none;"></div>

          <button type="submit" class="btn-login">로그인</button>
        </form>

        <div class="login-footer">
          <p>데모 계정: user1 / password1</p>
        </div>
      </div>
    `;

    this.attachEventListeners(container);
    return container;
  }

  attachEventListeners(container) {
    const form = container.querySelector('#login-form');
    const errorDiv = container.querySelector('#login-error');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = form.username.value.trim();
      const password = form.password.value;

      if (!username || !password) {
        this.showError(errorDiv, '아이디와 비밀번호를 입력해주세요.');
        return;
      }

      try {
        // 로그인 시도
        const success = await this.onLogin(username, password);

        if (!success) {
          this.showError(errorDiv, '아이디 또는 비밀번호가 올바르지 않습니다.');
        }
      } catch (error) {
        this.showError(errorDiv, '로그인 중 오류가 발생했습니다.');
        console.error('Login error:', error);
      }
    });
  }

  showError(errorDiv, message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';

    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 3000);
  }
}
