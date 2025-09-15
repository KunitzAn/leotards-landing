import './App.css'

function App() {
  const images = [
    'https://images.unsplash.com/photo-1514511547113-1be72277b32e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549068106-b024baf5062d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <h1 className="brand">Мастерская Куницкой Татьяны</h1>
          <p className="tagline">Гимнастические купальники</p>
        </div>
      </header>

      <main>
        <section className="services-section">
          <div className="container">
            <h2 className="section-title">Услуги</h2>
            <ul className="services-list">
              <li>Индивидуальный пошив купальников для художественной гимнастики</li>
              <li>Разработка дизайна и подбор материалов</li>
              <li>Декорирование (стразы, аппликации, вышивка)</li>
              <li>Корректировка и ремонт изделий</li>
              <li>Сроки под выступления и соревнования</li>
            </ul>
          </div>
        </section>
        <section className="gallery-section">
          <div className="container">
            <h2 className="section-title">Примеры работ</h2>
            <div className="gallery">
              {images.map((src, idx) => (
                <a className="gallery-item" href={src} target="_blank" rel="noreferrer" key={idx}>
                  <img src={src} alt={`Пример работы ${idx + 1}`} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-col">
              <div className="brand small">Мастерская Куницкой Татьяны</div>
              <div className="ip">ИП Куницкая Татьяна</div>
              <div className="ogrnip">ОГРНИП: —</div>
              <div className="inn">ИНН: —</div>
            </div>
            <div className="footer-col">
              <div className="contacts">
                <div><a href="tel:+79990000000">+7 (999) 000-00-00</a></div>
                <div><a href="mailto:info@example.com">info@example.com</a></div>
                <div><a href="https://t.me/username" target="_blank" rel="noreferrer">Telegram</a></div>
                <div><a href="https://wa.me/79990000000" target="_blank" rel="noreferrer">WhatsApp</a></div>
              </div>
            </div>
          </div>
          <div className="copyright">© {new Date().getFullYear()} Все права защищены</div>
        </div>
      </footer>
    </div>
  )
}

export default App
