import { siteData } from "@/lib/data";

export default function MiscPage() {
  return (
    <>
      <section className="page-section">
        <p className="kicker">Misc</p>
        <h1 className="page-title">Misc</h1>
        <p className="intro">{siteData.misc.intro}</p>
      </section>

      <hr className="rule" />

      {siteData.misc.sections.map((section) => (
        <section key={section.title} className="group-block">
          <h2 className="section-title">{section.title}</h2>
          <ul className="stack-list">
            {section.entries.map((entry) => (
              <li key={entry.title} className="stack-item">
                <h3 className="entry-title">{entry.title}</h3>
                <p className="entry-summary">{entry.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
