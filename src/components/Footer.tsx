import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => (
  <footer style={{ backgroundColor: '#0f1e30', borderTop: '2px solid #e7c30b' }}>
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <img
          src="/logo.png"
          alt="Celsão Auto Peças"
          className="h-12 w-auto object-contain mb-4"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <p className="text-white/60 text-sm leading-relaxed">
          Há mais de 30 anos oferecendo peças automotivas de qualidade com atendimento especializado.
        </p>
      </div>

      <div>
        <h4 className="text-gold font-bold mb-4 text-sm uppercase tracking-wide">Links rápidos</h4>
        <ul className="space-y-2">
          {[
            { to: '/', label: 'Home' },
            { to: '/sobre', label: 'Sobre' },
            { to: '/contato', label: 'Contato' },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-white/60 hover:text-gold text-sm transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-gold font-bold mb-4 text-sm uppercase tracking-wide">Contato</h4>
        <ul className="space-y-3 text-sm text-white/60">
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gold" />
            (11) 93299-7159
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-gold" />
            comercial@celsaoautopecas.com
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-gold font-bold mb-4 text-sm uppercase tracking-wide">Redes sociais</h4>
        <div className="flex gap-3">
          {[
            { href: 'https://facebook.com/celsaoautopecas', Icon: Facebook },
            { href: 'https://instagram.com/celsaoautopecas', Icon: Instagram },
            { href: 'https://youtube.com/celsaoautopecas', Icon: Youtube },
          ].map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center text-gold border border-gold/30 hover:bg-gold hover:text-gold-foreground transition-colors"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 py-4 text-center text-white/40 text-sm">
      © 2026 Celsão Auto Peças. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
