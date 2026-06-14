import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { ToastProvider } from './contexts/ToastContext';
import { AdminPartners } from './pages/admin/AdminPartners';
import { CustomerApp } from './pages/CustomerApp';
import { InvestorOpsPage } from './pages/InvestorOpsPage';
import { LaunchNetworkPage } from './pages/LaunchNetworkPage';
import { OrderStatusPage } from './pages/OrderStatusPage';
import { PartnerDashboardPage } from './pages/PartnerDashboardPage';
import { ProSpacePage } from './pages/ProSpacePage';
import { PublicHomePage } from './pages/PublicHomePage';
import { TraiteursPage } from './pages/TraiteursPage';

const MesCommandesPage = lazy(() => import('./pages/new/MesCommandesPage'));

const basePath = import.meta.env.VITE_BASE_PATH || import.meta.env.BASE_URL || '/';

function AppContent() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get('view');
  const pathname = window.location.pathname;
  const legacyPath = window.location.search.startsWith('?/')
    ? `/${window.location.search.slice(2).split('&')[0].split('#')[0]}`
    : '';
  const effectivePathname = legacyPath || pathname;
  const isCustomerRoute = view === 'customer' || effectivePathname.endsWith('/customer');
  const isLegacyCustomerAppRoute = view === 'customer-app' || effectivePathname.endsWith('/customer-app');

  if (view === 'mes-commandes') {
    return <Suspense fallback={null}><MesCommandesPage /></Suspense>;
  }

  const content = isLegacyCustomerAppRoute
    ? <CustomerApp />
    : isCustomerRoute
      ? <PublicHomePage />
    : view === 'pro' || effectivePathname.endsWith('/pro')
      ? <ProSpacePage />
      : view === 'partner-documents' || effectivePathname.endsWith('/partner-documents')
      ? <PartnerDashboardPage />
      : view === 'launch-network' || effectivePathname.endsWith('/launch-network')
        ? <LaunchNetworkPage />
      : view === 'order-status' || effectivePathname.endsWith('/order-status')
        ? <OrderStatusPage />
      : view === 'traiteurs' || effectivePathname.endsWith('/traiteurs')
        ? <TraiteursPage />
      : view === 'admin-documents' || effectivePathname.endsWith('/admin-documents')
        ? <AdminPartners />
        : view === 'investor-ops' || effectivePathname.endsWith('/investor-ops')
          ? <InvestorOpsPage />
          : <PublicHomePage />;

  return <>{content}</>;
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename={basePath}>
        <AuthProvider>
          <CartProvider>
            <ToastProvider><AppContent /></ToastProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
