import AboutTitle from "@/components/about/abouttitle";
import AboutBanner from "@/components/about/banner";
import Breadcrumb from "@/components/about/breadcrumb";
import NewsLetter from "@/components/about/newsletter";
import OurTeam from "@/components/about/ourteam";
import WhyUs from "@/components/about/whyus";
import Container from "@/components/container";
import React from "react";

const About = () => {
  return (
    <>
      <Container>
        <Breadcrumb />
        <AboutTitle />
        <AboutBanner />
        <WhyUs />
        <OurTeam />
      </Container>
      <NewsLetter />
    </>
  );
};

export default About;
