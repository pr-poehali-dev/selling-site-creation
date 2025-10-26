import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Анализ вашей системы",
      description: "Изучаем конфигурацию 1С и структуру вашего сайта",
      icon: "Search"
    },
    {
      number: "02",
      title: "Настройка интеграции",
      description: "Устанавливаем и настраиваем обработку для обмена данными",
      icon: "Settings"
    },
    {
      number: "03",
      title: "Тестирование",
      description: "Проверяем корректность синхронизации на тестовых данных",
      icon: "CheckCircle2"
    },
    {
      number: "04",
      title: "Запуск и поддержка",
      description: "Переводим систему в рабочий режим и обеспечиваем техподдержку",
      icon: "Rocket"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой и прозрачный процесс внедрения от заявки до запуска
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div className="flex gap-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name={step.icon} size={24} className="text-primary" />
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
                
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" size={32} className="text-primary/30" />
                  </div>
                )}
                
                {index < steps.length - 1 && index % 2 === 1 && (
                  <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2">
                    <Icon name="ArrowLeft" size={32} className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Срок внедрения: от 3 до 7 дней</h3>
            <p className="text-lg opacity-90">
              Начните экономить время и увеличивать продажи уже на следующей неделе
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
