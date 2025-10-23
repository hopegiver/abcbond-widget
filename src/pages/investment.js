// 투자 상세 페이지

import { getInvestmentDetail } from '../core/api.js';
import { createElement } from '../utils/dom.js';

export class InvestmentPage {
  constructor(props = {}) {
    this.props = props;
    this.investmentId = props.investmentId;
    this.investment = null;
    this.onBack = props.onBack || (() => {});
    this.onLogout = props.onLogout || (() => {});
    this.currentTab = 'detail';
    this.state = props.state;
  }

  async loadInvestment() {
    try {
      this.investment = await getInvestmentDetail(this.investmentId);
      return this.investment;
    } catch (error) {
      console.error('Failed to load investment detail:', error);
      throw error;
    }
  }

  render() {
    const container = createElement('div', { className: 'investment-detail-container' });

    this.loadInvestment()
      .then(() => {
        container.innerHTML = '';
        const detail = this.renderInvestmentDetail();
        container.appendChild(detail);
      })
      .catch(error => {
        container.innerHTML = '';
        const errorEl = createElement('div', {
          className: 'widget-error',
          innerHTML: `투자 정보를 불러올 수 없습니다: ${error.message}`
        });
        container.appendChild(errorEl);
      });

    return container;
  }

  renderInvestmentDetail() {
    const detail = createElement('div', { className: 'investment-detail' });
    const user = this.state ? this.state.getCurrentUser() : null;

    // Null 체크 및 기본값 설정
    const inv = this.investment || {};
    const investedAmount = inv.investedAmount || 0;
    const expectedReturnRate = inv.expectedReturnRate || 0;
    const monthlyInterest = inv.monthlyInterest || 0;
    const kbValue = inv.kbValue || 0;
    const seniorLoan = inv.seniorLoan || 0;
    const ltv = inv.ltv || 0;
    const loanStructure = inv.loanStructure || [];

    detail.innerHTML = `
      <!-- 헤더 -->
      <div class="investment-header">
        <h2 class="investment-header-title">💼 내 투자 현황</h2>
        <div class="investment-header-user">
          <span class="user-name">${user ? user.name : '사용자'}님</span>
          <button class="btn-logout" id="logout-btn">로그아웃</button>
        </div>
      </div>

      <!-- 상단: 이미지 + 투자 정보 -->
      <div class="investment-top">
        <!-- 왼쪽: 아파트 이미지 -->
        <div class="investment-images">
          <div class="main-image">
            <img src="${inv.image || ''}" alt="${inv.name || ''}" id="main-image">
          </div>
          <div class="thumbnail-images">
            ${inv.images ? inv.images.map((img, idx) => `
              <img src="${img}" alt="아파트 이미지 ${idx + 1}" class="thumbnail ${idx === 0 ? 'active' : ''}" data-index="${idx}">
            `).join('') : ''}
          </div>
        </div>

        <!-- 오른쪽: 투자 기본 정보 -->
        <div class="investment-info">
          <h1 class="investment-name">${inv.name || ''}</h1>
          <div class="investment-address">${inv.address || inv.location || ''}</div>

          <div class="investment-summary">
            <div class="summary-item">
              <span class="label">투자금액</span>
              <span class="value highlight">${investedAmount.toLocaleString()}원</span>
            </div>
            <div class="summary-item">
              <span class="label">예상 수익률</span>
              <span class="value highlight green">${expectedReturnRate}%</span>
            </div>
            <div class="summary-item">
              <span class="label">월 예상 이자</span>
              <span class="value">${monthlyInterest.toLocaleString()}원</span>
            </div>
          </div>

          <div class="investment-financials">
            <h3>재무 정보</h3>
            <div class="financial-item">
              <span class="label">공시지가 (KB시세)</span>
              <span class="value">${kbValue.toLocaleString()}원</span>
            </div>
            <div class="financial-item">
              <span class="label">선순위 대출금</span>
              <span class="value">${seniorLoan.toLocaleString()}원</span>
            </div>
            <div class="financial-item">
              <span class="label">LTV</span>
              <span class="value">${ltv}%</span>
            </div>
          </div>

          <div class="investment-actions">
            <button class="btn-document" id="view-document-btn">📄 등기부등본 보기</button>
          </div>
        </div>
      </div>

      <!-- LTV 시각화 -->
      <div class="ltv-visualization">
        <h3>대출 구조</h3>
        <div class="ltv-bar">
          ${this.renderLoanStructure()}
        </div>
        <div class="ltv-legend">
          ${loanStructure.map(item => `
            <div class="legend-item">
              <span class="legend-color" style="background: ${this.getLoanColor(item.priority)}"></span>
              <span class="legend-label">${item.priority}: ${(item.amount || 0).toLocaleString()}원 (${item.percentage || 0}%)</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 하단: 탭 메뉴 -->
      <div class="investment-tabs">
        <div class="tab-buttons">
          <button class="tab-button active" data-tab="detail">상세정보</button>
          <button class="tab-button" data-tab="payments">이자 지급 내역</button>
        </div>

        <div class="tab-content">
          <div class="tab-panel active" id="tab-detail">
            ${this.renderDetailTab()}
          </div>
          <div class="tab-panel" id="tab-payments">
            ${this.renderPaymentsTab()}
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners(detail);
    return detail;
  }

