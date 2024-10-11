'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Star, Phone, Mail, Instagram } from 'lucide-react'
import { useToast } from '@chakra-ui/react'

export function LandingPageComponent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { name, email, message })
    toast({
      title: 'Mensagem enviada!',
      description: name + ', obrigado por entrar em contato conosco. Responderemos em breve.',
      status: 'success',
      duration: 5000,
      isClosable: true
    })

  }

  const handleClick = () => {
    // envia para url  https://wa.me/qr/ZWZEUTPTCITCD1
    window.open('https://wa.me/qr/ZWZEUTPTCITCD1', '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col bg-blue-900">
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Universo AGV</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-yellow-300">Inicio</a></li>
              <li><a href="#services" className="hover:text-yellow-300">Serviços</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-300">Feedback</a></li>
              <li><a href="#contact" className="hover:text-yellow-300">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative bg-blue-900 text-white py-40"
          style={{
            backgroundImage: "url('/home.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative container mx-auto text-end">
            <h1 className="text-4xl font-bold mb-4">Consultoria Especializada em Proteção de Veículos</h1>
            <p className="text-xl mb-8">Proteja seu veículo com nosso aconselhamento e serviços profissionais</p>
            <Button className="bg-yellow-400 text-blue-800 hover:bg-yellow-500" onClick={handleClick}>Fale conosco</Button>
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
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
                <Input
                  type="email"
                  placeholder="Seu Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
              <Button type="submit" className="w-full bg-yellow-400 text-gray-800 hover:bg-yellow-500">Enviar</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Consultor Junior. Todos os direitos reservados.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="daviot.dev@gmail.com" className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              daviot.dev@gmail.com
            </a>
            <a href="tel:+02196742-3208" className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +55 (021) 9 96742-3208
            </a>
          </div>
          <div className="mt-4">
            <a href="https://instagram.com/daviot.dev" className="text-white hover:text-yellow-300">
              <Instagram className="w-6 h-6" />
            </a>
          </div>


        </div>
        <div className="container mx-auto text-center">
          <div className="flex justify-center  space-x-4">
            <a href="https://wa.me/qr/ZWZEUTPTCITCD1" className="flex items-center" target="_blank" rel="noopener noreferrer">
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
            <a href="https://www.instagram.com/protecao.universo.agv/profilecard/?igsh=amFsYmhoNHpraDUy" className="flex items-center">
              <Instagram className="w-5 h-5 mr-2" />
              Consultor Junior AGV
            </a>
          </div>



        </div>
      </footer>
    </div>
  )
}