/* TrendRadar AI - Complete Application Logic */

(function () {
  'use strict';

  // --- SVG Icons Map ---
  const ICONS = {
    trendingUp: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>`,
    gauge: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>`,
    settings: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    packageSearch: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line><circle cx="18.5" cy="15.5" r="2.5"></circle><path d="M20.27 17.27 22 19"></path></svg>`,
    box: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>`,
    store: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path></svg>`,
    usersRound: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>`,
    shieldCheck: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>`,
    activity: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>`,
    sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>`,
    megaphone: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>`,
    tags: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="6.5" cy="9.5" r=".5" fill="currentColor"></circle></svg>`,
    calendarDays: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>`,
    send: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>`,
    fileText: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>`,
    bookOpen: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>`,
    circleHelp: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>`,
    chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>`,
    clock3: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16.5 12"></polyline></svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>`,
    bell: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>`,
    search: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>`,
    play: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>`,
    eye: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    x: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`,
    target: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
    zap: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>`,
    grid2x2: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"></path><path d="M3 12h18"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>`,
    ellipsisVertical: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`
  };

  function shopeeLogo() {
    return `<span class="platform-logo" title="Shopee"><svg viewBox="0 0 32 32" width="24" height="24" fill="none"><rect width="32" height="32" rx="7" fill="#ee4d2d"/><path d="M19.8 11.5c-.3-.2-.8-.4-1.4-.4h-4.8c-.5 0-.9.4-.9.9 0 .4.2.7.6.8l3.9 1.2c1.7.5 2.8 1.8 2.8 3.5 0 2.1-1.6 3.8-3.9 3.8h-4.6c-.6 0-1.2-.2-1.7-.5l.6-1.6c.3.2.7.4 1.2.4h4.5c.9 0 1.6-.7 1.6-1.6 0-.6-.3-1.1-.9-1.3l-3.9-1.2c-1.5-.5-2.5-1.7-2.5-3.2 0-2 1.6-3.6 3.7-3.6h4.5c.5 0 1 .1 1.4.3l-.6 1.7z" fill="#fff"/></svg></span>`;
  }

  // --- Formatting Helpers ---
  function formatNumber(n) {
    return Math.round(Number(n) || 0).toLocaleString('th-TH');
  }

  function formatCompactNumber(n) {
    const num = Number(n);
    if (!Number.isFinite(num) || num <= 0) return '0';
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return Math.round(num).toString();
  }

  function parsePrice(str) {
    const num = Number(String(str).replace(/[^\d.]/g, ''));
    return Number.isFinite(num) ? num : 0;
  }

  // --- Global Navigation Configuration ---
  const NAV_CONFIG = [
    {
      titleTH: 'ค้นหา',
      titleEN: 'Find',
      items: [
        { id: 'overview', icon: 'gauge', th: { label: 'ภาพรวมเรดาร์', sub: 'Overview' }, en: { label: 'Radar Overview', sub: 'Overview' } },
        { id: 'business-setup', icon: 'settings', th: { label: 'ตั้งค่าเรดาร์สินค้า', sub: 'Radar Setup' }, en: { label: 'Radar Setup', sub: 'Setup' } },
        { id: 'lead-finder', icon: 'packageSearch', th: { label: 'ค้นหาโอกาสสินค้า', sub: 'Product Finder' }, en: { label: 'Product Finder', sub: 'Find opportunities' } },
        { id: 'saved-products', icon: 'box', th: { label: 'สินค้าที่บันทึกไว้', sub: 'Saved Products' }, en: { label: 'Saved Products', sub: 'Pipeline' } },
        { id: 'competitor-finder', icon: 'store', th: { label: 'ตลาด / ร้าน / ครีเอเตอร์', sub: 'Market Density' }, en: { label: 'Market / Shops / Creators', sub: 'Market density' } },
        { id: 'signal-sources', icon: 'usersRound', th: { label: 'แหล่งสัญญาณ FB/IG', sub: 'Signal Sources' }, en: { label: 'FB/IG Signal Sources', sub: 'Social signals' } },
        { id: 'data-connections', icon: 'shieldCheck', th: { label: 'เชื่อมต่อข้อมูล', sub: 'Shopee + Meta' }, en: { label: 'Data Connections', sub: 'Shopee + Meta' } }
      ]
    },
    {
      titleTH: 'วิเคราะห์',
      titleEN: 'Analyze',
      items: [
        { id: 'content-tracker', icon: 'activity', th: { label: 'Content Tracker', sub: 'Selling content' }, en: { label: 'Content Tracker', sub: 'Selling content' } },
        { id: 'ai-insight', icon: 'sparkles', th: { label: 'AI Product Insight', sub: 'Product actions' }, en: { label: 'AI Product Insight', sub: 'Product actions' } },
        { id: 'ads-intelligence', icon: 'megaphone', th: { label: 'วิเคราะห์มุมแอด', sub: 'Ad angles' }, en: { label: 'Ads Angle Intelligence', sub: 'Ad angles' } }
      ]
    },
    {
      titleTH: 'วางแผน',
      titleEN: 'Plan',
      items: [
        { id: 'offer-builder', icon: 'tags', th: { label: 'สร้างข้อเสนอ', sub: 'Product offers' }, en: { label: 'Offer Builder', sub: 'Product offers' } },
        { id: 'content-planner', icon: 'calendarDays', th: { label: 'Affiliate Content Planner', sub: 'Content plan' }, en: { label: 'Affiliate Content Planner', sub: 'Content plan' } },
        { id: 'outreach-message', icon: 'send', th: { label: 'Outreach Message', sub: 'Shop / Creator / Supplier' }, en: { label: 'Outreach Message', sub: 'Shop / Creator / Supplier' } }
      ]
    },
    {
      titleTH: 'จัดการ',
      titleEN: 'Manage',
      items: [
        { id: 'reports', icon: 'fileText', th: { label: 'รายงาน', sub: 'Export reports' }, en: { label: 'Reports', sub: 'Export reports' } },
        { id: 'settings', icon: 'settings', th: { label: 'Settings', sub: 'System setup' }, en: { label: 'Settings', sub: 'System setup' } }
      ]
    },
    {
      titleTH: 'ช่วยเหลือ',
      titleEN: 'Help',
      items: [
        { id: 'installation-guide', icon: 'box', th: { label: 'Installation Guide', sub: 'Setup manual' }, en: { label: 'Installation Guide', sub: 'Setup manual' } },
        { id: 'user-manual', icon: 'bookOpen', th: { label: 'คู่มือใช้งาน', sub: 'How to use' }, en: { label: 'User Manual', sub: 'How to use' } },
        { id: 'pricing-license', icon: 'circleHelp', th: { label: 'Pricing / License', sub: 'Lifetime deal' }, en: { label: 'Pricing / License', sub: 'Lifetime deal' } }
      ]
    }
  ];

  const VIEW_HEADERS = {
    overview: {
      th: { title: 'ภาพรวมเรดาร์', subtitle: 'Shopee Feed + Meta Affiliate Radar', desc: 'สรุปสินค้า Shopee ที่น่าเอาไปทำ Facebook/IG Affiliate พร้อม score, content angle, ads angle และ next action', primary: 'Scan Shopee Feed', secondary: 'Upload CSV' },
      en: { title: 'Radar Overview', subtitle: 'Shopee Feed + Meta Affiliate Radar', desc: 'Summary of imported Shopee products, score, content angle, ad angle, and next action.', primary: 'Scan Shopee Feed', secondary: 'Upload CSV' }
    },
    'business-setup': {
      th: { title: 'ตั้งค่าเรดาร์สินค้า', subtitle: 'Radar Setup', desc: 'กำหนดหมวดสินค้า แหล่งข้อมูล คีย์เวิร์ด FB/IG และเป้าหมาย Affiliate เพื่อให้ AI สแกนได้ตรงตลาด', primary: 'Save and scan', secondary: 'Upload Shopee CSV' },
      en: { title: 'Radar Setup', subtitle: 'Product Radar Setup', desc: 'Set product categories, data sources, FB/IG keywords, and affiliate goals for better scoring.', primary: 'Save and scan', secondary: 'Upload Shopee CSV' }
    },
    'lead-finder': {
      th: { title: 'ค้นหาโอกาสสินค้า', subtitle: 'Product Finder', desc: 'คัดสินค้า Shopee จาก feed/CSV แล้วจัดอันดับด้วยยอดขาย ราคา rating commission engagement และ pain point', primary: 'สแกนสินค้า', secondary: 'นำเข้า Feed' },
      en: { title: 'Product Finder', subtitle: 'Product Opportunity Finder', desc: 'Rank imported Shopee products by sales, price, rating, commission, engagement, and pain point.', primary: 'Scan products', secondary: 'Import feed' }
    },
    'saved-products': {
      th: { title: 'สินค้าที่บันทึกไว้', subtitle: 'Saved Products Pipeline', desc: 'เก็บสินค้าที่ผ่านการคัดไว้เป็น pipeline เพื่อส่งต่อไปทำ Content Plan, Ads Plan, Offer หรือ Affiliate caption', primary: 'Create plan', secondary: 'Export selected' },
      en: { title: 'Saved Products', subtitle: 'Saved Products Pipeline', desc: 'Keep selected products ready for content planning, ads, offers, and affiliate captions.', primary: 'Create plan', secondary: 'Export selected' }
    },
    'competitor-finder': {
      th: { title: 'ตลาด / ร้าน / ครีเอเตอร์', subtitle: 'Market Density & Gap', desc: 'ดูความแออัดของตลาด ร้านที่ขายสินค้าเดียวกัน ครีเอเตอร์ที่ทำคอนเทนต์ และช่องว่างที่ยังเล่นได้', primary: 'Analyze market', secondary: 'Add shops' },
      en: { title: 'Market / Shops / Creators', subtitle: 'Market Density & Gap', desc: 'Review market density, top shops, creator angles, pricing, reviews, and opportunity gaps.', primary: 'Analyze market', secondary: 'Add shops' }
    },
    'signal-sources': {
      th: { title: 'แหล่งสัญญาณ FB/IG', subtitle: 'Signal Sources', desc: 'กำหนดเพจ กลุ่ม แฮชแท็ก คีย์เวิร์ด หรือบัญชีอ้างอิงที่ใช้ดูสัญญาณคอนเทนต์บน Facebook/Instagram', primary: 'Track sources', secondary: 'Add keyword' },
      en: { title: 'FB/IG Signal Sources', subtitle: 'Signal Sources', desc: 'Manage pages, groups, hashtags, keywords, or reference accounts used for content signals.', primary: 'Track sources', secondary: 'Add keyword' }
    },
    'data-connections': {
      th: { title: 'เชื่อมต่อข้อมูล', subtitle: 'Shopee Feed + Meta', desc: 'เชื่อม Shopee CSV/Datafeed, Meta API, manual URL และไฟล์นำเข้า โดยไม่เก็บ token หรือข้อมูลลับในฝั่ง client', primary: 'Test connection', secondary: 'Upload CSV' },
      en: { title: 'Data Connections', subtitle: 'Shopee Feed + Meta', desc: 'Connect Shopee CSV/Datafeed, Meta signals, manual URLs, and import files safely.', primary: 'Test connection', secondary: 'Upload CSV' }
    },
    'content-tracker': {
      th: { title: 'Content Tracker', subtitle: 'Selling Content Signals', desc: 'ติดตามคอนเทนต์ Facebook/IG/Reels/รีวิวที่ทำให้สินค้าขาย แล้วถอด hook, CTA, pain point และ angle ที่ปรับใช้ได้', primary: 'Track content', secondary: 'Add content URL' },
      en: { title: 'Content Tracker', subtitle: 'Selling Content Signals', desc: 'Track content formats and hooks that can support product sales decisions.', primary: 'Track content', secondary: 'Add content URL' }
    },
    'ai-insight': {
      th: { title: 'AI Product Insight', subtitle: 'Product Action Summary', desc: 'ให้ AI สรุปว่าสินค้าใดมีศักยภาพ เหมาะทำ Affiliate, Ads, Live หรือ Content และต้องระวังอะไร', primary: 'Generate insight', secondary: 'Select products' },
      en: { title: 'AI Product Insight', subtitle: 'Product Action Summary', desc: 'Use AI to summarize product opportunity, fit, next action, and risk signals.', primary: 'Generate insight', secondary: 'Select products' }
    },
    'ads-intelligence': {
      th: { title: 'วิเคราะห์มุมแอด', subtitle: 'แผนโฆษณาตามสินค้า', desc: 'สร้าง hook, primary text, headline, CTA, UGC angle และ funnel stage สำหรับสินค้าแต่ละตัวบน Facebook/Instagram', primary: 'สร้างแผนแอด', secondary: 'เลือกสินค้า' },
      en: { title: 'Ads Angle Intelligence', subtitle: 'Ad Plan by Product', desc: 'Create hooks, primary text, headlines, CTA, and ad angles for selected products.', primary: 'Create ad plan', secondary: 'Pick products' }
    },
    'offer-builder': {
      th: { title: 'สร้างข้อเสนอ', subtitle: 'ตัวสร้างข้อเสนอสินค้า', desc: 'สร้าง bundle, flash sale, free shipping angle, live only deal, affiliate promotion และ starter set', primary: 'สร้างข้อเสนอ', secondary: 'ดูสินค้าที่บันทึก' },
      en: { title: 'Offer Builder', subtitle: 'Product Offer Builder', desc: 'Build bundles, promotion angles, live-only deals, affiliate offers, and starter sets.', primary: 'Build offer', secondary: 'View saved products' }
    },
    'content-planner': {
      th: { title: 'Affiliate Content Planner', subtitle: 'Product Content Plan', desc: 'วางแผน Reels, Feed post, review, comparison, FAQ, live script และ affiliate caption ตามสินค้าที่เลือก', primary: 'Copy calendar', secondary: 'View saved products' },
      en: { title: 'Affiliate Content Planner', subtitle: 'Product Content Plan', desc: 'Plan Reels, feed posts, reviews, comparisons, FAQs, live scripts, and affiliate captions.', primary: 'Copy calendar', secondary: 'View saved products' }
    },
    'outreach-message': {
      th: { title: 'Outreach Message', subtitle: 'Shop, Creator, Supplier', desc: 'สร้างข้อความติดต่อร้านค้า ครีเอเตอร์ ซัพพลายเออร์ หรือพาร์ทเนอร์ affiliate โดยไม่สแปมและมีบริบทจากสินค้า', primary: 'Copy message', secondary: 'View saved products' },
      en: { title: 'Outreach Message', subtitle: 'Shop, Creator, Supplier', desc: 'Draft non-spam outreach messages for shops, creators, suppliers, or affiliate partners.', primary: 'Copy message', secondary: 'View saved products' }
    },
    reports: {
      th: { title: 'รายงาน', subtitle: 'ส่งออกข้อมูลวิเคราะห์', desc: 'ส่งออก Product Opportunity Report, Affiliate Content Plan, Ads Angle Plan, Offer Plan และ Executive Summary', primary: 'ดาวน์โหลดรายงาน', secondary: 'คัดลอกสรุป' },
      en: { title: 'Reports', subtitle: 'Exportable Intelligence', desc: 'Export product opportunity, content plan, ad angle, offer, and executive reports.', primary: 'Download report', secondary: 'Copy summary' }
    },
    settings: {
      th: { title: 'Settings', subtitle: 'System Setup', desc: 'ตั้งค่า Shopee feed import, Meta connection, AI provider, language, timezone, data retention และ compliance reminder', primary: 'Save settings', secondary: 'Test connection' },
      en: { title: 'Settings', subtitle: 'System Setup', desc: 'Manage feed import, Meta connection, AI provider, language, timezone, and data retention.', primary: 'Save settings', secondary: 'Test connection' }
    },
    'installation-guide': {
      th: { title: 'Installation Guide', subtitle: 'Setup Manual', desc: 'คู่มือติดตั้งระบบ local/hosting, backend, database, AI key, import data และ report export', primary: 'Open guide', secondary: 'Download PDF' },
      en: { title: 'Installation Guide', subtitle: 'Setup Manual', desc: 'Install and configure local/hosting, backend, database, AI key, imports, and exports.', primary: 'Open guide', secondary: 'Download PDF' }
    },
    'user-manual': {
      th: { title: 'คู่มือใช้งาน', subtitle: 'วิธีใช้งาน', desc: 'คู่มือใช้งานตั้งแต่ตั้งค่าตลาด สแกนสินค้า อ่าน score ใช้ AI insight และสร้างแผนขาย', primary: 'เปิดคู่มือ', secondary: 'ดูคำถามพบบ่อย' },
      en: { title: 'User Manual', subtitle: 'How To Use', desc: 'Learn how to set up the radar, import products, read scores, use AI, and create plans.', primary: 'Start manual', secondary: 'View FAQ' }
    },
    'pricing-license': {
      th: { title: 'Pricing / License', subtitle: 'TrendRadar AI Lifetime Deal', desc: 'ซื้อขาดครั้งเดียว ใช้งานได้ตลอด พร้อมสิทธิ์การใช้งานตามแพ็กเกจ', primary: 'View package', secondary: 'ดูสิทธิ์ใช้งาน' },
      en: { title: 'Pricing / License', subtitle: 'TrendRadar AI Lifetime Deal', desc: 'Review the license model, usage rights, included modules, and commercial terms.', primary: 'View package', secondary: 'View rights' }
    }
  };

  // --- Main Application State ---
  const state = {
    activeView: 'overview',
    language: localStorage.getItem('trendradar-ui-language') || 'TH',
    searchQuery: '',
    sidebarOpen: false,
    products: [],
    leads: [],
    summary: {
      hasData: true,
      batchId: 'shopee-2026-07-03T18-23-24-034Z',
      importedAt: '2026-07-03T18:23:24.034Z',
      sourceFile: '008.csv',
      importMode: 'merge',
      addedRows: 0,
      updatedRows: 99,
      totalRows: 99,
      importedRows: 99,
      skippedRows: 0,
      storedRows: 359,
      averageScore: 73
    },
    savedProducts: [],
    selectedProduct: null, // For drawer!
    chartMode: 'matrix', // 'matrix' or 'bar'
    toastNotice: null,
    toastTimer: null,
    planDraftRequest: 0,

    // Lead Finder specific state
    finderFilter: 'All',
    finderSort: 'sold-desc',
    finderPageSize: 10,
    finderPage: 1,
    finderSelectedIds: new Set(),
    finderTableOptionsOpen: false,

    // Overview table state
    overviewSort: 'sold-desc',
    overviewPageSize: 10,
    overviewPage: 1,

    // AI Settings
    aiSettings: {
      mode: 'template',
      provider: 'Gemini',
      model: 'gemini-3.1-flash-lite',
      apiKey: ''
    }
  };

  // --- Initialize Lead Data ---
  function initLeadsFromRawProducts(rawProducts) {
    return rawProducts.map((p, idx) => {
      const price = Number(p.price) || 0;
      const sold = Number(p.sold) || 0;
      const rating = Number(p.rating) || 0;
      const commissionRate = Number(p.commissionRate) || 0;
      const baseScore = p.score || Math.min(99, Math.round(50 + (sold > 10000 ? 30 : sold > 5000 ? 20 : 10) + (rating >= 4.9 ? 15 : 10)));
      const signalBoost = 0;
      const totalScore = Math.min(99, baseScore + signalBoost);
      const reasons = p.reasons || ['high sales signal', 'strong rating', 'available stock'];
      const metaAngle = p.metaAngle || reasons.slice(0, 2).join(' / ') || 'Needs angle review';
      const status = totalScore >= 86 ? 'Ready for ads' : totalScore >= 76 ? 'Ready for content' : 'Watchlist';
      const tone = totalScore >= 86 ? 'green' : totalScore >= 76 ? 'blue' : 'amber';
      const competition = totalScore >= 80 ? 'Medium' : 'High';
      const painPoint = p.painPoint || reasons[0] || 'แก้ปัญหาชีวิตประจำวัน';

      return {
        productId: p.id || `product-${idx + 1}`,
        product: p.title || 'สินค้า Shopee',
        subtitle: p.shopName || p.sellerName || p.category || 'Shopee Official',
        sourceFile: p.sourceFile || 'Top 200 by sold - Shopee Feed',
        imageUrl: p.imageUrl || '',
        platform: 'Shopee',
        category: p.category || 'Beauty',
        price: price > 0 ? `฿${formatNumber(price)}` : '-',
        rawPrice: price,
        soldCount: sold,
        sold: formatCompactNumber(sold),
        rating: rating > 0 ? rating.toFixed(1) : '-',
        commission: commissionRate > 0 ? `${commissionRate}%` : '-',
        commissionRate: commissionRate,
        metaAngle: metaAngle,
        status: status,
        score: totalScore,
        baseScore: baseScore,
        signalBoost: signalBoost,
        signalCount: 0,
        signalEngagement: 0,
        signalKeywords: [],
        viral: formatCompactNumber(p.likes || sold),
        competition: competition,
        painPoint: painPoint,
        contentPotential: totalScore >= 76 ? 'High' : 'Medium',
        tone: tone
      };
    });
  }

  // --- Toast Manager ---
  function showToast(title, detail, tone = 'info') {
    if (state.toastTimer) clearTimeout(state.toastTimer);
    state.toastNotice = { title, detail, tone };
    renderToast();
    state.toastTimer = setTimeout(() => {
      state.toastNotice = null;
      renderToast();
    }, 5000);
  }

  function dismissToast() {
    if (state.toastTimer) clearTimeout(state.toastTimer);
    state.toastNotice = null;
    renderToast();
  }

  function renderToast() {
    let container = document.getElementById('app-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'app-toast-container';
      document.body.appendChild(container);
    }
    if (!state.toastNotice) {
      container.innerHTML = '';
      return;
    }
    const { title, detail, tone } = state.toastNotice;
    container.innerHTML = `
      <div class="app-toast ${tone}">
        ${ICONS.shieldCheck}
        <span>
          <strong>${title}</strong>
          <small>${detail}</small>
        </span>
        <button type="button" id="toast-dismiss-btn">${state.language === 'EN' ? 'Dismiss' : 'ปิด'}</button>
      </div>
    `;
    const btn = document.getElementById('toast-dismiss-btn');
    if (btn) btn.onclick = dismissToast;
  }

  // --- Copy to Clipboard helper ---
  async function copyText(text, successTitle = 'คัดลอกแล้ว', successDetail = 'คัดลอกข้อความลงคลิปบอร์ดแล้ว') {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      showToast(successTitle, successDetail, 'success');
    } catch (e) {
      showToast('คัดลอกไม่สำเร็จ', 'กรุณาลองใหม่อีกครั้ง', 'warning');
    }
  }

  // --- CSV Export Helper ---
  function exportCSV(filename, rows) {
    const esc = cell => `"${String(cell || '').replace(/"/g, '""')}"`;
    const csvContent = '\uFEFF' + rows.map(r => r.map(esc).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // --- Navigation & Routing ---
  function navigateTo(viewId) {
    state.activeView = viewId;
    state.sidebarOpen = false;
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    render();
  }

  // --- TopBar Live Clock ---
  function startClock() {
    function updateClock() {
      const el = document.getElementById('live-clock-time');
      const dateEl = document.getElementById('live-clock-date');
      if (!el || !dateEl) return;
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('th-TH-u-ca-gregory', {
        timeZone: 'Asia/Bangkok',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      const dateStr = state.language === 'EN'
        ? new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Bangkok', day: '2-digit', month: 'short', year: 'numeric' }).format(now)
        : new Intl.DateTimeFormat('th-TH-u-ca-gregory', { timeZone: 'Asia/Bangkok', day: '2-digit', month: 'short', year: 'numeric' }).format(now);
      el.textContent = timeStr;
      dateEl.textContent = dateStr;
    }
    setInterval(updateClock, 1000);
    updateClock();
  }

  // --- Product Thumbnail Component ---
  function renderThumbnail(lead, size = 'table') {
    if (lead.imageUrl) {
      return `<span class="product-thumbnail ${size}" title="${lead.product}">
        <img src="${lead.imageUrl}" alt="" loading="lazy" onerror="this.parentElement.className='product-thumbnail ${size} placeholder'; this.parentElement.innerHTML='${ICONS.packageSearch}';" />
      </span>`;
    }
    return `<span class="product-thumbnail ${size} placeholder" title="${lead.product}">${ICONS.packageSearch}</span>`;
  }

  // --- Product Drawer / Modal ---
  function openProductDrawer(lead) {
    state.selectedProduct = lead;
    renderDrawer();
  }

  function closeProductDrawer() {
    state.selectedProduct = null;
    renderDrawer();
  }

  function renderDrawer() {
    let drawerContainer = document.getElementById('product-drawer-container');
    if (!drawerContainer) {
      drawerContainer = document.createElement('div');
      drawerContainer.id = 'product-drawer-container';
      document.body.appendChild(drawerContainer);
    }

    const lead = state.selectedProduct;
    if (!lead) {
      drawerContainer.innerHTML = '';
      return;
    }

    const isTH = state.language === 'TH';
    const breakdown = [
      ['Shopee base score', String(lead.baseScore), isTH ? 'คะแนนจาก imported product feed: ราคา, ยอดขาย, commission, สต็อก, ร้านค้า' : 'Score from imported product feed: price, sold, commission, stock, shop signals'],
      ['Meta signal boost', `+${lead.signalBoost}`, lead.signalCount > 0 ? `${lead.signalCount} matched signals, ${lead.signalEngagement} engagement` : (isTH ? 'ยังไม่มี Meta signal แมตช์' : 'No FB/IG signal matched yet')],
      ['Commission', lead.commission, isTH ? 'ระดับความคุ้มค่าสำหรับทำ Affiliate' : 'Affiliate fit from Shopee feed'],
      ['Current angle', lead.metaAngle, isTH ? 'ถอดจากเหตุผลยอดขายและรีวิวสินค้า' : 'Generated from product feed reasons until Meta signals are imported']
    ];

    drawerContainer.innerHTML = `
      <button class="drawer-scrim" type="button" aria-label="Close product detail" id="drawer-close-scrim"></button>
      <aside class="product-drawer" role="dialog" aria-modal="true" aria-label="${lead.product} detail">
        <div class="drawer-header">
          <div class="drawer-product-heading">
            ${renderThumbnail(lead, 'drawer')}
            <div>
              <span>${lead.platform} · ${lead.category}</span>
              <h2>${lead.product}</h2>
              <p>${lead.subtitle}</p>
            </div>
          </div>
          <button class="icon-button" type="button" aria-label="Close product detail" id="drawer-close-btn">${ICONS.x}</button>
        </div>

        <div class="drawer-score-card">
          <div>
            <small>${isTH ? 'คะแนนโอกาส (Opportunity score)' : 'Opportunity score'}</small>
            <strong>${lead.score}</strong>
          </div>
          <span class="score-pill ${lead.tone}">${lead.status}</span>
        </div>

        <div class="drawer-metrics">
          <article>
            <span>${isTH ? 'ราคา' : 'Price'}</span>
            <strong>${lead.price}</strong>
          </article>
          <article>
            <span>${isTH ? 'ขายแล้ว' : 'Sold'}</span>
            <strong>${lead.sold}</strong>
          </article>
          <article>
            <span>${isTH ? 'เรตติ้ง' : 'Rating'}</span>
            <strong>${lead.rating}</strong>
          </article>
          <article>
            <span>${isTH ? 'จุดเด่น/Pain point' : 'Pain point'}</span>
            <strong title="${lead.painPoint}">${lead.painPoint}</strong>
          </article>
        </div>

        <section class="drawer-section">
          <h3>${isTH ? 'การวิเคราะห์โดย AI (AI readout)' : 'AI readout'}</h3>
          <div class="drawer-insight-list">
            <article>
              <strong>${isTH ? 'เหตุผลที่สินค้านี้มีศักยภาพ' : 'Why this product has potential'}</strong>
              <p>${lead.metaAngle} ${isTH ? 'มีสัญญาณความต้องการสูง เหมาะแตกเป็น hook, caption รีวิว และ call-to-action สำหรับยิงแอดหรือทำคลิปสั้น' : 'has strong demand signal ready for hooks, captions, and CTA for Meta Affiliate'}</p>
            </article>
            <article>
              <strong>${isTH ? 'จุดที่ต้องระวัง' : 'Watch-outs'}</strong>
              <p>${lead.competition === 'High' ? (isTH ? 'ตลาดเริ่มแน่น ต้องใช้มุมรีวิวจริงที่เจาะลึกเฉพาะทางและทำ bundle ข้อเสนอให้น่าสนใจ' : 'High competition. Requires unique pain points and strong offer bundle.') : (isTH ? 'คู่แข่งยังไม่แน่นมาก แต่ควรตรวจเช็กคอมเมนต์และรีวิวล่าสุดก่อนเริ่มทุ่มงบ' : 'Moderate competition. Verify recent reviews before scaling budget.')}</p>
            </article>
          </div>
        </section>

        <section class="drawer-section">
          <h3>${isTH ? 'การแจกแจงคะแนน (Score breakdown)' : 'Score breakdown'}</h3>
          <div class="drawer-breakdown">
            ${breakdown.map(([k, val, desc]) => `
              <article>
                <div>
                  <strong>${k}</strong>
                  <span>${desc}</span>
                </div>
                <em>${val}</em>
              </article>
            `).join('')}
          </div>
        </section>

        <section class="drawer-section">
          <h3>${isTH ? 'การดำเนินการถัดไป (Next action)' : 'Next action'}</h3>
          <div class="drawer-actions">
            <button type="button" id="drawer-act-ads">${isTH ? 'ทำ Ads Angle' : 'Create Ad Plan'}</button>
            <button type="button" id="drawer-act-content">${isTH ? 'สร้าง Content Plan' : 'Content Plan'}</button>
            <button type="button" id="drawer-act-offer">${isTH ? 'ทำ Offer' : 'Build Offer'}</button>
            <button type="button" id="drawer-act-save">${isTH ? 'บันทึกไว้ก่อน' : 'Save Product'}</button>
          </div>
        </section>
      </aside>
    `;

    document.getElementById('drawer-close-scrim').onclick = closeProductDrawer;
    document.getElementById('drawer-close-btn').onclick = closeProductDrawer;

    document.getElementById('drawer-act-ads').onclick = () => {
      closeProductDrawer();
      navigateTo('ads-intelligence');
    };
    document.getElementById('drawer-act-content').onclick = () => {
      closeProductDrawer();
      navigateTo('content-planner');
    };
    document.getElementById('drawer-act-offer').onclick = () => {
      closeProductDrawer();
      navigateTo('offer-builder');
    };
    document.getElementById('drawer-act-save').onclick = () => {
      saveProductToPipeline(lead);
      closeProductDrawer();
      showToast(
        isTH ? 'บันทึกสินค้าแล้ว' : 'Product saved',
        isTH ? `บันทึก "${lead.product}" ลงใน Pipeline แล้ว` : `Saved "${lead.product}" to pipeline.`,
        'success'
      );
    };
  }

  function saveProductToPipeline(product) {
    if (!state.savedProducts.some(p => p.productId === product.productId)) {
      state.savedProducts.unshift(product);
      try {
        localStorage.setItem('trendradar-saved-products', JSON.stringify(state.savedProducts));
      } catch (e) {}
    }
  }

  // --- HTML Builders for Views ---

  // Command Header Bar
  function renderCommandHeader(viewId) {
    const isTH = state.language === 'TH';
    const cfg = VIEW_HEADERS[viewId] ? VIEW_HEADERS[viewId][isTH ? 'th' : 'en'] : VIEW_HEADERS.overview[isTH ? 'th' : 'en'];
    const showDesc = viewId !== 'overview';

    let primaryAction = '';
    let secondaryAction = '';

    if (viewId === 'overview') {
      primaryAction = `<button class="primary-button" type="button" id="cmd-scan-feed">${ICONS.play} ${cfg.primary}</button>`;
      secondaryAction = `<button class="secondary-button" type="button" id="cmd-upload-csv">${cfg.secondary}</button>`;
    } else if (viewId === 'lead-finder') {
      primaryAction = `<button class="primary-button" type="button" id="cmd-finder-scan">${ICONS.play} ${cfg.primary}</button>`;
      secondaryAction = `<button class="secondary-button" type="button" id="cmd-finder-import">${cfg.secondary}</button>`;
    } else if (viewId === 'saved-products') {
      primaryAction = `<button class="primary-button" type="button" id="cmd-saved-plan">${ICONS.play} ${cfg.primary}</button>`;
      secondaryAction = `<button class="secondary-button" type="button" id="cmd-saved-export">${cfg.secondary}</button>`;
    } else {
      primaryAction = `<button class="primary-button" type="button" id="cmd-default-primary">${ICONS.play} ${cfg.primary}</button>`;
      secondaryAction = `<button class="secondary-button" type="button" id="cmd-default-secondary">${cfg.secondary}</button>`;
    }

    return `
      <section class="command-header">
        <div>
          <h1>${cfg.title}</h1>
          <p>${cfg.subtitle}</p>
          ${showDesc ? `<span>${cfg.desc}</span>` : ''}
        </div>
        <div class="header-actions">
          ${secondaryAction}
          ${primaryAction}
        </div>
      </section>
    `;
  }

  // View: Overview (ภาพรวมเรดาร์)
  function renderOverviewView() {
    const isTH = state.language === 'TH';
    const topLead = state.leads[0];
    const readyAdsCount = state.leads.filter(l => l.status === 'Ready for ads').length;
    const readyContentCount = state.leads.filter(l => l.status === 'Ready for content').length;
    const watchlistCount = state.leads.filter(l => l.status === 'Watchlist').length;

    // Stat Cards
    const cards = [
      { label: isTH ? 'สินค้าที่จัดเก็บ' : 'Stored Products', val: formatNumber(state.summary.storedRows), change: state.summary.sourceFile || '008.csv', tone: 'blue', icon: 'packageSearch' },
      { label: isTH ? 'พร้อมทำแอด' : 'Ready for Ads', val: formatNumber(readyAdsCount), change: isTH ? 'จาก feed ที่นำเข้า' : 'from imported feed', tone: 'green', icon: 'target' },
      { label: isTH ? 'พร้อมทำคอนเทนต์' : 'Ready for Content', val: formatNumber(readyContentCount), change: isTH ? 'จาก feed ที่นำเข้า' : 'from imported feed', tone: 'amber', icon: 'zap' },
      { label: isTH ? 'เฝ้าดู' : 'Watchlist', val: formatNumber(watchlistCount), change: isTH ? 'ต้องตรวจเพิ่ม' : 'needs review', tone: 'violet', icon: 'store' },
      { label: isTH ? 'คะแนนเฉลี่ย' : 'Average Score', val: String(state.summary.averageScore), change: isTH ? 'คะแนน Shopee' : 'Shopee score', tone: 'blue', icon: 'grid2x2' },
      { label: isTH ? 'แถวที่ข้าม' : 'Skipped Rows', val: formatNumber(state.summary.skippedRows), change: isTH ? 'ข้อมูลขาดหรือเกินลิมิต' : 'missing data or over limit', tone: 'red', icon: 'activity' }
    ];

    // Opportunity Groups
    const highOpp = state.leads.filter(l => l.status === 'Ready for ads').slice(0, 2);
    const contentReady = state.leads.filter(l => l.status === 'Ready for content').slice(0, 2);
    const monitor = state.leads.filter(l => l.status === 'Watchlist').slice(0, 2);
    const needData = state.leads.filter(l => l.score < 62).slice(0, 2);

    const groups = [
      { title: isTH ? 'โอกาสสูงก่อน' : 'High opportunity', sub: isTH ? 'ควรทำต่อก่อน' : 'Ready to act', tone: 'green', items: highOpp },
      { title: isTH ? 'เหมาะทำคอนเทนต์' : 'Content-ready', sub: isTH ? 'ต่อยอดเป็นคอนเทนต์' : 'Turn into content', tone: 'blue', items: contentReady },
      { title: isTH ? 'เฝ้าดูก่อน' : 'Monitor', sub: isTH ? 'ดูสัญญาณเพิ่มก่อน' : 'Watch before spending', tone: 'amber', items: monitor },
      { title: isTH ? 'ข้อมูลยังไม่พอ' : 'Need more data', sub: isTH ? 'ต้องเช็กเพิ่ม' : 'Check more signals', tone: 'slate', items: needData }
    ];

    // Table pagination & sort
    let sortedLeads = [...state.leads];
    if (state.overviewSort === 'score-desc') sortedLeads.sort((a, b) => b.score - a.score || b.soldCount - a.soldCount);
    else if (state.overviewSort === 'category') sortedLeads.sort((a, b) => a.category.localeCompare(b.category, 'th') || b.soldCount - a.soldCount);
    else if (state.overviewSort === 'price-asc') sortedLeads.sort((a, b) => a.rawPrice - b.rawPrice);
    else if (state.overviewSort === 'price-desc') sortedLeads.sort((a, b) => b.rawPrice - a.rawPrice);
    else sortedLeads.sort((a, b) => b.soldCount - a.soldCount);

    const totalPages = Math.max(1, Math.ceil(sortedLeads.length / state.overviewPageSize));
    const currPage = Math.min(state.overviewPage, totalPages);
    const startIdx = (currPage - 1) * state.overviewPageSize;
    const pageLeads = sortedLeads.slice(startIdx, startIdx + state.overviewPageSize);

    // AI Next actions
    const nextActions = topLead ? [
      [isTH ? `ดัน ${topLead.product} เป็นสินค้าหลัก` : `Push ${topLead.product} as primary`, `Score ${topLead.score}, ${isTH ? 'ราคา' : 'price'} ${topLead.price}, ${isTH ? 'สถานะ' : 'status'} ${topLead.status}`, isTH ? 'ไปที่ Ads Angle' : 'Open Ads Angle', 'ads-intelligence'],
      [isTH ? 'สร้างแผนคอนเทนต์จากสินค้าคะแนนสูง' : 'Create content plan from top products', isTH ? 'ใช้สินค้านำเข้าจริงจาก Shopee CSV เพื่อทำ hook, caption และ CTA' : 'Use imported Shopee CSV products to build hooks, captions, and CTA', isTH ? 'ไปที่ Content Planner' : 'Open Content Planner', 'content-planner'],
      [isTH ? 'เช็กตลาดก่อนลงงบ' : 'Check market density before spending', isTH ? 'ดูร้าน/ครีเอเตอร์/มุมขายที่อาจชนกับสินค้าคะแนนสูง' : 'Review shops, creators, and sales angles that may compete with high-score products', isTH ? 'ไปที่ Market Density' : 'Open Market Density', 'competitor-finder'],
      [isTH ? 'สร้างข้อเสนอสำหรับสินค้าเด่น' : 'Build an offer for standout products', isTH ? 'แปลงสินค้า score สูงเป็น bundle, free shipping angle หรือ live deal' : 'Turn high-score products into bundle, free shipping, or live-deal angles', isTH ? 'ไปที่ Offer Builder' : 'Open Offer Builder', 'offer-builder'],
      [isTH ? 'เตรียมข้อความติดต่อร้าน/ครีเอเตอร์' : 'Prepare outreach for shops or creators', isTH ? 'ใช้ชื่อสินค้าและ shop context จาก feed จริง' : 'Use product name and shop context from the imported feed', isTH ? 'ไปที่ Outreach' : 'Open Outreach', 'outreach-message']
    ] : [];

    return `
      <!-- Real Data Mode Notice -->
      <div class="inline-notice success">
        ${ICONS.shieldCheck}
        <span>
          <strong>${isTH ? 'โหมดข้อมูลจริง (Real data mode)' : 'Real data mode'}</strong>
          <small>${isTH ? `Dashboard นี้อ่านจาก product store ล่าสุด: ${state.summary.sourceFile || 'Shopee CSV'}` : `This dashboard reads from the latest product store: ${state.summary.sourceFile || 'Shopee CSV'}`}</small>
        </span>
      </div>

      <!-- Today Signal Hero Banner -->
      <section class="today-signal">
        <div class="radar-visual" aria-hidden="true">
          <i></i><i></i><i></i>
          <span class="radar-dot main"></span>
          <span class="radar-dot side"></span>
        </div>
        <div class="today-signal-copy">
          <p>${isTH ? 'ข้อมูลจริงล่าสุด' : 'Latest real data'}</p>
          <h2>${formatNumber(state.summary.storedRows)} ${isTH ? 'สินค้า Shopee ที่ import แล้ว' : 'imported Shopee products'}</h2>
          <span>${topLead ? (isTH ? `สินค้าคะแนนสูงสุดตอนนี้คือ <b>${topLead.product}</b> ด้วย score ${topLead.score}. แหล่งข้อมูล: ${state.summary.sourceFile || 'Shopee CSV'}` : `Current top product is <b>${topLead.product}</b> with score ${topLead.score}. Source: ${state.summary.sourceFile || 'Shopee CSV'}`) : ''}</span>
          <div class="today-actions">
            <button class="primary-button" type="button" id="hero-btn-finder">${ICONS.packageSearch} ${isTH ? 'ดูโอกาสสินค้า' : 'View product opportunities'}</button>
            <button class="secondary-button" type="button" id="hero-btn-scan">${ICONS.search} ${isTH ? 'สแกน Shopee Feed' : 'Scan Shopee Feed'}</button>
            <button class="secondary-button" type="button" id="hero-btn-signals">${ICONS.usersRound} FB/IG Signals</button>
          </div>
        </div>
      </section>

      <!-- Metric Grid Cards -->
      <section class="signal-grid">
        ${cards.map(c => `
          <article class="signal-card ${c.tone}">
            <span class="metric-icon">${ICONS[c.icon]}</span>
            <div>
              <small>${c.label}</small>
              <strong>${c.val}</strong>
              <em>${c.change}</em>
            </div>
          </article>
        `).join('')}
      </section>

      <!-- Main Overview Content Stack -->
      <section class="overview-stack">
        <!-- Opportunity Board -->
        <section class="panel opportunity-board">
          <div class="panel-header">
            <div>
              <h2>${isTH ? 'โอกาสสินค้าวันนี้' : 'Today Product Opportunities'}</h2>
              <p>${isTH ? 'อ่านจาก Shopee feed + Meta signal แล้วจัดเป็นกลุ่มที่ต้องทำต่อ' : 'Grouped from Shopee feed and Meta signals into practical next actions'}</p>
            </div>
            <button class="secondary-button" type="button" id="btn-scoring-method">${isTH ? 'ดูวิธีคิดคะแนน' : 'Scoring method'}</button>
          </div>
          <div class="opportunity-groups">
            ${groups.map(g => `
              <article class="opportunity-group ${g.tone}">
                <div>
                  <h3>${g.title}</h3>
                  <span>${g.sub}</span>
                </div>
                ${g.items.length > 0 ? g.items.map(item => `
                  <button class="opportunity-row" type="button" data-product-id="${item.productId}">
                    <span>
                      <strong>${item.product}</strong>
                      <small>${item.metaAngle}</small>
                    </span>
                    <em>Score ${item.score}</em>
                  </button>
                `).join('') : `
                  <button class="opportunity-row muted" type="button" disabled>
                    <span>
                      <strong>${isTH ? 'ยังไม่มีสินค้าในกลุ่มนี้' : 'No products in this group yet'}</strong>
                      <small>${isTH ? 'import feed เพิ่มหรือปรับ scoring rule' : 'Import more feed data'}</small>
                    </span>
                    <em>0</em>
                  </button>
                `}
              </article>
            `).join('')}
          </div>
        </section>

        <!-- Featured Products Table -->
        <section class="panel table-panel">
          <div class="panel-header">
            <div>
              <h2>${isTH ? 'สินค้าเด่นวันนี้' : 'Featured Products'}</h2>
              <p>${isTH ? 'สรุปข้อมูลสินค้าจาก Shopee feed ที่นำเข้า พร้อมระดับความพร้อม' : 'Compact summary from imported data'}</p>
            </div>
            <div class="table-tools">
              <label class="table-sort-control">
                <span>${isTH ? 'เรียงตาม' : 'Sort'}</span>
                <select id="overview-sort-select">
                  <option value="sold-desc" ${state.overviewSort === 'sold-desc' ? 'selected' : ''}>${isTH ? 'ยอดขายมากสุด' : 'Best selling'}</option>
                  <option value="score-desc" ${state.overviewSort === 'score-desc' ? 'selected' : ''}>${isTH ? 'คะแนนสูงสุด' : 'Top score'}</option>
                  <option value="category" ${state.overviewSort === 'category' ? 'selected' : ''}>${isTH ? 'หมวดหมู่' : 'Category'}</option>
                  <option value="price-asc" ${state.overviewSort === 'price-asc' ? 'selected' : ''}>${isTH ? 'ราคาต่ำสุด' : 'Lowest price'}</option>
                  <option value="price-desc" ${state.overviewSort === 'price-desc' ? 'selected' : ''}>${isTH ? 'ราคาสูงสุด' : 'Highest price'}</option>
                </select>
              </label>
              <label class="table-page-size-control">
                <span>${isTH ? 'แสดง' : 'Rows'}</span>
                <select id="overview-pagesize-select">
                  <option value="10" ${state.overviewPageSize === 10 ? 'selected' : ''}>10 ${isTH ? 'แถว' : 'rows'}</option>
                  <option value="25" ${state.overviewPageSize === 25 ? 'selected' : ''}>25 ${isTH ? 'แถว' : 'rows'}</option>
                  <option value="50" ${state.overviewPageSize === 50 ? 'selected' : ''}>50 ${isTH ? 'แถว' : 'rows'}</option>
                  <option value="100" ${state.overviewPageSize === 100 ? 'selected' : ''}>100 ${isTH ? 'แถว' : 'rows'}</option>
                </select>
              </label>
              <button class="secondary-button" type="button" id="overview-btn-copy">${isTH ? 'คัดลอกสรุป' : 'Copy summary'}</button>
              <button class="secondary-button" type="button" id="overview-btn-export">${ICONS.download} CSV</button>
            </div>
          </div>

          <div class="table-scroll">
            <table class="opportunity-table">
              <thead>
                <tr>
                  <th class="rank-col">#</th>
                  <th class="thumb-col">${isTH ? 'รูป' : 'Image'}</th>
                  <th class="name-col">${isTH ? 'สินค้า' : 'Product'}</th>
                  <th class="platform-col">${isTH ? 'แพลตฟอร์ม' : 'Platform'}</th>
                  <th class="score-col">${isTH ? 'คะแนน' : 'Score'}</th>
                  <th class="price-col">${isTH ? 'ราคา' : 'Price'}</th>
                  <th class="rating-col">${isTH ? 'เรตติ้ง' : 'Rating'}</th>
                  <th class="commission-col">${isTH ? 'คอมมิชชัน' : 'Commission'}</th>
                  <th class="signal-col">${isTH ? 'สัญญาณ' : 'Signals'}</th>
                  <th class="competition-col">${isTH ? 'การแข่งขัน' : 'Competition'}</th>
                  <th class="pain-col">${isTH ? 'Pain Point' : 'Pain Point'}</th>
                  <th class="potential-col">${isTH ? 'โอกาสทำเงิน' : 'Potential'}</th>
                  <th class="action-col">${isTH ? 'ดูข้อมูล' : 'Action'}</th>
                </tr>
              </thead>
              <tbody>
                ${pageLeads.map((lead, idx) => `
                  <tr class="product-row" data-product-id="${lead.productId}">
                    <td>${startIdx + idx + 1}</td>
                    <td>${renderThumbnail(lead, 'table')}</td>
                    <td class="product-cell">
                      <strong>${lead.product}</strong>
                      <small>${lead.subtitle}</small>
                      <span class="product-category-chip">${lead.category}</span>
                    </td>
                    <td>${shopeeLogo()}</td>
                    <td><span class="score-pill ${lead.tone}">${lead.score}</span></td>
                    <td><strong>${lead.price}</strong></td>
                    <td>${lead.rating}</td>
                    <td>${lead.commission}</td>
                    <td><span class="viral">${lead.sold} sold</span></td>
                    <td>${lead.competition}</td>
                    <td><small title="${lead.painPoint}">${lead.painPoint}</small></td>
                    <td><span class="potential ${lead.contentPotential === 'High' ? 'high' : 'medium'}">${lead.contentPotential}</span></td>
                    <td>
                      <button class="inline-action icon-only inspect-product-btn" type="button" data-product-id="${lead.productId}" title="${isTH ? 'กดเข้าไปดูข้อมูล' : 'View details'}">
                        ${ICONS.eye}
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="table-footer">
            <span>${isTH ? `แสดง ${startIdx + 1}-${Math.min(startIdx + state.overviewPageSize, sortedLeads.length)} จากทั้งหมด ${sortedLeads.length} รายการ` : `Showing ${startIdx + 1}-${Math.min(startIdx + state.overviewPageSize, sortedLeads.length)} of ${sortedLeads.length} items`}</span>
            <div class="pager">
              <button type="button" id="overview-prev-page" ${currPage <= 1 ? 'disabled' : ''}>‹</button>
              <span>${currPage} / ${totalPages}</span>
              <button type="button" id="overview-next-page" ${currPage >= totalPages ? 'disabled' : ''}>›</button>
            </div>
          </div>
        </section>

        <!-- Opportunity Matrix / Category Bar Chart Switcher -->
        <section class="panel matrix-panel ${state.chartMode === 'bar' ? 'bar' : 'bubble'}">
          <div class="panel-header">
            <div>
              <h2>${isTH ? 'Opportunity Matrix (เมทริกซ์โอกาสสินค้า)' : 'Opportunity Matrix'}</h2>
              <p>${isTH ? 'เปรียบเทียบ Score กับยอดขาย เพื่อหาสินค้าที่มีโอกาสเติบโตสูง' : 'Score vs Sold density analysis'}</p>
            </div>
            <div class="chart-switcher">
              <button type="button" class="${state.chartMode === 'matrix' ? 'selected' : ''}" id="btn-chart-matrix">${isTH ? 'เมทริกซ์' : 'Matrix'}</button>
              <button type="button" class="${state.chartMode === 'bar' ? 'selected' : ''}" id="btn-chart-bar">${isTH ? 'หมวดหมู่' : 'Categories'}</button>
            </div>
          </div>

          <!-- Scatter / Matrix Chart -->
          <div class="matrix-chart bubble">
            <span class="axis top">${isTH ? 'คะแนนสูง (High Score)' : 'High Score'}</span>
            <span class="axis bottom">${isTH ? 'คะแนนปานกลาง (Medium Score)' : 'Medium Score'}</span>
            <span class="axis left">${isTH ? 'Opportunity Score' : 'Opportunity Score'}</span>
            <span class="axis x-low">${isTH ? 'ยอดขายน้อย' : 'Low Sold'}</span>
            <span class="axis x-mid">${isTH ? 'ยอดขายปานกลาง' : 'Mid Sold'}</span>
            <span class="axis x-high">${isTH ? 'ยอดขายสูงมาก' : 'High Sold'}</span>

            ${state.leads.slice(0, 18).map((lead, idx) => {
              // Plot coordinates based on score and sold count
              const xPercent = Math.min(90, Math.max(12, Math.round(15 + (lead.soldCount / 30000) * 75)));
              const yPercent = Math.min(85, Math.max(15, Math.round(95 - ((lead.score - 65) / 35) * 75)));
              return `
                <div class="matrix-point ${lead.tone}" style="left:${xPercent}%; top:${yPercent}%; width:20px; height:20px; cursor:pointer;" data-product-id="${lead.productId}" title="${lead.product} (Score: ${lead.score}, Sold: ${lead.sold})">
                  <span>${lead.product.slice(0, 14)}...</span>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Category Bar Chart -->
          <div class="bar-chart">
            ${[
              ['Beauty (ความงาม)', '96%', '27.8K sold', 'green'],
              ['Sports & Outdoors (กีฬา)', '85%', '20.5K sold', 'green'],
              ['Home & Living (ของใช้ในบ้าน)', '78%', '15.4K sold', 'amber'],
              ['Health (สุขภาพ)', '72%', '12.8K sold', 'amber'],
              ['Food & Beverages (อาหาร)', '68%', '9.5K sold', 'amber'],
              ['Stationery (เครื่องเขียน)', '60%', '7.4K sold', 'amber']
            ].map(([cat, width, sold, tone]) => `
              <div class="bar-chart-row">
                <span>${cat}</span>
                <i><b class="${tone}" style="width:${width};"></b></i>
                <strong>${sold}</strong>
              </div>
            `).join('')}
          </div>

          <div class="matrix-legend">
            <span><i class="green"></i> ${isTH ? 'พร้อมทำแอด (Ready for ads)' : 'Ready for ads'}</span>
            <span><i class="blue"></i> ${isTH ? 'พร้อมทำคอนเทนต์ (Ready for content)' : 'Ready for content'}</span>
            <span><i class="amber"></i> ${isTH ? 'เฝ้าดู (Watchlist)' : 'Watchlist'}</span>
          </div>
        </section>

        <!-- Ranking Panels Grid -->
        <section class="insight-grid">
          <!-- Top Score Products -->
          <article class="panel rank-panel">
            <div class="panel-header compact">
              <div>
                <h2>${isTH ? 'สินค้าคะแนนสูง' : 'Top Score Products'}</h2>
                <p>${isTH ? 'สินค้านำเข้าที่คะแนนดีที่สุด' : 'Top imported products'}</p>
              </div>
              <button class="view-link" type="button" id="rank-link-finder">${isTH ? 'ดูทั้งหมด' : 'View all'}</button>
            </div>
            <div class="rank-list keyword">
              ${state.leads.slice(0, 5).map((l, idx) => `
                <div class="rank-row" style="cursor:pointer;" data-product-id="${l.productId}">
                  <span>${idx + 1}</span>
                  <div>
                    <strong>${l.product}</strong>
                    <small>${l.category} · ${l.sold} sold</small>
                  </div>
                  <i><b style="width:${95 - idx * 8}%;"></b></i>
                  <em>Score ${l.score}</em>
                  <mark>${l.status === 'Ready for ads' ? (isTH ? 'แอด' : 'Ads') : (isTH ? 'คอนเทนต์' : 'Content')}</mark>
                </div>
              `).join('')}
            </div>
          </article>

          <!-- Score Reasons -->
          <article class="panel rank-panel">
            <div class="panel-header compact">
              <div>
                <h2>${isTH ? 'เหตุผลคะแนน' : 'Score Reasons'}</h2>
                <p>${isTH ? 'เหตุผลที่ทำให้คะแนนสูง' : 'Signals behind the score'}</p>
              </div>
              <button class="view-link" type="button" id="rank-link-reasons">${isTH ? 'ดูทั้งหมด' : 'View all'}</button>
            </div>
            <div class="rank-list pain">
              ${[
                ['high sales signal / strong rating', 'OUKEYA BLINK BLUSH', '97', 'Ready for ads'],
                ['official shop / active discount', 'PALA รองพื้น SPF50+', '94', 'Ready for ads'],
                ['visible product likes / high rating', 'Yuedpao Sportswear', '97', 'Ready for ads'],
                ['easy entry price / stock ready', 'สติกเกอร์ PVC ลายการ์ตูน', '94', 'Ready for ads'],
                ['healthy sales / strong reviews', 'SHOKUBUTSU ครีมอาบน้ำ', '97', 'Ready for ads']
              ].map(([reason, prod, score, status], idx) => `
                <div class="rank-row">
                  <span>${idx + 1}</span>
                  <div>
                    <strong>${reason}</strong>
                    <small>${prod}</small>
                  </div>
                  <i><b style="width:${92 - idx * 7}%;"></b></i>
                  <em>${score}</em>
                  <mark>${status === 'Ready for ads' ? (isTH ? 'แอด' : 'Ads') : (isTH ? 'คอนเทนต์' : 'Content')}</mark>
                </div>
              `).join('')}
            </div>
          </article>

          <!-- Action Angles -->
          <article class="panel rank-panel">
            <div class="panel-header compact">
              <div>
                <h2>${isTH ? 'มุมต่อยอด' : 'Action Angles'}</h2>
                <p>${isTH ? 'มุมคอนเทนต์และการขาย' : 'Content and sales angles'}</p>
              </div>
              <button class="view-link" type="button" id="rank-link-angles">${isTH ? 'ดูทั้งหมด' : 'View all'}</button>
            </div>
            <div class="rank-list angle">
              ${[
                ['รีวิวก่อน-หลังใช้จริง', 'OUKEYA BLINK BLUSH', '96%'],
                ['ทดสอบความคุมมัน / กันเหงื่อ', 'PALA รองพื้น SPF50+', '92%'],
                ['ใส่แล้วทรงสวย ระบายอากาศ', 'Yuedpao Sportswear', '89%'],
                ['แกะกล่องของน่ารัก ราคา 1 บาท', 'สติกเกอร์ PVC ลายการ์ตูน', '85%'],
                ['โปร 1 แถม 1 กลิ่นหอมติดตัว', 'SHOKUBUTSU ครีมอาบน้ำ', '84%']
              ].map(([angle, prod, pct], idx) => `
                <div class="rank-row">
                  <span>${idx + 1}</span>
                  <div>
                    <strong>${angle}</strong>
                    <small>${prod}</small>
                  </div>
                  <i><b style="width:${pct};"></b></i>
                  <em>${pct}</em>
                </div>
              `).join('')}
            </div>
          </article>
        </section>

        <!-- AI Next Actions Panel -->
        <aside class="panel ai-panel">
          <div class="panel-header ai-top">
            <div>
              <h2>AI Next Actions</h2>
              <p>${isTH ? 'ขั้นตอนต่อไปที่แนะนำโดย AI จากข้อมูลสินค้าที่ตรวจพบ' : 'Recommended next steps from current product data'}</p>
            </div>
            <div class="confidence">
              <small>Confidence</small>
              <strong>86%</strong>
            </div>
          </div>
          <div class="ai-action-list">
            ${nextActions.map(([title, desc, btnText, targetView], idx) => `
              <article class="ai-action">
                <span>${idx + 1}</span>
                <div>
                  <strong>${title}</strong>
                  <p>${desc}</p>
                  <button type="button" class="ai-jump-btn" data-view="${targetView}">${btnText}</button>
                </div>
                <small>↗</small>
              </article>
            `).join('')}
          </div>
          <div class="compliance-box">
            ${ICONS.shieldCheck}
            <div>
              <strong>${isTH ? 'การใช้งานข้อมูลอย่างรับผิดชอบ (Responsible data use)' : 'Responsible data use'}</strong>
              <p>${isTH ? 'ใช้ข้อมูลสาธารณะหรือข้อมูลที่คุณมีสิทธิ์เท่านั้น ไม่ bypass login, captcha, paywall หรือข้อจำกัดของแพลตฟอร์ม' : 'Use public data or data you have permission to use. Do not bypass login, captcha, paywall, or platform limits.'}</p>
              <button class="text-link" type="button" id="compliance-guide-btn">${isTH ? 'ดูแนวทางการใช้งาน' : 'View usage guide'}</button>
            </div>
          </div>
        </aside>
      </section>
    `;
  }

  // View: Lead Finder (ค้นหาโอกาสสินค้า)
  function renderLeadFinderView() {
    const isTH = state.language === 'TH';
    const filterOptions = ['All', 'Ready for ads', 'Ready for content', 'Watchlist', 'Shopee only', 'Commission 8%+'];
    const filterLabels = {
      All: isTH ? 'ทั้งหมด' : 'All',
      'Ready for ads': isTH ? 'พร้อมทำแอด' : 'Ready for ads',
      'Ready for content': isTH ? 'พร้อมทำคอนเทนต์' : 'Ready for content',
      Watchlist: isTH ? 'เฝ้าดู' : 'Watchlist',
      'Shopee only': isTH ? 'เฉพาะ Shopee' : 'Shopee only',
      'Commission 8%+': isTH ? 'คอมมิชชัน 8%+' : 'Commission 8%+'
    };

    // Filter
    const query = state.searchQuery.trim().toLowerCase();
    let filtered = state.leads.filter(lead => {
      const matchQuery = !query || [lead.product, lead.subtitle, lead.category, lead.metaAngle, lead.painPoint].join(' ').toLowerCase().includes(query);
      let matchFilter = true;
      if (state.finderFilter === 'Shopee only') matchFilter = lead.platform === 'Shopee';
      else if (state.finderFilter === 'Commission 8%+') matchFilter = lead.commissionRate >= 8;
      else if (state.finderFilter !== 'All') matchFilter = lead.status === state.finderFilter;
      return matchQuery && matchFilter;
    });

    // Sort
    if (state.finderSort === 'score-desc') filtered.sort((a, b) => b.score - a.score || b.soldCount - a.soldCount);
    else if (state.finderSort === 'category') filtered.sort((a, b) => a.category.localeCompare(b.category, 'th') || b.soldCount - a.soldCount);
    else if (state.finderSort === 'price-asc') filtered.sort((a, b) => a.rawPrice - b.rawPrice);
    else if (state.finderSort === 'price-desc') filtered.sort((a, b) => b.rawPrice - a.rawPrice);
    else filtered.sort((a, b) => b.soldCount - a.soldCount);

    const totalPages = Math.max(1, Math.ceil(filtered.length / state.finderPageSize));
    const currPage = Math.min(state.finderPage, totalPages);
    const startIdx = (currPage - 1) * state.finderPageSize;
    const pageLeads = filtered.slice(startIdx, startIdx + state.finderPageSize);

    const totalSelected = state.finderSelectedIds.size;
    const pageSelectedCount = pageLeads.filter(l => state.finderSelectedIds.has(l.productId)).length;
    const isAllPageSelected = pageLeads.length > 0 && pageSelectedCount === pageLeads.length;

    return `
      <section class="finder-layout">
        <article class="panel finder-panel">
          <!-- Toolbar -->
          <div class="finder-toolbar">
            <label class="finder-search">
              ${ICONS.search}
              <input type="text" id="finder-search-input" value="${state.searchQuery}" placeholder="${isTH ? 'ค้นหาสินค้า หมวดสินค้า keyword หรือ angle...' : 'Search products, category, keyword, or angle...'}" />
            </label>
            <button class="secondary-button finder-search-button" type="button" id="finder-do-search">${ICONS.search} ${isTH ? 'ค้นหา' : 'Search'}</button>
            ${state.searchQuery ? `<button class="secondary-button finder-clear-button" type="button" id="finder-clear-search">${ICONS.x} ${isTH ? 'ล้าง' : 'Clear'}</button>` : ''}
            
            <label class="table-sort-control finder-table-control">
              <span>${isTH ? 'เรียง' : 'Sort'}</span>
              <select id="finder-sort-select">
                <option value="sold-desc" ${state.finderSort === 'sold-desc' ? 'selected' : ''}>${isTH ? 'ขายดีสุด' : 'Best selling'}</option>
                <option value="score-desc" ${state.finderSort === 'score-desc' ? 'selected' : ''}>${isTH ? 'คะแนนสูงสุด' : 'Top score'}</option>
                <option value="category" ${state.finderSort === 'category' ? 'selected' : ''}>${isTH ? 'หมวดสินค้า' : 'Category'}</option>
                <option value="price-asc" ${state.finderSort === 'price-asc' ? 'selected' : ''}>${isTH ? 'ราคาต่ำสุด' : 'Lowest price'}</option>
                <option value="price-desc" ${state.finderSort === 'price-desc' ? 'selected' : ''}>${isTH ? 'ราคาสูงสุด' : 'Highest price'}</option>
              </select>
            </label>

            <label class="table-page-size-control finder-table-control">
              <span>${isTH ? 'แสดง' : 'Rows'}</span>
              <select id="finder-pagesize-select">
                <option value="10" ${state.finderPageSize === 10 ? 'selected' : ''}>10 ${isTH ? 'แถว' : 'rows'}</option>
                <option value="50" ${state.finderPageSize === 50 ? 'selected' : ''}>50 ${isTH ? 'แถว' : 'rows'}</option>
                <option value="100" ${state.finderPageSize === 100 ? 'selected' : ''}>100 ${isTH ? 'แถว' : 'rows'}</option>
              </select>
            </label>

            <button class="mini-icon ${state.finderTableOptionsOpen ? 'active' : ''}" type="button" id="finder-options-toggle" title="${isTH ? 'ตัวเลือกตาราง' : 'Table options'}">
              ${ICONS.ellipsisVertical}
            </button>
            <button class="primary-button" type="button" id="finder-import-feed-btn">
              ${ICONS.download} ${isTH ? 'นำเข้า Feed จริง' : 'Import real feed'}
            </button>
          </div>

          <!-- Table Action Strip (Toggleable) -->
          ${state.finderTableOptionsOpen ? `
            <div class="table-action-strip finder-action-strip">
              <span>${isTH ? 'แอ็กชันตาราง' : 'Table actions'}</span>
              <button type="button" id="strip-clear-filters">${ICONS.x} ${isTH ? 'ล้างตัวกรอง' : 'Clear filters'}</button>
              <button type="button" id="strip-export-csv">${ICONS.download} ${isTH ? 'ส่งออก CSV' : 'Export CSV'}</button>
              <button type="button" id="strip-go-saved">${ICONS.box} ${isTH ? 'ไปสินค้าที่บันทึกไว้' : 'Saved products'}</button>
            </div>
          ` : ''}

          <!-- Filter Chips -->
          <div class="filter-row">
            ${filterOptions.map(opt => `
              <button class="filter-chip ${state.finderFilter === opt ? 'selected' : ''}" type="button" data-filter="${opt}">
                ${filterLabels[opt]}
              </button>
            `).join('')}
          </div>

          <!-- State Banner -->
          <div class="finder-state-banner">
            <span>${isTH ? `แสดง ${startIdx + 1}-${Math.min(startIdx + state.finderPageSize, filtered.length)} จาก ${filtered.length} สินค้าในข้อมูลที่นำเข้า` : `Showing ${startIdx + 1}-${Math.min(startIdx + state.finderPageSize, filtered.length)} of ${filtered.length} products`}</span>
            <strong>${isTH ? `เลือกอยู่ ${totalSelected} รายการ (หน้านี้ ${pageSelectedCount})` : `${totalSelected} selected (${pageSelectedCount} on page)`}</strong>
          </div>

          <!-- Bulk Action Bar -->
          <div class="bulk-bar">
            <span>${isTH ? 'โหลดสินค้าจากคลังข้อมูลในเครื่องแล้ว' : 'Products loaded from local product store.'}</span>
            <button type="button" id="bulk-save-btn" ${totalSelected === 0 ? 'disabled' : ''}>${isTH ? 'บันทึกที่เลือก' : 'Save selected'}</button>
            <button type="button" id="bulk-plan-btn" ${totalSelected === 0 ? 'disabled' : ''}>${isTH ? 'สร้างแผนคอนเทนต์' : 'Create content plan'}</button>
            <button type="button" id="bulk-offer-btn" ${totalSelected === 0 ? 'disabled' : ''}>${isTH ? 'สร้างข้อเสนอ' : 'Build offer'}</button>
            <button type="button" id="bulk-export-btn">${isTH ? 'ส่งออก CSV' : 'Export CSV'}</button>
          </div>

          <!-- Products Table -->
          <div class="table-scroll">
            <table class="finder-table">
              <thead>
                <tr>
                  <th><input type="checkbox" id="finder-select-all-page" ${isAllPageSelected ? 'checked' : ''} /></th>
                  <th class="image-col">${isTH ? 'รูป' : 'Image'}</th>
                  <th>${isTH ? 'สินค้า' : 'Product'}</th>
                  <th>${isTH ? 'แหล่งที่มา' : 'Source'}</th>
                  <th>${isTH ? 'ราคา' : 'Price'}</th>
                  <th>${isTH ? 'ขายแล้ว' : 'Sold'}</th>
                  <th>${isTH ? 'เรตติ้ง' : 'Rating'}</th>
                  <th>${isTH ? 'คอมมิชชัน' : 'Commission'}</th>
                  <th>${isTH ? 'มุมขาย' : 'Meta angle'}</th>
                  <th>${isTH ? 'คะแนน' : 'Score'}</th>
                  <th>${isTH ? 'สถานะ' : 'Status'}</th>
                  <th>${isTH ? 'ต่อไป' : 'Next'}</th>
                </tr>
              </thead>
              <tbody>
                ${pageLeads.map(lead => {
                  const isChecked = state.finderSelectedIds.has(lead.productId);
                  return `
                    <tr class="product-row" data-product-id="${lead.productId}">
                      <td><input type="checkbox" class="finder-item-checkbox" data-product-id="${lead.productId}" ${isChecked ? 'checked' : ''} /></td>
                      <td class="image-col">${renderThumbnail(lead, 'table')}</td>
                      <td>
                        <div class="product-cell">
                          <strong>${lead.product}</strong>
                          <small>${lead.subtitle} · ${lead.category}</small>
                        </div>
                      </td>
                      <td>${shopeeLogo()}</td>
                      <td><strong>${lead.price}</strong></td>
                      <td>${lead.sold}</td>
                      <td>${lead.rating}</td>
                      <td>${lead.commission}</td>
                      <td class="angle-cell">${lead.metaAngle}</td>
                      <td><span class="score-pill ${lead.tone}">${lead.score}</span></td>
                      <td><span class="status-pill">${lead.status}</span></td>
                      <td>
                        <button class="inline-action icon-only inspect-product-btn" type="button" data-product-id="${lead.productId}" title="${isTH ? 'กดเข้าไปดูข้อมูล' : 'View details'}">
                          ${ICONS.eye}
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>

          <!-- Table Footer Pagination -->
          <div class="table-footer finder-table-footer">
            <span>${isTH ? `แสดง ${startIdx + 1}-${Math.min(startIdx + state.finderPageSize, filtered.length)} จาก ${filtered.length} รายการ` : `Showing ${startIdx + 1}-${Math.min(startIdx + state.finderPageSize, filtered.length)} of ${filtered.length} products`}</span>
            <div class="pager">
              <button type="button" id="finder-prev-page" ${currPage <= 1 ? 'disabled' : ''}>‹</button>
              <span>${currPage} / ${totalPages}</span>
              <button type="button" id="finder-next-page" ${currPage >= totalPages ? 'disabled' : ''}>›</button>
            </div>
          </div>
        </article>
      </section>
    `;
  }

  // View: Saved Products (สินค้าที่บันทึกไว้)
  function renderSavedProductsView() {
    const isTH = state.language === 'TH';
    const saved = state.savedProducts;
    const watchlist = saved.filter(p => p.status === 'Watchlist');
    const readyContent = saved.filter(p => p.status === 'Ready for content');
    const readyAds = saved.filter(p => p.status === 'Ready for ads');
    const firstProduct = saved[0];

    return `
      <section class="saved-products-page">
        <!-- Overview Card -->
        <article class="panel saved-overview">
          <div>
            <h2>Product Pipeline</h2>
            <p>${isTH ? 'สินค้าที่เลือกจาก Product Finder จะถูกจัดเข้าคิว เพื่อส่งต่อไปทำแผนขาย' : 'Shortlisted products ready for content planning, ads, offers, and outreach'}</p>
          </div>
          <div class="saved-actions">
            <button class="secondary-button" type="button" id="saved-export-btn" ${saved.length === 0 ? 'disabled' : ''}>${isTH ? 'ส่งออกที่เลือก' : 'Export selected'}</button>
            <button class="primary-button" type="button" id="saved-gen-plan-btn" ${saved.length === 0 ? 'disabled' : ''}>${ICONS.sparkles} ${isTH ? 'สร้างแผนการขาย' : 'Generate next plan'}</button>
          </div>
        </article>

        <!-- Session List Card -->
        <article class="panel saved-session ${saved.length === 0 ? 'empty' : ''}">
          <div class="saved-session-head">
            <div>
              <span>${isTH ? 'บันทึกในรอบนี้' : 'Saved this session'}</span>
              <h3>${saved.length > 0 ? (isTH ? `${saved.length} สินค้าพร้อมส่งต่อทำแผน` : `${saved.length} products ready for planning`) : (isTH ? 'ยังไม่มีสินค้าที่บันทึกจากรอบนี้' : 'No products saved yet')}</h3>
            </div>
            <strong>${saved.length}</strong>
          </div>

          ${saved.length > 0 ? `
            <div class="saved-session-controls">
              <span>${saved.length} ${isTH ? 'รายการใน pipeline' : 'items in pipeline'}</span>
              <button type="button" id="saved-clear-all">${isTH ? 'ล้างทั้งหมด' : 'Clear all'}</button>
            </div>
            <div class="saved-session-list">
              ${saved.map(item => `
                <button class="saved-session-item" type="button" data-product-id="${item.productId}">
                  ${renderThumbnail(item, 'compact')}
                  <span>
                    <strong>${item.product}</strong>
                    <small>${item.price} · sold ${item.sold} · commission ${item.commission}</small>
                    <em>${item.metaAngle}</em>
                  </span>
                  <b class="${item.tone}">${item.score}</b>
                </button>
              `).join('')}
            </div>
          ` : `
            <p>${isTH ? 'เลือกสินค้าใน Product Finder แล้วกด "บันทึกที่เลือก" หรือเปิดดูรายละเอียดสินค้าแล้วกด "บันทึกไว้ก่อน" เพื่อส่งต่อมาที่หน้านี้' : 'Select products in Product Finder or inside the Product Drawer to build your pipeline.'}</p>
          `}
        </article>

        <!-- Generated Plan Preview (When products exist) -->
        ${firstProduct ? `
          <section class="panel plan-draft">
            <div class="plan-draft-head">
              <div>
                <span>Generated sales plan</span>
                <h2>${isTH ? `แผนขายสำหรับ ${firstProduct.product}` : `Sales plan for ${firstProduct.product}`}</h2>
                <p>${isTH ? `ใช้สินค้าที่เลือกเพื่อแตกเป็นคอนเทนต์ แอด และข้อเสนอสำหรับ Facebook/IG Affiliate` : `Using selected products to create content, ads, and offers for Meta Affiliate`}</p>
              </div>
              <strong>${firstProduct.score}</strong>
            </div>
            <div class="plan-draft-grid">
              <article>
                ${ICONS.calendarDays}
                <h3>Content hook</h3>
                <p>${isTH ? `เปิดด้วยปัญหา: ${firstProduct.painPoint}. ทำคลิปสั้นแบบ ${firstProduct.metaAngle} แล้วจบด้วย Call to action.` : `Lead with pain point: ${firstProduct.painPoint}. Create review angle and end with CTA.`}</p>
                <button type="button" class="plan-jump-btn" data-view="content-planner">${isTH ? 'ส่งไป Content Planner' : 'Go to Content Planner'}</button>
              </article>
              <article>
                ${ICONS.megaphone}
                <h3>Ads angle</h3>
                <p>${isTH ? `ใช้มุม ${firstProduct.metaAngle} กับกลุ่มคนที่ซื้อของออนไลน์บ่อย เน้นราคา ${firstProduct.price} และยอดขาย ${firstProduct.sold}.` : `Target online shoppers highlighting price ${firstProduct.price} and rating ${firstProduct.rating}.`}</p>
                <button type="button" class="plan-jump-btn" data-view="ads-intelligence">${isTH ? 'ส่งไป Ads Angle' : 'Go to Ads Angle'}</button>
              </article>
              <article>
                ${ICONS.tags}
                <h3>Offer idea</h3>
                <p>${isTH ? `ทำข้อเสนอแบบ bundle/flash deal สำหรับสินค้า และใช้ commission ${firstProduct.commission} เป็นเกณฑ์คัดตัวที่คุ้มยิงต่อ.` : `Build a bundle/flash deal taking advantage of commission ${firstProduct.commission}.`}</p>
                <button type="button" class="plan-jump-btn" data-view="offer-builder">${isTH ? 'ส่งไป Offer Builder' : 'Go to Offer Builder'}</button>
              </article>
            </div>
          </section>
        ` : ''}

        <!-- Pipeline Kanban Columns -->
        <section class="pipeline-board">
          <article class="pipeline-column slate">
            <div class="pipeline-head">
              <div>
                <h3>Watchlist</h3>
                <span>${isTH ? 'เก็บไว้ดูสัญญาณเพิ่ม' : 'Monitor signals'}</span>
              </div>
              <strong>${watchlist.length}</strong>
            </div>
            <div class="pipeline-list">
              ${watchlist.map(p => `
                <button class="pipeline-card" type="button" data-product-id="${p.productId}">
                  <span class="pipeline-logo">${shopeeLogo()}</span>
                  <span class="pipeline-copy">
                    <strong>${p.product}</strong>
                    <small>${p.price} · sold ${p.sold}</small>
                    <em>${p.metaAngle}</em>
                  </span>
                  <b class="${p.tone}">${p.score}</b>
                </button>
              `).join('')}
              ${watchlist.length === 0 ? `<div class="pipeline-empty">${isTH ? 'ยังไม่มีสินค้าในขั้นนี้' : 'No items yet'}</div>` : ''}
            </div>
          </article>

          <article class="pipeline-column blue">
            <div class="pipeline-head">
              <div>
                <h3>Ready for Content</h3>
                <span>${isTH ? 'พร้อมทำ Reels / Feed' : 'Content ready'}</span>
              </div>
              <strong>${readyContent.length}</strong>
            </div>
            <div class="pipeline-list">
              ${readyContent.map(p => `
                <button class="pipeline-card" type="button" data-product-id="${p.productId}">
                  <span class="pipeline-logo">${shopeeLogo()}</span>
                  <span class="pipeline-copy">
                    <strong>${p.product}</strong>
                    <small>${p.price} · sold ${p.sold}</small>
                    <em>${p.metaAngle}</em>
                  </span>
                  <b class="${p.tone}">${p.score}</b>
                </button>
              `).join('')}
              ${readyContent.length === 0 ? `<div class="pipeline-empty">${isTH ? 'ยังไม่มีสินค้าในขั้นนี้' : 'No items yet'}</div>` : ''}
            </div>
          </article>

          <article class="pipeline-column green">
            <div class="pipeline-head">
              <div>
                <h3>Ready for Ads</h3>
                <span>${isTH ? 'พร้อมแตก hook / offer' : 'Ad angle ready'}</span>
              </div>
              <strong>${readyAds.length}</strong>
            </div>
            <div class="pipeline-list">
              ${readyAds.map(p => `
                <button class="pipeline-card" type="button" data-product-id="${p.productId}">
                  <span class="pipeline-logo">${shopeeLogo()}</span>
                  <span class="pipeline-copy">
                    <strong>${p.product}</strong>
                    <small>${p.price} · sold ${p.sold}</small>
                    <em>${p.metaAngle}</em>
                  </span>
                  <b class="${p.tone}">${p.score}</b>
                </button>
              `).join('')}
              ${readyAds.length === 0 ? `<div class="pipeline-empty">${isTH ? 'ยังไม่มีสินค้าในขั้นนี้' : 'No items yet'}</div>` : ''}
            </div>
          </article>

          <article class="pipeline-column amber">
            <div class="pipeline-head">
              <div>
                <h3>Offer Draft</h3>
                <span>${isTH ? 'รอสร้าง bundle / deal' : 'Bundle & deals'}</span>
              </div>
              <strong>0</strong>
            </div>
            <div class="pipeline-list">
              <div class="pipeline-empty">${isTH ? 'ยังไม่มีสินค้าในขั้นนี้' : 'No items yet'}</div>
            </div>
          </article>
        </section>

        <!-- Next Best Moves -->
        <section class="panel pipeline-next">
          <div class="panel-header">
            <div>
              <h2>Next best moves</h2>
              <p>${isTH ? 'เลือก action จาก pipeline เพื่อสร้างงานต่อทันที' : 'Select next actions from your pipeline'}</p>
            </div>
          </div>
          <div class="pipeline-next-grid">
            <button type="button" class="pipeline-action-btn" data-view="content-planner">
              ${ICONS.calendarDays}
              <span>
                <strong>Create 7-day content plan</strong>
                <small>${isTH ? 'แตกสินค้าเป็น Reels, Feed, CTA' : 'Plan Reels, Feed posts, and CTA'}</small>
              </span>
            </button>
            <button type="button" class="pipeline-action-btn" data-view="ads-intelligence">
              ${ICONS.megaphone}
              <span>
                <strong>Create ads angle</strong>
                <small>${isTH ? 'แตก hook, primary text, audience, KPI' : 'Generate hooks, audience, and copy'}</small>
              </span>
            </button>
            <button type="button" class="pipeline-action-btn" data-view="offer-builder">
              ${ICONS.tags}
              <span>
                <strong>Build offer set</strong>
                <small>${isTH ? 'ทำ bundle, flash deal, bonus และ guarantee' : 'Create bundles and promo sets'}</small>
              </span>
            </button>
            <button type="button" class="pipeline-action-btn" data-view="outreach-message">
              ${ICONS.send}
              <span>
                <strong>Prepare outreach</strong>
                <small>${isTH ? 'ติดต่อร้าน ครีเอเตอร์ หรือ supplier' : 'Contact shops, creators, or suppliers'}</small>
              </span>
            </button>
          </div>
        </section>
      </section>
    `;
  }

  // View: Radar Setup (ตั้งค่าเรดาร์สินค้า)
  function renderRadarSetupView() {
    const isTH = state.language === 'TH';
    const categories = ['Beauty', 'Gadget', 'Home & Kitchen', 'Fashion', 'Health', 'Mother & Baby'];

    return `
      <section class="setup-layout">
        <div class="setup-main">
          <article class="panel setup-panel">
            <div class="panel-header">
              <div>
                <h2>${isTH ? 'โปรไฟล์เรดาร์สินค้า' : 'Product Radar Profile'}</h2>
                <p>${isTH ? 'กำหนดว่าระบบควรสแกนสินค้าแบบไหน และจะเอาไปขายผ่านช่องทางใด' : 'Configure scanning parameters and target channels'}</p>
              </div>
            </div>
            <div class="form-grid">
              <label>
                <span>${isTH ? 'ชื่อเรดาร์' : 'Radar Name'}</span>
                <input type="text" id="setup-radar-name" value="Shopee Beauty + FB Reels" />
              </label>
              <label>
                <span>${isTH ? 'ตลาดเป้าหมาย' : 'Target Audience'}</span>
                <input type="text" id="setup-target-market" value="ผู้หญิง 20-38, ซื้อของออนไลน์, ชอบรีวิวสั้น" />
              </label>
              <label>
                <span>Shopee CSV / Datafeed</span>
                <button class="upload-field" type="button" id="setup-btn-goto-data">Upload CSV or paste feed URL</button>
              </label>
              <label>
                <span>Meta keywords / hashtags</span>
                <textarea id="setup-keywords">ครีมซอง, ของใช้ในบ้าน, แก้ปวดคอ, #รีวิวของดี, #ของมันต้องมี</textarea>
              </label>
            </div>
          </article>

          <article class="panel setup-panel">
            <div class="panel-header">
              <div>
                <h2>${isTH ? 'หมวดสินค้าและเป้าหมาย' : 'Categories and Channels'}</h2>
                <p>${isTH ? 'เลือกให้แคบพอเพื่อให้คะแนนแม่น ไม่กวาดทุกอย่างจนอ่านยาก' : 'Keep focused categories for high relevance'}</p>
              </div>
            </div>
            <div class="chip-grid">
              ${categories.map((c, idx) => `
                <button class="chip ${idx < 4 ? 'selected' : ''}" type="button">${c}</button>
              `).join('')}
            </div>
            <div class="channel-grid">
              ${['Affiliate', 'Ads', 'Live', 'Content'].map((ch, idx) => `
                <label class="check-tile">
                  <input type="checkbox" ${idx < 3 ? 'checked' : ''} />
                  <span>${ch}</span>
                  <small>${ch === 'Affiliate' ? (isTH ? 'สร้าง caption + link angle' : 'Captions & links') : ch === 'Ads' ? (isTH ? 'หา hook และ offer' : 'Hooks & offers') : ch === 'Live' ? (isTH ? 'ทำสคริปต์ขายสด' : 'Live selling scripts') : (isTH ? 'ทำ Reels/Feed plan' : 'Reels / Feed plan')}</small>
                </label>
              `).join('')}
            </div>
          </article>

          <article class="panel setup-panel">
            <div class="panel-header">
              <div>
                <h2>${isTH ? 'กติกาการให้คะแนน' : 'Scoring Rules Weighting'}</h2>
                <p>${isTH ? 'คะแนนโอกาสจะใช้กติกานี้จัดลำดับสินค้าใน Product Finder' : 'Opportunity score formula weights'}</p>
              </div>
            </div>
            <div class="score-rule-list">
              ${[
                ['ยอดขาย / Sales', '85%'],
                ['Rating / Review', '72%'],
                ['Commission', '68%'],
                ['Meta engagement', '76%'],
                ['Pain point fit', '64%']
              ].map(([rule, pct]) => `
                <div class="score-rule">
                  <span>${rule}</span>
                  <i><b style="width:${pct};"></b></i>
                  <strong>${pct}</strong>
                </div>
              `).join('')}
            </div>
          </article>
        </div>

        <aside class="setup-summary panel">
          <div class="summary-badge">Active Radar</div>
          <h2>Shopee Feed + Meta Affiliate</h2>
          <p>${isTH ? 'พร้อมสแกนสินค้าจาก CSV แล้วจับคู่กับสัญญาณ Facebook/Instagram เพื่อส่งต่อไปทำแผนขาย' : 'Ready to scan CSV products and match Meta signals'}</p>
          <div class="summary-stats">
            <div>
              <span>${isTH ? 'หมวดสินค้า' : 'Categories'}</span>
              <strong>4</strong>
            </div>
            <div>
              <span>${isTH ? 'ช่องทางขาย' : 'Channels'}</span>
              <strong>3</strong>
            </div>
            <div>
              <span>Meta keywords</span>
              <strong>24</strong>
            </div>
            <div>
              <span>Scoring rules</span>
              <strong>5</strong>
            </div>
          </div>
          <button class="primary-button" type="button" id="setup-save-scan-btn">${ICONS.play} ${isTH ? 'บันทึกและสแกน' : 'Save and scan'}</button>
          <button class="secondary-button" type="button" id="setup-view-rules-btn">${isTH ? 'ดูวิธีคิดคะแนน' : 'View scoring rules'}</button>
          <div class="compliance-note">${isTH ? 'ใช้เฉพาะ Shopee feed ที่ผู้ใช้มีสิทธิ์, public data, own account หรือ official API เท่านั้น' : 'Compliance note: Use only feeds you have rights to access.'}</div>
        </aside>
      </section>
    `;
  }

  // View: Market Density (ตลาด / ร้าน / ครีเอเตอร์)
  function renderMarketDensityView() {
    const isTH = state.language === 'TH';
    const topLeads = state.leads.slice(0, 8);
    const densityRows = topLeads.slice(0, 5).map(l => [l.category, `${l.product}: score ${l.score}, sold ${l.sold}, ${l.competition} competition`, l.competition, l.metaAngle]);
    const creatorRows = topLeads.slice(0, 5).map((l, idx) => [`${l.category} content source`, idx % 2 === 0 ? 'Facebook Reels' : 'Instagram', l.viral, l.metaAngle, l.score >= 86 ? (isTH ? 'เหมาะสมมาก' : 'High fit') : (isTH ? 'น่าสนใจ' : 'Good')]);

    return `
      <section class="market-page">
        <section class="market-summary-grid">
          <article class="panel market-summary-card">
            ${ICONS.store}
            <span>${isTH ? 'หมวดที่มีสินค้าใน store' : 'Categories in store'}</span>
            <strong>${new Set(topLeads.map(l => l.category)).size}</strong>
            <small>${isTH ? 'ใช้ดูความแออัดก่อนเลือกสินค้า' : 'Market density breakdown'}</small>
          </article>
          <article class="panel market-summary-card">
            ${ICONS.usersRound}
            <span>${isTH ? 'มุมคอนเทนต์ที่ดึงได้' : 'Extracted content angles'}</span>
            <strong>${new Set(topLeads.map(l => l.metaAngle)).size}</strong>
            <small>${isTH ? 'เหมาะใช้หา content angle และ partner' : 'Angle variety'}</small>
          </article>
          <article class="panel market-summary-card">
            ${ICONS.target}
            <span>${isTH ? 'สินค้าที่ score สูง' : 'High score products'}</span>
            <strong>${topLeads.filter(l => l.score >= 86).length}</strong>
            <small>${isTH ? 'สินค้า/มุมขายที่คู่แข่งยังไม่แน่น' : 'Standout opportunities'}</small>
          </article>
        </section>

        <section class="market-grid">
          <article class="panel market-panel">
            <div class="panel-header">
              <div>
                <h2>Market Density</h2>
                <p>${isTH ? 'ดูว่าหมวดไหนแข่งหนัก หมวดไหนยังมีช่องให้เล่น' : 'Analyze competitive pressure by category'}</p>
              </div>
            </div>
            <div class="density-list">
              ${densityRows.map(([cat, detail, comp, angle], idx) => `
                <div class="density-row">
                  <span>${idx + 1}</span>
                  <div>
                    <strong>${cat}</strong>
                    <small>${detail}</small>
                  </div>
                  <em class="${comp === 'High' ? 'high' : 'medium'}">${comp}</em>
                  <button type="button" class="market-angle-chip" data-angle="${angle}">${angle}</button>
                </div>
              `).join('')}
            </div>
          </article>

          <article class="panel market-panel">
            <div class="panel-header">
              <div>
                <h2>Creator & Shop Signals</h2>
                <p>${isTH ? 'เพจ/ครีเอเตอร์อ้างอิงที่ช่วยบอกว่าคอนเทนต์แบบไหนขายได้' : 'Reference accounts and content formats'}</p>
              </div>
              <button class="secondary-button" type="button" id="market-add-source">${isTH ? 'เพิ่มแหล่งข้อมูล' : 'Add source'}</button>
            </div>
            <div class="table-scroll">
              <table class="creator-table">
                <thead>
                  <tr>
                    <th>Source</th>
                    <th>Channel</th>
                    <th>Reach</th>
                    <th>Angle</th>
                    <th>Fit</th>
                  </tr>
                </thead>
                <tbody>
                  ${creatorRows.map(([src, ch, reach, angle, fit]) => `
                    <tr>
                      <td><strong>${src}</strong></td>
                      <td>${ch}</td>
                      <td>${reach}</td>
                      <td>${angle}</td>
                      <td><span class="status-pill">${fit}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </section>
    `;
  }

  // View: Signal Sources (แหล่งสัญญาณ FB/IG)
  function renderSignalSourcesView() {
    const isTH = state.language === 'TH';
    const sampleKeywords = ['#รีวิวของดี', '#ของมันต้องมี', '#ใช้ดีบอกต่อ', 'ครีมซองเซเว่น', 'แก้ปวดคอ', 'รองเท้าผ้าใบ', 'เสื้อเชิ้ตมินิมอล', 'บลัชออนติดทน', 'ลดสิวหน้าใส', 'ของใช้ในบ้าน'];

    return `
      <section class="market-page">
        <section class="market-summary-grid">
          <article class="panel market-summary-card">
            ${ICONS.usersRound}
            <span>Facebook Signals</span>
            <strong>14</strong>
            <small>${isTH ? 'กลุ่ม เพจ และโพสต์ที่เชื่อมต่อ' : 'Connected groups and pages'}</small>
          </article>
          <article class="panel market-summary-card">
            ${ICONS.activity}
            <span>Instagram Signals</span>
            <strong>28</strong>
            <small>${isTH ? 'แฮชแท็กและบัญชี Reels' : 'Monitored hashtags and Reels'}</small>
          </article>
          <article class="panel market-summary-card">
            ${ICONS.sparkles}
            <span>Manual Signals</span>
            <strong>12</strong>
            <small>${isTH ? 'คีย์เวิร์ดที่กรอกด้วยตนเอง' : 'Manually entered signal queries'}</small>
          </article>
        </section>

        <article class="panel market-panel">
          <div class="panel-header">
            <div>
              <h2>${isTH ? 'คีย์เวิร์ดและแฮชแท็กที่ติดตาม' : 'Monitored Keywords & Hashtags'}</h2>
              <p>${isTH ? 'สัญญาณจากคำเหล่านี้จะถูกนำมาใช้เพิ่มคะแนน Meta Signal Boost ให้กับสินค้า' : 'These keywords influence the Meta signal boost score'}</p>
            </div>
            <button class="primary-button" type="button" id="signals-add-kw">${isTH ? 'เพิ่มคีย์เวิร์ด' : 'Add keyword'}</button>
          </div>
          <div class="chip-grid" style="padding: 18px;">
            ${sampleKeywords.map(kw => `
              <span class="chip selected">${kw}</span>
            `).join('')}
          </div>
        </article>
      </section>
    `;
  }

  // View: Data Connections (เชื่อมต่อข้อมูล)
  function renderDataConnectionsView() {
    const isTH = state.language === 'TH';

    return `
      <section class="setup-layout">
        <div class="setup-main">
          <!-- Shopee Feed CSV Importer Card -->
          <article class="panel setup-panel">
            <div class="panel-header">
              <div>
                <h2>Shopee Feed CSV / Datafeed Import</h2>
                <p>${isTH ? 'นำเข้าไฟล์ CSV รายการสินค้าจาก Shopee Affiliate เพื่อใช้คำนวณคะแนนและวิเคราะห์' : 'Import Shopee Affiliate CSV to populate store and calculate opportunity scores'}</p>
              </div>
              <span class="status-pill green">Connected</span>
            </div>
            <div style="padding: 18px; display: grid; gap: 14px;">
              <div class="upload-zone" id="csv-drop-zone" style="border: 2px dashed var(--border-strong); border-radius: var(--radius-md); padding: 32px; text-align: center; background: var(--surface-soft); cursor: pointer;">
                <input type="file" id="shopee-csv-file-input" accept=".csv" style="display:none;" />
                <div style="margin-bottom: 10px; color: var(--blue);">${ICONS.download}</div>
                <strong>${isTH ? 'คลิกหรือลากไฟล์ Shopee CSV มาวางที่นี่' : 'Click or drag & drop Shopee CSV file here'}</strong>
                <p style="color: var(--muted); font-size: 0.76rem; margin: 6px 0 0;">${isTH ? 'รองรับไฟล์ CSV จาก Shopee Affiliate Center (เช่น Top 200 by sold, Commission Report)' : 'Supports Shopee Affiliate exported CSV'}</p>
              </div>
              <div style="display: flex; gap: 10px; align-items: center;">
                <button class="secondary-button" type="button" id="btn-download-sample-csv">${ICONS.download} ${isTH ? 'ดาวน์โหลดตัวอย่าง CSV' : 'Download sample CSV'}</button>
                <span style="font-size: 0.74rem; color: var(--muted);">${isTH ? `ปัจจุบันจัดเก็บ ${formatNumber(state.summary.storedRows)} สินค้า (${state.summary.sourceFile || '008.csv'})` : `Currently storing ${formatNumber(state.summary.storedRows)} products`}</span>
              </div>
            </div>
          </article>

          <!-- Meta API Signals Connection -->
          <article class="panel setup-panel">
            <div class="panel-header">
              <div>
                <h2>Meta Social Signals (Facebook / Instagram)</h2>
                <p>${isTH ? 'เชื่อมต่อสัญญาณความต้องการ คีย์เวิร์ด และคอนเทนต์ที่ไวรัลบน Facebook Reels / IG' : 'Connect Meta signal queries'}</p>
              </div>
              <span class="status-pill blue">Ready</span>
            </div>
            <div style="padding: 18px;">
              <p style="font-size: 0.8rem; color: var(--muted); margin: 0 0 14px;">${isTH ? 'ระบบดึงสัญญาณจากคีย์เวิร์ดและเพจสาธารณะที่ระบุไว้ในเมนู "แหล่งสัญญาณ FB/IG"' : 'Uses public signals configured in Signal Sources'}</p>
              <button class="secondary-button" type="button" id="btn-goto-signals">${ICONS.usersRound} ${isTH ? 'จัดการแหล่งสัญญาณ' : 'Manage signal sources'}</button>
            </div>
          </article>
        </div>

        <aside class="setup-summary panel">
          <div class="summary-badge">${isTH ? 'สถานะการเชื่อมต่อ' : 'Connection Status'}</div>
          <h2>Store Engine</h2>
          <p>${isTH ? 'คลังข้อมูลสินค้าทำงานแบบ In-Memory และ Local Storage พร้อมใช้งานทันที' : 'Local storage engine active'}</p>
          <div class="summary-stats">
            <div>
              <span>${isTH ? 'สินค้าที่จัดเก็บ' : 'Stored Items'}</span>
              <strong>${state.summary.storedRows}</strong>
            </div>
            <div>
              <span>${isTH ? 'คะแนนเฉลี่ย' : 'Avg Score'}</span>
              <strong>${state.summary.averageScore}</strong>
            </div>
          </div>
          <button class="primary-button" type="button" id="btn-refresh-store">${isTH ? 'สแกนคลังสินค้าใหม่' : 'Re-scan store'}</button>
        </aside>
      </section>
    `;
  }

  // View: Content Tracker (Content Tracker)
  function renderContentTrackerView() {
    const isTH = state.language === 'TH';
    const topLeads = state.leads.slice(0, 6);

    return `
      <section class="saved-products-page">
        <article class="panel saved-overview">
          <div>
            <h2>Content Tracker Playbook</h2>
            <p>${isTH ? 'ถอด hook, รูปแบบคอนเทนต์ และ CTA ที่พิสูจน์แล้วว่าช่วยผลักดันยอดขายสินค้า' : 'Selling content angles and formats'}</p>
          </div>
          <div class="saved-actions">
            <button class="primary-button" type="button" id="copy-playbook-btn">${ICONS.fileText} ${isTH ? 'คัดลอก Content Playbook' : 'Copy Content Playbook'}</button>
          </div>
        </article>

        <div style="display: grid; gap: 12px;">
          ${topLeads.map((l, idx) => `
            <article class="panel" style="padding: 16px; display: grid; gap: 8px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="display: flex; gap: 12px; align-items: center;">
                  ${renderThumbnail(l, 'compact')}
                  <div>
                    <strong style="font-size: 0.86rem;">${l.product}</strong>
                    <span style="display: block; font-size: 0.72rem; color: var(--muted);">${l.category} · ${l.price} · sold ${l.sold}</span>
                  </div>
                </div>
                <span class="score-pill ${l.tone}">Score ${l.score}</span>
              </div>
              <div style="background: var(--surface-soft); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 0.76rem; display: grid; gap: 6px;">
                <div><b>Format:</b> ${idx % 2 === 0 ? 'Facebook Reels (คลิปสั้น 15-30 วิ)' : 'Instagram Carousel / รีวิวรูปภาพ'}</div>
                <div><b>Hook:</b> "หยุดใช้... ถ้ายังไม่ได้ลองตัวนี้! ใครเจอปัญหา ${l.painPoint} ต้องดู"</div>
                <div><b>Angle:</b> ${l.metaAngle}</div>
                <div><b>CTA:</b> "พิกัดในคอมเมนต์/ลิงก์หน้าโปรไฟล์ มีโค้ดลด Shopee ส่งฟรี"</div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  // View: AI Product Insight (AI Product Insight)
  function renderAiInsightView() {
    const isTH = state.language === 'TH';
    const topLead = state.leads[0];
    const avgScore = state.summary.averageScore;

    return `
      <section class="saved-products-page">
        <article class="panel saved-overview">
          <div>
            <h2>AI Product Insight & Action Summary</h2>
            <p>${isTH ? 'การสังเคราะห์และประเมินศักยภาพสินค้าโดย Gemini AI จากสถิติยอดขายจริง' : 'Product opportunity synthesis powered by Gemini'}</p>
          </div>
          <div class="saved-actions">
            <button class="primary-button" type="button" id="ai-insight-copy-btn">${ICONS.sparkles} ${isTH ? 'คัดลอกบทวิเคราะห์ AI' : 'Copy AI Insight'}</button>
          </div>
        </article>

        <section class="market-summary-grid">
          <article class="panel market-summary-card">
            ${ICONS.target}
            <span>Product Demand</span>
            <strong>${Math.min(96, avgScore + 12)}%</strong>
            <small>${isTH ? 'ความต้องการในตลาด' : 'Market demand index'}</small>
          </article>
          <article class="panel market-summary-card">
            ${ICONS.tags}
            <span>Affiliate Fit</span>
            <strong>${topLead ? topLead.commission : '8%'}</strong>
            <small>${isTH ? 'ผลตอบแทน Affiliate' : 'Affiliate commission fit'}</small>
          </article>
          <article class="panel market-summary-card">
            ${ICONS.activity}
            <span>Angle Clarity</span>
            <strong>${Math.min(94, avgScore + 8)}%</strong>
            <small>${isTH ? 'ความชัดเจนของมุมขาย' : 'Clarity of angle'}</small>
          </article>
        </section>

        <article class="panel" style="padding: 20px;">
          <h3 style="margin: 0 0 12px; font-size: 0.96rem;">${isTH ? 'สรุปคำแนะนำเชิงกลยุทธ์' : 'Strategic Recommendations'}</h3>
          <div style="font-size: 0.8rem; line-height: 1.6; color: var(--ink); display: grid; gap: 10px;">
            <p>1. <b>สินค้ากลุ่มความงาม (Beauty):</b> เช่น <i>${topLead ? topLead.product : 'OUKEYA BLUSH'}</i> มีสถิติยอดขายสูงต่อเนื่องและคะแนนรีวิวเกิน 4.9 ดาว ควรใช้เป็นตัวชูโรงหลักในการทำคลิปสั้น</p>
            <p>2. <b>กลยุทธ์ Hook:</b> แนะนำให้เปิดคลิปด้วย Pain Point ของลูกค้าตามด้วยภาพสาธิตก่อน-หลังใช้ (Before / After) เพื่อดึงดูดผู้ใช้งานบน Reels</p>
            <p>3. <b>การตั้งราคาและโปรโมชั่น:</b> ช่วงราคา 70 - 250 บาท เป็นช่วงราคาตัดสินใจซื้อง่าย (Impulse Buy) ไม่ต้องคิดนาน เหมาะกับการติด Affiliate Link ท้ายโพสต์</p>
          </div>
        </article>
      </section>
    `;
  }

  // View: Ads Intelligence (วิเคราะห์มุมแอด)
  function renderAdsIntelligenceView() {
    const isTH = state.language === 'TH';
    const topLead = state.leads[0];

    return `
      <section class="saved-products-page">
        <article class="panel saved-overview">
          <div>
            <h2>${isTH ? 'วิเคราะห์มุมแอด (Ads Intelligence)' : 'Ads Angle Intelligence'}</h2>
            <p>${isTH ? 'โครงสร้างข้อความโฆษณาและมุมยิงแอดสำหรับ Facebook / Instagram' : 'Ad copywriting and funnel angles'}</p>
          </div>
          <div class="saved-actions">
            <button class="primary-button" type="button" id="ads-copy-btn">${ICONS.megaphone} ${isTH ? 'คัดลอก Ad Copy ทั้งหมด' : 'Copy All Ad Copy'}</button>
          </div>
        </article>

        ${topLead ? `
          <div style="display: grid; gap: 14px;">
            <article class="panel" style="padding: 18px; display: grid; gap: 10px;">
              <span class="status-pill green" style="width: fit-content;">TOFU (Top of Funnel - สร้างการรับรู้)</span>
              <div>
                <strong style="display: block; font-size: 0.88rem; margin-bottom: 4px;">Primary Text:</strong>
                <div style="background: var(--surface-soft); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 0.78rem;">
                  "ใครยังเจอปัญหา ${topLead.painPoint} ต้องลองตัวนี้! ${topLead.product} รีวิวแน่นกว่า ${topLead.sold} ชิ้น ราคาเบาๆ แค่ ${topLead.price} ของแท้จาก official จัดส่งไวมาก"
                </div>
              </div>
              <div>
                <strong style="display: block; font-size: 0.88rem; margin-bottom: 4px;">Headline:</strong>
                <div style="background: var(--surface-soft); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 0.78rem;">
                  🔥 ${topLead.product.slice(0, 32)}... ส่งฟรีวันนี้
                </div>
              </div>
              <div>
                <strong style="display: block; font-size: 0.88rem; margin-bottom: 4px;">Call To Action:</strong>
                <span class="score-pill blue">Shop Now / ดูข้อเสนอ</span>
              </div>
            </article>

            <article class="panel" style="padding: 18px; display: grid; gap: 10px;">
              <span class="status-pill amber" style="width: fit-content;">BOFU (Bottom of Funnel - ปิดการขาย)</span>
              <div>
                <strong style="display: block; font-size: 0.88rem; margin-bottom: 4px;">Primary Text:</strong>
                <div style="background: var(--surface-soft); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 0.78rem;">
                  "ด่วนก่อนหมดโปร! ซื้อ ${topLead.product} วันนี้ได้ราคาพิเศษ ${topLead.price} การันตีรีวิว ${topLead.rating} ดาวเต็ม กดที่ลิงก์ด่วนก่อนของหมดสต็อก!"
                </div>
              </div>
            </article>
          </div>
        ` : ''}
      </section>
    `;
  }

  // View: Offer Builder (สร้างข้อเสนอ)
  function renderOfferBuilderView() {
    const isTH = state.language === 'TH';
    const topLead = state.leads[0];

    return `
      <section class="saved-products-page">
        <article class="panel saved-overview">
          <div>
            <h2>${isTH ? 'สร้างข้อเสนอสินค้า (Product Offers)' : 'Product Offer Builder'}</h2>
            <p>${isTH ? 'สร้าง Bundle, โปรส่งฟรี และ Flash Sale Deals เพื่อเร่งการตัดสินใจซื้อ' : 'Build high-converting bundles and deals'}</p>
          </div>
          <div class="saved-actions">
            <button class="primary-button" type="button" id="offer-copy-btn">${ICONS.tags} ${isTH ? 'คัดลอกข้อเสนอ' : 'Copy Offer'}</button>
          </div>
        </article>

        ${topLead ? `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
            <article class="panel" style="padding: 18px; display: grid; gap: 8px;">
              <span class="status-pill green" style="width: fit-content;">Bundle Deal</span>
              <strong style="font-size: 0.94rem;">ชุดสุดคุ้ม 1 แถม 1</strong>
              <p style="font-size: 0.78rem; color: var(--muted); margin: 0;">ซื้อ ${topLead.product} จับคู่เซ็ตพกพา ลดเพิ่มทันที 15% พร้อมแถมของพรีเมียม</p>
            </article>

            <article class="panel" style="padding: 18px; display: grid; gap: 8px;">
              <span class="status-pill blue" style="width: fit-content;">Free Shipping Angle</span>
              <strong style="font-size: 0.94rem;">โปรส่งฟรีทันทีไม่ต้องเก็บโค้ด</strong>
              <p style="font-size: 0.78rem; color: var(--muted); margin: 0;">ซื้อครบ 199 บาท รับสิทธิ์ส่งฟรีด่วนถึงหน้าบ้านทั่วประเทศ</p>
            </article>

            <article class="panel" style="padding: 18px; display: grid; gap: 8px;">
              <span class="status-pill amber" style="width: fit-content;">Flash Deal / Live Only</span>
              <strong style="font-size: 0.94rem;">ดีลพิเศษเฉพาะในไลฟ์</strong>
              <p style="font-size: 0.78rem; color: var(--muted); margin: 0;">จำกัดเวลา 30 นาที ลดราคาพิเศษเหลือ ${topLead.price} จากราคาเต็ม</p>
            </article>
          </div>
        ` : ''}
      </section>
    `;
  }

  // View: Affiliate Content Planner (Content Planner)
  function renderContentPlannerView() {
    const isTH = state.language === 'TH';
    const topLead = state.leads[0];
    const days = [
      { day: 'Day 1', format: 'Reels (Unboxing)', hook: 'แกะกล่องของน่ารัก ใช้งบไม่ถึงร้อย!', cta: 'ปักหมุดพิกัด Shopee' },
      { day: 'Day 2', format: 'Carousel Review', hook: 'สรุปข้อดี-ข้อเสียหลังลองใช้จริง 7 วัน', cta: 'เซฟเก็บไว้ดูได้เลย' },
      { day: 'Day 3', format: 'Problem / Solution', hook: 'ใครเจอปัญหานี้อยู่บ้าง? ตัวนี้ช่วยได้จริง', cta: 'กดลิงก์หน้าโปรไฟล์' },
      { day: 'Day 4', format: 'Comparison', hook: 'เทียบรุ่นถูก vs รุ่นฮิต ต่างกันตรงไหน?', cta: 'ดูราคาโปรโมชั่น' },
      { day: 'Day 5', format: 'Story / Behind Scenes', hook: 'พกไปใช้วันทำงาน สะดวกมากกก', cta: 'สไลด์ดูร้านแนะนำ' },
      { day: 'Day 6', format: 'Reels (How-to)', hook: 'เทคนิคใช้ให้เห็นผลไวใน 3 ขั้นตอน', cta: 'แชร์ให้เพื่อน' },
      { day: 'Day 7', format: 'Live Stream', hook: 'แจกโค้ดลับ ตอบคำถามสดๆ ทุกข้อ', cta: 'กดสั่งในตะกร้าไลฟ์' }
    ];

    return `
      <section class="saved-products-page">
        <article class="panel saved-overview">
          <div>
            <h2>7-Day Affiliate Content Planner</h2>
            <p>${isTH ? 'แผนการผลิตคอนเทนต์ 7 วัน พร้อม Hook และ CTA ที่กำหนดล่วงหน้า' : '7-day content schedule'}</p>
          </div>
          <div class="saved-actions">
            <button class="primary-button" type="button" id="planner-copy-btn">${ICONS.calendarDays} ${isTH ? 'คัดลอกตารางคอนเทนต์' : 'Copy Calendar'}</button>
          </div>
        </article>

        <div style="display: grid; gap: 10px;">
          ${days.map(d => `
            <article class="panel" style="padding: 14px 18px; display: grid; grid-template-columns: 80px 180px minmax(0, 1fr) 140px; align-items: center; gap: 12px;">
              <strong style="color: var(--blue); font-size: 0.88rem;">${d.day}</strong>
              <span class="status-pill blue">${d.format}</span>
              <span style="font-size: 0.8rem; color: var(--ink);"><b>Hook:</b> "${d.hook}"</span>
              <span style="font-size: 0.74rem; color: var(--muted); text-align: right;">${d.cta}</span>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  // View: Outreach Message
  function renderOutreachMessageView() {
    const isTH = state.language === 'TH';
    const topLead = state.leads[0];

    return `
      <section class="saved-products-page">
        <article class="panel saved-overview">
          <div>
            <h2>${isTH ? 'ข้อความติดต่อร้าน / ครีเอเตอร์ (Outreach Message)' : 'Outreach Message Templates'}</h2>
            <p>${isTH ? 'สร้างข้อความติดต่อพาร์ทเนอร์และร้านค้าโดยไม่สแปมและมีความเป็นมืออาชีพ' : 'Context-aware outreach drafts'}</p>
          </div>
          <div class="saved-actions">
            <button class="primary-button" type="button" id="outreach-copy-btn">${ICONS.send} ${isTH ? 'คัดลอกข้อความ' : 'Copy Message'}</button>
          </div>
        </article>

        ${topLead ? `
          <div style="display: grid; gap: 14px;">
            <article class="panel" style="padding: 18px; display: grid; gap: 10px;">
              <span class="status-pill green" style="width: fit-content;">ติดต่อร้านค้า / ขอเรทคอมมิชชันพิเศษ</span>
              <div style="background: var(--surface-soft); padding: 14px; border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 0.8rem; line-height: 1.6;">
                "สวัสดีครับแอดมินร้าน <b>${topLead.subtitle}</b> พอดีทางเราเป็นครีเอเตอร์ทำคอนเทนต์รีวิวบนช่อง Facebook / IG (ผู้ติดตามกลุ่มช้อปปิ้งออนไลน์) ได้เห็นสินค้า <b>${topLead.product}</b> น่าสนใจมากและมีผู้ติดตามสนใจสอบถามเข้ามา จึงอยากสอบถามว่าทางร้านมีโปรโมชั่นพิเศษหรือเปิดรับ Creator Affiliate เรทพิเศษเพิ่มเติมไหมครับ ยินดีทำคลิปรีวิวและช่วยโปรโมทสินค้าให้ครับ ขอบคุณครับ"
              </div>
            </article>

            <article class="panel" style="padding: 18px; display: grid; gap: 10px;">
              <span class="status-pill blue" style="width: fit-content;">ติดต่ออินฟลูเอนเซอร์ / ครีเอเตอร์ร่วมงาน</span>
              <div style="background: var(--surface-soft); padding: 14px; border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 0.8rem; line-height: 1.6;">
                "สวัสดีครับคุณครีเอเตอร์ ทางเราชอบสไตล์การทำคลิปของคุณมากครับ มีสินค้ากลุ่ม <b>${topLead.category}</b> ยอดขายอันดับ 1 ใน Shopee อยากส่งให้ทดลองใช้และร่วมรีวิว หากสนใจรับสินค้าไปทดลอง รบกวนแจ้งชื่อที่อยู่ได้เลยนะครับ ขอบคุณครับ"
              </div>
            </article>
          </div>
        ` : ''}
      </section>
    `;
  }

  // View: Reports (รายงาน)
  function renderReportsView() {
    const isTH = state.language === 'TH';

    return `
      <section class="saved-products-page">
        <article class="panel saved-overview">
          <div>
            <h2>${isTH ? 'ส่งออกรายงานการวิเคราะห์ (Reports)' : 'Exportable Intelligence Reports'}</h2>
            <p>${isTH ? 'ดาวน์โหลดข้อมูลสรุปในรูปแบบ CSV หรือ Markdown เพื่อนำไปใช้ประชุมหรือวางแผน' : 'Export reports in CSV and Markdown formats'}</p>
          </div>
        </article>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
          <article class="panel" style="padding: 18px; display: grid; gap: 10px;">
            <strong style="font-size: 0.94rem;">Product Opportunity Report</strong>
            <p style="font-size: 0.78rem; color: var(--muted); margin: 0;">รวมรายการสินค้าทั้งหมด พร้อมคะแนน Score, ยอดขาย, ราคา และ Meta Angle</p>
            <button class="primary-button" type="button" id="rep-export-products">${ICONS.download} ดาวน์โหลด CSV</button>
          </article>

          <article class="panel" style="padding: 18px; display: grid; gap: 10px;">
            <strong style="font-size: 0.94rem;">Content Plan Summary</strong>
            <p style="font-size: 0.78rem; color: var(--muted); margin: 0;">แผนการทำคอนเทนต์ 7 วัน พร้อมไอเดีย Hook และ CTA</p>
            <button class="secondary-button" type="button" id="rep-export-content">${ICONS.fileText} คัดลอก Markdown</button>
          </article>

          <article class="panel" style="padding: 18px; display: grid; gap: 10px;">
            <strong style="font-size: 0.94rem;">Executive Brief</strong>
            <p style="font-size: 0.78rem; color: var(--muted); margin: 0;">บทสรุปภาพรวมสำหรับผู้บริหาร สรุปหมวดหมู่สินค้าที่มีศักยภาพสูงสุด</p>
            <button class="secondary-button" type="button" id="rep-export-exec">${ICONS.sparkles} คัดลอกสรุป</button>
          </article>
        </div>
      </section>
    `;
  }

  // View: Settings (การตั้งค่า)
  function renderSettingsView() {
    const isTH = state.language === 'TH';

    return `
      <section class="setup-layout">
        <div class="setup-main">
          <article class="panel setup-panel">
            <div class="panel-header">
              <div>
                <h2>AI Provider & Engine Configuration</h2>
                <p>${isTH ? 'กำหนดค่าการเชื่อมต่อ AI Engine สำหรับการสร้าง Insight และวิเคราะห์ข้อมูล' : 'Configure LLM backend'}</p>
              </div>
            </div>
            <div class="form-grid">
              <label>
                <span>AI Provider</span>
                <select id="settings-provider">
                  <option value="Gemini" selected>Google Gemini (Recommended Free Tier)</option>
                  <option value="OpenAI">OpenAI (ChatGPT)</option>
                  <option value="Anthropic">Anthropic (Claude)</option>
                  <option value="OpenRouter">OpenRouter Auto</option>
                </select>
              </label>
              <label>
                <span>Model</span>
                <select id="settings-model">
                  <option value="gemini-3.1-flash-lite" selected>Gemini 3.1 Flash Lite (15 RPM / 500 RPD Free)</option>
                  <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
                  <option value="gpt-4.1-mini">GPT 4.1 Mini</option>
                  <option value="claude-sonnet-4">Claude Sonnet 4</option>
                </select>
              </label>
              <label style="grid-column: 1 / -1;">
                <span>API Key (Optional / Private)</span>
                <input type="password" id="settings-api-key" placeholder="AIzaSy... (จัดเก็บใน Local Storage เท่านั้น ไม่ส่งขึ้นเซิร์ฟเวอร์)" value="${state.aiSettings.apiKey || ''}" />
              </label>
            </div>
            <div style="padding: 0 16px 16px;">
              <button class="primary-button" type="button" id="settings-save-btn">${isTH ? 'บันทึกการตั้งค่า' : 'Save settings'}</button>
            </div>
          </article>

          <article class="panel setup-panel">
            <div class="panel-header">
              <div>
                <h2>Localization & System Defaults</h2>
                <p>${isTH ? 'ภาษาและเขตเวลาของระบบ' : 'Language and Timezone'}</p>
              </div>
            </div>
            <div class="form-grid">
              <label>
                <span>${isTH ? 'ภาษาหลัก (Language)' : 'Language'}</span>
                <select id="settings-lang-select">
                  <option value="TH" ${state.language === 'TH' ? 'selected' : ''}>ภาษาไทย (TH)</option>
                  <option value="EN" ${state.language === 'EN' ? 'selected' : ''}>English (EN)</option>
                </select>
              </label>
              <label>
                <span>Timezone</span>
                <input type="text" value="Asia/Bangkok (UTC+07:00)" disabled />
              </label>
            </div>
          </article>
        </div>
      </section>
    `;
  }

  // View: Installation Guide
  function renderInstallationGuideView() {
    const isTH = state.language === 'TH';

    return `
      <section class="saved-products-page">
        <article class="panel saved-overview">
          <div>
            <h2>TrendRadar AI Installation & Deployment Manual</h2>
            <p>${isTH ? 'คู่มือการติดตั้งและใช้งานระบบบนเครื่อง Local หรือ Web Server' : 'Deployment and setup documentation'}</p>
          </div>
        </article>

        <div style="display: grid; gap: 14px;">
          <article class="panel" style="padding: 18px; display: grid; gap: 8px;">
            <strong style="font-size: 0.94rem; color: var(--blue);">Step 1: โครงสร้างไฟล์ของระบบ (File Structure)</strong>
            <p style="font-size: 0.8rem; color: var(--muted); margin: 0;">ระบบทำงานเป็น Single Page Application (SPA) น้ำหนักเบา ประกอบด้วย <code>index.html</code>, <code>style.css</code>, <code>app.js</code>, และ <code>products_data.js</code> โดยไม่มี Dependency ซับซ้อน</p>
          </article>

          <article class="panel" style="padding: 18px; display: grid; gap: 8px;">
            <strong style="font-size: 0.94rem; color: var(--blue);">Step 2: การเปิดใช้งาน (How to Run)</strong>
            <p style="font-size: 0.8rem; color: var(--muted); margin: 0;">สามารถดับเบิลคลิกเปิดไฟล์ <code>index.html</code> ผ่านเว็บเบราว์เซอร์ (Chrome, Edge, Firefox, Safari) ได้ทันที หรือรันผ่าน Local HTTP Server บนพอร์ต 3000</p>
          </article>

          <article class="panel" style="padding: 18px; display: grid; gap: 8px;">
            <strong style="font-size: 0.94rem; color: var(--blue);">Step 3: การนำเข้าข้อมูลสินค้า Shopee (Data Feed Import)</strong>
            <p style="font-size: 0.8rem; color: var(--muted); margin: 0;">ไปที่เมนู "เชื่อมต่อข้อมูล" (Data Connections) แล้วลากไฟล์ CSV ที่ส่งออกจาก Shopee Affiliate Center มาวาง ระบบจะอัปเดตแคตตาล็อกสินค้าและคำนวณคะแนน Opportunity Score แบบ Real-time</p>
          </article>
        </div>
      </section>
    `;
  }

  // View: User Manual (คู่มือใช้งาน)
  function renderUserManualView() {
    const isTH = state.language === 'TH';

    return `
      <section class="saved-products-page">
        <article class="panel saved-overview">
          <div>
            <h2>${isTH ? 'คู่มือการใช้งาน TrendRadar AI' : 'User Manual & Workflow'}</h2>
            <p>${isTH ? 'ขั้นตอน 5 สเต็ปในการเปลี่ยนข้อมูลสินค้า Shopee เป็นยอดขาย Affiliate' : '5-step workflow from data to revenue'}</p>
          </div>
        </article>

        <div style="display: grid; gap: 12px;">
          ${[
            ['1. นำเข้าข้อมูล (Connect Data)', 'อัปโหลดไฟล์ Shopee CSV หรือสแกนผ่าน Connector เพื่อนำรายการสินค้าและยอดขายเข้าสู่ระบบ'],
            ['2. คัดกรองสินค้า (Find Opportunities)', 'ใช้หน้า Product Finder ดูคะแนน Opportunity Score, ยอดขาย, Rating และ Commission เพื่อหาสินค้าที่มีศักยภาพสูงสุด'],
            ['3. กดดูรายละเอียด (Inspect Product)', 'คลิกที่ไอคอนดวงตาหรือคลิกที่แถวสินค้าเพื่อเปิดหน้าต่าง Product Drawer ดูการวิเคราะห์โดย AI และ Score Breakdown'],
            ['4. บันทึกลง Pipeline (Save Shortlist)', 'เลือกสินค้าที่ผ่านการคัดเลือกแล้วบันทึกไว้ใน Saved Products เพื่อเตรียมวางแผน'],
            ['5. แตกแผนคอนเทนต์และแอด (Content & Ads)', 'ส่งต่อไปทำ 7-Day Content Plan, วิเคราะห์มุมแอด (Ads Angle), และสร้างโปรโมชั่น (Offer Builder)']
          ].map(([title, desc], idx) => `
            <article class="panel" style="padding: 16px; display: grid; gap: 6px;">
              <strong style="font-size: 0.88rem; color: var(--blue);">${title}</strong>
              <p style="font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.5;">${desc}</p>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  // View: Pricing / License
  function renderPricingLicenseView() {
    const isTH = state.language === 'TH';

    return `
      <section class="saved-products-page">
        <article class="panel saved-overview">
          <div>
            <h2>TrendRadar AI Lifetime Deal & License</h2>
            <p>${isTH ? 'ซื้อขาดครั้งเดียว ใช้งานได้ตลอดชีพ ไม่มีค่าธรรมเนียมรายเดือน' : 'One-time payment lifetime deal'}</p>
          </div>
        </article>

        <article class="panel" style="padding: 24px; display: grid; gap: 16px; max-width: 600px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong style="font-size: 1.2rem; display: block;">Pro Plan (Lifetime License)</strong>
              <small style="color: var(--muted);">ใช้งานได้เต็มรูปแบบ ทุกฟังก์ชัน</small>
            </div>
            <span class="status-pill green">Active</span>
          </div>

          <div style="border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 14px 0; display: grid; gap: 8px; font-size: 0.8rem;">
            <div>✓ ครอบคลุมทั้ง 18 โมดูลการค้นหาและวิเคราะห์</div>
            <div>✓ สแกนและนำเข้า Shopee CSV ไม่จำกัดจำนวนครั้ง</div>
            <div>✓ ระบบ Product Finder และ Opportunity Score</div>
            <div>✓ ระบบจัดเก็บสินค้าเข้า Pipeline</div>
            <div>✓ Content Plan, Ads Angle, Offer Builder และ Outreach</div>
            <div>✓ ส่งออกรายงาน CSV และ Markdown</div>
            <div>✓ สิทธิ์การใช้งานเชิงพาณิชย์</div>
          </div>

          <div>
            <span style="font-size: 0.74rem; color: var(--muted); display: block;">เครดิตคงเหลือในรอบนี้</span>
            <strong style="font-size: 1.1rem; color: var(--ink);">12,450 / 20,000</strong>
          </div>
        </article>
      </section>
    `;
  }

  // --- Main Renderer ---
  function render() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    const isTH = state.language === 'TH';

    // Sidebar HTML
    const sidebarHtml = `
      <aside class="sidebar ${state.sidebarOpen ? 'open' : ''}" aria-label="TrendRadar navigation">
        <div class="brand-block">
          <div class="brand-mark">${ICONS.trendingUp}</div>
          <div>
            <strong>TrendRadar AI</strong>
            <span>Marketplace Intelligence</span>
          </div>
        </div>

        <nav class="nav-list">
          ${NAV_CONFIG.map(group => `
            <div class="nav-group">
              <p>${isTH ? group.titleTH : group.titleEN}</p>
              ${group.items.map(item => {
                const isActive = state.activeView === item.id;
                const text = isTH ? item.th : item.en;
                return `
                  <button class="nav-item ${isActive ? 'active' : ''}" type="button" data-view="${item.id}">
                    ${ICONS[item.icon]}
                    <span>
                      <strong>${text.label}</strong>
                      <small>${text.sub}</small>
                    </span>
                  </button>
                `;
              }).join('')}
            </div>
          `).join('')}
        </nav>

        <details class="plan-card">
          <summary>
            <span>${isTH ? 'แพ็กเกจปัจจุบัน' : 'Current Plan'}</span>
            <strong>Pro Plan</strong>
            <small>${isTH ? 'ใช้งานอยู่' : 'Active'}</small>
            ${ICONS.chevronDown}
          </summary>
          <div class="plan-body">
            <p>${isTH ? 'รีเซ็ตรอบถัดไป: 22 ก.ค. 2026' : 'Next reset: 22 Jul 2026'}</p>
            <span>${isTH ? 'เครดิตคงเหลือ' : 'Credits Left'}</span>
            <strong>12,450 / 20,000</strong>
            <i><b></b></i>
            <button type="button" id="sidebar-upgrade-btn">${isTH ? 'อัปเกรดแพ็กเกจ' : 'Upgrade Plan'}</button>
          </div>
        </details>
      </aside>
      ${state.sidebarOpen ? `<button class="nav-scrim visible" type="button" aria-label="Close navigation" id="nav-scrim-btn"></button>` : ''}
    `;

    // Topbar HTML
    const topbarHtml = `
      <header class="topbar">
        <button class="icon-button mobile-only" type="button" aria-label="Open navigation" id="mobile-nav-toggle">
          ${ICONS.ellipsisVertical}
        </button>

        <form class="search-box" id="topbar-search-form">
          ${ICONS.search}
          <input type="text" id="topbar-search-input" value="${state.searchQuery}" placeholder="${isTH ? 'ค้นหาสินค้า คีย์เวิร์ด มุมคอนเทนต์...' : 'Search products, keywords, or content angles...'}" />
          ${state.searchQuery ? `<button class="search-clear" type="button" id="topbar-clear-search">${ICONS.x}</button>` : ''}
          <button class="search-submit" type="submit">${isTH ? 'ค้นหา' : 'Search'}</button>
        </form>

        <button class="select-button source-select" type="button" id="topbar-source-select">
          <span class="source-icon">S</span>
          <span>
            <strong>Shopee Feed</strong>
            <small>${isTH ? 'ข้อมูลสินค้านำเข้า' : 'Imported product data'}</small>
          </span>
          ${ICONS.chevronDown}
        </button>

        <button class="latest-import-chip" type="button" title="${state.summary.sourceFile || 'Shopee Feed'} · ${formatNumber(state.summary.storedRows)} products" id="topbar-latest-chip">
          ${ICONS.calendarDays}
          <span>
            <strong>${isTH ? 'รอบข้อมูลล่าสุด' : 'Latest batch'}</strong>
            <small>${formatNumber(state.summary.storedRows)} ${isTH ? 'สินค้า' : 'products'}</small>
          </span>
        </button>

        <div class="live-clock" title="Asia/Bangkok">
          ${ICONS.clock3}
          <span id="live-clock-time">--:--:--</span>
          <small id="live-clock-date">-- --- ----</small>
        </div>

        <div class="language-toggle">
          <button class="${state.language === 'TH' ? 'selected' : ''}" type="button" id="lang-btn-th">TH</button>
          <button class="${state.language === 'EN' ? 'selected' : ''}" type="button" id="lang-btn-en">EN</button>
        </div>

        <button class="export-button" type="button" id="topbar-export-btn">
          ${ICONS.download} ${isTH ? 'ส่งออก' : 'Export'} ${ICONS.chevronDown}
        </button>

        <button class="icon-button topbar-notification" type="button" aria-label="Notifications" id="topbar-bell-btn">
          ${ICONS.bell}
        </button>

        <div class="avatar">W</div>
        <div class="profile-copy">
          <strong>Wansavang</strong>
          <small>Owner</small>
        </div>
      </header>
    `;

    // View Content HTML
    let viewContentHtml = '';
    switch (state.activeView) {
      case 'overview':
        viewContentHtml = renderOverviewView();
        break;
      case 'lead-finder':
        viewContentHtml = renderLeadFinderView();
        break;
      case 'saved-products':
        viewContentHtml = renderSavedProductsView();
        break;
      case 'business-setup':
        viewContentHtml = renderRadarSetupView();
        break;
      case 'competitor-finder':
        viewContentHtml = renderMarketDensityView();
        break;
      case 'signal-sources':
        viewContentHtml = renderSignalSourcesView();
        break;
      case 'data-connections':
        viewContentHtml = renderDataConnectionsView();
        break;
      case 'content-tracker':
        viewContentHtml = renderContentTrackerView();
        break;
      case 'ai-insight':
        viewContentHtml = renderAiInsightView();
        break;
      case 'ads-intelligence':
        viewContentHtml = renderAdsIntelligenceView();
        break;
      case 'offer-builder':
        viewContentHtml = renderOfferBuilderView();
        break;
      case 'content-planner':
        viewContentHtml = renderContentPlannerView();
        break;
      case 'outreach-message':
        viewContentHtml = renderOutreachMessageView();
        break;
      case 'reports':
        viewContentHtml = renderReportsView();
        break;
      case 'settings':
        viewContentHtml = renderSettingsView();
        break;
      case 'installation-guide':
        viewContentHtml = renderInstallationGuideView();
        break;
      case 'user-manual':
        viewContentHtml = renderUserManualView();
        break;
      case 'pricing-license':
        viewContentHtml = renderPricingLicenseView();
        break;
      default:
        viewContentHtml = renderOverviewView();
    }

    // Combine App Shell
    appEl.innerHTML = `
      <div class="app-shell">
        ${sidebarHtml}
        <main class="workspace">
          ${topbarHtml}
          <div class="workspace-inner">
            ${renderCommandHeader(state.activeView)}
            ${viewContentHtml}
          </div>
        </main>
      </div>
    `;

    // Attach Event Listeners
    attachEventListeners();
  }

  // --- Attach Event Listeners to DOM ---
  function attachEventListeners() {
    const isTH = state.language === 'TH';

    // Sidebar navigation buttons
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.onclick = () => {
        const view = btn.getAttribute('data-view');
        if (view) navigateTo(view);
      };
    });

    const scrim = document.getElementById('nav-scrim-btn');
    if (scrim) scrim.onclick = () => { state.sidebarOpen = false; render(); };

    const mobileToggle = document.getElementById('mobile-nav-toggle');
    if (mobileToggle) mobileToggle.onclick = () => { state.sidebarOpen = !state.sidebarOpen; render(); };

    const sidebarUpgrade = document.getElementById('sidebar-upgrade-btn');
    if (sidebarUpgrade) sidebarUpgrade.onclick = () => navigateTo('pricing-license');

    // Language Toggle
    const btnTH = document.getElementById('lang-btn-th');
    const btnEN = document.getElementById('lang-btn-en');
    if (btnTH) btnTH.onclick = () => {
      state.language = 'TH';
      localStorage.setItem('trendradar-ui-language', 'TH');
      showToast('ภาษาไทยพร้อมใช้งาน', 'เมนูหลัก แถบบน และเนื้อหาแสดงเป็นภาษาไทยแล้ว', 'success');
      render();
    };
    if (btnEN) btnEN.onclick = () => {
      state.language = 'EN';
      localStorage.setItem('trendradar-ui-language', 'EN');
      showToast('English UI is active', 'Main navigation, top bar, and tables now use English.', 'success');
      render();
    };

    // Topbar Search Form
    const searchForm = document.getElementById('topbar-search-form');
    const searchInput = document.getElementById('topbar-search-input');
    const clearSearch = document.getElementById('topbar-clear-search');
    if (searchForm && searchInput) {
      searchForm.onsubmit = e => {
        e.preventDefault();
        state.searchQuery = searchInput.value.trim();
        state.finderPage = 1;
        navigateTo('lead-finder');
        showToast(
          isTH ? 'ใช้คำค้นหาแล้ว' : 'Search applied',
          state.searchQuery ? (isTH ? `Product Finder กรองด้วยคำว่า "${state.searchQuery}" แล้ว` : `Product Finder filtering by "${state.searchQuery}"`) : (isTH ? 'แสดงสินค้าทั้งหมด' : 'Showing all products'),
          'info'
        );
      };
    }
    if (clearSearch) {
      clearSearch.onclick = () => {
        state.searchQuery = '';
        render();
      };
    }

    // Topbar Source / Latest Chip Click
    const srcSelect = document.getElementById('topbar-source-select');
    const latestChip = document.getElementById('topbar-latest-chip');
    if (srcSelect) srcSelect.onclick = () => navigateTo('data-connections');
    if (latestChip) latestChip.onclick = () => navigateTo('data-connections');

    // Topbar Export / Bell
    const exportBtn = document.getElementById('topbar-export-btn');
    if (exportBtn) exportBtn.onclick = () => navigateTo('reports');

    const bellBtn = document.getElementById('topbar-bell-btn');
    if (bellBtn) bellBtn.onclick = () => {
      showToast(
        isTH ? 'ยังไม่มีแจ้งเตือนใหม่' : 'No unread notifications',
        isTH ? 'ระบบบันทึกสถานะการเชื่อมต่อและสินค้าล่าสุดเรียบร้อยแล้ว' : 'System is connected and data is up to date.',
        'info'
      );
    };

    // Command Header Buttons
    const cmdScanFeed = document.getElementById('cmd-scan-feed');
    const cmdUploadCsv = document.getElementById('cmd-upload-csv');
    if (cmdScanFeed) cmdScanFeed.onclick = () => navigateTo('data-connections');
    if (cmdUploadCsv) cmdUploadCsv.onclick = () => navigateTo('data-connections');

    const cmdFinderScan = document.getElementById('cmd-finder-scan');
    const cmdFinderImport = document.getElementById('cmd-finder-import');
    if (cmdFinderScan) cmdFinderScan.onclick = () => showToast(isTH ? 'สแกนสินค้าเรียบร้อย' : 'Products scanned', isTH ? `ตรวจพบ ${state.leads.length} สินค้าใน store` : `Found ${state.leads.length} products`, 'success');
    if (cmdFinderImport) cmdFinderImport.onclick = () => navigateTo('data-connections');

    const cmdSavedPlan = document.getElementById('cmd-saved-plan');
    const cmdSavedExport = document.getElementById('cmd-saved-export');
    if (cmdSavedPlan) cmdSavedPlan.onclick = () => navigateTo('content-planner');
    if (cmdSavedExport) cmdSavedExport.onclick = () => {
      exportCSV('trendradar-saved-products.csv', [
        ['Product', 'Category', 'Price', 'Sold', 'Commission', 'Score', 'Status'],
        ...state.savedProducts.map(p => [p.product, p.category, p.price, p.sold, p.commission, p.score, p.status])
      ]);
      showToast(isTH ? 'ส่งออกเรียบร้อย' : 'Exported', isTH ? 'ดาวน์โหลดไฟล์ CSV แล้ว' : 'CSV file downloaded', 'success');
    };

    // Hero buttons in Overview
    const heroFinder = document.getElementById('hero-btn-finder');
    const heroScan = document.getElementById('hero-btn-scan');
    const heroSignals = document.getElementById('hero-btn-signals');
    if (heroFinder) heroFinder.onclick = () => navigateTo('lead-finder');
    if (heroScan) heroScan.onclick = () => navigateTo('data-connections');
    if (heroSignals) heroSignals.onclick = () => navigateTo('signal-sources');

    const btnScoring = document.getElementById('btn-scoring-method');
    if (btnScoring) btnScoring.onclick = () => {
      showToast(
        isTH ? 'คะแนนอิงข้อมูลสินค้าที่นำเข้า' : 'Scoring uses imported product facts',
        isTH ? 'คะแนนคำนวณจากยอดขายจริง, ราคา, รีวิว, ค่าคอมมิชชัน และเหตุผลความต้องการสินค้า' : 'Score calculated from sales, price, rating, and commission',
        'info'
      );
    };

    // Product Inspection Click handlers (Rows, Eye buttons, Opportunity cards, Rank items, Matrix dots)
    document.querySelectorAll('.product-row').forEach(row => {
      row.onclick = (e) => {
        if (e.target.tagName === 'INPUT' || e.target.closest('input')) return;
        const id = row.getAttribute('data-product-id');
        const lead = state.leads.find(l => l.productId === id);
        if (lead) openProductDrawer(lead);
      };
    });

    document.querySelectorAll('.inspect-product-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-product-id');
        const lead = state.leads.find(l => l.productId === id);
        if (lead) openProductDrawer(lead);
      };
    });

    document.querySelectorAll('.opportunity-row').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-product-id');
        const lead = state.leads.find(l => l.productId === id);
        if (lead) openProductDrawer(lead);
      };
    });

    document.querySelectorAll('.rank-row[data-product-id]').forEach(row => {
      row.onclick = () => {
        const id = row.getAttribute('data-product-id');
        const lead = state.leads.find(l => l.productId === id);
        if (lead) openProductDrawer(lead);
      };
    });

    document.querySelectorAll('.matrix-point').forEach(pt => {
      pt.onclick = () => {
        const id = pt.getAttribute('data-product-id');
        const lead = state.leads.find(l => l.productId === id);
        if (lead) openProductDrawer(lead);
      };
    });

    // Chart Switcher
    const btnMatrix = document.getElementById('btn-chart-matrix');
    const btnBar = document.getElementById('btn-chart-bar');
    if (btnMatrix) btnMatrix.onclick = () => { state.chartMode = 'matrix'; render(); };
    if (btnBar) btnBar.onclick = () => { state.chartMode = 'bar'; render(); };

    // Overview Table Controls
    const ovSort = document.getElementById('overview-sort-select');
    const ovPageSize = document.getElementById('overview-pagesize-select');
    const ovPrev = document.getElementById('overview-prev-page');
    const ovNext = document.getElementById('overview-next-page');
    if (ovSort) ovSort.onchange = () => { state.overviewSort = ovSort.value; state.overviewPage = 1; render(); };
    if (ovPageSize) ovPageSize.onchange = () => { state.overviewPageSize = Number(ovPageSize.value); state.overviewPage = 1; render(); };
    if (ovPrev) ovPrev.onclick = () => { if (state.overviewPage > 1) { state.overviewPage--; render(); } };
    if (ovNext) ovNext.onclick = () => { state.overviewPage++; render(); };

    const ovCopy = document.getElementById('overview-btn-copy');
    if (ovCopy) ovCopy.onclick = () => {
      const summaryText = state.leads.slice(0, 10).map((l, i) => `${i + 1}. ${l.product} | ${l.price} | sold ${l.sold} | score ${l.score}`).join('\n');
      copyText(summaryText, isTH ? 'คัดลอกสรุปแล้ว' : 'Summary copied', isTH ? 'คัดลอก 10 รายการเด่นเรียบร้อย' : 'Top 10 items copied to clipboard');
    };

    const ovExport = document.getElementById('overview-btn-export');
    if (ovExport) ovExport.onclick = () => {
      exportCSV('trendradar-featured-products.csv', [
        ['Product', 'Category', 'Price', 'Sold', 'Rating', 'Commission', 'Score', 'Status', 'Angle'],
        ...state.leads.slice(0, 50).map(l => [l.product, l.category, l.price, l.sold, l.rating, l.commission, l.score, l.status, l.metaAngle])
      ]);
      showToast(isTH ? 'ส่งออก CSV แล้ว' : 'CSV exported', isTH ? 'ดาวน์โหลด 50 รายการเด่นเรียบร้อย' : 'Downloaded 50 items', 'success');
    };

    // AI Next actions jump buttons
    document.querySelectorAll('.ai-jump-btn').forEach(btn => {
      btn.onclick = () => {
        const v = btn.getAttribute('data-view');
        if (v) navigateTo(v);
      };
    });

    const compBtn = document.getElementById('compliance-guide-btn');
    if (compBtn) compBtn.onclick = () => navigateTo('user-manual');

    // Rank links
    const rkFinder = document.getElementById('rank-link-finder');
    const rkReasons = document.getElementById('rank-link-reasons');
    const rkAngles = document.getElementById('rank-link-angles');
    if (rkFinder) rkFinder.onclick = () => navigateTo('lead-finder');
    if (rkReasons) rkReasons.onclick = () => navigateTo('lead-finder');
    if (rkAngles) rkAngles.onclick = () => navigateTo('content-tracker');

    // --- Lead Finder Specific Events ---
    const finderSearchInput = document.getElementById('finder-search-input');
    const finderDoSearch = document.getElementById('finder-do-search');
    const finderClearSearch = document.getElementById('finder-clear-search');
    if (finderSearchInput) {
      finderSearchInput.onkeydown = e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          state.searchQuery = finderSearchInput.value.trim();
          state.finderPage = 1;
          render();
        }
      };
    }
    if (finderDoSearch && finderSearchInput) {
      finderDoSearch.onclick = () => {
        state.searchQuery = finderSearchInput.value.trim();
        state.finderPage = 1;
        render();
      };
    }
    if (finderClearSearch) {
      finderClearSearch.onclick = () => {
        state.searchQuery = '';
        state.finderPage = 1;
        render();
      };
    }

    const finderSortSel = document.getElementById('finder-sort-select');
    const finderPageSizeSel = document.getElementById('finder-pagesize-select');
    if (finderSortSel) finderSortSel.onchange = () => { state.finderSort = finderSortSel.value; state.finderPage = 1; render(); };
    if (finderPageSizeSel) finderPageSizeSel.onchange = () => { state.finderPageSize = Number(finderPageSizeSel.value); state.finderPage = 1; render(); };

    const finderOptToggle = document.getElementById('finder-options-toggle');
    if (finderOptToggle) finderOptToggle.onclick = () => { state.finderTableOptionsOpen = !state.finderTableOptionsOpen; render(); };

    const finderImportFeed = document.getElementById('finder-import-feed-btn');
    if (finderImportFeed) finderImportFeed.onclick = () => navigateTo('data-connections');

    // Strip actions
    const stripClear = document.getElementById('strip-clear-filters');
    const stripExport = document.getElementById('strip-export-csv');
    const stripGoSaved = document.getElementById('strip-go-saved');
    if (stripClear) stripClear.onclick = () => { state.finderFilter = 'All'; state.searchQuery = ''; state.finderPage = 1; state.finderTableOptionsOpen = false; render(); };
    if (stripExport) stripExport.onclick = () => {
      exportCSV('trendradar-product-finder.csv', [
        ['Product', 'Subtitle', 'Price', 'Sold', 'Rating', 'Commission', 'Score', 'Status', 'Angle'],
        ...state.leads.map(l => [l.product, l.subtitle, l.price, l.sold, l.rating, l.commission, l.score, l.status, l.metaAngle])
      ]);
      state.finderTableOptionsOpen = false;
      render();
      showToast(isTH ? 'ส่งออก CSV แล้ว' : 'CSV Exported', isTH ? 'ดาวน์โหลดรายการสินค้าเรียบร้อย' : 'Products exported', 'success');
    };
    if (stripGoSaved) stripGoSaved.onclick = () => navigateTo('saved-products');

    // Filter Chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.onclick = () => {
        const filter = chip.getAttribute('data-filter');
        if (filter) {
          state.finderFilter = filter;
          state.finderPage = 1;
          render();
        }
      };
    });

    // Checkboxes
    const selectAllPage = document.getElementById('finder-select-all-page');
    if (selectAllPage) {
      selectAllPage.onchange = () => {
        const check = selectAllPage.checked;
        document.querySelectorAll('.finder-item-checkbox').forEach(cb => {
          const id = cb.getAttribute('data-product-id');
          if (check) state.finderSelectedIds.add(id);
          else state.finderSelectedIds.delete(id);
        });
        render();
      };
    }

    document.querySelectorAll('.finder-item-checkbox').forEach(cb => {
      cb.onchange = (e) => {
        e.stopPropagation();
        const id = cb.getAttribute('data-product-id');
        if (cb.checked) state.finderSelectedIds.add(id);
        else state.finderSelectedIds.delete(id);
        render();
      };
    });

    // Bulk buttons
    const bulkSave = document.getElementById('bulk-save-btn');
    const bulkPlan = document.getElementById('bulk-plan-btn');
    const bulkOffer = document.getElementById('bulk-offer-btn');
    const bulkExport = document.getElementById('bulk-export-btn');

    if (bulkSave) bulkSave.onclick = () => {
      const selected = state.leads.filter(l => state.finderSelectedIds.has(l.productId));
      selected.forEach(p => saveProductToPipeline(p));
      const count = selected.length;
      state.finderSelectedIds.clear();
      showToast(isTH ? 'บันทึกสำเร็จ' : 'Saved', isTH ? `บันทึก ${count} สินค้าเข้าสู่ Pipeline แล้ว` : `Saved ${count} items to pipeline`, 'success');
      render();
    };

    if (bulkPlan) bulkPlan.onclick = () => {
      const selected = state.leads.filter(l => state.finderSelectedIds.has(l.productId));
      selected.forEach(p => saveProductToPipeline(p));
      state.finderSelectedIds.clear();
      navigateTo('content-planner');
    };

    if (bulkOffer) bulkOffer.onclick = () => {
      const selected = state.leads.filter(l => state.finderSelectedIds.has(l.productId));
      selected.forEach(p => saveProductToPipeline(p));
      state.finderSelectedIds.clear();
      navigateTo('offer-builder');
    };

    if (bulkExport) bulkExport.onclick = () => {
      exportCSV('trendradar-finder-export.csv', [
        ['Product', 'Subtitle', 'Price', 'Sold', 'Rating', 'Commission', 'Score', 'Status', 'Angle'],
        ...state.leads.map(l => [l.product, l.subtitle, l.price, l.sold, l.rating, l.commission, l.score, l.status, l.metaAngle])
      ]);
      showToast(isTH ? 'ส่งออก CSV แล้ว' : 'CSV Exported', isTH ? 'ดาวน์โหลดข้อมูลเรียบร้อย' : 'Exported successfully', 'success');
    };

    // Finder Pagination
    const fPrev = document.getElementById('finder-prev-page');
    const fNext = document.getElementById('finder-next-page');
    if (fPrev) fPrev.onclick = () => { if (state.finderPage > 1) { state.finderPage--; render(); } };
    if (fNext) fNext.onclick = () => { state.finderPage++; render(); };

    // Saved Products Events
    const savedClear = document.getElementById('saved-clear-all');
    if (savedClear) savedClear.onclick = () => {
      state.savedProducts = [];
      localStorage.removeItem('trendradar-saved-products');
      showToast(isTH ? 'ล้างรายการแล้ว' : 'Cleared', isTH ? 'ล้างสินค้าใน pipeline เรียบร้อย' : 'Pipeline cleared', 'info');
      render();
    };

    document.querySelectorAll('.saved-session-item').forEach(item => {
      item.onclick = () => {
        const id = item.getAttribute('data-product-id');
        const lead = state.leads.find(l => l.productId === id);
        if (lead) openProductDrawer(lead);
      };
    });

    document.querySelectorAll('.pipeline-card').forEach(card => {
      card.onclick = () => {
        const id = card.getAttribute('data-product-id');
        const lead = state.leads.find(l => l.productId === id);
        if (lead) openProductDrawer(lead);
      };
    });

    document.querySelectorAll('.plan-jump-btn, .pipeline-action-btn').forEach(btn => {
      btn.onclick = () => {
        const v = btn.getAttribute('data-view');
        if (v) navigateTo(v);
      };
    });

    // Data Connections Events
    const csvDropZone = document.getElementById('csv-drop-zone');
    const csvFileInput = document.getElementById('shopee-csv-file-input');
    if (csvDropZone && csvFileInput) {
      csvDropZone.onclick = () => csvFileInput.click();
      csvDropZone.ondragover = e => { e.preventDefault(); csvDropZone.style.borderColor = 'var(--blue)'; };
      csvDropZone.ondragleave = () => { csvDropZone.style.borderColor = 'var(--border-strong)'; };
      csvDropZone.ondrop = e => {
        e.preventDefault();
        csvDropZone.style.borderColor = 'var(--border-strong)';
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleCsvFile(e.dataTransfer.files[0]);
        }
      };
      csvFileInput.onchange = () => {
        if (csvFileInput.files && csvFileInput.files[0]) {
          handleCsvFile(csvFileInput.files[0]);
        }
      };
    }

    const btnSampleCsv = document.getElementById('btn-download-sample-csv');
    if (btnSampleCsv) btnSampleCsv.onclick = () => {
      exportCSV('shopee_sample_feed.csv', [
        ['title', 'sale_price', 'item_sold', 'item_rating', 'commission_rate', 'product_short_link', 'category'],
        ['เคส iPhone ขอบกันกระแทก', '89', '18400', '4.8', '8', 'https://shopee.co.th/product/1', 'Gadget'],
        ['เครื่องนวดคอไฟฟ้า', '249', '12700', '4.7', '6', 'https://shopee.co.th/product/2', 'Health'],
        ['เสื้อเชิ้ตผ้าลินิน', '159', '9800', '4.6', '9', 'https://shopee.co.th/product/3', 'Fashion']
      ]);
      showToast(isTH ? 'ดาวน์โหลดตัวอย่างแล้ว' : 'Sample downloaded', 'shopee_sample_feed.csv', 'success');
    };

    const btnGotoSig = document.getElementById('btn-goto-signals');
    if (btnGotoSig) btnGotoSig.onclick = () => navigateTo('signal-sources');

    const btnRefreshStore = document.getElementById('btn-refresh-store');
    if (btnRefreshStore) btnRefreshStore.onclick = () => {
      showToast(isTH ? 'สแกนคลังสินค้าแล้ว' : 'Store re-scanned', isTH ? `ข้อมูล ${state.leads.length} สินค้าพร้อมใช้งาน` : `${state.leads.length} products ready`, 'success');
    };

    // Copy action buttons in diverse views
    const copyPlaybook = document.getElementById('copy-playbook-btn');
    if (copyPlaybook) copyPlaybook.onclick = () => {
      const text = state.leads.slice(0, 5).map((l, i) => `${i + 1}. ${l.product}\n   - Hook: แก้ปัญหา ${l.painPoint}\n   - Angle: ${l.metaAngle}\n   - Price: ${l.price}, Sold: ${l.sold}`).join('\n\n');
      copyText(text, isTH ? 'คัดลอก Playbook แล้ว' : 'Playbook copied', isTH ? 'คัดลอก 5 มุมคอนเทนต์ลงคลิปบอร์ดแล้ว' : 'Copied 5 content angles');
    };

    const aiCopy = document.getElementById('ai-insight-copy-btn');
    if (aiCopy) aiCopy.onclick = () => {
      copyText('TrendRadar AI Strategic Brief:\n- Focus on Beauty and High-Volume products\n- Lead with Pain Points on Reels\n- Optimum price bracket 70-250 THB', isTH ? 'คัดลอกบทวิเคราะห์แล้ว' : 'Insight copied');
    };

    const adsCopy = document.getElementById('ads-copy-btn');
    if (adsCopy) adsCopy.onclick = () => {
      copyText('TrendRadar Ad Copy Set:\nTOFU Hook: ใครยังเจอปัญหานี้ต้องลอง!\nBOFU: ด่วนก่อนหมดโปร ส่งฟรีวันนี้', isTH ? 'คัดลอก Ad Copy แล้ว' : 'Ad copy copied');
    };

    const offerCopy = document.getElementById('offer-copy-btn');
    if (offerCopy) offerCopy.onclick = () => {
      copyText('TrendRadar Offer Set: 1 แถม 1 ชุดสุดคุ้ม / ส่งฟรีไม่ต้องเก็บโค้ด', isTH ? 'คัดลอกข้อเสนอแล้ว' : 'Offer copied');
    };

    const plannerCopy = document.getElementById('planner-copy-btn');
    if (plannerCopy) plannerCopy.onclick = () => {
      copyText('TrendRadar 7-Day Content Plan:\nDay 1: Unboxing\nDay 2: Review\nDay 3: Problem Solution\nDay 4: Comparison\nDay 5: Behind Scenes\nDay 6: How-to\nDay 7: Live', isTH ? 'คัดลอกตารางแล้ว' : 'Calendar copied');
    };

    const outreachCopy = document.getElementById('outreach-copy-btn');
    if (outreachCopy) outreachCopy.onclick = () => {
      copyText('สวัสดีครับแอดมินร้าน สนใจนำสินค้าไปโปรโมททำ Affiliate ช่องทาง Facebook/IG ขอข้อมูลเรทโปรโมชั่นเพิ่มเติมครับ', isTH ? 'คัดลอกข้อความแล้ว' : 'Message copied');
    };

    // Reports export triggers
    const repProd = document.getElementById('rep-export-products');
    if (repProd) repProd.onclick = () => {
      exportCSV('trendradar-opportunity-report.csv', [
        ['Product', 'Category', 'Price', 'Sold', 'Rating', 'Commission', 'Score', 'Status'],
        ...state.leads.map(l => [l.product, l.category, l.price, l.sold, l.rating, l.commission, l.score, l.status])
      ]);
      showToast(isTH ? 'ส่งออกแล้ว' : 'Exported', 'trendradar-opportunity-report.csv', 'success');
    };

    const repContent = document.getElementById('rep-export-content');
    if (repContent) repContent.onclick = () => {
      copyText('# 7-Day Content Plan Report\n- Generated by TrendRadar AI', isTH ? 'คัดลอก Markdown แล้ว' : 'Markdown copied');
    };

    const repExec = document.getElementById('rep-export-exec');
    if (repExec) repExec.onclick = () => {
      copyText('Executive Brief: Top categories are Beauty & Sports with 73 average opportunity score.', isTH ? 'คัดลอกสรุปแล้ว' : 'Summary copied');
    };

    // Settings save
    const setSaveBtn = document.getElementById('settings-save-btn');
    if (setSaveBtn) setSaveBtn.onclick = () => {
      const p = document.getElementById('settings-provider').value;
      const m = document.getElementById('settings-model').value;
      const k = document.getElementById('settings-api-key').value;
      state.aiSettings = { provider: p, model: m, apiKey: k };
      try {
        localStorage.setItem('trendradar-ai-settings', JSON.stringify(state.aiSettings));
      } catch (e) {}
      showToast(isTH ? 'บันทึกการตั้งค่าแล้ว' : 'Settings saved', isTH ? `ใช้งานโมเดล ${m}` : `Active model: ${m}`, 'success');
    };

    const setLangSel = document.getElementById('settings-lang-select');
    if (setLangSel) setLangSel.onchange = () => {
      state.language = setLangSel.value;
      localStorage.setItem('trendradar-ui-language', setLangSel.value);
      render();
    };

    // Setup page buttons
    const setupSaveScan = document.getElementById('setup-save-scan-btn');
    if (setupSaveScan) setupSaveScan.onclick = () => {
      showToast(isTH ? 'บันทึกโปรไฟล์เรดาร์แล้ว' : 'Radar profile saved', isTH ? 'เริ่มสแกนด้วยพารามิเตอร์ใหม่' : 'Scanning with updated profile', 'success');
      navigateTo('lead-finder');
    };

    const setupRulesBtn = document.getElementById('setup-view-rules-btn');
    if (setupRulesBtn) setupRulesBtn.onclick = () => {
      showToast(isTH ? 'กติกาการคิดคะแนน' : 'Scoring rules', isTH ? 'ยอดขาย (85%), เรตติ้ง (72%), คอมมิชชัน (68%), สัญญาณโซเชียล (76%)' : 'Sales 85%, Rating 72%, Commission 68%, Signals 76%', 'info');
    };

    const setupGoData = document.getElementById('setup-btn-goto-data');
    if (setupGoData) setupGoData.onclick = () => navigateTo('data-connections');

    // Market density add source
    const mktAddSrc = document.getElementById('market-add-source');
    if (mktAddSrc) mktAddSrc.onclick = () => navigateTo('signal-sources');

    const sigAddKw = document.getElementById('signals-add-kw');
    if (sigAddKw) sigAddKw.onclick = () => {
      const kw = prompt(isTH ? 'กรอกคีย์เวิร์ดหรือแฮชแท็กที่ต้องการติดตาม:' : 'Enter keyword or hashtag to monitor:');
      if (kw && kw.trim()) {
        showToast(isTH ? 'เพิ่มคีย์เวิร์ดแล้ว' : 'Keyword added', `"${kw.trim()}"`, 'success');
      }
    };
  }

  // --- CSV Parser for Real Uploads ---
  function handleCsvFile(file) {
    const isTH = state.language === 'TH';
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const text = e.target.result;
        const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
        if (lines.length <= 1) {
          showToast(isTH ? 'ไฟล์ไม่มีข้อมูล' : 'Empty CSV', isTH ? 'กรุณาเลือกไฟล์ CSV ที่มีข้อมูลสินค้า' : 'Please select a valid CSV', 'warning');
          return;
        }

        const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, '').toLowerCase());
        const newProducts = [];

        for (let i = 1; i < lines.length; i++) {
          // Simple CSV split handling quotes
          const match = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
          const cols = lines[i].split(',').map(c => c.trim().replace(/^"|"$/g, ''));
          if (cols.length < 2) continue;

          const title = cols[0] || `Shopee Item ${i}`;
          const price = parseFloat(cols[1]) || 99;
          const sold = parseInt(cols[2], 10) || 1200;
          const rating = parseFloat(cols[3]) || 4.8;
          const comm = parseFloat(cols[4]) || 5;

          newProducts.push({
            id: `custom-import-${Date.now()}-${i}`,
            title: title,
            price: price,
            sold: sold,
            rating: rating,
            commissionRate: comm,
            category: cols[7] || 'General',
            shopName: 'Shopee Seller',
            imageUrl: '',
            reasons: ['imported CSV item', 'ready for analysis']
          });
        }

        if (newProducts.length > 0) {
          const freshLeads = initLeadsFromRawProducts(newProducts);
          state.leads = [...freshLeads, ...state.leads];
          state.summary.storedRows += newProducts.length;
          state.summary.sourceFile = file.name;
          showToast(
            isTH ? 'นำเข้าข้อมูลสำเร็จ!' : 'Import successful!',
            isTH ? `นำเข้า ${newProducts.length} สินค้าจากไฟล์ "${file.name}" เรียบร้อย` : `Imported ${newProducts.length} items from "${file.name}"`,
            'success'
          );
          navigateTo('lead-finder');
        }
      } catch (err) {
        showToast(isTH ? 'เกิดข้อผิดพลาดในการอ่านไฟล์' : 'Error parsing CSV', err.message, 'warning');
      }
    };
    reader.readAsText(file, 'UTF-8');
  }

  // --- Initial Boot ---
  async function boot() {
    // 1. Load saved products from local storage if available
    try {
      const saved = localStorage.getItem('trendradar-saved-products');
      if (saved) state.savedProducts = JSON.parse(saved);
    } catch (e) {}

    // 2. Load products from window global (products_data.js) or fetch API
    if (window.__TRENDRADAR_PRODUCTS_DATA__ && window.__TRENDRADAR_PRODUCTS_DATA__.products) {
      const data = window.__TRENDRADAR_PRODUCTS_DATA__;
      state.summary = { ...state.summary, ...data.summary };
      state.products = data.products;
      state.leads = initLeadsFromRawProducts(data.products);
    } else {
      try {
        const res = await fetch('products.json');
        if (res.ok) {
          const data = await res.json();
          state.summary = { ...state.summary, ...data.summary };
          state.products = data.products;
          state.leads = initLeadsFromRawProducts(data.products);
        }
      } catch (err) {
        console.warn('Could not load products.json, using fallback leads.');
      }
    }

    // 3. Render application
    render();

    // 4. Start Live Clock
    startClock();
  }

  // Run boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