  getLoanColor(priority) {
    const colors = {
      '선순위 대출': '#dc3545',
      '후순위 대출': '#ffc107',
      '나의 투자': '#28a745'
    };
    return colors[priority] || '#6c757d';
  }

  renderLoanStructure() {
    const loanStructure = this.investment?.loanStructure || [];
    return loanStructure.map(item => `
      <div class="ltv-segment" style="width: ${item.percentage || 0}%; background: ${this.getLoanColor(item.priority)}">
        <span class="segment-label">${item.percentage || 0}%</span>
      </div>
    `).join('');
  }

  renderDetailTab() {
    const inv = this.investment || {};
    const details = inv.details || {};
    const investmentInfo = inv.investmentInfo || {};

    return `
      <div class="detail-content">
        <h3>상세 설명</h3>
        <p>${inv.description || '상세 설명이 없습니다.'}</p>

        <h4>매물 정보</h4>
        <table class="specs-table">
          ${Object.entries(details).map(([key, value]) => `
            <tr>
              <th>${key}</th>
              <td>${value || '-'}</td>
            </tr>
          `).join('') || '<tr><td colspan="2">정보가 없습니다.</td></tr>'}
        </table>

        <h4>투자 정보</h4>
        <table class="specs-table">
          ${Object.entries(investmentInfo).map(([key, value]) => `
            <tr>
              <th>${key}</th>
              <td>${value || '-'}</td>
            </tr>
          `).join('') || '<tr><td colspan="2">정보가 없습니다.</td></tr>'}
        </table>
      </div>
    `;
  }

  renderPaymentsTab() {
    const monthlyPayments = this.investment?.monthlyPayments || [];
    if (monthlyPayments.length === 0) {
      return '<div class="no-payments">이자 지급 내역이 없습니다.</div>';
    }

    return `
      <div class="payments-content">
        <div class="payments-summary">
          <div class="summary-card">
            <div class="summary-label">누적 수령액</div>
            <div class="summary-value">${this.calculateTotalPayments().toLocaleString()}원</div>
          </div>
          <div class="summary-card">
            <div class="summary-label">지급 횟수</div>
            <div class="summary-value">${monthlyPayments.length}회</div>
          </div>
        </div>

        <div class="payments-list">
          <table class="payments-table">
            <thead>
              <tr>
                <th>지급월</th>
                <th>지급액</th>
                <th>지급일</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              ${monthlyPayments.map(payment => `
                <tr>
                  <td>${payment.month || '-'}</td>
                  <td>${(payment.amount || 0).toLocaleString()}원</td>
                  <td>${payment.date || '-'}</td>
                  <td>
                    <span class="payment-status ${payment.paid ? 'paid' : 'pending'}">
                      ${payment.paid ? '✓ 지급완료' : '대기중'}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  calculateTotalPayments() {
    const monthlyPayments = this.investment?.monthlyPayments || [];
    return monthlyPayments
      .filter(p => p.paid)
      .reduce((sum, p) => sum + (p.amount || 0), 0);
  }

  attachEventListeners(detail) {
    // 로그아웃
    detail.querySelector('#logout-btn').addEventListener('click', () => {
      this.onLogout();
    });

    // 썸네일 클릭
    const thumbnails = detail.querySelectorAll('.thumbnail');
    const mainImage = detail.querySelector('#main-image');
    const images = this.investment?.images || [];
    thumbnails.forEach((thumb, idx) => {
      thumb.addEventListener('click', () => {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (images[idx]) {
          mainImage.src = images[idx];
        }
      });
    });

    // 등기부등본 보기
    detail.querySelector('#view-document-btn').addEventListener('click', () => {
      const docUrl = this.investment?.registrationDocument;
      if (docUrl) {
        window.open(docUrl, '_blank');
      }
    });

    // 탭 전환
    const tabButtons = detail.querySelectorAll('.tab-button');
    const tabPanels = detail.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabName = button.dataset.tab;

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        button.classList.add('active');
        detail.querySelector(`#tab-${tabName}`).classList.add('active');
      });
    });
  }
}
