import { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const stores = [
  {
    city: 'Bom Jesus dos Perdões',
    address: 'Av. Santos Dumont, 425',
    phone: '(11) 95258-7563',
    hours: 'Seg–Sex 08h–18h | Sáb 08h–13h',
    map: 'https://maps.google.com/maps?q=Av+Santos+Dumont+425+Bom+Jesus+dos+Perdoes+SP&output=embed',
  },
  {
    city: 'Nazaré Paulista',
    address: 'Rua José Gonçalves, 332',
    phone: '(11) 95259-8021',
    hours: 'Seg–Sex 08h–18h | Sáb 08h–13h',
    map: 'https://maps.google.com/maps?q=Rua+Jose+Goncalves+332+Nazare+Paulista+SP&output=embed',
  },
  {
    city: 'Atibaia',
    address: 'Praça 24 de Junho, 40',
    phone: '(11) 5197-1313',
    hours: 'Seg–Sex 08h–18h | Sáb 08h–13h',
    map: 'https://maps.google.com/maps?q=Praca+24+de+Junho+40+Atibaia+SP&output=embed',
  },
];

const Contato = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass = 'w-full border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-muted-foreground';

  return (
    <>
      <Helmet>
        <title>Contato — Celsão Auto Peças</title>
        <meta name="description" content="Entre em contato com a Celsão Auto Peças. Estamos prontos para atender você." />
      </Helmet>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold text-foreground mb-3">Entre em contato</h1>
              <p className="text-muted-foreground text-lg">Nossa equipe está pronta para atender você.</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <SectionReveal delay={0}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Nome completo *</label>
                  <input required className={inputClass} placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">E-mail *</label>
                  <input required type="email" className={inputClass} placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Telefone</label>
                  <input className={inputClass} placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Assunto</label>
                  <input className={inputClass} placeholder="Assunto da mensagem" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Mensagem *</label>
                  <textarea required rows={5} className={inputClass} placeholder="Escreva sua mensagem..." />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
                >
                  Enviar mensagem
                </button>
                {sent && (
                  <p className="text-center text-sm font-medium text-green-600 mt-2">
                    Mensagem enviada com sucesso!
                  </p>
                )}
              </form>
            </SectionReveal>

            {/* Stores */}
            <div className="space-y-6">
              {stores.map((s, i) => (
                <SectionReveal key={s.city} delay={i * 100}>
                  <div className="border border-border" style={{ borderBottom: '3px solid #e7c30b' }}>
                    <div className="p-5">
                      <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-gold" />
                        {s.city}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">{s.address}</p>
                      <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                        <Phone className="h-4 w-4" /> {s.phone}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {s.hours}
                      </p>
                    </div>
                    <iframe
                      src={s.map}
                      className="w-full border-0"
                      height="220"
                      allowFullScreen
                      loading="lazy"
                      title={`Mapa ${s.city}`}
                    />
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
