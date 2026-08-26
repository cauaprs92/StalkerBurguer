"use client";

import Image from "next/image";
import { useState } from "react";

const menuItems = [
  ["Monster Burger", "Duplo smash, cheddar, bacon e molho Stalker.", "lanche1_stalkerburguer.png"],
  ["Piscina Cheddar", "Crocante por fora, cremoso no centro e impossível de ignorar.", "piscinacheddar-StalkerBurguer.png"],
  ["X Honey", "Blend artesanal, queijo coalho e o toque doce do mel.", "lache-queijudo-StalkerBurguer.png"],
  ["SORVETE FRITO", "Crocante e gelado, experiência única.", "lanche4_stalkerburguer.png"],
];

const units = [
  ["Zona Sul", "Av. Andrômeda, 2240", "Jardim Satélite", "12 98853-3658"],
  ["Zona Leste", "Av. das Rosas, 609", "Jardim Motorama", "12 97405-1935"],
];

const menuPages = [
  { label: "Lanches · 01", image: "/images/cardapio1-lanches-StalkerBurguer.png", alt: "Primeira página do cardápio de lanches Stalker Burger" },
  { label: "Lanches · 02", image: "/images/cardapio2-lanches-StalkerBurguer.png", alt: "Segunda página do cardápio de lanches Stalker Burger" },
  { label: "Almoço", image: "/images/cardapio-almoco-StalkerBurguer.jpeg", alt: "Cardápio de almoço da Stalker Burger" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuPage, setActiveMenuPage] = useState(0);

  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
          <span>STALKER</span>
          <small>BURGER</small>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? "×" : "☰"}
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {["cardapio", "unidades", "sobre", "kids", "contato"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item === "kids" ? "Espaço Kids" : item}</a>
          ))}
          <a className="nav-order" href="#cardapio" onClick={() => setMenuOpen(false)}>Ver cardápio <span>↗</span></a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <Image className="hero-image" src="/images/faixada-motorama-StalkerBurguer.png" alt="Fachada da unidade Motorama da Stalker Burger" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">São José dos Campos · desde 2015</p>
          <h1>O lanche<br /><em>que fica</em><br />na memória.</h1>
          <p className="hero-copy">Hambúrguer artesanal, ambiente temático e uma experiência feita para toda a família.</p>
          <a className="button button-yellow" href="#cardapio">Quero ver os lanches <span>↓</span></a>
        </div>
        <div className="hero-stamp">SMASH<br /><strong>THE</strong><br />ORDINARY</div>
        <div className="scroll-note">role para descobrir <span>↓</span></div>
      </section>

      <section className="ticker" aria-label="Destaques Stalker Burger">
        <span>ARTESANAL</span><b>✦</b><span>FAMÍLIA</span><b>✦</b><span>DESDE 2015</span><b>✦</b><span>ARTESANAL</span><b>✦</b><span>FAMÍLIA</span>
      </section>

      <section className="section menu-section" id="cardapio">
        <div className="section-heading">
          <div><p className="eyebrow dark-eyebrow">o motivo da visita</p><h2>Escolha seu<br /><span>stalker.</span></h2><p className="best-sellers-note">Os mais vendidos da casa</p></div>
          <div className="heading-side"><p>Receitas autorais, ingredientes de verdade e aquele tipo de lanche que pede uma foto antes da primeira mordida.</p><a className="text-link" href="#contato">Quero pedir <span>↗</span></a></div>
        </div>
        <div className="menu-grid">
          {menuItems.map(([name, description, image], index) => (
            <article className={`menu-card card-${index + 1}`} key={name}>
              <div className="menu-image"><Image src={`/images/${image}`} alt={name} fill sizes="(max-width: 760px) 92vw, 25vw" /></div>
              <div className="menu-card-info"><span className="item-number">0{index + 1}</span><h3>{name}</h3><p>{description}</p><button aria-label={`Ver detalhes de ${name}`}>＋</button></div>
            </article>
          ))}
        </div>
        <article className="menu-material menu-gallery">
          <div className="material-header">
            <div><p className="eyebrow dark-eyebrow">cardápio completo</p><h3>Veja tudo</h3></div>
            <span className="material-tag">{activeMenuPage + 1} / {menuPages.length}</span>
          </div>
          <div className="menu-gallery-view">
            <Image src={menuPages[activeMenuPage].image} alt={menuPages[activeMenuPage].alt} fill sizes="(max-width: 760px) 88vw, 70vw" />
          </div>
          <div className="menu-gallery-controls" aria-label="Páginas do cardápio">
            {menuPages.map((page, index) => (
              <button className={index === activeMenuPage ? "is-active" : ""} key={page.label} onClick={() => setActiveMenuPage(index)} aria-label={`Ver ${page.label}`} aria-pressed={index === activeMenuPage}>
                <span>0{index + 1}</span>{page.label}
              </button>
            ))}
          </div>
        </article>
        <div className="menu-note"><span>feito para abrir o apetite</span><p>Escolha seu favorito, reúna a família<br />e venha viver a experiência.</p><a href="#unidades">Encontrar unidade <span>↗</span></a></div>
      </section>

      <section className="experience" id="sobre">
        <div className="experience-photo"><Image src="/images/lanche5_stalkerburguer.png" alt="Lanche artesanal Stalker Burger" fill sizes="50vw" /></div>
        <div className="experience-copy"><p className="eyebrow">mais que um hambúrguer</p><h2>Uma experiência<br /><span>para ficar.</span></h2><p>A Stalker nasceu para transformar o tradicional rolê de comer fora em um programa completo. Aqui, cada detalhe tem gosto de descoberta: do primeiro olhar ao último pedaço.</p><div className="pillars"><div><strong>01</strong><span>Atendimento<br />de verdade</span></div><div><strong>02</strong><span>Espaço<br />temático</span></div><div><strong>03</strong><span>Qualidade<br />sempre</span></div></div></div>
      </section>

      <section className="section units-section" id="unidades">
        <div className="section-heading"><div><p className="eyebrow dark-eyebrow">vem encontrar a gente</p><h2>Duas casas.<br /><span>Um só rolê.</span></h2></div><p className="heading-side">Escolha a unidade mais perto de você e venha viver a experiência Stalker.</p></div>
        <div className="units-grid">{units.map(([zone, address, neighborhood, phone], index) => <article className="unit-card" key={zone}><span className="unit-index">0{index + 1}</span><p className="eyebrow dark-eyebrow">{zone}</p><h3>{address}</h3><p>{neighborhood}<br />São José dos Campos · SP</p><a href={`https://wa.me/55${phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">Chamar no WhatsApp <span>↗</span></a></article>)}</div>
      </section>

      <section className="kids-section" id="kids"><div className="kids-copy"><p className="eyebrow">o rolê da família inteira</p><h2>Enquanto eles<br /><span>brincam.</span></h2><p>Um Espaço Kids de verdade, pensado para a diversão dos pequenos e a tranquilidade dos grandes.</p><a className="button button-yellow" href="#contato">Conheça o espaço <span>↗</span></a></div><div className="kids-art"><span className="kids-word">KIDS</span><span className="kids-circle">PLAY<br />ALL<br />DAY</span></div></section>

      <footer id="contato"><div className="footer-top"><div><a className="brand footer-brand" href="#inicio"><span>STALKER</span><small>BURGER</small></a><p>O lanche que fica<br />na memória.</p></div><div className="footer-links"><p className="eyebrow">siga o movimento</p><a href="https://www.instagram.com/stalker.burger/" target="_blank" rel="noreferrer">Instagram <span>↗</span></a><a href="https://g1.globo.com/sp/vale-do-paraiba-regiao/especial-publicitario/stalker-burger/noticia/2025/12/31/o-que-e-stalker-burger-descubra-experiencia-gastronomica-para-familia-em-sjc.ghtml" target="_blank" rel="noreferrer">Matéria no G1 <span>↗</span></a></div><div className="footer-contact"><p className="eyebrow">fale com a gente</p><a href="tel:+5512988533658">12 98853-3658</a><a href="mailto:oi@stalkerburger.com.br">oi@stalkerburger.com.br</a></div></div><div className="footer-bottom"><span>© 2026 Stalker Burger</span><span>São José dos Campos · SP</span><a href="#inicio">voltar ao topo ↑</a></div></footer>
    </main>
  );
}
