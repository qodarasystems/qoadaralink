"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, Globe, Instagram, Youtube, Briefcase, MessageSquare, FileText } from "lucide-react"
import "./App.css"
import logoImage from "./assets/Qodara_Logo.png"

function LinkButton({ icon, text, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-button">
      <div className="icon-container">{icon}</div>
      <span className="button-text">{text}</span>
    </a>
  )
}

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container">
      {/* Background decorative elements */}
      <div className="border-top"></div>
      <div className="border-bottom"></div>
      <div className="border-left"></div>
      <div className="border-right"></div>

      {/* Logo */}
      <div className="logo-container">
        <div className="logo-wrapper">
          <img src={logoImage || "/placeholder.svg"} alt="Qodara Systems Logo" className="logo" />
        </div>
      </div>

      {/* Links */}
      <div className="links-container">
        <LinkButton
          icon={<MessageSquare size={18} />}
          text="Fale conosco no Whatsapp"
          href="https://api.whatsapp.com/send/?phone=5511943865242&text=Olá+tenho+interesse+em+saber+mais+sobre+os+serviços+da+Qodara.&type=phone_number&app_absent=0&fbclid=PAZXh0bgNhZW0CMTEAAafBIaTs_BKswdgtDMIjYnnp9H-90t8G3NPEZ-VozVqlIQH3ehr-TnsV18bwuA_aem_adLxJVxSKp7GoIKACVPKsg"
        />

        <LinkButton icon={<Globe size={18} />} text="Visite nosso Website" href="https://qodara-lp.vercel.app" />

        <LinkButton icon={<ShoppingCart size={18} />} text="Veja nosso Ecommerce" href="https://teste-210.catalog.yampi.io" />

        <LinkButton icon={<Instagram size={18} />} text="Nosso Instagram" href="https://www.instagram.com/qodarasystems/" />

        <LinkButton icon={<FileText size={18} />} text="Nosso portifólio" href="https://github.com/qodarasystems" />
      </div>

      {/* Footer */}
      <div className="footer">© {new Date().getFullYear()} Qodara Systems. Todos os direitos reservados.</div>
    </div>
  )
}

export default App
