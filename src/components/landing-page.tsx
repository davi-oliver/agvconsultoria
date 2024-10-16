'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Star, Phone, Mail, Instagram, MessageSquare, Briefcase, Home, Twitter, Facebook } from 'lucide-react'
import { useToast } from '@chakra-ui/react'

export function LandingPageComponent() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const toast = useToast()



  const handleClick = () => {
    if (!message) {
      toast({
        title: 'Mensagem vazia!',
        description: 'Por favor, preencha a mensagem antes de enviar.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
      return
    }

    if (!name) {
      toast({
        title: 'Informe seu nome!',
        description: 'Por favor, preencha o nome antes de enviar.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
      return
    }

    const messageurl = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send/?phone=5521967423208&text=${messageurl}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
  }

  const faleconosco = () => {
    const url = `https://api.whatsapp.com/send/?phone=5521967423208&text=Olá!&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
  }


  return (
    <div className="min-h-screen flex flex-col bg-blue-900">
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* <div className="text-2xl font-bold">Universo AGV</div> */}
          <nav className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
              <li className="flex items-center">
                <Home className="w-5 h-5 mr-2" />
                <a href="#home" className="hover:text-yellow-300">Inicio</a>
              </li>
              <li className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                <a href="#services" className="hover:text-yellow-300">Serviços</a>
              </li>
              <li className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                <a href="#testimonials" className="hover:text-yellow-300">Feedback</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="#contact" className="hover:text-yellow-300">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative bg-blue-900 text-white py-40"

        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative container mx-auto text-end pr-10" >
            <h1 className="text-4xl font-bold mb-4">Consultoria Especializada em Proteção de Veículos</h1>
            <p className="text-xl mb-8">Proteja seu veículo com nosso aconselhamento e serviços profissionais</p>
            <Button className="bg-yellow-400 text-blue-800 hover:bg-yellow-500" onClick={faleconosco}>Fale conosco</Button>
          </div>
        </section>
        <section id="services" className="py-16 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Proteção Abrangente</h3>
                <p className="text-gray-200">Oferecemos planos de proteção personalizados para todos os tipos de veículos.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Consultoria Especializada</h3>
                <p className="text-gray-200">Nossos consultores fornecem orientação especializada sobre as melhores opções de proteção.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Suporte 24/7</h3>
                <p className="text-gray-200">Assistência 24 horas para todas as suas necessidades de proteção de veículos.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-gray-800 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-200">O Que Nossos Clientes Dizem:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="mb-4 text-gray-200">"A Universo AGV forneceu excelentes conselhos para minhas necessidades de proteção de carro. Altamente recomendado!"</p>
                <p className="font-semibold text-blue-300">- João Silva</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="mb-4 text-gray-200">"Os consultores eram muito conhecedores e me ajudaram a escolher o plano de proteção perfeito."</p>
                <p className="font-semibold text-blue-300">- Maria Souza</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-200">Deixe sua mensagem aqui</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4 text-white">
                <Input
                  type="text"
                  placeholder="Seu Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  color="white"
                />
              </div>

              <div className="mb-4 text-white">
                <Textarea
                  placeholder="Sua Menssagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-yellow-400 text-gray-800 hover:bg-yellow-500" onClick={handleClick}>Enviar</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-800  ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Sobre Nós</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Comprometidos com a segurança do seu veículo. Nossa equipe de consultores especializados está pronta para ajudá-lo.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Links Rápidos</h4>
              <ul className="space-y-2 text-white text-gray-500 dark:text-gray-400">
                <li><a href="/products" className="hover:underline">Produtos</a></li>
                <li><a href="/about" className="hover:underline">Sobre</a></li>
                <li><a href="/contact" className="hover:underline">Contato</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Contato</h4>
              <p className="text-white text-gray-500 dark:text-gray-400">

                Telefone:  +55 21 96742-3208
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>

                <a href="#" className="text-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5521967423208&text&type=phone_number&app_absent=0" className="flex items-center text-white" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 AGV Consultoria. Todos os direitos reservados.
          </div>

        </div>
      </footer>
    </div>
  )
}