import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const CTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 1 часа",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Начните экономить время уже сегодня
            </h2>
            <p className="text-xl text-white/90">
              Оставьте заявку и получите бесплатную консультацию специалиста
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Быстрый ответ</h3>
                    <p className="text-gray-600">Свяжемся с вами в течение 1 часа в рабочее время</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Gift" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Бесплатный аудит</h3>
                    <p className="text-gray-600">Проанализируем ваш проект и предложим оптимальное решение</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-gray-600">Официальный договор и гарантия на все работы</p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ваше имя *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Телефон *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Название компании"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Расскажите о вашем проекте"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      Получить консультацию
                      <Icon name="Send" size={20} className="ml-2" />
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-3" />
              <div className="font-semibold mb-1">Телефон</div>
              <div className="opacity-90">+7 (495) 123-45-67</div>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-3" />
              <div className="font-semibold mb-1">Email</div>
              <div className="opacity-90">info@1c-integration.ru</div>
            </div>
            <div>
              <Icon name="Clock" size={32} className="mx-auto mb-3" />
              <div className="font-semibold mb-1">Режим работы</div>
              <div className="opacity-90">Пн-Пт: 9:00 - 18:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
