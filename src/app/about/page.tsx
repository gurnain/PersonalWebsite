import Image from "next/image";
import { Icon } from "@/components/Icon";
import { ThemeToggle } from "@/components/ThemeToggle";
import { education, experience, honours, intro, meta, person, profiles, projects, sections, site, skills } from "@/content";
import css from "./about.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${site.url}${site.path}`,
  name: meta.title,
  description: meta.description,
  mainEntity: {
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    worksFor: { "@type": "Organization", name: person.employer },
    image: `${site.url}${person.photo}`,
    url: `${site.url}${site.path}`,
    sameAs: profiles.filter((p) => p.href.startsWith("http")).map((p) => p.href),
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={css.glow} aria-hidden="true" />
      <div className={css.fade} aria-hidden="true" />

      <header className={css.bar}>
        <nav className={css.pill} aria-label="Site">
          <a className={css.pillCurrent} href={site.path} aria-current="page">
            <Icon name="person" size={16} />
            <span className={css.pillLabel}>About</span>
          </a>
          <span className={css.pillRule} aria-hidden="true" />
          <ThemeToggle className={css.pillButton} />
        </nav>
      </header>

      <nav className={css.index} aria-label="On this page">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            <span className={css.indexMark} aria-hidden="true" />
            {section.label}
          </a>
        ))}
      </nav>

      <main className={css.page}>
        <aside className={css.side}>
          <div className={css.photo}>
            <Image src={person.photo} alt={person.name} width={320} height={320} priority />
          </div>
          <div className={css.location}>
            <span className={css.locationIcon}>
              <Icon name="globe" size={20} />
            </span>
            {person.location}
          </div>
          <ul className={css.tags} aria-label="Languages spoken">
            {person.languages.map((language) => (
              <li key={language} className={css.tag}>
                {language}
              </li>
            ))}
          </ul>
        </aside>

        <div className={css.main}>
          <section className={css.lead} id="introduction">
            <div className={css.call}>
              <span className={css.callIcon}>
                <Icon name="calendar" size={20} />
              </span>
              <span className={css.callText}>Schedule a call</span>
              <a
                className={css.round}
                href={person.calendar}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Schedule a call"
              >
                <Icon name="chevron" size={16} />
              </a>
            </div>
            <h1 className={css.name}>{person.name}</h1>
            <p className={css.role}>{person.role}</p>
            <div className={css.profiles}>
              {profiles.map((profile) => (
                <a
                  key={profile.label}
                  className={css.button}
                  href={profile.href}
                  target={profile.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={profile.label}
                >
                  <Icon name={profile.icon} size={16} />
                  <span>{profile.label}</span>
                </a>
              ))}
            </div>
          </section>

          <p className={css.intro}>{intro}</p>

          <section className={css.block} aria-labelledby="work">
            <h2 className={css.heading} id="work">
              Work Experience
            </h2>
            <div className={css.jobs}>
              {experience.map((job) => (
                <article key={`${job.company}-${job.dates}`}>
                  <div className={css.jobTop}>
                    <h3 className={css.title}>{job.company}</h3>
                    <span className={css.dates}>{job.dates}</span>
                  </div>
                  <p className={css.jobRole}>{job.role}</p>
                  <ul className={css.points}>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className={css.block} aria-labelledby="education">
            <h2 className={css.heading} id="education">
              Education
            </h2>
            {education.map((item) => (
              <div key={item.school} className={css.school}>
                <h3 className={css.title}>{item.school}</h3>
                <p className={css.schoolDetail}>{item.detail}</p>
              </div>
            ))}
          </section>

          <section className={css.block} aria-labelledby="projects">
            <h2 className={`${css.heading} ${css.headingLoose}`} id="projects">
              Projects
            </h2>
            <div className={css.projects}>
              {projects.map((project) => (
                <article key={project.name} className={css.project}>
                  <div className={css.projectTop}>
                    <a href={project.links[project.links.length - 1].href} target="_blank" rel="noopener noreferrer">
                      <h3 className={css.title}>{project.name}</h3>
                    </a>
                    <div className={css.projectLinks}>
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          className={css.round}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link.label}
                          aria-label={`${project.name}: ${link.label}`}
                        >
                          <Icon name={link.icon} size={link.icon === "github" ? 20 : 16} />
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className={css.projectSummary}>{project.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={css.block} aria-labelledby="skills">
            <h2 className={css.heading} id="skills">
              Skills
            </h2>
            <div className={css.skills}>
              {skills.map((row) => (
                <div key={row.group} className={css.skillRow}>
                  <span className={css.skillGroup}>{row.group}</span>
                  <ul className={css.tags}>
                    {row.items.map((item) => (
                      <li key={item} className={css.tag}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="honours">
            <h2 className={css.heading} id="honours">
              Honours
            </h2>
            <div className={css.honours}>
              {honours.map((item) => (
                <div key={item.text} className={css.honour}>
                  <span className={css.year}>{item.year}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className={css.footer}>
        <div className={css.footerInner}>
          <p>
            <span className={css.soft}>© {new Date().getFullYear()}</span> {person.name}
          </p>
          <div className={css.footerLinks}>
            {profiles.map((profile) => (
              <a
                key={profile.label}
                href={profile.href}
                target={profile.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={profile.label}
              >
                <Icon name={profile.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
