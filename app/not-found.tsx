import { ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <Eyebrow tone="blue">404 / Page not found</Eyebrow>
        <h1 className="large-title">This page isn&apos;t here.</h1>
        <p className="body-lede">
          Explore the selected work or return to the home page.
        </p>
        <div className="controls">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/work" variant="outline">
            Selected work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
