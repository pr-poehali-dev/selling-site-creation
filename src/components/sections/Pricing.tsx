import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const plans = [
    {
      name: "Стартовый",
      price: "от 45 000",
      period: "единоразово",
      description: "Для небольших интернет-магазинов",
      features: [
        "Загрузка до 1000 товаров",
        "Синхронизация цен и остатков",
        "Обработка заказов",
        "Базовая настройка",
        "30 дней поддержки"
      ],
      highlighted: false
    },
    {
      name: "Профессиональный",
      price: "от 75 000",
      period: "единоразово",
      description: "Оптимальное решение для большинства",
      features: [
        "Неограниченное количество товаров",
        "Синхронизация цен, остатков и характеристик",
        "Обработка заказов и клиентов",
        "Персональные цены для клиентов",
        "Работа с категориями и брендами",
        "90 дней поддержки",
        "Обучение персонала"
      ],
      highlighted: true
    },
    {
      name: "Корпоративный",
      price: "от 120 000",
      period: "единоразово",
      description: "Для крупных компаний с особыми требованиями",
      features: [
        "Всё из тарифа Профессиональный",
        "Интеграция с CRM системами",
        "Интеграция с платёжными системами",
        "Кастомная доработка под ваши процессы",
        "Интеграция с системами доставки",
        "Приоритетная поддержка 24/7",
        "Персональный менеджер проекта"
      ],
      highlighted: false
    }
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Тарифы и стоимость
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий пакет или закажите индивидуальное решение
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 relative overflow-hidden transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-4 border-primary shadow-2xl scale-105 bg-gradient-to-br from-white to-primary/5' 
                  : 'border-2 hover:border-primary/30 hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-sm font-semibold rounded-bl-lg">
                  Популярный
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-600">₽</span>
                </div>
                <div className="text-sm text-gray-500">{plan.period}</div>
              </div>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
                onClick={scrollToForm}
              >
                Оставить заявку
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Нужно индивидуальное решение? Свяжитесь с нами для расчёта стоимости
          </p>
          <Button variant="outline" size="lg" onClick={scrollToForm}>
            <Icon name="MessageSquare" size={20} className="mr-2" />
            Обсудить проект
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
