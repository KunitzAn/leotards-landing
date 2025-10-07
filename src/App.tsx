import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function HomePage() {
  const images = [
    'galary/IMG_0145.png',
    'galary/IMG_1046.png',
    'galary/IMG_2993.png',
    'galary/IMG_3893.jpeg',
    'galary/IMG_3895.jpeg',
    'galary/IMG_4425.PNG',
    'galary/IMG_4483.PNG',
    'galary/IMG_4484.PNG',
    'galary/IMG_4492.PNG',
    'galary/IMG_8024.jpg',
    'galary/IMG_8026.jpg',
    'galary/IMG_9618.png',
  ]

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <h1 className="brand">Мастерская Куницкой Татьяны</h1>
          <p className="tagline">Купальники для художественной, эстетической гимнастики и фигурного катания</p>
        </div>
      </header>

      <main>
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
            <div className="button-row" style={{ textAlign: 'center', marginTop: 24 }}>
              <Link to="/process" className="button-link">О пошиве</Link>
              <Link to="/care" className="button-link">Уход</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-col">
              <div className="ip">ИП Куницкая Татьяна</div>
              <div className="ogrnip">ОГРНИП: 325710000058139</div>
              <div className="inn">ИНН: 710700402367</div>
            </div>
            <div className="footer-col">
              <div className="contacts">
                <div><a className="link" href="Tatyana.ku@mail.ru">Tatyana.ku@mail.ru</a></div>
                <div><a className="vk-link" href="https://vk.com/kupalniki.taty" target="_blank" rel="noreferrer">VK</a></div>
              </div>
            </div>
          </div>
          <div className="copyright">© {new Date().getFullYear()} Все права защищены</div>
        </div>
      </footer>
    </div>
  )
}

function ProcessPage() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <h1 className="brand">О пошиве</h1>
          <p className="tagline">Процесс, материалы, сроки</p>
        </div>
      </header>
      <main>
        <nav className="container" aria-label="Хлебные крошки" style={{ marginBottom: 12 }}>
          <Link to="/">Главная</Link> / <span>О пошиве</span>
        </nav>
        <section className="container content">
          <h2>Стоимость пошива и материалы</h2>
          <div className="note">
            Стоимость пошива — от 30 000 ₽.
          </div>
          <ul className="list">
            <li>Стразы: Swarovski, премиум Корея/Китай</li>
            <li>Ткани: Италия</li>
          </ul>
          <p className="muted">Итоговая стоимость зависит от дизайна, количества камней, размера.</p>
        </section>
        <section className="container content">
          <h2>Условия работы</h2>
          <ul className="list">
            <li>Запись по предварительной договорённости</li>
            <li>Предоплата 2000 ₽ для бронирования слота (засчитывается в стоимость, невозвратная при отказе)</li>
            <li>Минимальная стоимость купальника — от 30 000 ₽</li>
          </ul>
          <h2>Процесс пошива</h2>
          <ul className="steps">
            <li>
              <strong>Подтверждение и эскиз.</strong> Присылаете пожелания, создаём индивидуальный эскиз
              с учётом музыки, вида спорта и фигуры. Эскиз входит в стоимость, копии чужих эскизов не выполняются.
              При наличии собственного эскиза потребуется подтверждение прав.
            </li>
            <li>
              <strong>Снятие мерок.</strong> По видеоинструкции или офлайн — как удобнее.
            </li>
            <li>
              <strong>Предоплата 50%.</strong> Вносится от итоговой стоимости (минус ранее внесённые 2000 ₽).
            </li>
            <li>
              <strong>Пошив.</strong> Срок — до 4 недель после предоплаты и мерок.
            </li>
            <li>
              <strong>Приёмка и расчёт.</strong> Фото/видео готового изделия или примерка. Окончательный расчёт — после приёмки.
            </li>
            <li>
              <strong>Доставка.</strong> Отправка удобной ТК или почтой по согласованию.
            </li>
          </ul>
        </section>

      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-col">
              <div className="ip">ИП Куницкая Татьяна</div>
              <div className="ogrnip">ОГРНИП: 325710000058139</div>
              <div className="inn">ИНН: 710700402367</div>
            </div>
            <div className="footer-col">
              <div className="contacts">
                <div><a className="link" href="Tatyana.ku@mail.ru">Tatyana.ku@mail.ru</a></div>
                <div><a className="vk-link" href="https://vk.com/kupalniki.taty" target="_blank" rel="noreferrer">VK</a></div>
              </div>
            </div>
          </div>
          <div className="copyright">© {new Date().getFullYear()} Все права защищены</div>
        </div>
      </footer>
    </div>
  )
}

function CarePage() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <h1 className="brand">Уход за купальниками</h1>
          <p className="tagline">Рекомендации по стирке и хранению</p>
        </div>
      </header>
      <main>
        <nav className="container" aria-label="Хлебные крошки" style={{ marginBottom: 12 }}>
          <Link to="/">Главная</Link> / <span>Уход</span>
        </nav>
        <section className="container content">
          <h2>Уход за купальником: сохраняем красоту и долговечность</h2>
          <p>Чтобы купальник радовал вас долгие годы, соблюдайте простые правила:</p>

          <h2>Стирка</h2>
          <ul className="list">
            <li>Стирайте вручную в прохладной воде (до 30°С).</li>
            <li>Используйте детское жидкое мыло или мягкий гель для душа.</li>
            <li>Не замачивайте, не выкручивайте и не выжимайте.</li>
            <li>Локально застирывайте пятна, излишнюю влагу убирайте сухим полотенцем.</li>
            <li>Следы от помады хорошо убираются каплей «Фейри».</li>
          </ul>

          <h2>Сушка</h2>
          <ul className="list">
            <li>Заверните купальник в сухое полотенце, аккуратно промокните.</li>
            <li>Сушите горизонтально на полотенце; внутрь можно положить ткань, чтобы избежать окрашивания.</li>
            <li>Не сушите на батарее и не используйте фен (кроме случаев сомнений в стойкости цвета).</li>
          </ul>

          <h2>Носка</h2>
          <ul className="list">
            <li>Надевайте аккуратно, не тяните за сетку.</li>
            <li>Для детей используйте кофту поверх купальника между выходами — это убережёт от пятен и повреждений.</li>
          </ul>

          <h2>Хранение</h2>
          <ul className="list">
            <li>Храните в отдельном чехле или пакете.</li>
            <li>Не оставляйте в полиэтиленовом пакете — появится запах.</li>
            <li>Не храните на вешалке (из-за веса камней).</li>
            <li>Оптимально — сложить горизонтально вдвое.</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-col">
              <div className="ip">ИП Куницкая Татьяна</div>
              <div className="ogrnip">ОГРНИП: 325710000058139</div>
              <div className="inn">ИНН: 710700402367</div>
            </div>
            <div className="footer-col">
              <div className="contacts">
                <div><a className="link" href="Tatyana.ku@mail.ru">Tatyana.ku@mail.ru</a></div>
                <div><a className="vk-link" href="https://vk.com/kupalniki.taty" target="_blank" rel="noreferrer">VK</a></div>
              </div>
            </div>
          </div>
          <div className="copyright">© {new Date().getFullYear()} Все права защищены</div>
      </div>
      </footer>
      </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/care" element={<CarePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
