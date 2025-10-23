// 홈 페이지 (투자 상품 목록)

import { getInvestments } from '../core/api.js';
import { createElement } from '../utils/dom.js';

export class IndexPage {
  constructor(props = {}) {
    this.props = props;
    this.investments = [];
    this.onInvestmentClick = props.onInvestmentClick || (() => {});
    this.onLogout = props.onLogout || (() => {});
    this.state = props.state; // State 인스턴스 (선택적)
  }

  async loadInvestments() {
    try {
      this.investments = await getInvestments();
      return this.investments;
    } catch (error) {
      console.error('Failed to load investments:', error);
      throw error;
    }
  }

  render() {
    const container = createElement('div', { className: 'investment-list-container' });

    // 헤더 렌더링
    const header = this.renderHeader();
    container.appendChild(header);

    // 투자 목록 컨테이너
    const listContainer = createElement('div', { className: 'investment-list-wrapper' });
    container.appendChild(listContainer);

    // Load and render investments
    this.loadInvestments()
      .then(() => {
        listContainer.innerHTML = '';
        const investmentList = this.renderInvestmentList();
        listContainer.appendChild(investmentList);
      })
      .catch(error => {
        listContainer.innerHTML = '';
        const errorEl = createElement('div', {
          className: 'widget-error',
          innerHTML: `Failed to load investments: ${error.message}`
        });
        listContainer.appendChild(errorEl);
      });

    return container;
  }

  renderHeader() {
    const header = createElement('div', { className: 'investment-header' });
    const user = this.state ? this.state.getCurrentUser() : null;

    header.innerHTML = `
      <h2 class="investment-header-title">💼 내 투자 현황</h2>
      <div class="investment-header-user">
        <span class="user-name">${user ? user.name : '사용자'}님</span>
        <button class="btn-logout" id="logout-btn">로그아웃</button>
      </div>
    `;

    // 로그아웃 버튼 이벤트
    header.querySelector('#logout-btn').addEventListener('click', () => {
      this.onLogout();
    });

    return header;
  }

  renderInvestmentList() {
    const list = createElement('div', { className: 'investment-list' });

    this.investments.forEach(investment => {
      const card = this.renderInvestmentCard(investment);
      list.appendChild(card);
    });

    return list;
  }

  renderInvestmentCard(investment) {
    const card = createElement('div', { className: 'investment-card' });

    card.innerHTML = `
      <img src="${investment.image}" alt="${investment.name}">
      <h3 class="investment-title">${investment.name}</h3>
      <p class="investment-location">${investment.location}</p>
      <p class="investment-amount">투자금액: ${investment.investedAmount.toLocaleString()}원</p>
      <p class="investment-return-rate">예상 수익률: ${investment.expectedReturnRate}%</p>
    `;

    card.addEventListener('click', () => {
      this.onInvestmentClick(investment);
    });

    return card;
  }
}
