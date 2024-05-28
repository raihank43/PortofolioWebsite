import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {/* {pageTitle && `${pageTitle} - Raihan Kusuma Portofolio Website`} */}
        {`RaihanTech - Raihan Kusuma Portofolio Website`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Raden Raihan Kusuma website to showcases his journey as an aspiring Software Engineer/Fullstack Developer. It provides detailed information about Raihan, his work experience, the skills that he possess, and the projects he has completed. " />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;
