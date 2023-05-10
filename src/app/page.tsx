/* eslint-disable @next/next/no-img-element */
"use client";
import { Grid, Typography } from "@mui/material";
import ImageHero from "app/components/ui/atoms/ImageHero";
import Panel from "app/components/ui/atoms/Panel";
import Video from "app/components/ui/atoms/Video";
import lorem from "app/utils/lorem";
import React, { Fragment } from "react";

type Section1Type = {
  text: string;
  video: {
    url: string;
    type: string;
  };
};
type Section2Type = {
  text: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
};

const Section1 = ({ section }: { section: Section1Type }) => {
  const videoRef: any = React.useRef();

  React.useEffect(() => {
    if (section.video.url) videoRef?.current?.play();
  }, [section.video.url]);
  if (!section.text) return null;

  return (
    <Fragment>
      <Panel>
        <Typography sx={{ mb: 2 }}>{section.text}</Typography>
        <Video
          src={section.video.url}
          type={section.video.type}
          innerRef={videoRef}
        />
      </Panel>
    </Fragment>
  );
};

const Section2 = ({ section }: { section: Section2Type }) => {
  return (
    <Panel>
      <Grid container item direction="row">
        <Grid item xs={4} sx={{ px: 1 }}>
          <img src={section.img1} style={{ width: "100%" }} alt="img1" />
        </Grid>
        <Grid item xs={8}>
          <Typography sx={{ ml: 2, mb: 2 }}>{section.text}</Typography>
        </Grid>
      </Grid>
      <Grid container item direction="row">
        <Grid item xs={4} sx={{ px: 1 }}>
          <img
            src={section.img2}
            style={{ width: "100%", height: 100 }}
            alt="img2"
          />
        </Grid>
        <Grid item xs={4} sx={{ px: 1 }}>
          <img
            src={section.img3}
            style={{ width: "100%", height: 100 }}
            alt="img43"
          />
        </Grid>
        <Grid item xs={4} sx={{ px: 1 }}>
          <img
            src={section.img4}
            style={{ width: "100%", height: 100 }}
            alt="img4"
          />
        </Grid>
      </Grid>
    </Panel>
  );
};

export default function Home() {
  const [section1, setSection1] = React.useState<Section1Type>({
    text: "",
    video: {
      url: "#",
      type: "",
    },
  });
  const [section2, setSection2] = React.useState<Section2Type>({
    text: "",
    img1: "#",
    img2: "#",
    img3: "#",
    img4: "#",
  });
  React.useEffect(() => {
    setSection1({
      ...section1,
      text: lorem.generateSentences(5),
      video: {
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
        type: "video/webm",
      },
    });
    setSection2({
      ...section2,
      text: lorem.generateSentences(4),
      img1: "https://picsum.photos/400/400",
      img2: "https://picsum.photos/410/400",
      img3: "https://picsum.photos/420/400",
      img4: "https://picsum.photos/430/400",
    });
  }, []);
  if (!section1.text) return null;
  return (
    <Grid container>
      <Grid item xs={12}>
        <ImageHero />
      </Grid>

      <Grid container item md={6} xs={12} sx={{ pr: 1 }}>
        <Section1 section={section1} />
      </Grid>
      <Grid container item md={6} xs={12} sx={{ pl: 1 }}>
        <Section2 section={section2} />
      </Grid>
    </Grid>
  );
}
