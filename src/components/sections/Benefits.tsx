import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "TrendingUp",
      title: "Рост продаж до 40%",
      description: "Актуальные данные о товарах и быстрая обработка заказов увеличивают конверсию"
    },
    {
      icon: "Clock",
      title: "Экономия 20 часов в неделю",
      description: "Автоматизация рутинных операций освобождает время для развития бизнеса"
    },
    {
      icon: "Target",
      title: "Снижение ошибок на 95%",
      description: "Исключение ручного ввода данных минимизирует человеческий фактор"
    },
    {
      icon: "Zap",
      title: "Мгновенная обработка заказов",
      description: "Заказы поступают в 1С сразу после оформления на сайте"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Преимущества для вашего бизнеса
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные результаты наших клиентов после внедрения интеграции
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name={benefit.icon} size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-lg">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-3xl">
            <img 
              src="https://cdn.poehali.dev/projects/8c3de1ae-5901-4426-af5c-2efe8b3a63df/files/71b1010b-50f9-417f-a098-29aa2b59c9cd.jpg"
              alt="Успешная команда"
              className="w-full rounded-xl mb-6"
            />
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "После внедрения интеграции мы сократили время обработки заказов с 2 часов до 5 минут. Продажи выросли на 35% за первый квартал."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="text-left">
                <div className="font-semibold">Александр Петров</div>
                <div className="text-sm text-gray-600">Директор интернет-магазина стройматериалов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
