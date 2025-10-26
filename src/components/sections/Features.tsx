import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "RefreshCw",
      title: "Автоматическая синхронизация",
      description: "Товары, цены и остатки обновляются в режиме реального времени без вашего участия"
    },
    {
      icon: "ShoppingCart",
      title: "Управление заказами",
      description: "Заказы с сайта автоматически попадают в 1С с полной информацией о клиенте и товарах"
    },
    {
      icon: "Database",
      title: "Синхронизация остатков",
      description: "Актуальные данные об остатках товаров на складе всегда отображаются на сайте"
    },
    {
      icon: "DollarSign",
      title: "Управление ценами",
      description: "Автоматическое обновление цен, скидок и акций из 1С на сайт"
    },
    {
      icon: "Users",
      title: "Работа с клиентами",
      description: "Синхронизация базы клиентов, персональные цены и условия для каждого покупателя"
    },
    {
      icon: "BarChart3",
      title: "Аналитика и отчеты",
      description: "Полная статистика продаж и движения товаров в едином информационном пространстве"
    },
    {
      icon: "Truck",
      title: "Логистика",
      description: "Отслеживание статуса доставки и автоматическое уведомление клиентов"
    },
    {
      icon: "FileText",
      title: "Документооборот",
      description: "Автоматическое формирование счетов, накладных и актов в 1С"
    },
    {
      icon: "Shield",
      title: "Безопасность данных",
      description: "Защищенное соединение и шифрование всех передаваемых данных"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Возможности интеграции
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный цикл автоматизации от загрузки товаров до обработки заказов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
