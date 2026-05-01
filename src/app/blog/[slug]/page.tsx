import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

const articles: Record<string, {
  title: string;
  content: string[];
  image: string;
  date: string;
  readTime: string;
  category: string;
}> = {
  '7-day-itinerary': {
    title: '7-Day Azerbaijan Itinerary: Mountains, Coast & History',
    image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1200&q=80',
    date: 'Apr 23, 2025',
    readTime: '10 min read',
    category: 'Itineraries',
    content: [
      'Azerbaijan is a country of stunning contrasts, where ancient history meets modern architecture, and where the Caspian Sea meets the towering peaks of the Caucasus Mountains. This 7-day itinerary takes you through the very best of what this fascinating country has to offer.',
      '**Day 1: Baku - The City of Fire**\n\nArrive in Baku and start your exploration in the UNESCO-listed Old City (Icherisheher). Wander through the narrow cobblestone streets, visit the iconic Maiden Tower, and explore the magnificent Palace of the Shirvanshahs. In the evening, head to the Flame Towers for panoramic views of the city.',
      '**Day 2: Baku - Modern Marvels**\n\nDiscover Baku\'s modern side with a visit to the stunning Heydar Aliyev Center, designed by Zaha Hadid. Explore the vibrant Fountains Square and take a stroll along the Caspian Sea Boulevard. In the evening, enjoy dinner at one of the city\'s many excellent restaurants.',
      '**Day 3: Gobustan & Mud Volcanoes**\n\nTake a day trip to Gobustan National Park, home to over 6,000 rock carvings dating back 40,000 years. Then, experience the unique mud volcanoes of the region - one of the world\'s largest concentrations of these natural wonders.',
      '**Day 4: Sheki - The Silk Road City**\n\nTravel to Sheki, a beautiful historic city on the Silk Road. Visit the stunning Sheki Khan Palace with its exquisite stained glass work, explore the charming Old Town, and sample the famous Sheki halva.',
      '**Day 5: Gabala - Mountain Adventures**\n\nHead to Gabala, Azerbaijan\'s premier mountain resort destination. Take the cable car up Tufandag Mountain for breathtaking views, go hiking in the surrounding forests, or visit the peaceful Nohur Lake.',
      '**Day 6: Lahij & The Caucasus Mountains**\n\nExplore the ancient mountain village of Lahij, known for its traditional copper workshops and stone architecture. The scenic drive through the Caucasus Mountains is an experience in itself.',
      '**Day 7: Return to Baku & Departure**\n\nReturn to Baku for some last-minute shopping and sightseeing. Visit the Carpet Museum or the Museum of Modern Art before heading to the airport.',
    ],
  },
  'best-places': {
    title: 'The 12 Best Places to Visit in Azerbaijan',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&q=80',
    date: 'Feb 19, 2025',
    readTime: '13 min read',
    category: 'Destinations',
    content: [
      'Azerbaijan is a treasure trove of incredible destinations, from ancient cities to pristine mountain landscapes. Here are the 12 best places you shouldn\'t miss.',
      '**1. Baku**\n\nThe vibrant capital city combines ancient history with futuristic architecture. Don\'t miss the Old City, Flame Towers, and Heydar Aliyev Center.',
      '**2. Sheki**\n\nA UNESCO World Heritage Site, Sheki is famous for its stunning Khan Palace and traditional silk production.',
      '**3. Gabala**\n\nAzerbaijan\'s mountain playground offers year-round activities from skiing to hiking.',
      '**4. Guba**\n\nHome to Khinalig, one of Europe\'s highest villages, and stunning mountain landscapes.',
      '**5. Lahij**\n\nA picturesque mountain village known for its copper workshops and stone architecture.',
      '**6. Quba**\n\nFamous for its ancient mosques and traditional carpet weaving.',
      '**7. Lankaran**\n\nA subtropical paradise on the Caspian Sea with tea plantations and rainforests.',
      '**8. Gobustan**\n\nAncient rock carvings and mud volcanoes make this a must-visit for history lovers.',
      '**9. Baku Boulevard**\n\nA beautiful seaside promenade perfect for strolling and people-watching.',
      '**10. Yanar Dag**\n\nThe "burning mountain" where natural gas has been burning for centuries.',
      '**11. Ateshgah Fire Temple**\n\nAn ancient Zoroastrian temple near Baku.',
      '**12. Mud Volcanoes**\n\nUnique natural phenomena found in several locations across Azerbaijan.',
    ],
  },
  'best-time-to-visit': {
    title: 'When is the Best Time to Visit Azerbaijan?',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80',
    date: 'Feb 17, 2025',
    readTime: '7 min read',
    category: 'Travel Tips',
    content: [
      'Azerbaijan offers something for every season, but the best time to visit depends on your interests and planned activities.',
      '**Spring (April-May)**\n\nThe weather is mild and pleasant, perfect for sightseeing and hiking. Wildflowers are in bloom, and the countryside is lush and green.',
      '**Summer (June-August)**\n\nHot and dry in Baku, but perfect for mountain adventures. The Caucasus Mountains offer cool retreats from the city heat.',
      '**Autumn (September-October)**\n\nPerhaps the best time overall. Pleasant temperatures, fewer crowds, and beautiful autumn colors in the mountains.',
      '**Winter (November-March)**\n\nCool and rainy in Baku, but excellent for skiing in Gabala and Shahdag. The mountain regions are snow-covered and magical.',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug];
  if (!article) notFound();
  
  return {
    title: `${article.title} | Azerbaijan Travel Blog`,
    description: article.content[0]?.substring(0, 160) || '',
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link href="/blog" className="text-emerald-600 hover:underline">
              ← Back to Blog
            </Link>
          </div>
          
          <div className="mb-8">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-500 mb-8">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <div 
                key={index}
                className="mb-6 text-gray-700 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
              />
            ))}
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(articles)
                .filter(([key]) => key !== params.slug)
                .slice(0, 3)
                .map(([key, article]) => (
                  <Link 
                    href={`/blog/${key}`}
                    key={key}
                    className="group"
                  >
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-80 transition"
                    />
                    <h3 className="font-bold text-gray-800 group-hover:text-emerald-600 transition">
                      {article.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}