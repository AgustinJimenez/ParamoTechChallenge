import { Fragment } from "react";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";

const sections = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Blog", url: "/posts" },
  { title: "Contacts", url: "/contacts" },
];

const PageHeaderLinks = () => {
  return (
    <Fragment>
      {sections.map((section) => (
        <Grid item key={section.title}>
          <Link
            color="inherit"
            noWrap
            href={section.url}
            sx={{ p: 2, textDecoration: "unset" }}
            fontSize={22}
            fontWeight="600"
          >
            {section.title}
          </Link>
        </Grid>
      ))}
    </Fragment>
  );
};

export default PageHeaderLinks;
