import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import { ArrowRight } from "lucide-react";
import Button from "../../components/ui/Button";
import { Layers } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <div className="home">
        <Navbar />
        <section className="hero">
          <div className="announce">
            <div className="dot">
              <div className="pulse"></div>
            </div>

            <p>Apresentando Miaufy Render 1.5</p>
          </div>
          <h1>Construa espaços maravilhosos na velocidade do pensamento com Miaufy Render</h1>
          <p className="subtitle">
            Miaufy é um ambiente de design com IA que ajuda você a visualizar, renderizar, e entregar projetos arquitetônicos mais rápido do que nunca.
          </p>
          <div className="actions">
            <a href="#upload" className="cta">Comece a construir
              <ArrowRight className="icon"/>
            </a>
            <Button variant="outline" size="lg" className="demo">
                Veja uma Demonstração
            </Button>
          </div>
          <div id="upload" className="upload-shell">
            <div className="grid-overlay"/>
              <div className="upload-card">
                <div className="upload-head">
                  <div className="upload-icon">
                    <Layers className="icon"/>
                  </div>

                  <h3>Faça o upload da sua planta baixa</h3>
                  <p>Suporta arquivos JPG e PNG, até 10MB </p>
                </div>

                <p>Clique aqui</p>
            </div>
          </div>
        </section>
      </div>
  )
}
