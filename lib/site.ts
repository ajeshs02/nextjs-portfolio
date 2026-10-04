// Single source of truth for site-wide identity and SEO values.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ajeshs.in").replace(/\/$/, "");
export const SITE_NAME = "Ajesh S";
export const EMAIL = "ajeshs.dev@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ajesh02/";
export const GITHUB_URL = "https://github.com/ajeshs02";
export const THEME_COLOR = "#201e1d";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
