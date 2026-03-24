import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { RefreshCw, CreditCard, ShieldCheck, Award, Clock, Headphones, Mail, Phone, MapPin } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const marcas = [
  { nome: 'Cofap', arquivo: 'cofap.png' },
  { nome: 'Nakata', arquivo: 'nakata.png' },
  { nome: 'NGK', arquivo: 'ngk.png' },
  { nome: 'Bosch', arquivo: 'bosch.png' },
  { nome: 'Magneti Marelli', arquivo: 'magneti marelli.png' },
  { nome: 'Continental', arquivo: 'continental.png' },
  { nome: 'Frasle', arquivo: 'frasle.png' },
  { nome: 'Tecfil', arquivo: 'tecfil.png' },
  { nome: 'Axios', arquivo: 'axios.png' },
  { nome: 'Perfect', arquivo: 'perfect.png' },
  { nome: 'Viemar', arquivo: 'viemar.png' },
  { nome: 'Mte', arquivo: 'mte.png' },
  { nome: 'Valclei', arquivo: 'valclei.png' },
  { nome: 'Sampel', arquivo: 'sampel.png' },
  { nome: 'DS', arquivo: 'ds.png' },
  { nome: 'TSA', arquivo: 'tsa.png' },
  { nome: 'Hipper Freios', arquivo: 'hipper freios.png' },
  { nome: 'Cobreq', arquivo: 'cobreq.png' },
  { nome: 'IKS', arquivo: 'iks.png' },
  { nome: 'Fania', arquivo: 'fania.png' },
  { nome: 'Indisa', arquivo: 'indisa.png' },
  { nome: 'Roltens', arquivo: 'roltens.png' },
  { nome: 'IRB', arquivo: 'irb.png' },
  { nome: 'Sabo', arquivo: 'sabo.png' },
  { nome: 'Taranto', arquivo: 'taranto.png' },
];

const stores = [
  { city: 'Bom Jesus dos Perdões', address: 'Av. Santos Dumont, 425', phone: '(11) 95258-7563', hours: 'Seg–Sex 08h–18h | Sáb 08h–13h' },
  { city: 'Nazaré Paulista', address: 'Rua José Gonçalves, 332', phone: '(11) 95259-8021', hours: 'Seg–Sex 08h–18h | Sáb 08h–13h' },
  { city: 'Atibaia', address: 'Praça 24 de Junho, 40', phone: '(11) 5197-1313', hours: 'Seg–Sex 08h–18h | Sáb 08h–13h' },
];

const Index = () => (
  <>
    <Helmet>
      <title>Celsão Auto Peças — Peças Automotivas de Qualidade</title>
      <meta name="description" content="Celsão Auto Peças — peças automotivas com qualidade e tradição desde 1994. Atendimento especializado e garantia de procedência." />
    </Helmet>

    {/* Hero */}
    <section
      className="relative py-20 md:py-32"
      style={{ background: 'linear-gradient(135deg, #1a2840 0%, #0f1520 60%, #1a0c0c 100%)' }}
    >
      <div className="container mx-auto px-4 text-center">
        <SectionReveal>
          <img
            src="/logo.png"
            alt=""
            className="h-16 w-auto object-contain mb-8 mx-auto"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </SectionReveal>
        <SectionReveal>
          <span className="inline-block px-4 py-1.5 text-gold text-sm font-medium tracking-wide" style={{ border: '1.5px solid hsl(var(--gold))' }}>
            Há mais de 30 anos no mercado
          </span>
        </SectionReveal>
        <SectionReveal delay={100}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-6 mb-6 leading-tight">
            Confiança e Tradição<br />para o seu Veículo
          </h1>
        </SectionReveal>
        <SectionReveal delay={200}>
          <p className="text-white/60 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Oferecemos as melhores peças automotivas do mercado com garantia de procedência. Atendimento especializado e consultoria técnica para manter seu veículo sempre em perfeito estado.
          </p>
        </SectionReveal>
        <SectionReveal delay={300}>
          <a
            href="https://wa.me/5511932997159?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20uma%20pe%C3%A7a."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-extrabold transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg"
            style={{ backgroundColor: "#e7c30b", color: "#1a1a1a", borderRadius: 0 }}
          >
            Fale conosco
          </a>
        </SectionReveal>
      </div>
    </section>

    {/* Benefits Bar */}
    <section className="bg-gold py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { Icon: RefreshCw, text: 'Troca em 7 dias' },
          { Icon: CreditCard, text: 'Parcele em até 10x sem juros*' },
          { Icon: ShieldCheck, text: 'Site 100% seguro' },
        ].map(({ Icon, text }) => (
          <div key={text} className="flex items-center justify-center gap-3 py-2">
            <Icon className="h-6 w-6 text-gold-foreground" />
            <span className="text-gold-foreground font-bold text-sm">{text}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Diferenciais */}
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { Icon: Award, title: 'Peças originais', desc: 'Garantia de qualidade e procedência' },
          { Icon: Clock, title: 'Desde 1994 no mercado', desc: 'Mais de 30 anos de experiência automotiva' },
          { Icon: Headphones, title: 'Atendimento especializado', desc: 'Equipe técnica e consultoria personalizada' },
        ].map(({ Icon, title, desc }, i) => (
          <SectionReveal key={title} delay={i * 100}>
            <div className="p-6 border-b-4 border-gold" style={{ backgroundColor: '#f8f9fa' }}>
              <Icon className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-foreground font-bold text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>

    {/* Nossos Parceiros */}
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-2">Nossos Parceiros</h2>
          <p className="text-center text-muted-foreground text-sm">Trabalhamos com as principais marcas do mercado automotivo</p>
        </SectionReveal>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll-marcas gap-4 px-4">
          {[...marcas, ...marcas].map((marca, i) => (
            <div
              key={`${marca.nome}-${i}`}
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: '150px',
                height: '90px',
                backgroundColor: '#ffffff',
                border: '1px solid #e7c30b',
                padding: '14px',
              }}
            >
              <img
                src={`/logos/${encodeURIComponent(marca.arquivo)}`}
                alt={marca.nome}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = 'none';
                  const span = document.createElement('span');
                  span.textContent = marca.nome;
                  span.style.cssText = 'font-weight:700;font-size:11px;text-transform:uppercase;color:#1a2840;text-align:center;line-height:1.3;';
                  img.parentNode?.appendChild(span);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Entre em contato */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-10">Entre em contato</h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <SectionReveal delay={0}>
            <div className="bg-card p-6 border border-border flex items-center gap-4">
              <Mail className="h-8 w-8 text-gold" />
              <div>
                <p className="text-sm text-muted-foreground">E-mail</p>
                <p className="font-bold text-foreground">comercial@celsaoautopecas.com</p>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={100}>
            <div className="bg-card p-6 border border-border flex items-center gap-4">
              <Phone className="h-8 w-8 text-gold" />
              <div>
                <p className="text-sm text-muted-foreground">Telefone</p>
                <p className="font-bold text-foreground">(11) 93299-7159</p>
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stores.map((s, i) => (
            <SectionReveal key={s.city} delay={i * 100}>
              <div className="bg-card p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold" />
                  {s.city}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{s.address}</p>
                <p className="text-sm text-muted-foreground mb-1">{s.phone}</p>
                <p className="text-sm text-muted-foreground">{s.hours}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contato"
            className="inline-block px-6 py-3 bg-gold text-gold-foreground font-extrabold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Enviar mensagem →
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Index;
