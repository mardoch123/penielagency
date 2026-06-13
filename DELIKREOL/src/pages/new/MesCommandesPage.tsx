import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Layout } from '../../components/layout/Layout';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface LocalOrder {
  id: string;
  items: OrderItem[];
  total: number;
  commune: string;
  mode: string;
  phone: string;
  status: string;
  created_at: string;
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('fr-MQ', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  pending: { label: 'En attente', color: 'bg-amber-100 text-amber-700' },
  confirmed: { label: 'Confirmée', color: 'bg-blue-100 text-blue-700' },
  delivered: { label: 'Livrée', color: 'bg-green-100 text-green-700' },
  cancelled: { label: 'Annulée', color: 'bg-red-100 text-red-700' },
};

export default function MesCommandesPage() {
  const [orders, setOrders] = useState<LocalOrder[]>([]);
  const [searchParams] = useSearchParams();
  const isNew = searchParams.get('nouveau') === '1';

  useEffect(() => {
    document.title = 'Mes commandes — DeliKreol';
    try {
      const saved = JSON.parse(localStorage.getItem('delikreol_local_orders_v1') || '[]');
      setOrders([...saved].reverse());
    } catch {
      setOrders([]);
    }
  }, []);

  return (
    <Layout>
      <div className="bg-[#FFFBF0] min-h-screen">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 md:py-8">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-7 h-7" />
              <div>
                <h1 className="text-2xl md:text-3xl font-black">Mes commandes</h1>
                <p className="text-orange-100 text-sm">{orders.length} commande{orders.length !== 1 ? 's' : ''}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-4">
          {isNew && (
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-2xl p-4">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-green-800 text-sm">Votre commande a été enregistrée avec succès</p>
                <p className="text-green-700 text-xs mt-0.5">Retrouvez ci-dessous le récapitulatif de vos commandes.</p>
              </div>
            </div>
          )}

          {orders.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-12 h-12 text-orange-200 mx-auto mb-4" />
              <h2 className="text-lg font-bold text-gray-700 mb-2">Aucune commande</h2>
              <p className="text-gray-400 text-sm mb-6">Vos commandes apparaîtront ici après validation.</p>
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Voir le catalogue
              </Link>
            </div>
          ) : (
            orders.map((order) => {
              const status = STATUS_LABELS[order.status] || { label: order.status, color: 'bg-gray-100 text-gray-600' };
              return (
                <div key={order.id} className="bg-white rounded-2xl border border-orange-100 p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="font-black text-orange-600 font-mono text-lg">{order.id}</p>
                      <p className="text-xs text-gray-400">{formatDate(order.created_at)}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${status.color}`}>
                      {status.label}
                    </span>
                  </div>

                  <ul className="space-y-1 mb-3">
                    {order.items.map((item, i) => (
                      <li key={i} className="flex justify-between text-sm">
                        <span className="text-gray-700">{item.name} <span className="text-gray-400">x{item.quantity}</span></span>
                        <span className="font-semibold text-gray-900">{(item.price * item.quantity).toFixed(2)} €</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center border-t border-orange-100 pt-3">
                    <span className="text-sm text-gray-500">
                      {order.commune && `${order.commune} · `}
                      {order.mode === 'retrait' ? 'Retrait' : order.mode === 'relais' ? 'Point relais' : 'Livraison'}
                    </span>
                    <span className="font-black text-orange-600">{order.total.toFixed(2).replace('.', ',')} €</span>
                  </div>
                </div>
              );
            })
          )}

          <div className="pt-4">
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au catalogue
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
