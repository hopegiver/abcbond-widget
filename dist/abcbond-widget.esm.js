var k=`
  /* Widget Container */
  .widget-wrapper {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    box-sizing: border-box;
  }

  .widget-wrapper *,
  .widget-wrapper *::before,
  .widget-wrapper *::after {
    box-sizing: border-box;
  }

  .widget-content {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #dee2e6;
  }

  /* Investment List */
  .investment-list-container {
    display: flex;
    flex-direction: column;
  }

  .investment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: white;
    border-bottom: 1px solid #dee2e6;
    margin-bottom: 0;
  }

  .investment-header-title {
    font-size: 24px;
    font-weight: 700;
    color: #212529;
    margin: 0;
  }

  .investment-header-user {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .user-name {
    font-size: 16px;
    font-weight: 600;
    color: #495057;
  }

  .btn-logout {
    padding: 8px 16px;
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-logout:hover {
    background: #c82333;
  }

  .investment-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
    padding: 20px;
  }

  .investment-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 0;
    overflow: hidden;
    transition: all 0.3s;
    cursor: pointer;
  }

  .investment-card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }

  .investment-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .investment-card > * {
    padding: 0 16px;
  }

  .investment-card img {
    padding: 0;
  }

  .investment-title {
    font-size: 18px;
    font-weight: 700;
    margin: 16px 0 8px;
    color: #212529;
  }

  .investment-location {
    font-size: 14px;
    color: #6c757d;
    margin: 0 0 12px;
  }

  .investment-return-rate {
    font-size: 20px;
    font-weight: 700;
    color: #28a745;
    margin: 0 0 16px;
  }

  .investment-amount {
    font-size: 20px;
    font-weight: 700;
    color: #007bff;
    margin: 0 0 16px;
  }

  /* Product List (legacy) */
  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .product-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    transition: box-shadow 0.2s;
    cursor: pointer;
  }

  .product-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }

  .product-title {
    font-size: 16px;
    font-weight: 600;
    margin: 12px 0 8px;
    color: #212529;
  }

  .product-price {
    font-size: 18px;
    font-weight: 700;
    color: #007bff;
  }

  /* Button */
  .widget-button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .widget-button:hover {
    background: #0056b3;
  }

  .widget-button:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }

  /* Modal */
  .widget-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  }

  .widget-modal {
    background: white;
    border-radius: 8px;
    padding: 24px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
  }

  .widget-modal-close {
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6c757d;
  }

  .widget-modal-close:hover {
    color: #212529;
  }

  /* Cart */
  .cart-container {
    padding: 20px;
  }

  .cart-item {
    display: flex;
    gap: 16px;
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
  }

  .cart-item img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }

  .cart-item-info {
    flex: 1;
  }

  .cart-total {
    font-size: 20px;
    font-weight: 700;
    text-align: right;
    padding: 20px;
    border-top: 2px solid #212529;
  }

  /* Loading */
  .widget-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    color: #6c757d;
  }

  /* Router Loading Indicator */
  .router-loading-indicator {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background: rgba(255, 255, 255, 0.95);
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .router-loading-indicator .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    animation: router-spin 1s linear infinite;
  }

  @keyframes router-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Error */
  .widget-error {
    padding: 20px;
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
    margin: 20px;
  }

  /* Investment Detail Page */
  .investment-detail {
    padding: 0;
  }

  .investment-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin: 20px 20px 40px 20px;
  }

  .investment-images {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .investment-name {
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 12px;
    color: #212529;
  }

  .investment-address {
    font-size: 16px;
    color: #6c757d;
    margin-bottom: 24px;
  }

  .investment-summary {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 24px;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #dee2e6;
  }

  .summary-item:last-child {
    border-bottom: none;
  }

  .summary-item .label {
    font-size: 14px;
    color: #6c757d;
    font-weight: 500;
  }

  .summary-item .value {
    font-size: 18px;
    font-weight: 600;
    color: #212529;
  }

  .summary-item .value.highlight {
    font-size: 22px;
    color: #007bff;
  }

  .summary-item .value.highlight.green {
    color: #28a745;
  }

  .investment-financials {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 24px;
  }

  .investment-financials h3 {
    font-size: 18px;
    margin: 0 0 16px;
    color: #212529;
  }

  .financial-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .financial-item:last-child {
    border-bottom: none;
  }

  .financial-item .label {
    font-size: 14px;
    color: #6c757d;
  }

  .financial-item .value {
    font-size: 14px;
    font-weight: 600;
    color: #212529;
  }

  .investment-actions {
    display: flex;
    gap: 12px;
  }

  .btn-document {
    flex: 1;
    padding: 14px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-document:hover {
    background: #0056b3;
  }

  /* LTV Visualization */
  .ltv-visualization {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 24px;
    margin: 0 20px 40px 20px;
  }

  .ltv-visualization h3 {
    font-size: 20px;
    margin: 0 0 20px;
    color: #212529;
  }

  .ltv-bar {
    display: flex;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .ltv-segment {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s;
  }

  .ltv-segment:hover {
    filter: brightness(1.1);
  }

  .ltv-legend {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .legend-color {
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }

  .legend-label {
    font-size: 14px;
    color: #495057;
  }

  /* Investment Tabs */
  .investment-tabs {
    border-top: 1px solid #e0e0e0;
    padding: 20px 20px 0 20px;
  }

  /* Payments Tab */
  .payments-content {
    padding: 20px 0;
  }

  .payments-summary {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }

  .summary-card {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
  }

  .summary-label {
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 8px;
  }

  .summary-value {
    font-size: 28px;
    font-weight: 700;
    color: #28a745;
  }

  .payments-table {
    width: 100%;
    border-collapse: collapse;
  }

  .payments-table th,
  .payments-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  .payments-table th {
    background: #f8f9fa;
    font-weight: 600;
    color: #495057;
  }

  .payment-status {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
  }

  .payment-status.paid {
    background: #d4edda;
    color: #155724;
  }

  .payment-status.pending {
    background: #fff3cd;
    color: #856404;
  }

  .no-payments {
    text-align: center;
    padding: 60px 20px;
    color: #6c757d;
    font-size: 16px;
  }

  /* Login Page */
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    padding: 40px 20px;
  }

  .login-box {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 100%;
    max-width: 400px;
  }

  .login-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .login-header h1 {
    font-size: 32px;
    margin: 0 0 8px;
    color: #212529;
  }

  .login-header p {
    font-size: 14px;
    color: #6c757d;
    margin: 0;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group label {
    font-size: 14px;
    font-weight: 600;
    color: #495057;
  }

  .form-group input {
    padding: 12px 16px;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.2s;
  }

  .form-group input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  .login-error {
    padding: 12px;
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: 6px;
    font-size: 14px;
    text-align: center;
  }

  .btn-login {
    padding: 14px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-login:hover {
    background: #0056b3;
  }

  .btn-login:active {
    background: #004085;
  }

  .login-footer {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #dee2e6;
    text-align: center;
  }

  .login-footer p {
    font-size: 12px;
    color: #6c757d;
    margin: 0;
  }

  /* Product Detail */
  .product-detail {
    padding: 20px;
  }

  .back-button {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    color: #495057;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .back-button:hover {
    background: #e9ecef;
  }

  .product-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }

  /* \uC0C1\uD488 \uC774\uBBF8\uC9C0 */
  .product-images {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .main-image img {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  }

  .thumbnail-images {
    display: flex;
    gap: 8px;
  }

  .thumbnail {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: border-color 0.2s;
  }

  .thumbnail:hover {
    border-color: #007bff;
  }

  .thumbnail.active {
    border-color: #007bff;
  }

  /* \uC0C1\uD488 \uC815\uBCF4 */
  .product-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .product-category {
    color: #6c757d;
    font-size: 13px;
  }

  .product-name {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    color: #212529;
  }

  .product-rating {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .product-rating .stars {
    color: #ffc107;
    font-size: 16px;
  }

  .product-rating .rating-text {
    color: #6c757d;
    font-size: 14px;
  }

  .product-price-section {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .original-price {
    color: #6c757d;
    text-decoration: line-through;
    font-size: 16px;
  }

  .discount-badge {
    background: #dc3545;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
  }

  .current-price {
    font-size: 28px;
    font-weight: 700;
    color: #212529;
  }

  .product-delivery {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background: #f8f9fa;
    border-radius: 4px;
  }

  .delivery-item {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .delivery-item .label {
    color: #6c757d;
    font-weight: 500;
  }

  .delivery-item .value {
    color: #212529;
  }

  .delivery-item .in-stock {
    color: #28a745;
    font-weight: 600;
  }

  .delivery-item .out-stock {
    color: #dc3545;
    font-weight: 600;
  }

  .product-quantity {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .product-quantity label {
    font-weight: 500;
    color: #495057;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    overflow: hidden;
  }

  .qty-btn {
    width: 36px;
    height: 36px;
    border: none;
    background: #f8f9fa;
    cursor: pointer;
    font-size: 18px;
    color: #495057;
  }

  .qty-btn:hover {
    background: #e9ecef;
  }

  .qty-input {
    width: 60px;
    height: 36px;
    border: none;
    text-align: center;
    font-size: 14px;
    border-left: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
  }

  .qty-input:focus {
    outline: none;
  }

  .product-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #f8f9fa;
    border-radius: 4px;
  }

  .product-total .label {
    font-size: 16px;
    font-weight: 500;
    color: #495057;
  }

  .product-total .total-price {
    font-size: 24px;
    font-weight: 700;
    color: #dc3545;
  }

  .product-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .btn-cart,
  .btn-buy {
    padding: 14px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-cart {
    background: white;
    color: #007bff;
    border: 2px solid #007bff;
  }

  .btn-cart:hover {
    background: #007bff;
    color: white;
  }

  .btn-buy {
    background: #007bff;
    color: white;
  }

  .btn-buy:hover {
    background: #0056b3;
  }

  /* \uD0ED \uBA54\uB274 */
  .product-tabs {
    border-top: 1px solid #e0e0e0;
    padding-top: 20px;
  }

  .tab-buttons {
    display: flex;
    gap: 8px;
    border-bottom: 2px solid #e0e0e0;
    margin-bottom: 20px;
  }

  .tab-button {
    padding: 12px 24px;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: #6c757d;
    transition: all 0.2s;
  }

  .tab-button:hover {
    color: #007bff;
  }

  .tab-button.active {
    color: #007bff;
    border-bottom-color: #007bff;
  }

  .tab-panel {
    display: none;
  }

  .tab-panel.active {
    display: block;
  }

  /* \uC0C1\uC138 \uC815\uBCF4 \uD0ED */
  .detail-content {
    padding: 20px 0;
    line-height: 1.8;
  }

  .detail-content h3 {
    font-size: 20px;
    margin: 24px 0 12px;
    color: #212529;
  }

  .detail-content h4 {
    font-size: 16px;
    margin: 20px 0 12px;
    color: #495057;
  }

  .detail-content p {
    color: #6c757d;
    margin-bottom: 16px;
  }

  .detail-content ul {
    margin-left: 20px;
    color: #495057;
  }

  .detail-content li {
    margin-bottom: 8px;
  }

  .specs-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 12px;
  }

  .specs-table th,
  .specs-table td {
    padding: 12px;
    border: 1px solid #e0e0e0;
    text-align: left;
  }

  .specs-table th {
    background: #f8f9fa;
    font-weight: 600;
    color: #495057;
    width: 30%;
  }

  .specs-table td {
    color: #6c757d;
  }

  /* \uD6C4\uAE30 \uD0ED */
  .reviews-content {
    padding: 20px;
  }

  .reviews-summary {
    background: #f8f9fa;
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  .summary-rating {
    text-align: center;
  }

  .summary-rating .big-rating {
    font-size: 48px;
    font-weight: 700;
    color: #212529;
    margin-bottom: 8px;
  }

  .summary-rating .stars {
    color: #ffc107;
    font-size: 24px;
    margin-bottom: 8px;
  }

  .summary-rating .review-count {
    color: #6c757d;
    font-size: 14px;
  }

  .reviews-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .review-item {
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  }

  .review-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .review-author {
    font-weight: 600;
    color: #495057;
  }

  .review-rating {
    color: #ffc107;
    font-size: 14px;
  }

  .review-date {
    color: #6c757d;
    font-size: 13px;
    margin-left: auto;
  }

  .review-content {
    color: #495057;
    line-height: 1.6;
  }

  .no-reviews {
    text-align: center;
    padding: 60px 20px;
    color: #6c757d;
    font-size: 16px;
  }

  /* \uBC18\uC751\uD615 */
  @media (max-width: 768px) {
    .product-top {
      grid-template-columns: 1fr;
    }

    .product-actions {
      grid-template-columns: 1fr;
    }
  }
`;var $="https://abcbond-api.damp-hall-9ea0.workers.dev";function E(){try{let o=localStorage.getItem("widget-state");if(o)return JSON.parse(o).user?.token}catch(o){console.error("Failed to get auth token:",o)}return null}async function w(o,t={}){try{let e=E(),n={"Content-Type":"application/json",...t.headers};e&&(n.Authorization=`Bearer ${e}`);let i=await fetch(`${$}${o}`,{...t,headers:n});if(!i.ok)throw i.status===401?(localStorage.removeItem("widget-state"),window.location.hash="#/login",new Error("Unauthorized - redirecting to login")):new Error(`HTTP error! status: ${i.status}`);return await i.json()}catch(e){throw console.error("API call failed:",e),e}}async function S(o,t){try{let e=await w("/auth/login",{method:"POST",body:JSON.stringify({username:o,password:t})});return e&&e.token?{id:e.user.id,username:e.user.username,email:e.user.email,name:e.user.name,token:e.token}:null}catch(e){return console.error("Login failed:",e),null}}async function C(){let o=await w("/investments");return o&&Array.isArray(o.data)?o.data:o&&Array.isArray(o.investments)?o.investments:Array.isArray(o)?o:(console.warn("Invalid investments response format:",o),[])}async function z(o){let t=await w(`/investments/${o}`);return t&&t.data?t.data:t&&t.investment?t.investment:t}function a(o,t={}){let e=document.createElement(o);return Object.keys(t).forEach(n=>{n==="className"?e.className=t[n]:n==="innerHTML"?e.innerHTML=t[n]:n==="style"&&typeof t[n]=="object"?Object.assign(e.style,t[n]):n==="dataset"?Object.keys(t[n]).forEach(i=>{e.dataset[i]=t[n][i]}):e.setAttribute(n,t[n])}),e}var c=class{constructor(t={}){this.props=t,this.investments=[],this.onInvestmentClick=t.onInvestmentClick||(()=>{}),this.onLogout=t.onLogout||(()=>{}),this.state=t.state}async loadInvestments(){try{return this.investments=await C(),this.investments}catch(t){throw console.error("Failed to load investments:",t),t}}render(){let t=a("div",{className:"investment-list-container"}),e=this.renderHeader();t.appendChild(e);let n=a("div",{className:"investment-list-wrapper"});return t.appendChild(n),this.loadInvestments().then(()=>{n.innerHTML="";let i=this.renderInvestmentList();n.appendChild(i)}).catch(i=>{n.innerHTML="";let r=a("div",{className:"widget-error",innerHTML:`Failed to load investments: ${i.message}`});n.appendChild(r)}),t}renderHeader(){let t=a("div",{className:"investment-header"}),e=this.state?this.state.getCurrentUser():null;return t.innerHTML=`
      <h2 class="investment-header-title">\u{1F4BC} \uB0B4 \uD22C\uC790 \uD604\uD669</h2>
      <div class="investment-header-user">
        <span class="user-name">${e?e.name:"\uC0AC\uC6A9\uC790"}\uB2D8</span>
        <button class="btn-logout" id="logout-btn">\uB85C\uADF8\uC544\uC6C3</button>
      </div>
    `,t.querySelector("#logout-btn").addEventListener("click",()=>{this.onLogout()}),t}renderInvestmentList(){let t=a("div",{className:"investment-list"});return this.investments.forEach(e=>{let n=this.renderInvestmentCard(e);t.appendChild(n)}),t}renderInvestmentCard(t){let e=a("div",{className:"investment-card"}),n=t.investedAmount||0,i=t.expectedReturnRate||0;return e.innerHTML=`
      <img src="${t.image||""}" alt="${t.name||""}">
      <h3 class="investment-title">${t.name||""}</h3>
      <p class="investment-location">${t.location||""}</p>
      <p class="investment-amount">\uD22C\uC790\uAE08\uC561: ${n.toLocaleString()}\uC6D0</p>
      <p class="investment-return-rate">\uC608\uC0C1 \uC218\uC775\uB960: ${i}%</p>
    `,e.addEventListener("click",()=>{this.onInvestmentClick(t)}),e}};var p=class{constructor(t={}){this.props=t,this.investmentId=t.investmentId,this.investment=null,this.onBack=t.onBack||(()=>{}),this.onLogout=t.onLogout||(()=>{}),this.currentTab="detail",this.state=t.state}async loadInvestment(){try{return this.investment=await z(this.investmentId),this.investment}catch(t){throw console.error("Failed to load investment detail:",t),t}}render(){let t=a("div",{className:"investment-detail-container"});return this.loadInvestment().then(()=>{t.innerHTML="";let e=this.renderInvestmentDetail();t.appendChild(e)}).catch(e=>{t.innerHTML="";let n=a("div",{className:"widget-error",innerHTML:`\uD22C\uC790 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4: ${e.message}`});t.appendChild(n)}),t}renderInvestmentDetail(){let t=a("div",{className:"investment-detail"}),e=this.state?this.state.getCurrentUser():null,n=this.investment||{},i=n.investedAmount||0,r=n.expectedReturnRate||0,s=n.monthlyInterest||0,d=n.kbValue||0,u=n.seniorLoan||0,l=n.ltv||0,I=n.loanStructure||[];return t.innerHTML=`
      <!-- \uD5E4\uB354 -->
      <div class="investment-header">
        <h2 class="investment-header-title">\u{1F4BC} \uB0B4 \uD22C\uC790 \uD604\uD669</h2>
        <div class="investment-header-user">
          <span class="user-name">${e?e.name:"\uC0AC\uC6A9\uC790"}\uB2D8</span>
          <button class="btn-logout" id="logout-btn">\uB85C\uADF8\uC544\uC6C3</button>
        </div>
      </div>

      <!-- \uC0C1\uB2E8: \uC774\uBBF8\uC9C0 + \uD22C\uC790 \uC815\uBCF4 -->
      <div class="investment-top">
        <!-- \uC67C\uCABD: \uC544\uD30C\uD2B8 \uC774\uBBF8\uC9C0 -->
        <div class="investment-images">
          <div class="main-image">
            <img src="${n.image||""}" alt="${n.name||""}" id="main-image">
          </div>
          <div class="thumbnail-images">
            ${n.images?n.images.map((h,y)=>`
              <img src="${h}" alt="\uC544\uD30C\uD2B8 \uC774\uBBF8\uC9C0 ${y+1}" class="thumbnail ${y===0?"active":""}" data-index="${y}">
            `).join(""):""}
          </div>
        </div>

        <!-- \uC624\uB978\uCABD: \uD22C\uC790 \uAE30\uBCF8 \uC815\uBCF4 -->
        <div class="investment-info">
          <h1 class="investment-name">${n.name||""}</h1>
          <div class="investment-address">${n.address||n.location||""}</div>

          <div class="investment-summary">
            <div class="summary-item">
              <span class="label">\uD22C\uC790\uAE08\uC561</span>
              <span class="value highlight">${i.toLocaleString()}\uC6D0</span>
            </div>
            <div class="summary-item">
              <span class="label">\uC608\uC0C1 \uC218\uC775\uB960</span>
              <span class="value highlight green">${r}%</span>
            </div>
            <div class="summary-item">
              <span class="label">\uC6D4 \uC608\uC0C1 \uC774\uC790</span>
              <span class="value">${s.toLocaleString()}\uC6D0</span>
            </div>
          </div>

          <div class="investment-financials">
            <h3>\uC7AC\uBB34 \uC815\uBCF4</h3>
            <div class="financial-item">
              <span class="label">\uACF5\uC2DC\uC9C0\uAC00 (KB\uC2DC\uC138)</span>
              <span class="value">${d.toLocaleString()}\uC6D0</span>
            </div>
            <div class="financial-item">
              <span class="label">\uC120\uC21C\uC704 \uB300\uCD9C\uAE08</span>
              <span class="value">${u.toLocaleString()}\uC6D0</span>
            </div>
            <div class="financial-item">
              <span class="label">LTV</span>
              <span class="value">${l}%</span>
            </div>
          </div>

          <div class="investment-actions">
            <button class="btn-document" id="view-document-btn">\u{1F4C4} \uB4F1\uAE30\uBD80\uB4F1\uBCF8 \uBCF4\uAE30</button>
          </div>
        </div>
      </div>

      <!-- LTV \uC2DC\uAC01\uD654 -->
      <div class="ltv-visualization">
        <h3>\uB300\uCD9C \uAD6C\uC870</h3>
        <div class="ltv-bar">
          ${this.renderLoanStructure()}
        </div>
        <div class="ltv-legend">
          ${I.map(h=>`
            <div class="legend-item">
              <span class="legend-color" style="background: ${this.getLoanColor(h.priority)}"></span>
              <span class="legend-label">${h.priority}: ${(h.amount||0).toLocaleString()}\uC6D0 (${h.percentage||0}%)</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- \uD558\uB2E8: \uD0ED \uBA54\uB274 -->
      <div class="investment-tabs">
        <div class="tab-buttons">
          <button class="tab-button active" data-tab="detail">\uC0C1\uC138\uC815\uBCF4</button>
          <button class="tab-button" data-tab="payments">\uC774\uC790 \uC9C0\uAE09 \uB0B4\uC5ED</button>
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
    `,this.attachEventListeners(t),t}getLoanColor(t){return{"\uC120\uC21C\uC704 \uB300\uCD9C":"#dc3545","\uD6C4\uC21C\uC704 \uB300\uCD9C":"#ffc107","\uB098\uC758 \uD22C\uC790":"#28a745"}[t]||"#6c757d"}renderLoanStructure(){return(this.investment?.loanStructure||[]).map(e=>`
      <div class="ltv-segment" style="width: ${e.percentage||0}%; background: ${this.getLoanColor(e.priority)}">
        <span class="segment-label">${e.percentage||0}%</span>
      </div>
    `).join("")}renderDetailTab(){let t=this.investment||{},e=t.details||{},n=t.investmentInfo||{};return`
      <div class="detail-content">
        <h3>\uC0C1\uC138 \uC124\uBA85</h3>
        <p>${t.description||"\uC0C1\uC138 \uC124\uBA85\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."}</p>

        <h4>\uB9E4\uBB3C \uC815\uBCF4</h4>
        <table class="specs-table">
          ${Object.entries(e).map(([i,r])=>`
            <tr>
              <th>${i}</th>
              <td>${r||"-"}</td>
            </tr>
          `).join("")||'<tr><td colspan="2">\uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</td></tr>'}
        </table>

        <h4>\uD22C\uC790 \uC815\uBCF4</h4>
        <table class="specs-table">
          ${Object.entries(n).map(([i,r])=>`
            <tr>
              <th>${i}</th>
              <td>${r||"-"}</td>
            </tr>
          `).join("")||'<tr><td colspan="2">\uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</td></tr>'}
        </table>
      </div>
    `}renderPaymentsTab(){let t=this.investment?.monthlyPayments||[];return t.length===0?'<div class="no-payments">\uC774\uC790 \uC9C0\uAE09 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>':`
      <div class="payments-content">
        <div class="payments-summary">
          <div class="summary-card">
            <div class="summary-label">\uB204\uC801 \uC218\uB839\uC561</div>
            <div class="summary-value">${this.calculateTotalPayments().toLocaleString()}\uC6D0</div>
          </div>
          <div class="summary-card">
            <div class="summary-label">\uC9C0\uAE09 \uD69F\uC218</div>
            <div class="summary-value">${t.length}\uD68C</div>
          </div>
        </div>

        <div class="payments-list">
          <table class="payments-table">
            <thead>
              <tr>
                <th>\uC9C0\uAE09\uC6D4</th>
                <th>\uC9C0\uAE09\uC561</th>
                <th>\uC9C0\uAE09\uC77C</th>
                <th>\uC0C1\uD0DC</th>
              </tr>
            </thead>
            <tbody>
              ${t.map(e=>`
                <tr>
                  <td>${e.month||"-"}</td>
                  <td>${(e.amount||0).toLocaleString()}\uC6D0</td>
                  <td>${e.date||"-"}</td>
                  <td>
                    <span class="payment-status ${e.paid?"paid":"pending"}">
                      ${e.paid?"\u2713 \uC9C0\uAE09\uC644\uB8CC":"\uB300\uAE30\uC911"}
                    </span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}calculateTotalPayments(){return(this.investment?.monthlyPayments||[]).filter(e=>e.paid).reduce((e,n)=>e+(n.amount||0),0)}attachEventListeners(t){t.querySelector("#logout-btn").addEventListener("click",()=>{this.onLogout()});let e=t.querySelectorAll(".thumbnail"),n=t.querySelector("#main-image"),i=this.investment?.images||[];e.forEach((d,u)=>{d.addEventListener("click",()=>{e.forEach(l=>l.classList.remove("active")),d.classList.add("active"),i[u]&&(n.src=i[u])})}),t.querySelector("#view-document-btn").addEventListener("click",()=>{let d=this.investment?.registrationDocument;d&&window.open(d,"_blank")});let r=t.querySelectorAll(".tab-button"),s=t.querySelectorAll(".tab-panel");r.forEach(d=>{d.addEventListener("click",()=>{let u=d.dataset.tab;r.forEach(l=>l.classList.remove("active")),s.forEach(l=>l.classList.remove("active")),d.classList.add("active"),t.querySelector(`#tab-${u}`).classList.add("active")})})}};var m=class{constructor(t={}){this.props=t,this.onLogin=t.onLogin||(()=>{}),this.state=t.state}render(){let t=a("div",{className:"login-container"});return t.innerHTML=`
      <div class="login-box">
        <div class="login-header">
          <h1>\u{1F3E2} ABC Bond</h1>
          <p>\uB098\uC758 \uC544\uD30C\uD2B8 \uD22C\uC790 \uD3EC\uD2B8\uD3F4\uB9AC\uC624</p>
        </div>

        <form class="login-form" id="login-form">
          <div class="form-group">
            <label for="username">\uC544\uC774\uB514</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694"
              required
              autocomplete="username"
            >
          </div>

          <div class="form-group">
            <label for="password">\uBE44\uBC00\uBC88\uD638</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"
              required
              autocomplete="current-password"
            >
          </div>

          <div class="login-error" id="login-error" style="display: none;"></div>

          <button type="submit" class="btn-login">\uB85C\uADF8\uC778</button>
        </form>

        <div class="login-footer">
          <p>\uB370\uBAA8 \uACC4\uC815: user1 / password1</p>
        </div>
      </div>
    `,this.attachEventListeners(t),t}attachEventListeners(t){let e=t.querySelector("#login-form"),n=t.querySelector("#login-error");e.addEventListener("submit",async i=>{i.preventDefault();let r=e.username.value.trim(),s=e.password.value;if(!r||!s){this.showError(n,"\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");return}try{await this.onLogin(r,s)||this.showError(n,"\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}catch(d){this.showError(n,"\uB85C\uADF8\uC778 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),console.error("Login error:",d)}})}showError(t,e){t.textContent=e,t.style.display="block",setTimeout(()=>{t.style.display="none"},3e3)}};var g=class{constructor(t={}){this.routes=t,this.currentRoute=null,this.currentPath=null,this.pathParams={},this.isNavigating=!1,this.loadingTimeout=null,this.beforeNavigate=null,this.handlePopState=this.handlePopState.bind(this),window.addEventListener("popstate",this.handlePopState),this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange)}addRoute(t,e){this.routes[t]=e}addRoutes(t){this.routes={...this.routes,...t}}getHash(){return window.location.hash.slice(1)||"/"}extractParams(t,e){let n=t.split("/"),i=e.split("/");if(n.length!==i.length)return null;let r={};for(let s=0;s<n.length;s++)if(n[s].startsWith(":")){let d=n[s].slice(1);r[d]=decodeURIComponent(i[s])}else if(n[s]!==i[s])return null;return r}matchRoute(t){if(this.routes[t])return{handler:this.routes[t],params:{}};for(let e in this.routes){if(e==="*")continue;let n=this.extractParams(e,t);if(n!==null)return{handler:this.routes[e],params:n}}return this.routes["*"]?{handler:this.routes["*"],params:{}}:null}async handleRoute(){if(this.isNavigating)return;let t=this.getHash(),e=this.matchRoute(t);if(!e){console.warn("No route handler found for:",t);return}this.isNavigating=!0;try{this.loadingTimeout=setTimeout(()=>{this.showLoadingIndicator()},1e3),this.beforeNavigate&&await this.beforeNavigate(t,e.params),clearTimeout(this.loadingTimeout),this.hideLoadingIndicator(),this.currentRoute=t,this.currentPath=t,this.pathParams=e.params,e.handler(e.params)}catch(n){console.error("Route handling error:",n),clearTimeout(this.loadingTimeout),this.hideLoadingIndicator()}finally{this.isNavigating=!1}}handlePopState(){this.handleRoute()}handleHashChange(){this.handleRoute()}showLoadingIndicator(){if(document.querySelector(".router-loading-indicator"))return;let e=document.createElement("div");e.className="router-loading-indicator",e.innerHTML='<div class="spinner"></div>',document.body.appendChild(e)}hideLoadingIndicator(){let t=document.querySelector(".router-loading-indicator");t&&t.remove()}setBeforeNavigate(t){this.beforeNavigate=t}navigate(t,e={}){window.history.pushState(e,"",`#${t}`),this.handleRoute()}redirect(t,e={}){window.history.replaceState(e,"",`#${t}`),this.handleRoute()}back(){window.history.back()}forward(){window.history.forward()}getCurrentRoute(){return{fullPath:this.currentRoute,path:this.currentPath,params:this.pathParams,hash:this.getHash()}}getParam(t){return t?this.pathParams[t]:{...this.pathParams}}isRoute(t){return this.currentPath===t}destroy(){window.removeEventListener("popstate",this.handlePopState),window.removeEventListener("hashchange",this.handleHashChange)}init(){this.handleRoute()}};var f=class{constructor(){this.state={cart:[],user:null,currentView:null,currentProduct:null},this.listeners=new Map}getState(t){return t?this.state[t]:{...this.state}}setState(t){let e={...this.state};this.state={...this.state,...t},Object.keys(t).forEach(n=>{this.notify(n,this.state[n],e[n])}),this.notify("*",this.state,e)}subscribe(t,e){return this.listeners.has(t)||this.listeners.set(t,[]),this.listeners.get(t).push(e),()=>{let n=this.listeners.get(t),i=n.indexOf(e);i>-1&&n.splice(i,1)}}notify(t,e,n){(this.listeners.get(t)||[]).forEach(r=>{r(e,n)})}addToCart(t,e=1){let n=[...this.state.cart],i=n.findIndex(r=>r.id===t.id);return i>-1?n[i].quantity+=e:n.push({...t,quantity:e,addedAt:new Date().toISOString()}),this.setState({cart:n}),n}removeFromCart(t){let e=this.state.cart.filter(n=>n.id!==t);return this.setState({cart:e}),e}updateCartQuantity(t,e){let n=this.state.cart.map(i=>i.id===t?{...i,quantity:e}:i);return this.setState({cart:n}),n}clearCart(){this.setState({cart:[]})}getCartTotal(){return this.state.cart.reduce((t,e)=>t+e.price*e.quantity,0)}getCartItemCount(){return this.state.cart.reduce((t,e)=>t+e.quantity,0)}setUser(t){this.setState({user:t})}logout(){this.setState({user:null,cart:[]}),this.saveToStorage()}isAuthenticated(){return this.state.user!==null}getCurrentUser(){return this.state.user}setCurrentView(t){this.setState({currentView:t})}setCurrentProduct(t){this.setState({currentProduct:t})}reset(){this.state={cart:[],user:null,currentView:null,currentProduct:null},this.notify("*",this.state,{})}saveToStorage(){try{localStorage.setItem("widget-state",JSON.stringify({cart:this.state.cart,user:this.state.user}))}catch(t){console.warn("Failed to save state to localStorage:",t)}}loadFromStorage(){try{let t=localStorage.getItem("widget-state");if(t){let e=JSON.parse(t);this.setState({cart:e.cart||[],user:e.user||null})}}catch(t){console.warn("Failed to load state from localStorage:",t)}}},L=null;function b(){return L||(L=new f),L}var x=class{constructor(t,e={}){this.container=t||"#widget-root",this.config=e,this.currentView=null,this.state=b(),this.router=new g,this.setupRoutes(),this.init()}setupRoutes(){this.router.addRoutes({"/":()=>this.checkAuthAndShow(()=>this.showInvestmentList()),"/investment/:id":t=>this.checkAuthAndShow(()=>this.showInvestmentDetail(t)),"/login":()=>this.showLogin(),"*":()=>this.checkAuthAndShow(()=>this.showInvestmentList())})}checkAuthAndShow(t){this.state.isAuthenticated()?t():this.router.navigate("/login")}init(){if(console.log("Widget initialized with config:",this.config),!this.getContainer()){console.error("Container not found:",this.container);return}this.config.persistState&&this.state.loadFromStorage(),this.config.persistState&&this.state.subscribe("cart",()=>{this.state.saveToStorage()}),this.router.setBeforeNavigate(async(n,i)=>{await this.preloadPage(n,i)});let e=window.location.hash.slice(1)||"/";!this.state.isAuthenticated()&&e!=="/login"&&(window.location.hash="#/login"),this.router.init()}async preloadPage(t,e){if(t==="/")await new c({state:this.state}).loadInvestments();else if(t.startsWith("/investment/")){let n=parseInt(e.id);n&&await new p({investmentId:n,state:this.state}).loadInvestment()}}getContainer(){return typeof this.container=="string"?document.querySelector(this.container):this.container}showInvestmentList(){let t=this.getContainer();if(!t)return;this.state.setCurrentView("list");let n=new c({state:this.state,onInvestmentClick:i=>{this.router.navigate(`/investment/${i.id}`)},onLogout:()=>{this.handleLogout()}}).render();this.transitionToPage(t,n)}handleLogout(){this.state.logout(),this.router.navigate("/login")}showInvestmentDetail(t){let e=this.getContainer();if(!e)return;let n=parseInt(t.id);if(!n){console.error("Investment ID is required"),this.router.navigate("/");return}this.state.setCurrentView("detail");let r=new p({investmentId:n,state:this.state,onBack:()=>{this.router.back()},onLogout:()=>{this.handleLogout()}}).render();this.transitionToPage(e,r)}showLogin(){let t=this.getContainer();if(!t)return;this.state.setCurrentView("login");let n=new m({state:this.state,onLogin:async(i,r)=>{try{let s=await S(i,r);return s?(this.state.setUser(s),this.state.saveToStorage(),this.router.navigate("/"),!0):!1}catch(s){return console.error("Login error:",s),!1}}}).render();this.transitionToPage(t,n)}transitionToPage(t,e){let n=t.firstElementChild;e.style.opacity="0",e.style.transition="opacity 0.05s ease-in-out",n?(n.style.transition="opacity 0.05s ease-in-out",n.style.opacity="0",setTimeout(()=>{t.innerHTML="",t.appendChild(e),setTimeout(()=>{e.style.opacity="1"},10)},50)):(t.appendChild(e),setTimeout(()=>{e.style.opacity="1"},10))}getCurrentRoute(){return this.router.getCurrentRoute()}navigate(t,e={}){this.router.navigate(t,e)}getState(t){return this.state.getState(t)}destroy(){this.router.destroy(),this.config.resetOnDestroy&&this.state.reset();let t=this.getContainer();t&&(t.innerHTML=""),this.currentView=null}};var v=class o{constructor(t={}){this.props=t,this.title=t.title||"",this.content=t.content||"",this.onClose=t.onClose||(()=>{}),this.overlay=null}render(){this.overlay=a("div",{className:"widget-modal-overlay"});let t=a("div",{className:"widget-modal"}),e=a("button",{className:"widget-modal-close",innerHTML:"\xD7"});e.addEventListener("click",()=>this.close());let n=a("h2",{innerHTML:this.title,style:"margin-top: 0;"}),i=a("div",{className:"widget-modal-content"});return typeof this.content=="string"?i.innerHTML=this.content:i.appendChild(this.content),t.appendChild(e),this.title&&t.appendChild(n),t.appendChild(i),this.overlay.appendChild(t),this.overlay.addEventListener("click",r=>{r.target===this.overlay&&this.close()}),this.handleEscKey=r=>{r.key==="Escape"&&this.close()},document.addEventListener("keydown",this.handleEscKey),this.overlay}open(){let t=this.render();document.body.appendChild(t)}close(){this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay),document.removeEventListener("keydown",this.handleEscKey),this.onClose()}static show(t){let e=new o(t);return e.open(),e}};function P(){let o="pages-template-styles";if(document.getElementById(o))return;let t=document.createElement("style");t.id=o,t.textContent=k,document.head.appendChild(t)}typeof window<"u"&&(P(),window.PagesTemplate={Widget:x,Router:g,State:f,getState:b,components:{IndexPage:c,InvestmentPage:p,LoginPage:m,Modal:v}},window.Widget=x,console.log("Pages Template loaded."));export{c as IndexPage,p as InvestmentPage,m as LoginPage,v as Modal,g as Router,f as State,x as Widget,b as getState};
//# sourceMappingURL=abcbond-widget.esm.js.map
