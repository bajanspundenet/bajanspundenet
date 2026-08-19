const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-wordmark" href="#top" aria-label="Bajans Pun De Net home">
          BAJANS <span>PUN DE ’NET</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#coverage">What we cover</a>
          <a href="#xannah">Meet Xannah</a>
          <a href="#appearances">Appearances</a>
          <a className="nav-contact" href="#speaking">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Barbados · Caribbean · Diaspora</p>
          <h1>More than headlines.<br /><em>Always with context.</em></h1>
          <p className="hero-intro">
            <strong>Bajans Pun De ’Net</strong> brings Bajan history, culture and
            current affairs into sharper focus—with plain talk, careful research
            and space for the conversations happening across the diaspora.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#coverage">Explore BPDN <Arrow /></a>
            <a className="text-link" href="#xannah">Meet the woman behind it <span>↓</span></a>
          </div>
        </div>
        <div className="hero-brand" aria-label="Bajans Pun De Net">
          <img src="/bpdn-logo.png" alt="Bajans Pun De 'Net logo" />
          <p>Independent Caribbean media<br />created and presented by Xannah Moniq</p>
        </div>
      </section>

      <section className="ticker" aria-label="Bajans Pun De Net areas of focus">
        <span>History</span><i>✦</i><span>Culture</span><i>✦</i><span>Current affairs</span><i>✦</i><span>Identity</span><i>✦</i><span>Diaspora</span>
      </section>

      <section className="mission section-wrap" id="about">
        <div className="section-label"><span>01</span><p>Why BPDN exists</p></div>
        <div className="mission-grid">
          <h2>Barbados deserves coverage with <em>memory, meaning and a little backbone.</em></h2>
          <div className="body-copy">
            <p>Bajans Pun De ’Net is an independent digital platform for people who want more than a passing headline. We connect what is happening now with the history, culture and lived experiences that give it meaning.</p>
            <p>We serve Bajans at home, Barbadians by descent, returnees and Caribbean people abroad—without talking down to the audience or flattening complicated stories into easy answers.</p>
          </div>
        </div>
      </section>

      <section className="coverage section-wrap" id="coverage">
        <div className="section-label light"><span>02</span><p>What we cover</p></div>
        <div className="coverage-heading">
          <h2>Quick enough to follow.<br /><em>Thoughtful enough to matter.</em></h2>
          <p>Clear reporting, cultural memory and honest commentary—built for people who care about Barbados beyond the postcard.</p>
        </div>
        <div className="coverage-grid">
          <article><span>01</span><h3>Current affairs</h3><p>Key developments explained plainly, with attention to what they mean for ordinary people.</p></article>
          <article><span>02</span><h3>History & heritage</h3><p>The people, places and stories that shaped Barbados—and still shape the present.</p></article>
          <article><span>03</span><h3>Culture & identity</h3><p>Language, food, traditions, creativity and the evolving meaning of being Bajan.</p></article>
        </div>

        <article className="news-briefs">
          <div className="news-briefs-label"><span>🇧🇧</span><p>BPDN news format</p></div>
          <div>
            <p className="card-kicker">Quick · Clear · Caught up</p>
            <h3>BPDN News Briefs</h3>
            <p>Concise Barbados news updates that help viewers follow the important developments without wading through the noise. The briefs sit within the wider Xannah’s Two Cents family, but their job is straightforward: deliver the news clearly.</p>
            <a className="button gold-button" href="https://www.youtube.com/playlist?list=PLU2qnMGPNJUM" target="_blank" rel="noreferrer">Watch the news briefs <Arrow /></a>
          </div>
        </article>

        <article className="two-cents">
          <div className="two-cents-mark">
            <img src="/xannahs-two-cents-logo.png" alt="Xannah's Two Cents" />
          </div>
          <div>
            <p className="card-kicker">Opinion · Context · Real talk</p>
            <h3>Xannah’s Two Cents</h3>
            <p>Xannah’s opinion and commentary series—where she gives her honest perspective on the issues, conversations and moments that deserve more than a headline.</p>
            <div className="pills"><span>Personal perspective</span><span>Honest commentary</span><span>Added context</span></div>
            <a className="button gold-button" href="https://www.youtube.com/playlist?list=PLT6DqbT582znvFngufAQAhdPCFKQKzBXj" target="_blank" rel="noreferrer">Watch Xannah’s Two Cents <Arrow /></a>
          </div>
        </article>

        <article className="bajstory">
          <div className="bajstory-visual">
            <img src="/we-bajstory.jpg" alt="We BajStory artwork in BPDN blue and gold" />
          </div>
          <div>
            <p className="card-kicker">History · Culture · BajStory in the making</p>
            <h3>Leh We Call Out<br /><em>We BajStory</em></h3>
            <p>BPDN’s researched history and cultural storytelling series—examining the systems, events, social patterns and silences that shaped Barbados, as well as the developments becoming part of our BajStory today.</p>
            <p className="bajstory-note">Told with receipts, respect and real talk.</p>
            <a className="button gold-button" href="https://www.youtube.com/playlist?list=PLT6DqbT582zk0XKQb9caXwBhoq8IPKhVc" target="_blank" rel="noreferrer">Explore the series <Arrow /></a>
          </div>
        </article>
      </section>

      <section className="xannah section-wrap" id="xannah">
        <div className="section-label"><span>03</span><p>The woman behind BPDN</p></div>
        <div className="xannah-grid">
          <div className="xannah-portrait">
            <img src="/xannah-portrait.jpeg" alt="Xannah Moniq smiling against a blue and purple background" />
          </div>
          <div className="xannah-copy">
            <p className="eyebrow">Creator · Presenter · Commentator</p>
            <h2>Meet <em>Xannah Moniq.</em></h2>
            <p>Xannah Moniq is a British-Bajan-Vincentian author, digital storyteller, presenter and Bajan cultural advocate whose work is shaped by a life lived between Britain and Barbados. Warm, direct and unapologetically Bajan, she brings cultural memory, careful research and lived experience to conversations about Barbados, Caribbean identity, history, current affairs and the diaspora.</p>
            <p>She is the creator and presenter behind Bajans Pun De ’Net. Through several years of digital content creation, Xannah has built an engaged community—including more than 21,000 followers on Instagram—and has been invited to contribute to panels, interviews and wider cultural conversations.</p>
            <p className="book-line">Xannah is also the published author of <a href="https://www.amazon.co.uk/dp/B08XC14N5M" target="_blank" rel="noreferrer"><em>for YOU: Just What You Need to Hear Right Now</em></a>, <a href="https://www.amazon.co.uk/dp/B09JJ7FBLR" target="_blank" rel="noreferrer"><em>For You: The Silver Lining</em></a> and <a href="https://www.amazon.co.uk/dp/B09L4NZXL2" target="_blank" rel="noreferrer"><em>A Book of Colouring Just for You: Relaxation and Inspiration</em></a>.</p>
            <p>Xannah’s relationship with technology and digital creativity stretches back decades, from repairing computers and designing webpages to desktop publishing and her later professional work as a technician. Combined with a personal and family history rich in creativity, that background gives her work an unusual balance of technical thinking, visual instinct, careful organisation and imaginative storytelling.</p>
            <p>Her advocacy extends beyond Bajan culture and representation to mental health, chronic illness, hidden disabilities and late neurodivergent discovery. Whether examining Bajan history, commenting on a current issue or speaking about identity and lived experience, her approach remains the same: research carefully, speak plainly and never flatten a complicated story merely to make it easier to consume.</p>
            <blockquote>“Honest perspectives open the conversation. Respect, research and context take it further.”</blockquote>
          </div>
        </div>
      </section>

      <section className="appearances section-wrap" id="appearances">
        <div className="section-label light"><span>04</span><p>Selected appearances & conversations</p></div>
        <div className="appearances-heading">
          <h2>Invited to speak.<br /><em>Trusted to tell the story.</em></h2>
          <p>Xannah contributes to conversations across culture, identity, neurodivergence and lived experience—through invited talks, podcasts, panels and collaborative platforms.</p>
        </div>

        <div className="appearance-grid">
          <article className="appearance-card">
            <a className="appearance-image" href="https://youtu.be/5DVgxiUwr_I?si=7WG4R1ceJBW4_wWj" target="_blank" rel="noreferrer" aria-label="Watch Late Diagnosis in Autism and ADHD: A Bajan Lived Experience on YouTube">
              <img src="/a2ndvoice-talk.jpg" alt="Late Diagnosis in Autism and ADHD: A Bajan Lived Experience talk artwork" />
            </a>
            <div className="appearance-copy">
              <p className="card-kicker">Invited speaker</p>
              <h3>Late Diagnosis in Autism and ADHD: <em>A Bajan Lived Experience</em></h3>
              <p className="appearance-meta">A2ndvoice CIC · 5 June 2026</p>
              <p>Invited by Dr Venessa Swaby, Xannah shared a personal and culturally grounded account of late autism and ADHD diagnosis—bringing a Bajan perspective to conversations around identity, understanding and lived experience.</p>
              <a className="appearance-link" href="https://youtu.be/5DVgxiUwr_I?si=7WG4R1ceJBW4_wWj" target="_blank" rel="noreferrer">Watch the talk <Arrow /></a>
            </div>
          </article>

          <article className="appearance-card">
            <a className="appearance-image" href="https://podcasts.apple.com/gb/podcast/taboo-the-stories-of-caribbean-women/id1608804284?i=1000777395456" target="_blank" rel="noreferrer" aria-label="Listen to Xannah Moniq on TABOO: The Stories of Caribbean Women">
              <img src="/taboo-xannah.jpeg" alt="TABOO: The Stories of Caribbean Women featuring Xannah Moniq artwork" />
            </a>
            <div className="appearance-copy">
              <p className="card-kicker">Podcast guest</p>
              <h3>TABOO: The Stories of Caribbean Women — <em>Xannah Moniq</em></h3>
              <p className="appearance-meta">Hosted by Ciara James · 19 July 2026</p>
              <p>In this long-form conversation, Xannah speaks openly about childhood abuse, heartbreak, chronic health challenges, identity and moving into a new chapter of purpose—reflecting on the experiences that shaped both the woman and the voice behind her work.</p>
              <a className="appearance-link" href="https://podcasts.apple.com/gb/podcast/taboo-the-stories-of-caribbean-women/id1608804284?i=1000777395456" target="_blank" rel="noreferrer">Listen to the episode <Arrow /></a>
            </div>
          </article>
        </div>

        <div className="appearance-lower">
          <figure className="appearance-quote"><img src="/taboo-quote.png" alt="Your background does not disqualify you from being a force — Xannah Moniq" /></figure>
          <aside className="upcoming-appearance">
            <p className="card-kicker">Upcoming · Panellist</p>
            <h3>Strengthening the relevance of Caribbean and Afro-Caribbean languages</h3>
            <p>Black British English Podcast event at the Barbados High Commission, London</p>
            <strong>4 September 2026</strong>
          </aside>
        </div>
      </section>

      <section className="more section-wrap" id="more">
        <div className="section-label light"><span>05</span><p>Beyond BPDN</p></div>
        <div className="more-heading"><h2>One voice.<br /><em>More than one conversation.</em></h2><p>Mastering Bajan is BPDN’s little sister channel. AuDHD Unmasking is Xannah’s separate platform for neurodivergent lived experience and advocacy.</p></div>
        <div className="platform-grid">
          <article className="platform-card mastering"><p className="card-kicker">BPDN’s little sister channel</p><h3>Mastering Bajan</h3><p>Experience the soul of Barbados through its language. A separate channel exploring the accent, expressions, meanings and cultural stories carried in the way Barbadians speak. Currently paused, but not finished.</p><a className="platform-link" href="https://www.youtube.com/@MASTERINGBAJAN" target="_blank" rel="noreferrer">Visit Mastering Bajan <Arrow /></a></article>
          <article className="platform-card audhd"><p className="card-kicker">A separate Xannah Moniq platform</p><h3>AuDHD Unmasking</h3><p>An honest, evolving account of late-diagnosed autism, ADHD and the complicated work of understanding yourself anew.</p><a className="platform-link" href="https://www.youtube.com/@audhdunmasking" target="_blank" rel="noreferrer">Visit AuDHD Unmasking <Arrow /></a></article>
        </div>
      </section>

      <section className="speaking section-wrap" id="speaking">
        <div className="section-label"><span>06</span><p>Speaking & collaboration</p></div>
        <div className="speaking-grid">
          <h2 className="big-quote">Bring a grounded Caribbean perspective to <em>the conversation.</em></h2>
          <div className="body-copy">
            <p>Xannah is open to thoughtful opportunities centred on Caribbean culture, identity, history, language, lived experience and digital storytelling.</p>
            <div className="topic-list"><span>Panels and cultural discussions</span><span>Podcast, radio and media interviews</span><span>Storytelling and research collaborations</span><span>Honest destination, hospitality and food reviews</span><span>Carefully selected, values-aligned brand partnerships</span></div>
            <div className="collab-terms">
              <h3>Working with Xannah</h3>
              <p>Speaking engagements, media appearances and brand partnerships are normally paid opportunities. Research, storytelling collaborations and hosted reviews are considered individually, depending on the project, expectations and value involved.</p>
              <p>Xannah retains her independent perspective, and all reviews and coverage reflect her genuine experience and honest assessment. She only accepts opportunities that genuinely align with her values. Initial approaches should be made in writing, and an enquiry does not guarantee acceptance.</p>
            </div>
            <a className="button primary" href="mailto:bajanspundenet@gmail.com?subject=Speaking%20or%20collaboration%20enquiry%20for%20Xannah%20Moniq">Discuss an invitation or collaboration <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Follow Bajans Pun De ’Net</p>
        <h2>Join the conversation <em>where you are.</em></h2>
        <p>Watch the programmes, follow the latest conversations and support independent Bajan storytelling through BPDN’s official channels.</p>
        <div className="social-links" aria-label="Bajans Pun De Net social channels">
          <a href="https://www.youtube.com/@BajansPunDeNet" target="_blank" rel="noreferrer"><span>YouTube</span><Arrow /></a>
          <a href="https://www.instagram.com/bajanspundenet" target="_blank" rel="noreferrer"><span>Instagram</span><Arrow /></a>
          <a href="https://www.tiktok.com/@bajanspundenet" target="_blank" rel="noreferrer"><span>TikTok</span><Arrow /></a>
          <a href="https://www.facebook.com/share/1K4MVffy5Y/" target="_blank" rel="noreferrer"><span>Facebook</span><Arrow /></a>
        </div>
      </section>

      <footer><a className="brand-wordmark footer-brand" href="#top">BAJANS <span>PUN DE ’NET</span></a><p>© 2026 Bajans Pun De ’Net. All rights reserved.</p><p>Created by Xannah Moniq</p></footer>
    </main>
  );
}
