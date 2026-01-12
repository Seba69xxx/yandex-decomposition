import React from 'react';
import NewsBlock from './components/NewsBlock';
import Marketing from './components/Marketing';
import SearchBlock from './components/SearchBlock';
import Banner from './components/Banner';
import Widget from './components/Widget';
import { WeatherContent, ProgramItem } from './components/WidgetsList';

const newsData = [
  { icon: '🚀', text: 'SpaceX успешно запустила новый спутник на орбиту', link: '#' },
  { icon: '💻', text: 'Вышла новая версия библиотеки React с улучшенной производительностью', link: '#' },
  { icon: '🎨', text: 'Нейросети научились рисовать картины в стиле Ван Гога', link: '#' },
  { icon: '🚗', text: 'Представлен концепт нового электромобиля с автопилотом', link: '#' },
  { icon: '📱', text: 'Анонсирован новый смартфон с гибким экраном', link: '#' },
];

const ratesData = [
  { currency: 'USD', value: '92.50', diff: '+0.5' },
  { currency: 'EUR', value: '101.20', diff: '+0.2' },
  { currency: 'BTC', value: '65,000', diff: '+2.5%' },
];

function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 3 }}>
          <NewsBlock 
            tabs={['Сейчас в СМИ', 'Технологии', 'Наука']} 
            news={newsData} 
            rates={ratesData}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Marketing 
            img="https://placehold.co/100" 
            title="Изучаем React" 
            text="Лучшие курсы для начинающих разработчиков" 
            link="#"
          />
        </div>
      </div>

      <SearchBlock />

      <Banner img="https://placehold.co/800x100/7B68EE/white?text=Tech+Conference+2025" link="#" />

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        
        <div style={{ flex: 1, minWidth: '250px' }}>
          <Widget title="Погода">
            <WeatherContent icon="☀️" temp="+24" text="Ясно, без осадков" />
          </Widget>
          <Widget title="Популярное">
            <div><strong>Статьи</strong> — как выучить JS за месяц</div>
            <div><strong>Маркет</strong> — механические клавиатуры</div>
            <div><strong>Блоги</strong> — путешествие в Исландию</div>
          </Widget>
        </div>

        <div style={{ flex: 1, minWidth: '250px' }}>
          <Widget title="Транспорт">
            <a href="#">Расписание электричек</a>
            <div>Метро: без задержек</div>
          </Widget>
          <Widget title="Телепрограмма">
            <ProgramItem time="14:00" name="Как это сделано" channel="Discovery" />
            <ProgramItem time="15:30" name="Планета Земля" channel="BBC Earth" />
            <ProgramItem time="17:00" name="Новости технологий" channel="TechTV" />
          </Widget>
        </div>

        <div style={{ flex: 1, minWidth: '250px' }}>
          <Widget title="Эфир">
            <ProgramItem time="▶" name="Lo-Fi Beats для работы" channel="MusicStream" />
            <ProgramItem time="▶" name="Разбор кода в прямом эфире" channel="DevLive" />
            <ProgramItem time="▶" name="Лекция о космосе" channel="SpaceHub" />
          </Widget>
        </div>

      </div>
    </div>
  );
}

export default App;
