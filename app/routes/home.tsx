import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "../../components/ui/Button";
import { Layers } from "lucide-react";
import { Clock } from "lucide-react";
import Upload from "../../components/Upload";
import {useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();

  const handleUploadComplete =  async (base64Image: string) => {
      try {
          const newId  = Date.now().toString();

          // Persist the image to sessionStorage so the visualizer can retrieve it
          sessionStorage.setItem(`upload_${newId}`, base64Image);

          navigate(`/visualizer/${newId}`);
          return true;
      } catch (error) {
          console.error("Failed to persist upload:", error);
          return false;
      }
  }

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

                <Upload onComplete={handleUploadComplete} />
            </div>
          </div>
        </section>
        <section className="projects">
            <div className="section-inner">
              <div className="section-head">
                <div className="copy">
                  <h2>Projetos</h2>
                  <p>
                    Seus últimos trabalhos e projetos compartilhados na comunidade, todos em um só lugar.
                  </p>
                </div>
              </div>
              <div className="projects-grid">
                <div className="project-card group">
                  <div className="preview">
                    <img 
                    src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png" alt="imagem renderizada"/>
                    <div className="badge">
                      <span>Comunidade</span>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <div>
                      <h3>Projeto Teste</h3>
                      <div className="meta">
                        <Clock size={12} />
                        <span>{new Date('6.7.2026').toLocaleDateString()}</span>
                        <span>Por Pablo Rafael</span>
                      </div>
                    </div>
                    <div className="arrow">
                      <ArrowUpRight size={18}/>
                    </div>
                  </div>
              
                </div>
              </div>
            </div>
        </section>
      </div>
  )
}
