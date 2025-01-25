import React, { useRef } from 'react';
import { Sun, Wind, Battery, Wrench, Facebook, Instagram, /*Linkedin, Mail,*/ Phone, MapPin, ChevronRight, Star, Zap, Shield } from 'lucide-react';
import { useWhatsApp } from './hooks/useWhatsApp';
import { handleSubmit } from './hooks/sendMail';
import './index.css';

function App() {
  const { openWhatsApp } = useWhatsApp();

  const formRef = useRef<HTMLFormElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current && notificationRef.current) {
      handleSubmit(formRef.current, notificationRef.current);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-yellow-500" />
            <span className="text-2xl font-bold text-gray-800">Helioserv</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-yellow-500">Início</a>
            <a href="#sobre" className="text-gray-600 hover:text-yellow-500">Sobre Nós</a>
            <a href="#servicos" className="text-gray-600 hover:text-yellow-500">Serviços</a>
            <a href="#produtos" className="text-gray-600 hover:text-yellow-500">Produtos</a>
            <a href="#depoimentos" className="text-gray-600 hover:text-yellow-500">Depoimentos</a>
            <a href="#contato" className="text-gray-600 hover:text-yellow-500">Contato</a>
          </nav>

          <button
            onClick={openWhatsApp}
            className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors">
            Solicite um Orçamento
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl text-white py-32">
            <h1 className="text-5xl font-bold mb-6">Energia Solar para um Futuro Sustentável e Econômico</h1>
            <p className="text-xl mb-8">Na Helioserv, oferecemos soluções completas em energia solar, desde a instalação até a manutenção de equipamentos de alta qualidade.</p>
            <button
              onClick={openWhatsApp}
              className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg hover:bg-yellow-600 transition-colors">
              Solicite um Orçamento Gratuito
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Quem Somos</h2>
              <p className="text-gray-600 text-lg mb-8">
                A Helioserv é especializada em energia solar, com anos de experiência no mercado.
                Nosso compromisso é oferecer soluções personalizadas, sustentáveis e econômicas
                para residências e empresas.
              </p>
              <button className="flex items-center text-yellow-500 hover:text-yellow-600 font-semibold">
                Conheça Nossa História
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Equipe Helioserv"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sun className="h-12 w-12 text-yellow-500" />,
                title: "Instalação de Sistemas",
                description: "Instalação profissional de sistemas solares completos"
              },
              {
                icon: <Battery className="h-12 w-12 text-yellow-500" />,
                title: "Venda de Equipamentos",
                description: "Equipamentos de alta qualidade e garantia"
              },
              {
                icon: <Wrench className="h-12 w-12 text-yellow-500" />,
                title: "Manutenção",
                description: "Suporte técnico e manutenção preventiva"
              },
              {
                icon: <Wind className="h-12 w-12 text-yellow-500" />,
                title: "Projetos Personalizados",
                description: "Soluções sob medida para cada necessidade"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col p-4 card-servicos">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Produtos</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Trabalhamos com as melhores marcas do mercado, garantindo máxima eficiência e durabilidade para seu sistema de energia solar.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                name: "Painel Solar Monocristalino 450W",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "Alta eficiência com tecnologia PERC, ideal para residências e empresas",
                features: ["Potência: 450W", "Eficiência: 20.5%", "Garantia: 25 anos"],
                highlight: "Mais Vendido"
              },
              {
                name: "Inversor Solar 8kW Trifásico",
                image: "https://plus.unsplash.com/premium_photo-1682148175448-8e418fcfbaa7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Inversor de alta performance com monitoramento WiFi integrado",
                features: ["Potência: 8kW", "Eficiência: 98%", "Garantia: 10 anos"],
                highlight: "Premium"
              },
              {
                name: "Kit Estrutura para Telhado",
                image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "Sistema completo de fixação para diferentes tipos de telhado",
                features: ["Alumínio anodizado", "Resistente à corrosão", "Fácil instalação"],
                highlight: null
              },
              {
                name: "Micro Inversor 2kW",
                image: "https://hccenergiasolar.com.br/wp-content/uploads/2022/05/microinversor.jpg",
                description: "Solução otimizada para sistemas residenciais menores",
                features: ["Potência: 2kW", "Plug & Play", "Monitoramento individual"],
                highlight: "Compacto"
              },
              {
                name: "Painel Solar Bifacial 500W",
                image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "Tecnologia de dupla face para maior geração de energia",
                features: ["Potência: 500W", "Bifacial", "Maior rendimento"],
                highlight: "Inovador"
              },
              {
                name: "Kit Proteção CC/CA",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "Conjunto completo de proteções elétricas para seu sistema",
                features: ["DPS", "Disjuntores", "Fusíveis"],
                highlight: "Segurança"
              },
              {
                name: "Otimizador de Potência",
                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "Maximize a produção de energia de cada painel",
                features: ["Até 25% mais energia", "MPPT individual", "Monitoramento"],
                highlight: null
              },
              {
                name: "Kit Solar Bombeamento",
                image: "https://images.tcdn.com.br/img/img_prod/609952/kit_bomba_d_agua_ate_8000_litros_dia_2625_1_27830b75f9389064c0792897592d6ced.jpg",
                description: "Solução completa para irrigação e bombeamento solar",
                features: ["Controlador MPPT", "Bomba submersível", "Fácil instalação"],
                highlight: "Agricultura"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.highlight && (
                    <span className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.highlight}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Shield className="h-4 w-4 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={openWhatsApp}
                    className="mt-auto w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transition-colors flex items-center justify-center">
                    <Zap className="h-4 w-4 mr-2" />
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Depoimentos de nossos clientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Roberto Silva",
                role: "Proprietário de Empresa",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                testimonial: "A instalação dos painéis solares pela Helioserv foi um dos melhores investimentos que fiz para minha empresa. A economia na conta de energia é impressionante, e o retorno do investimento veio mais rápido do que esperava."
              },
              {
                name: "Ana Martins",
                role: "Proprietária Residencial",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                testimonial: "Excelente atendimento desde o primeiro contato. A equipe técnica é muito profissional e prestativa. Minha conta de luz reduziu em 85% após a instalação do sistema solar."
              },
              {
                name: "Carlos Eduardo",
                role: "Engenheiro Civil",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                testimonial: "Como profissional da área de construção, fiquei impressionado com a qualidade do serviço e dos equipamentos. A instalação foi rápida e limpa, sem transtornos."
              },
              {
                name: "Mariana Costa",
                role: "Proprietária de Pousada",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                testimonial: "A Helioserv desenvolveu um projeto personalizado para nossa pousada, considerando todas as nossas necessidades. O suporte pós-venda é excepcional."
              },
              {
                name: "Paulo Mendes",
                role: "Agricultor",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                testimonial: "Instalamos painéis solares em nossa fazenda e os resultados superaram as expectativas. A economia gerada nos permitiu investir em outras áreas do negócio."
              },
              {
                name: "Luciana Santos",
                role: "Arquiteta",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                testimonial: "Como arquiteta, aprecio soluções que aliam sustentabilidade e estética. A Helioserv conseguiu integrar perfeitamente os painéis solares ao design da minha casa."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Form */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-4xl font-bold text-center mb-8">Entre em Contato</h2>
            {/* Notificação */}

            <div className="grid md:grid-cols-2 gap-12">

              <div>
                <form
                  ref={formRef}
                  action="https://formspree.io/f/xvgzgleb"
                  method="POST"
                  className="space-y-6"
                  onSubmit={onSubmit}
                >
                  <div>
                    <label className="block text-gray-700 mb-2">Nome</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Mensagem</label>
                    <textarea
                      name="message"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="flex justify-center items-center space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-600">Itu, São Paulo</span>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <Phone className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-600">+55 (11) 99967-0155</span>
                </div>
                <div className="flex justify-center space-x-4 pt-4">
                  <a href="https://www.facebook.com/HelioServItu" className="text-gray-400 hover:text-yellow-500">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/helioserv/" className="text-gray-400 hover:text-yellow-500">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="notification"
          ref={notificationRef}
          className="hidden fixed top-4 right-4  bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          Mensagem enviada com sucesso!
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sun className="h-8 w-8 text-yellow-500" />
                <span className="text-2xl font-bold">Helioserv</span>
              </div>
              <p className="text-gray-400">
                Soluções em energia solar para um futuro mais sustentável.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-yellow-500">Início</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-yellow-500">Sobre Nós</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-yellow-500">Serviços</a></li>
                <li><a href="#produtos" className="text-gray-400 hover:text-yellow-500">Produtos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-400">+55 (11) 99967-0155</span>
                </li>
                {/* <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-400">contato@helioserv.com</span>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2025 Helioserv. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;