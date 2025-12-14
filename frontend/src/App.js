import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { 
  Calendar, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Wheat,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  DollarSign,
  Smartphone,
  Sprout
} from 'lucide-react';

function App() {
  const features = [
    {
      icon: Calendar,
      title: 'Kalender Tanam',
      description: 'Panduan pola tanam sesuai musim dan kondisi tanah lokal Desa Sengka'
    },
    {
      icon: BookOpen,
      title: 'Edukasi Pertanian',
      description: 'Materi edukasi yang relevan dan mudah dipahami untuk meningkatkan hasil panen'
    },
    {
      icon: Users,
      title: 'Komunikasi Komunitas',
      description: 'Jembatan komunikasi antara ketua komunitas dan para petani'
    },
    {
      icon: TrendingUp,
      title: 'Strategi Pascapanen',
      description: 'Informasi pasar dan strategi penjualan untuk hasil panen yang lebih menguntungkan'
    },
    {
      icon: Wheat,
      title: 'Rencana Kegiatan',
      description: 'Jadwal dan koordinasi kegiatan pertanian bersama'
    },
    {
      icon: MessageSquare,
      title: 'Tanya Jawab',
      description: 'Forum diskusi untuk berbagi pengalaman dan solusi pertanian'
    }
  ];

  const benefits = [
    'Arahan pola tanam yang sesuai musim',
    'Informasi harga pasar terkini',
    'Koordinasi dengan ketua komunitas',
    'Edukasi teknik budidaya modern'
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src="/WhatsApp Image 2025-12-13 at 23.39.42.jpeg" alt="Logo Padi" className="logo-icon" />
              <span className="logo-text">Belajar Tani</span>
            </div>
            <nav className="nav">
              <a href="#fitur" className="nav-link">Fitur</a>
              <a href="#manfaat" className="nav-link">Manfaat</a>
              <Button className="btn-daftar">Daftar Sekarang</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <CheckCircle className="badge-icon" />
                <span>Solusi Komunikasi Petani Modern</span>
              </div>
              <h1 className="hero-title">
                Platform Komunikasi & Edukasi untuk Petani Desa Sengka
              </h1>
              <p className="hero-description">
                Menghubungkan petani dengan informasi pertanian yang tepat, sesuai kondisi lokal, 
                dan mempermudah komunikasi dengan ketua komunitas untuk hasil panen yang lebih optimal.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Petani Aktif</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">20 Ton</div>
                  <div className="stat-label">Produksi Panen</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Informasi Lokal</div>
                </div>
              </div>
              <div className="hero-cta">
                <Button className="btn-primary" size="lg">
                  Mulai Sekarang
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="outline" className="btn-secondary" size="lg">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-card">
                <div className="visual-icon-container">
                  <img src="/WhatsApp Image 2025-12-13 at 23.39.42.jpeg" alt="Padi" className="visual-icon" />
                </div>
                <div className="visual-decoration decoration-1"></div>
                <div className="visual-decoration decoration-2"></div>
                <div className="visual-decoration decoration-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="problem-section">
        <div className="container">
          <div className="problem-content">
            <h2 className="section-title">Tantangan yang Dihadapi Petani</h2>
            <div className="problem-grid">
              <div className="problem-card">
                <div className="problem-icon-wrapper">
                  <AlertTriangle className="problem-icon-svg" size={40} />
                </div>
                <h3>Komunikasi Tidak Efektif</h3>
                <p>Arahan pola tanam dari ketua komunitas jarang disampaikan, pertemuan hanya 2x setahun tanpa evaluasi.</p>
              </div>
              <div className="problem-card">
                <div className="problem-icon-wrapper">
                  <Sprout className="problem-icon-svg" size={40} />
                </div>
                <h3>Ketidakteraturan Produksi</h3>
                <p>Tanpa panduan seragam, petani tidak tahu jenis tanaman yang sesuai musim dan kondisi tanah.</p>
              </div>
              <div className="problem-card">
                <div className="problem-icon-wrapper">
                  <DollarSign className="problem-icon-svg" size={40} />
                </div>
                <h3>Harga Jual Rendah</h3>
                <p>Terpaksa menjual ke tengkulak dengan harga di bawah Rp6.500/kg karena kuota Bulog terbatas.</p>
              </div>
              <div className="problem-card">
                <div className="problem-icon-wrapper">
                  <Smartphone className="problem-icon-svg" size={40} />
                </div>
                <h3>Informasi Tidak Relevan</h3>
                <p>Informasi dari YouTube tidak sesuai kondisi lokal Desa Sengka dan pengalaman praktis setempat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Fitur Platform Belajar Tani</h2>
            <p className="section-subtitle">
              Semua yang Anda butuhkan untuk meningkatkan hasil pertanian dalam satu platform
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="feature-card">
                  <CardHeader>
                    <div className="feature-icon">
                      <IconComponent size={32} />
                    </div>
                    <CardTitle className="feature-title">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="feature-description">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="manfaat" className="benefits-section">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2 className="section-title">Manfaat untuk Petani</h2>
              <p className="benefits-intro">
                Platform Belajar Tani dirancang khusus untuk membantu petani Desa Sengka 
                mendapatkan informasi yang tepat dan meningkatkan hasil panen.
              </p>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <CheckCircle className="benefit-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="benefits-visual">
              <div className="benefits-card">
                <div className="benefits-card-header">
                  <Users size={40} />
                  <h3>Komunitas Petani</h3>
                </div>
                <div className="benefits-card-body">
                  <p>Bergabung dengan komunitas petani Desa Sengka untuk berbagi pengalaman dan solusi pertanian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Siap Meningkatkan Hasil Panen Anda?</h2>
            <p className="cta-description">
              Bergabunglah dengan platform Belajar Tani dan dapatkan akses ke informasi pertanian 
              yang relevan dengan kondisi lokal Desa Sengka.
            </p>
            <Button className="btn-cta" size="lg">
              Daftar Sekarang - Gratis
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <Wheat className="footer-logo-icon" />
                <span className="footer-logo-text">Belajar Tani</span>
              </div>
              <p className="footer-description">
                Platform komunikasi dan edukasi untuk petani Desa Sengka
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Platform</h4>
              <ul className="footer-links">
                <li><a href="#fitur">Fitur</a></li>
                <li><a href="#manfaat">Manfaat</a></li>
                <li><a href="#tentang">Tentang</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Bantuan</h4>
              <ul className="footer-links">
                <li><a href="#panduan">Panduan</a></li>
                <li><a href="#kontak">Kontak</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Kontak</h4>
              <p className="footer-contact">Desa Sengka</p>
              <p className="footer-contact">Email: info@Belajar Tani.id</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Belajar Tani. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
