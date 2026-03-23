import { Helmet } from 'react-helmet-async';
import { Award, Headphones, Clock, Lightbulb, Check } from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

const values = [
  { Icon: Award, title: 'Qualidade garantida', desc: 'Trabalhamos apenas com peças originais e de fornecedores certificados' },
  { Icon: Headphones, title: 'Atendimento especializado', desc: 'Nossa equipe técnica orienta na escolha da peça ideal' },
  { Icon: Clock, title: 'Experiência comprovada', desc: 'Mais de 30 anos de atuação no mercado automotivo' },
  { Icon: Lightbulb, title: 'Inovação constante', desc: 'Acompanhamos as novidades do mercado automotivo' },
];

const diferenciais = [
  'Estoque completo com mais de 5.000 itens',
  'Entrega rápida para toda região',
  'Garantia de fábrica em todos os produtos',
  'Preços competitivos e condições especiais',
  'Atendimento técnico especializado',
  'Parcerias com as melhores marcas do mercado',
];

const Sobre = () => (
  <>
    <Helmet>
      <title>Sobre — Celsão Auto Peças</title>
      <meta name="description" content="Conheça a história da Celsão Auto Peças. Desde 1994, referência em peças automotivas de qualidade." />
    </Helmet>

    <section className="py-16">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <SectionReveal>
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Sobre a Celsão Auto Peças</h1>
          <p className="text-muted-foreground text-lg mb-10">
            Uma história de dedicação, qualidade e compromisso com nossos clientes
          </p>
        </SectionReveal>
        <SectionReveal delay={100}>
          <div className="bg-card border border-border p-8 text-left">
            <h2 className="text-xl font-bold text-foreground mb-4">Nossa história</h2>
            <p className="text-muted-foreground leading-relaxed">
              Fundada em 1994 por Celso Barbosa em Bom Jesus dos Perdões — SP, a Celsão Auto Peças nasceu do sonho de oferecer peças automotivas de qualidade com atendimento diferenciado. O que começou como uma pequena loja, hoje são 3 unidades referência na região.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-10">Nossos valores</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ Icon, title, desc }, i) => (
            <SectionReveal key={title} delay={i * 100}>
              <div className="bg-background p-6 border border-border h-full">
                <Icon className="h-10 w-10 text-gold mb-4" />
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-10">Nossos diferenciais</h2>
        </SectionReveal>
        <ul className="space-y-4">
          {diferenciais.map((d, i) => (
            <SectionReveal key={d} delay={i * 60}>
              <li className="flex items-center gap-3 text-foreground">
                <Check className="h-5 w-5 text-gold flex-shrink-0" />
                {d}
              </li>
            </SectionReveal>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default Sobre;
