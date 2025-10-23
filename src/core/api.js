// API 호출 로직

const API_BASE_URL = 'https://abcbond-api.damp-hall-9ea0.workers.dev';

/**
 * Get stored auth token
 */
function getAuthToken() {
  try {
    const state = localStorage.getItem('widget-state');
    if (state) {
      const data = JSON.parse(state);
      return data.user?.token;
    }
  } catch (error) {
    console.error('Failed to get auth token:', error);
  }
  return null;
}

/**
 * Fetch wrapper for API calls
 * @param {string} endpoint - API endpoint path
 * @param {object} options - Fetch options
 * @returns {Promise<any>} API response data
 */
export async function fetchAPI(endpoint, options = {}) {
  try {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Add Authorization header if token exists
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      // 401 Unauthorized - 로그인 페이지로 리다이렉트
      if (response.status === 401) {
        // Clear user state
        localStorage.removeItem('widget-state');
        // Redirect to login page
        window.location.hash = '#/login';
        throw new Error('Unauthorized - redirecting to login');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

/**
 * Login - authenticate user
 */
export async function login(username, password) {
  try {
    const response = await fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (response && response.token) {
      // Return user data with token
      return {
        id: response.user.id,
        username: response.user.username,
        email: response.user.email,
        name: response.user.name,
        token: response.token,
      };
    }

    return null;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
}

/**
 * Get invested apartments
 */
export async function getInvestments() {
  const response = await fetchAPI('/investments');
  // API 응답이 { data: [...] } 형태인 경우
  if (response && Array.isArray(response.data)) {
    return response.data;
  }
  // API 응답이 { investments: [...] } 형태인 경우
  if (response && Array.isArray(response.investments)) {
    return response.investments;
  }
  // 이미 배열인 경우 그대로 반환
  if (Array.isArray(response)) {
    return response;
  }
  // 데이터가 없거나 잘못된 형식인 경우 빈 배열 반환
  console.warn('Invalid investments response format:', response);
  return [];
}

/**
 * Get investment detail
 */
export async function getInvestmentDetail(investmentId) {
  const response = await fetchAPI(`/investments/${investmentId}`);
  // API 응답이 { data: {...} } 형태인 경우
  if (response && response.data) {
    return response.data;
  }
  // API 응답이 { investment: {...} } 형태인 경우
  if (response && response.investment) {
    return response.investment;
  }
  return response;
}
