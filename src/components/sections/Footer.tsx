import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Link2" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">1С Integration</span>
            </div>
            <p className="text-gray-400 text-sm">
              Профессиональная интеграция 1С с сайтом Grand Line для автоматизации вашего бизнеса
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Интеграция с 1С</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Настройка обмена</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Техническая поддержка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Обучение персонала</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Кейсы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@1c-integration.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} 1С Integration. Все права защищены.
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
