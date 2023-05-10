"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Container from "@mui/material/Container";

import Header from "app/components/ui/molecules/Header";
import Footer from "app/components/ui/atoms/Footer";
import HtmlBase from "app/components/ui/atoms/HtmlBase";

const BlogTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <HtmlBase>
      <Container maxWidth="lg" sx={{ pb: 20 }}>
        <Header />
        <hr />
        <main>{children}</main>
      </Container>
      <Footer description="Something here to give the footer a purpose!" />
    </HtmlBase>
  );
};

export default BlogTemplate;
