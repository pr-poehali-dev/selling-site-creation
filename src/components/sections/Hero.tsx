import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/projects/8c3de1ae-5901-4426-af5c-2efe8b3a63df/files/c3a3a86b-4b30-48eb-909f-70902c042bea.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
            <Icon name="Zap" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Автоматизация интеграции 1С</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent animate-fade-in">
            Интеграция 1С с сайтом Grand Line
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Автоматическая синхронизация товаров, цен, остатков и заказов между 1С и вашим интернет-магазином
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
              onClick={scrollToForm}
            >
              Получить консультацию
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => {
                const featuresElement = document.getElementById('features');
                featuresElement?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-600">Автоматическая синхронизация</div>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Надежность системы</div>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">-60%</div>
              <div className="text-sm text-gray-600">Времени на обработку заказов</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;