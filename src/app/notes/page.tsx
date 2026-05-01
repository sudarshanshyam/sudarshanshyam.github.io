import { siteData } from "@/lib/data";

export default function NotesPage() {
  return (
    <>
      <section className="page-section">
        <p className="kicker">Notes</p>
        <h1 className="page-title">Notes</h1>
        <p className="intro">{siteData.notes.intro}</p>
      </section>

      <hr className="rule" />

      {siteData.notes.sections.map((section) => (
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
